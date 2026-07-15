import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://sonephysio.online';
const OG_IMAGE = `${SITE_URL}/favicon.jpeg`;
const DEFAULT_TITLE = 'Dr. Atul Pathak | Home Visit Physiotherapy in Sonbhadra & Robertsganj';
const DEFAULT_DESC =
  'Dr. Atul Pathak is an experienced, working professional physiotherapist offering local home visit physiotherapy nearby Robertsganj & Sonbhadra, specializing in paralysis, stroke recovery, and cervical pain relief.';
const DEFAULT_KEYWORDS =
  'physiotherapy nearby, famous physiotherapist, experienced physiotherapist, working professional physiotherapist, physiotherapist near me, physiotherapy in sonbhadra, physiotherapy in robertsganj, physiotherapy, home visit, paralysis patients, cervical pain relief, best physiotherapist sonbhadra, stroke rehabilitation, joint pain, back pain, Dr Atul Pathak, 231216, Churk, Chopan, Obra';

/**
 * Helper to upsert a <meta> element by a given attribute selector.
 */
function upsertMeta(attrName, attrValue, content) {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Helper to upsert a <link> element.
 */
function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * SEO component to dynamically update document metadata.
 * Handles title, meta description, keywords, canonical, Open Graph,
 * Twitter Card, and page-specific JSON-LD structured data.
 */
export default function SEO({ title, description, keywords, canonical, image, jsonLd }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title
      ? `${title} | Sone Physiotherapy - Dr. Atul Pathak`
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Meta description
    const desc = description || DEFAULT_DESC;
    upsertMeta('name', 'description', desc);

    // 3. Keywords
    upsertMeta('name', 'keywords', keywords || DEFAULT_KEYWORDS);

    // 4. Canonical URL
    const currentUrl = canonical || `${SITE_URL}${location.pathname}`;
    upsertLink('canonical', currentUrl);

    // 5. Open Graph tags
    const ogImage = image || OG_IMAGE;
    upsertMeta('property', 'og:title', formattedTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', currentUrl);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', 'Sone Physiotherapy - Dr. Atul Pathak Robertsganj Sonbhadra');
    upsertMeta('property', 'og:site_name', 'Sone Physiotherapy');
    upsertMeta('property', 'og:type', 'website');

    // 6. Twitter Card tags  (must use name=, NOT property=)
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', formattedTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:url', currentUrl);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertMeta('name', 'twitter:image:alt', 'Sone Physiotherapy - Dr. Atul Pathak');

    // 7. Page-specific JSON-LD structured data
    const structuredDataId = 'page-json-ld';
    let structuredDataScript = document.getElementById(structuredDataId);
    if (jsonLd) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = structuredDataId;
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(jsonLd);
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
  }, [title, description, keywords, canonical, image, location, jsonLd]);

  return null;
}
