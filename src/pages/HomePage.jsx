import BenefitGrid from '../components/BenefitGrid';
import ClinicInfoSection from '../components/ClinicInfoSection';
import ContactSection from '../components/ContactSection';
import CoverageSection from '../components/CoverageSection';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ReviewsSection from '../components/ReviewsSection';
import ServicesSection from '../components/ServicesSection';
import TreatmentsSection from '../components/TreatmentsSection';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home Visit Physiotherapy nearby Sonbhadra & Robertsganj"
        description="Dr. Atul Pathak is an experienced, working professional and famous physiotherapist offering home visit physiotherapy nearby Sonbhadra, Robertsganj (231216), and surrounding regions. Specialized in paralysis patients, stroke recovery, and cervical pain relief."
        keywords="physiotherapy nearby, famous physiotherapist, experienced physiotherapist, working professional physiotherapist, physiotherapist near me, physiotherapy in sonbhadra, physiotherapy in robertsganj, home visit physiotherapy, paralysis patients, cervical pain relief, Dr Atul Pathak, 231216, Churk, Chopan, Obra, Hinduri"
      />
      <HeroSection />
      <BenefitGrid />
      <ServicesSection />
      <HowItWorksSection />
      <TreatmentsSection />
      <ReviewsSection />
      <ClinicInfoSection />
      <CoverageSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
