import { Activity, ArrowRight, Brain, Dumbbell, HeartPulse, PersonStanding, ShieldPlus, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { contactInfo, treatmentCategories, treatmentMethods } from '../data/siteContent';

const icons = [Brain, HeartPulse, Activity, ShieldPlus, Stethoscope, Dumbbell, PersonStanding, HeartPulse, Activity];

export default function TreatmentsPage() {
  return (
    <section className="section-spacing">
      <div className="container-shell space-y-12">
        <div className="card-surface p-8 sm:p-12">
          <div className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
            Treatments
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Complete physiotherapy treatments for pain relief, recovery, and rehabilitation.
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Dr. Atul Pathak, DPT, provides a wide range of physiotherapy treatments with home visits as the primary option. Care is personalized for paralysis patients, cervical conditions, post-surgery recovery, pain management, mobility improvement, and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}`}>
              Book Home Visit
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href={`tel:${contactInfo.primaryPhone}`}>
              Call Now
            </a>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Treatment Areas"
            title="All major physiotherapy treatment types available."
            description="These treatment categories cover the most common pain, rehab, neuro, orthopedic, and mobility needs handled through home visits and optional clinic consultation."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatmentCategories.map((item, index) => {
              const Icon = icons[index % icons.length];
              const message = encodeURIComponent(`Hello Doctor, I want to book a home visit for ${item.title}.`);

              return (
                <article key={item.title} className="card-surface flex h-full flex-col p-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-4 text-sm font-semibold text-mint-700 dark:text-mint-300">Home visit available for this treatment</div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {item.detailSlug ? (
                      <Link to={`/treatments/${item.detailSlug}`} className="btn-secondary px-4 py-2">
                        View Details
                      </Link>
                    ) : null}
                    <a className="btn-primary px-4 py-2" href={`https://wa.me/${contactInfo.whatsappPrimary}?text=${message}`}>
                      Book This Treatment
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-surface p-8">
            <SectionHeading
              eyebrow="Treatment Methods"
              title="How treatment is delivered"
              description="Every treatment plan uses the right mix of hands-on care, guided exercise, and portable treatment support based on the patient condition."
            />
            <div className="mt-8 grid gap-4">
              {treatmentMethods.map((method) => (
                <div key={method} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <SectionHeading
              eyebrow="Special Expertise"
              title="Focused experience in paralysis and cervical patient care."
              description="This practice is especially well-suited for patients who need attentive rehab support, progressive mobility recovery, and regular monitoring in a comfortable home environment."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <p>Paralysis rehabilitation plans are built to improve daily movement, balance, coordination, strength, and confidence over time.</p>
              <p>Cervical treatment focuses on pain reduction, posture correction, movement restoration, and reducing repeated strain in daily life.</p>
              <p>Home care makes these treatments easier for families because patients do not need to travel repeatedly during sensitive recovery periods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
