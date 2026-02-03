import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 leading-tight">
              Get in Touch with our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Support Team
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-md">
              Have questions about our templates or need help with the editor? We're here to help you build the perfect resume.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100/50">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500">info@dhakalkiran.com.np</p>
                </div>
              </div>
              
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 shadow-sm border border-violet-100/50">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Live Chat</h4>
                  <p className="text-slate-500">Available Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 shadow-sm border border-slate-100/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">contant me</h4>
                  <p className="text-slate-500">Kathmandu ,nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-100 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                  status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                }`}
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>Sent Successfully!</>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
