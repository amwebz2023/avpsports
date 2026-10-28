'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState('');

  const validate = (values: FormState) => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!values.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    if (!values.email.trim()) nextErrors.email = 'Please enter your email address.';
    if (!values.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!values.message.trim()) nextErrors.message = 'Please write your message.';

    return nextErrors;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status) setStatus('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fix the highlighted fields and try again.');
      return;
    }

    const message = [
      'Hello AVP Sports,',
      '',
      `Full Name: ${form.fullName.trim()}`,
      `Phone Number: ${form.phone.trim()}`,
      `Email Address: ${form.email.trim()}`,
      `Subject: ${form.subject.trim()}`,
      '',
      'Message:',
      form.message.trim(),
    ].join('\n');

    const waUrl = `https://wa.me/918056673453?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStatus('Thanks! Your enquiry is ready. WhatsApp will open to complete it.');
    setForm(initialState);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-[var(--avp-ink)]">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--avp-green)] ${
              errors.fullName ? 'border-red-400' : 'border-black/10'
            }`}
            placeholder="Your name"
          />
          {errors.fullName ? <p className="text-sm text-red-500">{errors.fullName}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-[var(--avp-ink)]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--avp-green)] ${
              errors.phone ? 'border-red-400' : 'border-black/10'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone ? <p className="text-sm text-red-500">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--avp-ink)]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--avp-green)] ${
              errors.email ? 'border-red-400' : 'border-black/10'
            }`}
            placeholder="you@example.com"
          />
          {errors.email ? <p className="text-sm text-red-500">{errors.email}</p> : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="subject" className="text-sm font-medium text-[var(--avp-ink)]">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={(event) => handleChange('subject', event.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--avp-green)] ${
              errors.subject ? 'border-red-400' : 'border-black/10'
            }`}
            placeholder="How can we help?"
          />
          {errors.subject ? <p className="text-sm text-red-500">{errors.subject}</p> : null}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-[var(--avp-ink)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => handleChange('message', event.target.value)}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--avp-green)] ${
              errors.message ? 'border-red-400' : 'border-black/10'
            }`}
            placeholder="Tell us about your requirement"
          />
          {errors.message ? <p className="text-sm text-red-500">{errors.message}</p> : null}
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[var(--avp-brown)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[var(--avp-amber)]"
        >
          Submit Enquiry
        </button>

        {status ? (
          <p className="text-sm text-[var(--avp-green)]" role="status" aria-live="polite">
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
