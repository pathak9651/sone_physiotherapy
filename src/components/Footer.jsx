import { Link } from 'react-router-dom';
import { contactInfo, navLinks } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 dark:border-slate-800">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="font-display text-2xl font-bold text-white">Dr. Atul Pathak</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Modern physiotherapy website focused on home visit treatment across Sonbhadra, with clinic consultation kept available as a secondary option.
          </p>
          <div className="mt-5 inline-flex rounded-full bg-mint-500/15 px-4 py-2 text-sm font-semibold text-mint-300">
            Home Visit Available
          </div>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">Quick Links</div>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">Contact</div>
          <div className="mt-5 space-y-3 text-sm">
            <a href={`tel:${contactInfo.primaryPhone}`} className="block transition hover:text-white">
              {contactInfo.primaryPhone}
            </a>
            <a href={`tel:${contactInfo.secondaryPhone}`} className="block transition hover:text-white">
              {contactInfo.secondaryPhone}
            </a>
            <a href={`https://wa.me/${contactInfo.whatsappPrimary}`} className="block transition hover:text-white">
              WhatsApp Booking
            </a>
            <div>{contactInfo.address}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
