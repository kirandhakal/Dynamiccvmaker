import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "The best resume builder I've ever used. The templates are clean and the editor is incredibly flexible.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "I landed my dream job at a top tech company using a CV I built here. Highly recommend!",
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      role: "Graphic Designer",
      content: "The rich text features are amazing. I could really express my personality through my resume.",
      avatar: "ED"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Loved by Job Seekers</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            See what our users have to say about their experience with CVMAKER.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 font-medium italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
