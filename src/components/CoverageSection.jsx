import { MapPinned } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactInfo } from '../data/siteContent';

export default function CoverageSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Coverage Area"
          title="Home visit physiotherapy across Sonbhadra district."
          description="Service coverage includes Robertsganj and nearby locations across the district. You can call to confirm nearby area availability."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="card-surface p-6">
            <div className="flex items-center gap-3 text-brand-700 dark:text-brand-300">
              <MapPinned size={20} />
              <span className="text-sm font-bold uppercase tracking-[0.22em]">Primary Areas Covered</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {contactInfo.coverageAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-brand-200"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface overflow-hidden p-3">
            <div className="flex h-full min-h-80 flex-col justify-between rounded-[2rem] bg-gradient-to-br from-slate-900 via-brand-900 to-mint-700 p-8 text-white">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">Service Reach</div>
                <h3 className="mt-3 font-display text-3xl font-bold">Complete Sonbhadra District</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                  Robertsganj remains a key base, with home visits planned across nearby towns and patient-friendly travel coverage.
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Map Note</div>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  A live map can be embedded later if you want. For now, the area list keeps the layout fast, responsive, and easy to update.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
