import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  area?: string;
  service?: string;
}

// Local constants to avoid circular imports from business.ts
const BUSINESS_NAME = 'Top Rank Advertising';
const PHONE = '+971 52 528 0438';
const LANDLINE = '+971 2 555 3936';
const YEAR_ESTABLISHED = 2018;

function yearsInBusiness(): number {
  return new Date().getFullYear() - YEAR_ESTABLISHED;
}

export function generateFaqs(area: ServiceArea, service?: ServiceType): FaqItem[] {
  const serviceName = service ? service.name.toLowerCase() : 'printing and branding';
  const serviceShort = service ? service.name : 'Printing and Branding';

  const faqs: FaqItem[] = [
    {
      question: `What is the typical cost for ${serviceName} in ${area.name}?`,
      answer: service
        ? `For ${area.name} and the surrounding ${area.county} area, ${serviceName} projects typically range from AED ${service.priceRange.min.toLocaleString()} to AED ${service.priceRange.max.toLocaleString()} depending on volume, materials, and finishing. ${BUSINESS_NAME} offers project-based quotations and B2B volume pricing. Call ${PHONE} or message us on WhatsApp for a tailored quote.`
        : `Pricing in ${area.name} depends on the specific service, materials, and order volume. ${BUSINESS_NAME} provides project-based quotations for all B2B clients. Contact us at ${PHONE} or via WhatsApp for a detailed estimate tailored to your requirements.`,
    },
    {
      question: `How long does ${serviceName} take in ${area.name}?`,
      answer: `Our typical turnaround for ${serviceName} in ${area.name} is ${area.responseTime} for initial consultation and proofing, with production and delivery timelines shared in your formal quotation. Standard projects range from 2 to 7 business days. For tight deadlines, speak with our team at ${PHONE} and we will do our best to accommodate your schedule.`,
    },
    {
      question: `Do you provide design services, or do we need to supply print-ready artwork?`,
      answer: `${BUSINESS_NAME} offers both options. If you have print-ready files, our pre-press team reviews them for resolution, color profiles, and bleed at no extra charge. If you need design support, our in-house designers can create or refine artwork for banners, branding, signage, and promotional materials. Call ${PHONE} to discuss your project.`,
    },
    {
      question: `Can ${BUSINESS_NAME} handle bulk or recurring B2B orders?`,
      answer: `Yes. We specialize in B2B volume production across Abu Dhabi and Al Ain. Many of our clients are corporate chains, construction firms, event agencies, and retailers who need consistent quality across repeat orders. We archive your production files for easy reprints and offer tiered pricing for larger volumes. Contact ${PHONE} to set up a corporate account.`,
    },
    {
      question: `Besides ${area.name}, what other areas do you serve?`,
      answer: `In addition to ${area.name}, we serve businesses throughout Abu Dhabi and Al Ain including Mussafah, Mohammed Bin Zayed City, Khalifa City, Yas Island, Saadiyat Island, Al Reem Island, Al Raha, Baniyas, Madinat Zayed, and ICAD. We deliver and install across all these locations. Reach us at ${PHONE} or ${LANDLINE} to confirm coverage for your specific site.`,
    },
  ];

  return faqs;
}

// PLACEHOLDER: Replace with real Google Business Profile reviews before launch
export const reviews: Review[] = [
  {
    author: 'Al Falah Construction',
    date: '2026-08-15',
    rating: 5,
    text: 'Top Rank Advertising produced our site hoardings and safety banners for a major project in Mussafah. The print quality was excellent and they delivered ahead of the agreed timeline. We have since placed three more orders.',
    area: 'mussafah',
    service: 'eco-solvent-banner-printing',
  },
  {
    author: 'Green Leaf Retail Group',
    date: '2026-07-22',
    rating: 5,
    text: 'We needed vinyl stickers for a new product line launch across five stores in Abu Dhabi. Top Rank handled the design, printing, and die-cutting with precision. The volume pricing made a real difference to our marketing budget.',
    area: 'mohammed-bin-zayed-city',
    service: 'sticker-printing',
  },
  {
    author: 'Desert Rose Hospitality',
    date: '2026-06-10',
    rating: 5,
    text: 'Top Rank managed our full rebrand including new signage, vehicle graphics for our fleet, and branded collateral. Everything was consistent in color and quality. A reliable B2B partner.',
    area: 'al-ain',
    service: 'branding',
  },
  {
    author: 'Sunrise Events LLC',
    date: '2026-05-28',
    rating: 5,
    text: 'We ordered acrylic trophies and display stands for an awards ceremony in Yas Island. The fabrication quality exceeded expectations and the pieces arrived perfectly packaged.',
    area: 'yas-island',
    service: 'customized-acrylic-fabrication',
  },
  {
    author: 'Metro Gulf Logistics',
    date: '2026-04-15',
    rating: 5,
    text: 'Top Rank wrapped our entire delivery fleet of twelve vans with consistent branding. The installation was professional and the graphics have held up perfectly through summer heat and sand.',
    area: 'icad',
    service: 'vehicle-branding',
  },
  {
    author: 'Pearl Real Estate',
    date: '2026-03-08',
    rating: 5,
    text: 'The LED backlit sign they fabricated for our sales center in Al Reem Island looks outstanding at night. From design to installation, the process was smooth and the team was responsive.',
    area: 'al-reem-island',
    service: 'led-illuminated-signage',
  },
];

export function getReviewsForPage(
  areaSlug?: string,
  serviceSlug?: string,
  count: number = 3,
): Review[] {
  // Score each review by relevance to the current page
  const scored = reviews.map((review) => {
    let score = 0;
    if (areaSlug && review.area === areaSlug) score += 2;
    if (serviceSlug && review.service === serviceSlug) score += 2;
    // Slight boost for recent reviews
    const ageMonths =
      (new Date().getTime() - new Date(review.date).getTime()) /
      (1000 * 60 * 60 * 24 * 30);
    score += Math.max(0, 3 - ageMonths * 0.5);
    return { review, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.review);
}
