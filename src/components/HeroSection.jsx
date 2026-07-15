import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import doctorImage from '../assets/dr.jpeg';
import { contactInfo, highlights } from '../data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16 2xl:pb-24 2xl:pt-24">
      <div className="container-shell grid items-center gap-12 2xl:gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-700 shadow-soft dark:border-brand-900 dark:bg-slate-900/70 dark:text-brand-200">
            Home Visit Physiotherapy is our primary focus
          </motion.div>
           <motion.h1 variants={fadeUp} className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Sone Physiotherapy by <span className="text-brand-600">Dr. Atul Pathak</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Skip the Travel - Get Professional Care at Your Doorstep. Dr. Atul Pathak is an experienced, working professional physiotherapist offering home visit physiotherapy in Robertsganj (231216), Sonbhadra, and surrounding areas. Specialized in paralysis patients, stroke recovery, and cervical pain relief.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}`}>
              Book Home Visit
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href={`tel:${contactInfo.primaryPhone}`}>
              <PhoneCall size={18} />
              Call Now
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Clinic Consultation Also Available
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-mint-50 px-4 py-2 text-sm font-semibold text-mint-800 dark:border-mint-700/70 dark:bg-mint-900/55 dark:text-mint-50"
              >
                <CheckCircle2 size={16} />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 card-surface grid gap-4 p-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                Book by Phone
              </div>
              <a href={`tel:${contactInfo.primaryPhone}`} className="mt-2 block text-xl font-bold text-slate-900 dark:text-white">
                {contactInfo.primaryPhone}
              </a>
              <a href={`tel:${contactInfo.secondaryPhone}`} className="mt-2 block text-sm font-medium text-slate-500 dark:text-slate-400">
                Alternate: {contactInfo.secondaryPhone}
              </a>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                Service Area
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Serving complete Sonbhadra district with a strong focus on fast, reliable home physiotherapy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-36 w-36 rounded-full bg-mint-300/40 blur-3xl dark:bg-mint-700/30" />
          <div className="absolute -right-4 bottom-0 h-44 w-44 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-700/30" />
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <img
              src={doctorImage}
              alt="Dr. Atul Pathak physiotherapist"
              className="h-[520px] 2xl:h-[620px] w-full rounded-[1.5rem] border border-white/60 bg-white object-cover object-top"
            />
            <div className="absolute bottom-8 left-8 max-w-[320px] rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
                Dr. Atul Pathak, DPT
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-100">
                Experienced & working professional physiotherapist at Sone Physiotherapy Sonbhadra (231216)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
