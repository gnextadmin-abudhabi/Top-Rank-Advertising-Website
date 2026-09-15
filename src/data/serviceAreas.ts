export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  population: number;
  priority: 'primary' | 'secondary' | 'tertiary';
  lat: number;
  lng: number;
  nearby: string[];
  description: string;
  zipCodes: string[];
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'mussafah',
    name: 'Mussafah',
    county: 'Abu Dhabi',
    population: 200000,
    priority: 'primary',
    lat: 24.3683,
    lng: 54.5369,
    nearby: ['icad', 'khalifa-city', 'al-raha-al-shahama'],
    description:
      'Mussafah is Abu Dhabi\'s largest industrial zone, home to thousands of businesses, warehouses, and showrooms that rely on consistent branding, signage, and large-format printing for daily operations.',
    zipCodes: [],
    responseTime: '30 minutes',
  },
  {
    slug: 'al-ain',
    name: 'Al Ain',
    county: 'Al Ain',
    population: 900000,
    priority: 'secondary',
    lat: 24.1302,
    lng: 55.8023,
    nearby: ['baniyas-madinat-zayed', 'mussafah'],
    description:
      'Al Ain is a growing business hub with retail chains, construction firms, and event organizers that need reliable B2B printing partners for banners, signage, and promotional materials.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'mohammed-bin-zayed-city',
    name: 'Mohammed Bin Zayed City',
    county: 'Abu Dhabi',
    population: 300000,
    priority: 'secondary',
    lat: 24.3198,
    lng: 54.5960,
    nearby: ['mussafah', 'khalifa-city', 'baniyas-madinat-zayed'],
    description:
      'A fast-developing residential and commercial district where new retail outlets, restaurants, and corporate offices regularly require branding, signage, and printed marketing collateral.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'khalifa-city',
    name: 'Khalifa City',
    county: 'Abu Dhabi',
    population: 150000,
    priority: 'secondary',
    lat: 24.4194,
    lng: 54.6000,
    nearby: ['mussafah', 'mohammed-bin-zayed-city', 'yas-island'],
    description:
      'Khalifa City hosts a mix of commercial developments, schools, and healthcare facilities that depend on professional printing and branding for wayfinding, marketing, and events.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'yas-island',
    name: 'Yas Island',
    county: 'Abu Dhabi',
    population: 50000,
    priority: 'tertiary',
    lat: 24.4922,
    lng: 54.6030,
    nearby: ['khalifa-city', 'saadiyat-island', 'al-raha-al-shahama'],
    description:
      'Yas Island is Abu Dhabi\'s entertainment and leisure capital, with hotels, theme parks, and retail venues that constantly need event banners, fleet graphics, and illuminated signage.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'saadiyat-island',
    name: 'Saadiyat Island',
    county: 'Abu Dhabi',
    population: 30000,
    priority: 'tertiary',
    lat: 24.5421,
    lng: 54.4440,
    nearby: ['yas-island', 'al-reem-island', 'al-raha-al-shahama'],
    description:
      'Saadiyat Island features luxury hotels, cultural institutions, and high-end retail that demand premium-quality branding, acrylic displays, and refined printed materials.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'al-reem-island',
    name: 'Al Reem Island',
    county: 'Abu Dhabi',
    population: 80000,
    priority: 'secondary',
    lat: 24.4945,
    lng: 54.4030,
    nearby: ['saadiyat-island', 'al-raha-al-shahama', 'mussafah'],
    description:
      'Al Reem Island is a modern residential and business district with corporate offices, F&B outlets, and retail stores that need ongoing branding, signage, and promotional printing.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'al-raha-al-shahama',
    name: 'Al Raha & Al Shahama',
    county: 'Abu Dhabi',
    population: 100000,
    priority: 'secondary',
    lat: 24.4667,
    lng: 54.6167,
    nearby: ['yas-island', 'khalifa-city', 'al-reem-island'],
    description:
      'Al Raha and Al Shahama serve a mix of residential communities and light industrial businesses that require vehicle branding, site hoardings, and retail signage.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'baniyas-madinat-zayed',
    name: 'Baniyas & Madinat Zayed',
    county: 'Abu Dhabi',
    population: 120000,
    priority: 'tertiary',
    lat: 24.2833,
    lng: 54.6833,
    nearby: ['mohammed-bin-zayed-city', 'al-ain', 'mussafah'],
    description:
      'These established neighborhoods have a strong retail and trading presence where local businesses depend on affordable, high-volume printing for promotions and storefront branding.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'icad',
    name: 'ICAD / Mussafah Industrial',
    county: 'Abu Dhabi',
    population: 10000,
    priority: 'primary',
    lat: 24.3500,
    lng: 54.5200,
    nearby: ['mussafah', 'al-raha-al-shahama'],
    description:
      'The Industrial City of Abu Dhabi (ICAD) is a dedicated manufacturing and logistics zone where factories, warehouses, and contractors need durable banners, safety signage, and fleet graphics.',
    zipCodes: [],
    responseTime: '30 minutes',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  return getAreaBySlug(slug)?.name ?? slug;
}
