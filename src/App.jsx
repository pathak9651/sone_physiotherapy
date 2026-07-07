import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { faqs, homeVisitBenefits, processSteps, services, treatmentMethods } from './data/siteContent';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import TreatmentsPage from './pages/TreatmentsPage';

const pageMap = {
  about: {
    eyebrow: 'About Dr. Atul Pathak',
    title: 'DPT-qualified physiotherapy care with 7 years of hands-on experience.',
    description:
      'Dr. Atul Pathak, DPT, serves Sonbhadra with a strong focus on doorstep physiotherapy. With 7 years of personal experience and special expertise in paralysis patients and cervical cases, the care model is built around convenience, mobility support, and one-on-one treatment in the comfort of home.',
    points: [
      'Home visit physiotherapy is the primary service.',
      'Special expertise in paralysis patient care and cervical condition management.',
      'Clinic consultation remains available as a secondary option.',
      'Treatment plans are personalized around pain, mobility, recovery stage, and daily routine.'
    ],
    seoTitle: 'About Dr. Atul Pathak | Physiotherapy in Sonbhadra',
    seoDescription: 'Learn more about Dr. Atul Pathak, a DPT-qualified physiotherapist with 7 years of experience. Specializing in paralysis patients and cervical pain relief home visits in Robertsganj, Sonbhadra, Chopan, Obra, Churk, and nearby locations.',
    seoKeywords: 'Dr. Atul Pathak, physiotherapist Sonbhadra, physiotherapy Robertsganj, paralysis care, cervical pain relief, home visit physiotherapy'
  },
  services: {
    eyebrow: 'Services',
    title: 'Targeted physiotherapy services delivered where patients need them most.',
    description:
      'Services are designed for home-based care across pain management, rehabilitation, recovery support, and mobility improvement.',
    points: services.map((service) => `${service} - Clinic visit available as well`),
    seoTitle: 'Physiotherapy Services in Sonbhadra & Robertsganj | Home Visits',
    seoDescription: 'Explore expert physiotherapy services at home. Specialized treatments for paralysis rehabilitation, cervical pain relief, stroke physiotherapy, and post-surgery rehabilitation in Robertsganj (231216) and Sonbhadra district.',
    seoKeywords: 'physiotherapy services, stroke rehab, post-surgery rehab, paralysis physiotherapy, neck pain relief, back pain treatment'
  },
  'home-visit': {
    eyebrow: 'Home Visit',
    title: 'Doorstep physiotherapy is the main promise of this practice.',
    description:
      'From the first call to the treatment plan, everything is centered on making physiotherapy accessible at home for patients and families across Sonbhadra.',
    points: [...homeVisitBenefits.map((item) => item.title), ...processSteps],
    seoTitle: 'Home Visit Physiotherapy in Robertsganj & Sonbhadra | Doorstep Care',
    seoDescription: 'Professional home visit physiotherapy across Sonbhadra. Skip the travel and wait times—get high-quality physiotherapy for paralysis, cervical pain, and stroke recovery at your doorstep. Serving Robertsganj, Churk, Hinduri, and neighboring places.',
    seoKeywords: 'home visit physiotherapy, doorstep physiotherapy, physiotherapist home visit, Robertsganj 231216, Sonbhadra'
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'Comfort, convenience, and recovery at home are central to patient feedback.',
    description:
      'Patients often mention easier recovery, less travel strain, and a more personal treatment experience when care happens at home.',
    points: ['Home treatment comfort', 'Fast recovery support', 'Convenient booking', 'Locally submitted reviews with ratings'],
    seoTitle: 'Reviews & Patient Testimonials | Dr. Atul Pathak Physiotherapy',
    seoDescription: 'Read reviews and testimonials from patients who received home visit physiotherapy in Robertsganj, Obra, Ghorawal, and Sonbhadra. Rated 5 stars for paralysis recovery, cervical pain relief, and stroke rehabilitation.',
    seoKeywords: 'physiotherapy reviews, Dr Atul Pathak patient testimonials, home visit reviews, Robertsganj physiotherapist feedback'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Fast booking for home visits, with clinic consultation available if preferred.',
    description:
      'Booking is intentionally simple: call or WhatsApp to describe the issue, confirm your area, and schedule a home visit.',
    points: [...treatmentMethods, ...faqs.map((faq) => faq.question)],
    seoTitle: 'Contact Dr. Atul Pathak | Book Home Visit Physiotherapy',
    seoDescription: 'Get in touch to book your home visit physiotherapy session. Call +919651203151 or +918318903246. Serving Robertsganj (231216), Churk, Chopan, Obra, and Sonbhadra district.',
    seoKeywords: 'book physiotherapy, call physiotherapist Sonbhadra, WhatsApp physiotherapy booking, Robertsganj clinic address'
  }
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<SectionPage {...pageMap.about} />} />
          <Route path="/services" element={<SectionPage {...pageMap.services} />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="/home-visit" element={<SectionPage {...pageMap['home-visit']} />} />
          <Route path="/reviews" element={<SectionPage {...pageMap.reviews} />} />
          <Route path="/contact" element={<SectionPage {...pageMap.contact} />} />
          <Route path="*" element={<SectionPage {...pageMap.about} />} />
        </Route>
      </Routes>
    </>
  );
}
