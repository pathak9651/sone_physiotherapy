import { PhoneCall } from 'lucide-react';
import { contactInfo } from '../data/siteContent';

export default function EmergencyBanner() {
  return (
    <div className="bg-mint-600 text-white">
      <div className="container-shell flex flex-col items-center justify-between gap-2 py-2 text-center text-sm font-medium sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <PhoneCall size={16} />
          <span>Need urgent physiotherapy support at home? Call now for fast scheduling.</span>
        </div>
        <a className="underline decoration-white/50 underline-offset-4" href={`tel:${contactInfo.primaryPhone}`}>
          {contactInfo.primaryPhone}
        </a>
      </div>
    </div>
  );
}
