import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, ArrowUpRight, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      // Create mailto link with pre-filled content
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Project Collaboration / Inquiry from ${encodeURIComponent(formData.name || 'Portfolio Visitor')}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0E0E0E] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-neutral-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            DIRECT COMMUNICATION
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            LET'S BUILD SOMETHING MEANINGFUL.
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            I'm open to interesting projects, collaborations, product conversations, and opportunities to build.
          </p>
        </div>

        {/* Contact Details & Direct Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-[#121212] border border-neutral-800 p-6 space-y-2 hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <Mail className="w-3.5 h-3.5 text-white" />
                  EMAIL ADDRESS
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-base sm:text-lg text-white font-bold hover:underline block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-[#121212] border border-neutral-800 p-6 space-y-3 hover:border-neutral-600 transition-colors">
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-white" />
                    PHONE / WHATSAPP CONTACT
                  </div>
                  <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5">WHATSAPP AVAILABLE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-mono text-base sm:text-lg text-white font-bold hover:underline block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-mono text-[11px] text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1 bg-neutral-900 border border-neutral-700 px-2.5 py-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-emerald-400 hover:text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-1 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-[#121212] border border-neutral-800 p-6 space-y-2 hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                  LINKEDIN PROFILE
                </div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base sm:text-lg text-white font-bold hover:underline flex items-center justify-between"
                >
                  <span>{PERSONAL_INFO.linkedin}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-[#121212] border border-neutral-800 p-6 space-y-2 hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                  INSTAGRAM
                </div>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base sm:text-lg text-white font-bold hover:underline flex items-center justify-between"
                >
                  <span>{PERSONAL_INFO.instagram}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-colors flex-1 sm:flex-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A66C2] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#084e96] transition-colors flex-1 sm:flex-none"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex-1 sm:flex-none"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL</span>
              </a>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-neutral-700 text-white font-mono text-xs font-bold uppercase tracking-widest hover:border-white transition-colors flex-1 sm:flex-none"
              >
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-neutral-800 p-6 sm:p-10">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide mb-6">
              START A PRODUCT CONVERSATION
            </h3>

            {submitted ? (
              <div className="bg-[#0A0A0A] border border-emerald-500/40 p-6 sm:p-8 space-y-4 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-heading font-bold text-xl text-white">MESSAGE PREPARED</h4>
                <p className="font-sans text-sm text-neutral-300">
                  Your mail client has been opened to send this directly to <span className="text-white font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-neutral-800 text-white font-mono text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
                    YOUR NAME OR ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Founder, Technical Executive, Client"
                    className="w-full bg-[#0A0A0A] border border-neutral-800 px-4 py-3 text-white font-sans text-base sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
                    YOUR EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="olamide@example.com"
                    className="w-full bg-[#0A0A0A] border border-neutral-800 px-4 py-3 text-white font-sans text-base sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">
                    PROJECT SUMMARY / MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your idea, platform concept, or project scope..."
                    className="w-full bg-[#0A0A0A] border border-neutral-800 p-4 text-white font-sans text-base sm:text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                >
                  <span>SEND DIRECT MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
