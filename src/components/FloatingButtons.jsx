import { ArrowUp, MessageCircle, PhoneCall } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contactInfo } from '../data/siteContent';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 280);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showScrollTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-soft transition hover:scale-105 dark:bg-white dark:text-slate-900"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      ) : null}
      <a
        href={`tel:${contactInfo.primaryPhone}`}
        className="inline-flex items-center gap-3 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
      >
        <PhoneCall size={18} />
        Call
      </a>
      <a
        href={`https://wa.me/${contactInfo.whatsappPrimary}`}
        className="inline-flex items-center gap-3 rounded-full bg-mint-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-mint-700"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
