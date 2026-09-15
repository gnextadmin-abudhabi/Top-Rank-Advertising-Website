export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  legalName: string;
  owner: string;
  phone: string;
  phoneHref: string;
  landline: string;
  landlineHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  website: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  schemaType: string;
  additionalType: string;
  description: string;
  tagline: string;
}

export const business: Business = {
  name: 'Top Rank Advertising',
  legalName: 'Top Rank Advertising & Designing LLC',
  owner: '',
  phone: '+971 52 528 0438',
  phoneHref: 'tel:+971525280438',
  landline: '+971 2 555 3936',
  landlineHref: 'tel:+97125553936',
  whatsapp: '+971 52 528 0438',
  whatsappHref: 'https://wa.me/971525280438',
  email: 'info@toprankadvertising.com',
  website: 'https://www.toprankadvertising.com',
  address: {
    street: 'Workshop 7, Plot 83, M-14, Mussafah Industrial Area',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zip: '',
  },
  coordinates: { lat: 24.3683, lng: 54.5369 },
  hours: [
    { days: 'Saturday – Thursday', hours: '9:00 AM – 7:00 PM' },
    { days: 'Friday', hours: '2:30 PM – 7:00 PM' },
  ],
  license: '',
  yearEstablished: 2018,
  serviceRadius: 'Abu Dhabi and Al Ain',
  schemaType: 'LocalBusiness',
  additionalType: 'PrintingService',
  description:
    'Top Rank Advertising LLC is a B2B printing and branding company based in Mussafah, Abu Dhabi, specializing in eco-solvent banner printing, sticker printing, corporate branding and customized acrylic fabrication for businesses across Abu Dhabi and Al Ain.',
  tagline: 'Print. Brand. Fabricate. Delivered.',
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
