import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for a quick start",
      features: ["1 Template", "Standard Editor", "Single PDF Export", "ATS Check"],
      button: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For serious job seekers",
      features: ["All Templates", "Advance Editor", "Unlimited Exports", "Priority Support", "Custom Branding"],
      button: "Get Started Pro",
      popular: true
    },
    {
      name: "Lifetime",
      price: "$49",
      description: "One-time payment",
      features: ["Lifetime Access", "All Premium Features", "Regular Updates", "Resume Analysis"],
      button: "Buy Lifetime",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-indigo-200' 
                : 'bg-white text-slate-900 border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-slate-400 font-medium">{plan.period}</span>}
                </div>
                <p className={`mt-2 font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                      <Check size={14} />
                    </div>
                    <span className={plan.popular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                plan.popular 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}>
                {plan.button} <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
