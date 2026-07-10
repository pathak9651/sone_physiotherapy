import { Menu, PhoneCall, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { contactInfo, navLinks } from '../data/siteContent';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-slate-100/88 backdrop-blur-xl transition dark:border-slate-800/75 dark:bg-slate-900/88">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link to="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr. Atul Pathak - Sone Physiotherapy Sonbhadra Robertsganj" className="h-12 w-12 rounded-full border border-white/70 object-cover shadow-md dark:border-slate-700" />
            <div>
              <div className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">Dr. Atul Pathak</div>
              <div className="text-xs font-medium uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
                Sone Physiotherapy
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? 'text-brand-700 dark:text-brand-300' : 'text-slate-700 hover:text-brand-700 dark:text-slate-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-100"
            href={`tel:${contactInfo.primaryPhone}`}
          >
            <PhoneCall size={16} />
            {contactInfo.primaryPhone}
          </a>
          <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}`}>
            Book Home Visit
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          <div className="container-shell flex flex-col gap-4 py-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-slate-700 transition hover:text-brand-700 dark:text-slate-100"
              >
                {item.label}
              </NavLink>
            ))}
            <a className="btn-primary" href={`https://wa.me/${contactInfo.whatsappPrimary}`}>
              Book Home Visit
            </a>
            <a className="btn-secondary" href={`tel:${contactInfo.primaryPhone}`}>
              {contactInfo.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
