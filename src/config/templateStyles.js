/**
 * Visual style configs for CV templates (Classic, Professional, Minimalist).
 */

export const templateStyles = {
  1: {
    headerBg: 'bg-white',
    headerText: 'text-gray-900',
    accentColor: 'text-gray-700',
    borderColor: 'border-gray-300',
    sectionTitle: 'text-gray-800 border-b-2 border-gray-800',
    linkColor: 'text-gray-600 hover:text-gray-900',
    pageBg: 'bg-white',
  },
  4: {
    headerBg: 'bg-white',
    headerText: 'text-[#2c3e50]',
    accentColor: 'text-[#3498db]',
    borderColor: 'border-[#333]',
    sectionTitle:
      'text-[#2c3e50] text-[16px] font-bold border-b-[1.5px] border-[#333] pb-[3px] uppercase tracking-[0.5px]',
    linkColor: 'text-[#3498db] no-underline',
    pageBg: 'bg-white',
  },
  5: {
    headerBg: 'bg-white text-center mb-[18px]',
    headerText: 'text-black',
    accentColor: 'text-[#0066cc]',
    borderColor: 'border-black',
    sectionTitle:
      'text-black text-[11px] font-bold border-b border-black pb-[2px] mb-[8px] mt-[16px] uppercase',
    linkColor: 'text-[#0066cc] underline',
    pageBg: 'bg-white',
  },
};

export const getTemplateStyle = (templateStyleId) =>
  templateStyles[templateStyleId] ?? templateStyles[1];
