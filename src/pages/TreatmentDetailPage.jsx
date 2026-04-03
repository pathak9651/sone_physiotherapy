import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { contactInfo, treatmentDetailPages } from '../data/siteContent';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = treatmentDetailPages[slug];

  if (!treatment) {
    return (
      <section className="section-spacing">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl card-surface p-8 sm:p-12">
            <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Treatment page not found</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              The treatment you are looking for is not available yet.
            </p>
            <div className="mt-8">
              <Link to="/treatments" className="btn-secondary">Back to Treatments</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const bookingMessage = encodeURIComponent(`Hello Doctor, I want to book a home visit for ${treatment.title}.`);

  return (
    <section className="section-spacing">
      <div className="container-shell space-y-10">
        <div className="card-surface p-8 sm:p-12">
          <div className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
            {treatment.shortLabel}
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {treatment.title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">{treatment.overview}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}?text=${bookingMessage}`}>
              Book This Treatment
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href={`tel:${contactInfo.primaryPhone}`}>
              <PhoneCall size={18} />
              Call Now
            </a>
            <Link to="/treatments" className="btn-secondary">
              Back to Treatments
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <SectionHeading
              eyebrow="Common Issues"
              title="When this treatment is often needed"
              description="These are some of the common signs or situations where patients and families usually seek help."
            />
            <div className="mt-8 grid gap-4">
              {treatment.signs.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                  <CheckCircle2 size={18} className="mt-0.5 text-mint-600 dark:text-mint-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <SectionHeading
              eyebrow="Treatment Approach"
              title="How Dr. Atul Pathak manages this condition"
              description="Treatment is always adjusted to patient age, recovery stage, pain level, movement ability, and home setting."
            />
            <div className="mt-8 grid gap-4">
              {treatment.approach.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                  <CheckCircle2 size={18} className="mt-0.5 text-brand-600 dark:text-brand-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
