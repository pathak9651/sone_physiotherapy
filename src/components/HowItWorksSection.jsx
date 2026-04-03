import { ArrowRight, CalendarCheck2, MessageCircleMore, PhoneCall, Stethoscope, UserRoundSearch } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactInfo, processSteps } from '../data/siteContent';

const stepIcons = [PhoneCall, UserRoundSearch, CalendarCheck2, MessageCircleMore, Stethoscope];
const stepCopy = [
  'Reach out directly by phone or WhatsApp for the fastest response.',
  'Tell us about the pain, injury, recovery stage, or movement difficulty.',
  'Choose a suitable time for your home physiotherapy session.',
  'The doctor travels to your location for a planned home visit.',
  'Treatment starts with assessment, therapy, and guided recovery planning.'
];

export default function HowItWorksSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="card-surface overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="How It Works"
                title="A smoother booking flow for physiotherapy at home."
                description="The process is designed to feel easy, reassuring, and fast for patients and families who want care without unnecessary travel."
              />

              <div className="mt-10 space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = stepIcons[index] || Stethoscope;

                  return (
                    <div key={step} className="group relative rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 transition duration-300 hover:border-brand-300 hover:bg-brand-50/70 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-brand-700 dark:hover:bg-slate-900">
                      {index < processSteps.length - 1 ? (
                        <div className="absolute left-9 top-[76px] hidden h-10 w-px bg-gradient-to-b from-brand-300 to-mint-300 lg:block" />
                      ) : null}
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20 transition group-hover:scale-105 group-hover:bg-brand-700">
                            <Icon size={24} />
                          </div>
                          <div className="absolute -right-2 -top-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-mint-500 px-2 text-xs font-bold text-white">
                            {index + 1}
                          </div>
                        </div>
                        <div className="pt-1">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{stepCopy[index]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-mint-600 p-8 text-white shadow-soft">
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/75">Fast Booking</div>
              <h3 className="mt-3 font-display text-3xl font-bold">From first call to first session, we keep it simple.</h3>
              <p className="mt-4 text-sm leading-8 text-white/85">
                Home visit physiotherapy works best when booking is easy. Share your issue, confirm your location, and get expert treatment at home without the extra stress of travel.
              </p>

              <div className="mt-8 space-y-4 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Primary Call Number</div>
                  <a href={`tel:${contactInfo.primaryPhone}`} className="mt-2 block text-xl font-bold text-white">
                    {contactInfo.primaryPhone}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">WhatsApp Booking</div>
                  <a href={`https://wa.me/${contactInfo.whatsappPrimary}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Start WhatsApp Booking
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/20 bg-white/10 p-5 text-sm leading-7 text-white/85">
                Clinic consultation remains available, but home visit treatment stays the fastest and most convenient option for most patients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
