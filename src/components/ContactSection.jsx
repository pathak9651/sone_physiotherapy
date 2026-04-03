import { Clock3, Mail, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { contactInfo } from '../data/siteContent';

const contactEmail = 'atulpathak218@gmail.com';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const isEmailReady = Boolean(contactEmail.trim());
  const mailtoLink = isEmailReady
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject || 'Home Visit Physiotherapy Enquiry')}&body=${encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
      )}`
    : null;

  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="card-surface p-8 sm:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Book your home visit quickly by call, WhatsApp, or form enquiry."
              description="Phone numbers stay visible throughout the site so booking feels immediate and easy."
            />
            <div className="mt-8 space-y-5">
              <a href={`tel:${contactInfo.primaryPhone}`} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/70">
                <PhoneCall className="mt-1 text-brand-700 dark:text-brand-300" size={20} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Call Now</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{contactInfo.primaryPhone}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Alternate: {contactInfo.secondaryPhone}</div>
                </div>
              </a>
              <a href={`https://wa.me/${contactInfo.whatsappPrimary}`} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/70">
                <MessageCircle className="mt-1 text-mint-700 dark:text-mint-300" size={20} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">WhatsApp Booking</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">Primary: +{contactInfo.whatsappPrimary}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Alternate: +{contactInfo.whatsappSecondary}</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/70">
                <MapPin className="mt-1 text-brand-700 dark:text-brand-300" size={20} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Clinic Address</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{contactInfo.address}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Clinic visit available as an optional secondary service</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/70">
                <Clock3 className="mt-1 text-brand-700 dark:text-brand-300" size={20} />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Working Hours</div>
                  {contactInfo.workingHours.map((item) => (
                    <div key={item} className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <div className="rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-mint-600 p-8 text-white">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/75">Contact Form</div>
              </div>
              <h3 className="mt-3 font-display text-4xl font-bold">Send your enquiry</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/85">
                Share your symptoms, preferred timing, and contact details to open a prefilled email enquiry.
              </p>

              <form className="mt-8 space-y-4">
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/65 outline-none backdrop-blur focus:border-white/40"
                  placeholder="Your name"
                />
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/65 outline-none backdrop-blur focus:border-white/40"
                  placeholder="Phone number"
                />
                <input
                  value={form.subject}
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/65 outline-none backdrop-blur focus:border-white/40"
                  placeholder="Subject"
                />
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/65 outline-none backdrop-blur focus:border-white/40"
                  placeholder="Describe your problem or enquiry"
                />

                <a className="btn-secondary border-white/25 bg-white text-brand-700 hover:bg-brand-50" href={mailtoLink}>
                  Send Email
                </a>
                <div className="rounded-2xl border border-dashed border-white/30 bg-white/10 px-4 py-4 text-sm text-white/85">
                  Enquiries will open in your email app and send to {contactEmail}.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
