import { Activity, ArrowRight, Bone, HeartHandshake, ShieldPlus, StretchHorizontal, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { services } from '../data/siteContent';

const icons = [Activity, Bone, ShieldPlus, UserRound, StretchHorizontal, HeartHandshake];

export default function ServicesSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Home care services designed around real recovery needs."
          description="Every major service is framed as a home-visit offering first, with clinic availability shown as an optional secondary mode."
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <div key={service} className="card-surface group p-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-100 text-mint-700 transition group-hover:scale-105 dark:bg-mint-900/30 dark:text-mint-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Focused, personalized physiotherapy delivered at your doorstep with progress guidance and practical support.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300">
                  Available at clinic as well
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="btn-secondary"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
