import { ArrowRight, Home, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/siteContent';

export default function SectionPage({ eyebrow, title, description, points = [] }) {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <div className="card-surface p-8 sm:p-12">
            <div className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
              {eyebrow}
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
            <div className="mt-10 grid gap-4">
              {points.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}`}>
                Book Home Visit
                <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href={`tel:${contactInfo.primaryPhone}`}>
                <PhoneCall size={18} />
                Call Now
              </a>
              <Link to="/" className="btn-secondary">
                <Home size={18} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
