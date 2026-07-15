import { Building2, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactInfo } from '../data/siteContent';

export default function ClinicInfoSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="card-surface p-8 sm:p-10">
            <SectionHeading
              eyebrow="Clinic Visit Available"
              title="Clinic consultation is available, but it stays secondary to home visits."
              description="Patients who prefer in-person clinic consultation can still visit the clinic. The website keeps this section intentionally compact so the home-visit offering remains the primary focus."
            />
            <div className="mt-8 rounded-[2rem] border border-dashed border-brand-200 bg-brand-50/80 p-6 dark:border-brand-900/70 dark:bg-brand-900/30">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300">
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Clinic Consultation Also Available</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <MapPin size={16} />
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card-surface h-56 bg-gradient-to-br from-brand-100 to-white p-6 dark:from-brand-900/40 dark:to-slate-900">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">Waiting Area</div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Clean, calm clinic environment for patients who prefer optional consultation outside the home.
                </p>
              </div>
            </div>
            <div className="card-surface h-56 bg-gradient-to-br from-mint-100 to-white p-6 dark:from-mint-900/30 dark:to-slate-900">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-mint-700 dark:text-mint-300">Consultation Room</div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Secondary clinic support remains available without taking attention away from the doorstep service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
