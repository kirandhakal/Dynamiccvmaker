import React, { useState } from 'react';
import { CheckCircle, Mail, MapPin, Send } from 'lucide-react';

const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL
  || 'https://contact.kirandhakal.me';
const CONTACT_FORM_KEY = process.env.REACT_APP_CONTACT_FORM_KEY
  || 'frm_mHdw1O1BeaBaghlxjxO-wl92';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullname: formData.get('fullname')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
      _website: formData.get('_website')?.toString() || '',
    };

    try {
      const response = await fetch(
        `${CONTACT_API_URL.replace(/\/$/, '')}/v1/forms/${encodeURIComponent(CONTACT_FORM_KEY)}/submissions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || result.error || 'Unable to send your details. Please try again.');
      }

      setStatus('success');
      setStatusMessage(result.message || 'Thanks, your message was sent.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setStatusMessage(error.message || 'Unable to send your details. Please try again.');
    }
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
                  <h4 className="font-bold text-slate-900">Based in</h4>
                  <p className="text-slate-500">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-100 border border-slate-100">
            {status === 'success' ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600">
                  <CheckCircle size={40} />
                </div>
                <h3 className="mt-6 text-3xl font-black text-slate-900">Message delivered!</h3>
                <p aria-live="polite" className="mt-3 max-w-sm text-slate-500">{statusMessage}</p>
                <button type="button" onClick={() => { setStatus(''); setStatusMessage(''); }} className="mt-8 font-bold text-indigo-600 hover:text-indigo-800">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-fullname" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input
                  id="contact-fullname"
                  name="fullname"
                  required
                  minLength="2"
                  maxLength="100"
                  autoComplete="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  maxLength="254"
                  autoComplete="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength="10"
                  maxLength="2000"
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="mt-2 text-xs text-slate-400">10–2,000 characters</p>
              </div>

              <div className="absolute -left-[10000px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="_website" type="text" tabIndex="-1" autoComplete="off" />
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                  status === 'error'
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-100'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                }`}
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'error' ? (
                  <>Try again <Send size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
              <p aria-live="polite" className={`min-h-5 text-center text-sm font-medium ${status === 'error' ? 'text-red-600' : 'text-emerald-700'}`}>
                {statusMessage}
              </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
