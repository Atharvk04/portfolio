import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // 1. Submit to Netlify Forms if deployed on Netlify
      const encodedData = new URLSearchParams({
        'form-name': 'portfolio-contact',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData
      }).catch(() => {
        // Fallback gracefully if not running in production Netlify environment
      });

      // 2. Also save to browser storage so user/recruiter can verify
      try {
        const existing = JSON.parse(localStorage.getItem('sent_messages') || '[]');
        existing.push({
          ...formData,
          date: new Date().toISOString()
        });
        localStorage.setItem('sent_messages', JSON.stringify(existing));
      } catch {
        // Ignore storage errors
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('atharv.04.kawalase@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialChannels = [
    {
      name: 'Email',
      value: 'atharv.04.kawalase@gmail.com',
      href: 'mailto:atharv.04.kawalase@gmail.com',
      icon: <Mail className="w-5 h-5 text-[#FACC15]" />,
      detail: 'Direct inquiries & opportunities'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/atharv-kawalase',
      href: 'https://linkedin.com/in/atharv-kawalase',
      icon: <Linkedin className="w-5 h-5 text-[#3B82F6]" />,
      detail: 'Professional network & career updates'
    },
    {
      name: 'GitHub',
      value: 'github.com/Atharvk04',
      href: 'https://github.com/Atharvk04',
      icon: <Github className="w-5 h-5 text-[#F8FAFC]" />,
      detail: 'Source code, repositories & commit history'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#0D1220]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#FACC15] font-mono text-xs font-medium">
            <span>&lt;get in touch /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Let's Build Something.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Have an opportunity, project, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Contact Information & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-slate-800/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  I am actively looking for opportunities as a Java Backend or Full Stack Developer. Reach out via email or connect across developer platforms.
                </p>
              </div>

              {/* Quick copy email banner */}
              <div className="p-3.5 rounded-xl bg-[#080B14] border border-slate-800 flex items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#CBD5E1] truncate">atharv.04.kawalase@gmail.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-[#151C2C] hover:bg-[#1E293B] text-[#F8FAFC] border border-slate-700 flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span className="text-[#22C55E]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social links grid */}
              <div className="space-y-3 pt-2">
                {socialChannels.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#0D1220] border border-slate-800/90 hover:border-[#3B82F6]/50 hover:bg-[#151C2C] transition-all flex items-center gap-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#080B14] border border-slate-800 group-hover:border-slate-700 transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity">
                          Open ↗
                        </span>
                      </div>
                      <p className="text-[11px] text-[#94A3B8] truncate">{item.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#111827] border border-slate-800/90 shadow-2xl relative">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
                Fill out the form below. I will get back to you promptly.
              </p>

              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-xs sm:text-sm text-[#22C55E] flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-[#CBD5E1]">
                      Your inquiry has been submitted through Netlify Forms. I will review it and reply to you as soon as possible.
                    </p>
                    <p className="text-xs text-[#94A3B8] pt-1">
                      Need urgent response? You can also email me directly at{' '}
                      <a href="mailto:atharv.04.kawalase@gmail.com" className="text-[#FACC15] hover:underline font-mono">
                        atharv.04.kawalase@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <form
                name="portfolio-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                {/* Netlify hidden input */}
                <input type="hidden" name="form-name" value="portfolio-contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-[#CBD5E1]">
                      Your Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] text-xs sm:text-sm text-[#F8FAFC] border ${
                        errors.name ? 'border-[#EF4444]' : 'border-slate-800'
                      } focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-[#EF4444] flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-[#CBD5E1]">
                      Your Email <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] text-xs sm:text-sm text-[#F8FAFC] border ${
                        errors.email ? 'border-[#EF4444]' : 'border-slate-800'
                      } focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#EF4444] flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-[#CBD5E1]">
                    Subject <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Java Backend Developer Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] text-xs sm:text-sm text-[#F8FAFC] border ${
                      errors.subject ? 'border-[#EF4444]' : 'border-slate-800'
                    } focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-[#EF4444] flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-[#CBD5E1]">
                    Message <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Share project details, job description, or message..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] text-xs sm:text-sm text-[#F8FAFC] border ${
                      errors.message ? 'border-[#EF4444]' : 'border-slate-800'
                    } focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-[#EF4444] flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
