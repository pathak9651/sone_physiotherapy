import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { treatmentMethods } from '../data/siteContent';

export default function TreatmentsSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Treatments"
            title="Modern physiotherapy methods adapted for home rehabilitation."
            description="Portable care methods and clear exercise guidance help maintain clinical quality while making treatment more accessible at home."
          />
          <div className="mt-8 flex flex-col gap-4">
            {treatmentMethods.map((method) => (
              <div key={method} className="card-surface flex items-center gap-4 p-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
                  <Check size={18} />
                </div>
                <div className="text-base font-semibold text-slate-800 dark:text-slate-100">{method}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-8 sm:p-10">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-mint-600 p-8 text-white">
            <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">Primary USP</div>
            <h3 className="mt-3 font-display text-3xl font-bold">We Come to You</h3>
            <p className="mt-4 text-base leading-8 text-white/85">
              Home visit treatment is ideal for patients who need convenience, privacy, reduced travel strain, and consistent rehab in their own space.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                <div className="text-2xl font-bold">1:1 Care</div>
                <div className="mt-1 text-sm text-white/80">Focused session time with personalized exercise and progress tracking.</div>
              </div>
              <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                <div className="text-2xl font-bold">Portable Setup</div>
                <div className="mt-1 text-sm text-white/80">Treatment methods selected for effective, practical home rehabilitation.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell mt-8 flex justify-center">
        <Link to="/treatments" className="btn-secondary">
          Explore All Treatments
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
