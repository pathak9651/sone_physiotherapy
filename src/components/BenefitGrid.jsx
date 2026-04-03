import { Home, HeartPulse, ShieldCheck, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { homeVisitBenefits } from '../data/siteContent';

const icons = [Home, Sofa, ShieldCheck, HeartPulse];

export default function BenefitGrid() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Why Home Visit"
          title="Why families choose physiotherapy at home first."
          description="The website keeps home visits at the center because that is the most convenient and practical way many patients in Sonbhadra receive treatment."
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeVisitBenefits.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-surface p-6"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
