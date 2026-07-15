import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { faqs, homeVisitBenefits, processSteps, services, treatmentMethods } from './data/siteContent';
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
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
    seoTitle: 'Dr. Atul Pathak | Sone Physiotherapy Sonbhadra',
    seoDescription: 'Learn about Dr. Atul Pathak, an experienced and famous physiotherapist at Sone Physiotherapy. Offering professional home visits nearby Robertsganj, Sonbhadra (231216), Chopan, Obra, and surrounding locations.',
    seoKeywords: 'Dr. Atul Pathak, Sone Physiotherapy, experienced physiotherapist, famous physiotherapist, physiotherapy nearby, Robertsganj 231216, Sonbhadra'
  },
  services: {
    eyebrow: 'Services',
    title: 'Targeted physiotherapy services delivered where patients need them most.',
    description:
      'Services are designed for home-based care across pain management, rehabilitation, recovery support, and mobility improvement.',
    points: services.map((service) => `${service} - Clinic visit available as well`),
    seoTitle: 'Sone Physiotherapy Services | Robertsganj & Sonbhadra',
    seoDescription: 'Expert local physiotherapy services nearby Robertsganj (231216) & Sonbhadra. Experienced and working professional care for paralysis patients, cervical pain relief, and stroke rehabilitation.',
    seoKeywords: 'physiotherapy services, physiotherapy nearby, famous physiotherapist, paralysis treatment, cervical pain relief, stroke rehabilitation'
  },
  'home-visit': {
    eyebrow: 'Home Visit',
    title: 'Doorstep physiotherapy is the main promise of this practice.',
    description:
      'From the first call to the treatment plan, everything is centered on making physiotherapy accessible at home for patients and families across Sonbhadra.',
    points: [...homeVisitBenefits.map((item) => item.title), ...processSteps],
    seoTitle: 'Home Visit Physiotherapy nearby Robertsganj & Sonbhadra',
    seoDescription: 'Get home visit physiotherapy nearby Robertsganj (231216) and Sonbhadra by Dr. Atul Pathak, an experienced and famous physiotherapist. Professional recovery programs for paralysis and stroke care.',
    seoKeywords: 'home visit physiotherapy, physiotherapy nearby, physiotherapist near me, Robertsganj physiotherapist, Sonbhadra physiotherapy'
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'Comfort, convenience, and recovery at home are central to patient feedback.',
    description:
      'Patients often mention easier recovery, less travel strain, and a more personal treatment experience when care happens at home.',
    points: ['Home treatment comfort', 'Fast recovery support', 'Convenient booking', 'Locally submitted reviews with ratings'],
    seoTitle: 'Patient Reviews | Sone Physiotherapy by Dr. Atul Pathak',
    seoDescription: 'Read testimonials from patients in Robertsganj (231216) & Sonbhadra who recovered under Dr. Atul Pathak, a famous and experienced physiotherapist. Rated 5 stars for home visit care.',
    seoKeywords: 'physiotherapy reviews, Dr Atul Pathak patient testimonials, home visit reviews, Robertsganj physiotherapist feedback'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Fast booking for home visits, with clinic consultation available if preferred.',
    description:
      'Booking is intentionally simple: call or WhatsApp to describe the issue, confirm your area, and schedule a home visit.',
    points: [...treatmentMethods, ...faqs.map((faq) => faq.question)],
    seoTitle: 'Book Sone Physiotherapy | Contact Dr. Atul Pathak',
    seoDescription: 'Call +919651203151 or +918318903246 to book Sone Physiotherapy nearby Robertsganj (231216) and Sonbhadra. Consult with an experienced and famous working professional physiotherapist.',
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
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<SectionPage {...pageMap.contact} />} />
          <Route path="*" element={<SectionPage {...pageMap.about} />} />
        </Route>
      </Routes>
    </>
  );
}
