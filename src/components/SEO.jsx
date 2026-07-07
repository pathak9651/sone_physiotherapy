import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component to dynamically update document metadata (title, descriptions, keywords, Open Graph, etc.)
 */
export default function SEO({ title, description, keywords, canonical }) {
  const location = useLocation();
  const siteUrl = 'https://sonephysio.online'; // Fallback custom domain

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title 
      ? `${title} | Dr. Atul Pathak Physiotherapy` 
      : 'Dr. Atul Pathak | Home Visit Physiotherapy in Sonbhadra & Robertsganj';
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    const defaultDesc = 'Dr. Atul Pathak is an experienced, working professional physiotherapist offering local home visit physiotherapy nearby Robertsganj & Sonbhadra, specializing in paralysis, stroke recovery, and cervical pain relief.';
    metaDesc.setAttribute('content', description || defaultDesc);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    const defaultKeywords = 'physiotherapy nearby, famous physiotherapist, experienced physiotherapist, working professional physiotherapist, physiotherapist near me, physiotherapy in sonbhadra, physiotherapy in robertsganj, physiotherapy, home visit, paralysis patients, cervical pain relief, best physiotherapist sonbhadra, stroke rehabilitation, joint pain, back pain, Dr Atul Pathak, 231216, Churk, Chopan, Obra';
    metaKeywords.setAttribute('content', keywords || defaultKeywords);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    const currentUrl = canonical || `${siteUrl}${location.pathname}`;
    linkCanonical.setAttribute('href', currentUrl);

    // 5. Update Open Graph Tags
    const ogTags = {
      'og:title': formattedTitle,
      'og:description': description || defaultDesc,
      'og:url': currentUrl,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });

    // 6. Update Twitter Tags
    const twitterTags = {
      'twitter:title': formattedTitle,
      'twitter:description': description || defaultDesc,
      'twitter:url': currentUrl,
    };

    Object.entries(twitterTags).forEach(([property, content]) => {
      let twitterMeta = document.querySelector(`meta[property="${property}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('property', property);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', content);
    });

  }, [title, description, keywords, canonical, location]);

  return null;
}
