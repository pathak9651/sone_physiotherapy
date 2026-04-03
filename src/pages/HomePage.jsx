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

export default function HomePage() {
  return (
    <>
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
