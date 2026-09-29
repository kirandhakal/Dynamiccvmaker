const plainText = (value: unknown) => String(value ?? '')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const filled = (value: unknown) => {
  const text = plainText(value);
  return text.length > 2 && !/^(your |add |skill \d|category$|dates$|years$|company$|job title$)/i.test(text);
};

export function getAtsEstimate(cv: any) {
  const details = cv.headerDetails || [];
  const sections = cv.sections || [];
  const hasEmail = details.some((detail: any) => /\S+@\S+\.\S+/.test(detail.value || ''));
  const hasLocation = details.some((detail: any) => detail.type === 'address' && filled(detail.value));
  const hasPhone = details.some((detail: any) => /\+?[\d(][\d\s().-]{7,}/.test(detail.value || ''));
  const summary = sections.find((section: any) => section.type === 'text' && /summary|profile|about/i.test(section.title || ''));
  const experience = sections.find((section: any) => section.type === 'experience');
  const education = sections.find((section: any) => section.type === 'education');
  const skills = sections.find((section: any) => section.type === 'skills');
  const experienceItems = (experience?.items || []).filter((item: any) => filled(item.position) && filled(item.company));
  const description = experienceItems.map((item: any) => plainText(item.description)).join(' ');
  const checks = [
    { points: 12, passed: filled(cv.name), tip: 'Add your full name.' },
    { points: 12, passed: hasEmail, tip: 'Add a valid email address.' },
    { points: 8, passed: hasPhone, tip: 'Add a phone number to the contact details.' },
    { points: 6, passed: hasLocation, tip: 'Add your city or location.' },
    { points: 12, passed: filled(summary?.content) && plainText(summary?.content).length >= 50, tip: 'Write a short professional summary of at least 50 characters.' },
    { points: 20, passed: experienceItems.length > 0, tip: 'Add work experience with a job title and company.' },
    { points: 10, passed: description.length >= 60, tip: 'Describe your work with concrete responsibilities or results.' },
    { points: 8, passed: /\d+\s*(%|percent|\+|k\b|m\b|people|users|clients|projects|hours|days|years|\$)/i.test(description), tip: 'Add a measurable result to your experience.' },
    { points: 7, passed: (skills?.items || []).some((item: any) => filled(item.items)), tip: 'List relevant skills.' },
    { points: 5, passed: (education?.items || []).some((item: any) => filled(item.degree) && filled(item.institution)), tip: 'Add a qualification and institution.' },
  ];
  return {
    score: checks.reduce((total, check) => total + (check.passed ? check.points : 0), 0),
    tips: checks.filter((check) => !check.passed).map((check) => check.tip),
  };
}
