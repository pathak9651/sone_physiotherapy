import ReviewsSection from '../components/ReviewsSection';
import SEO from '../components/SEO';
import { initialReviews } from '../data/siteContent';

const siteUrl = 'https://sonephysio.online';

const averageRating = (
  initialReviews.reduce((total, review) => total + review.rating, 0) / initialReviews.length
).toFixed(1);

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${siteUrl}/#medicalbusiness`,
  name: 'Dr. Atul Pathak Physiotherapy',
  url: `${siteUrl}/reviews`,
  image: `${siteUrl}/favicon.jpeg`,
  telephone: '+919651203151',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Robertsganj',
    addressLocality: 'Sonbhadra',
    addressRegion: 'Uttar Pradesh',
    postalCode: '231216',
    addressCountry: 'IN'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: averageRating,
    bestRating: '5',
    worstRating: '1',
    ratingCount: String(initialReviews.length),
    reviewCount: String(initialReviews.length)
  },
  review: initialReviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name
    },
    datePublished: review.date,
    reviewBody: review.comment,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
      worstRating: '1'
    }
  }))
};

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Patient Reviews"
        description="Read local patient reviews for Sone Physiotherapy by Dr. Atul Pathak in Robertsganj and Sonbhadra, with dynamic ratings and home visit feedback."
        keywords="physiotherapy reviews, Dr Atul Pathak patient testimonials, home visit reviews, Robertsganj physiotherapist feedback"
        canonical={`${siteUrl}/reviews`}
        jsonLd={reviewsJsonLd}
      />
      <ReviewsSection />
    </>
  );
}
