export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  emergency: boolean;
  icon: string;
  image: string;
  processSteps: ProcessStep[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'eco-solvent-banner-printing',
    name: 'Eco-Solvent Banner Printing',
    shortDescription:
      'High-resolution banners, flex, backdrops, and hoarding prints for construction sites, events, and retail promotions.',
    description:
      'Our eco-solvent banner printing delivers vivid, weather-resistant banners perfect for outdoor hoardings, event backdrops, and retail promotions. Using large-format eco-solvent printers, we produce sharp, durable prints on flex, vinyl, and mesh substrates at scale for corporate clients across Abu Dhabi and Al Ain.',
    priceRange: { min: 500, max: 15000 },
    emergency: false,
    icon: 'lucide:image',
    image: '/images/eco-solvent-banner-printing.webp',
    processSteps: [
      {
        title: 'Project Brief & Sizing',
        description:
          'Share your artwork or brief with our team. We confirm dimensions, substrate type (flex, mesh, or blackout), and finishing options such as eyelets, hemming, or pole pockets.',
      },
      {
        title: 'Pre-Press & Color Proofing',
        description:
          'Our designers review your files for resolution, color profiles, and bleed. We provide a digital proof or physical swatch for approval before full production.',
      },
      {
        title: 'Large-Format Printing',
        description:
          'We run your banners on industrial eco-solvent printers using fade-resistant inks. Quality checks happen at every roll to ensure consistent color and sharp detail.',
      },
      {
        title: 'Finishing, Delivery & Install',
        description:
          'Banners are hemmed, eyeletted, or welded as specified, then rolled and delivered to your site. Installation support is available for hoardings and large backdrops.',
      },
    ],
  },
  {
    slug: 'sticker-printing',
    name: 'Sticker Printing',
    shortDescription:
      'Vinyl stickers, decals, labels, and window or floor graphics for product branding and corporate identity.',
    description:
      'From product labels and safety decals to full-coverage window and floor graphics, our sticker printing covers every B2B need. We print on vinyl, clear polyester, reflective, and static-cling materials with precision die-cutting or kiss-cutting for clean, professional results.',
    priceRange: { min: 300, max: 8000 },
    emergency: false,
    icon: 'lucide:tags',
    image: '/images/sticker-printing.webp',
    processSteps: [
      {
        title: 'Material & Application Review',
        description:
          'We help you choose the right substrate: permanent vinyl for equipment labels, removable vinyl for window campaigns, or reflective for safety signage.',
      },
      {
        title: 'Artwork Setup & Die-Line',
        description:
          'Our pre-press team prepares your artwork with correct bleed, cut lines, and color matching. We send a digital proof for your approval.',
      },
      {
        title: 'Precision Printing & Cutting',
        description:
          'Stickers are printed on high-resolution digital presses and finished on automated cutting tables for exact shapes, rounded corners, or intricate contours.',
      },
      {
        title: 'QC, Packing & Dispatch',
        description:
          'Every batch is inspected for adhesion, color accuracy, and cut precision. We pack by SKU or location and deliver with application instructions.',
      },
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    shortDescription:
      'Corporate branding, brand identity systems, and marketing collateral for businesses of all sizes.',
    description:
      'We build cohesive brand identities that work across print, signage, and digital touchpoints. From logo refinement and color systems to complete corporate stationery suites and marketing collateral, our branding service ensures your business looks consistent and professional everywhere.',
    priceRange: { min: 2000, max: 50000 },
    emergency: false,
    icon: 'lucide:palette',
    image: '/images/branding.webp',
    processSteps: [
      {
        title: 'Brand Discovery Session',
        description:
          'We meet with your team to understand your market position, target audience, and visual goals. This shapes the creative direction and deliverables list.',
      },
      {
        title: 'Concept Development',
        description:
          'Our designers develop 2–3 visual directions including logo variations, color palettes, typography, and sample applications for your review.',
      },
      {
        title: 'Collateral Production',
        description:
          'Once the identity is approved, we produce business cards, letterheads, brochures, folders, and any other marketing collateral in your new brand system.',
      },
      {
        title: 'Brand Guidelines & Handover',
        description:
          'You receive a comprehensive brand guidelines document plus all master files, ensuring your team and vendors maintain consistency across every future application.',
      },
    ],
  },
  {
    slug: 'customized-acrylic-fabrication',
    name: 'Customized Acrylic Fabrication',
    shortDescription:
      'Acrylic stands, display boxes, 3D letters, trophies, and bespoke fabrication for retail and corporate environments.',
    description:
      'We design and fabricate custom acrylic products including display stands, showcase boxes, 3D channel letters, reception signs, trophies, and awards. Our CNC routing, laser cutting, and heat-bending capabilities allow us to create precise, polished pieces for retail stores, offices, exhibitions, and events.',
    priceRange: { min: 800, max: 25000 },
    emergency: false,
    icon: 'lucide:box',
    image: '/images/customized-acrylic-fabrication.webp',
    processSteps: [
      {
        title: 'Design Consultation & Measurements',
        description:
          'We review your concept, take site measurements if needed, and recommend acrylic thickness, finish (gloss, matte, frosted), and mounting methods.',
      },
      {
        title: '3D Modeling & Approval',
        description:
          'Our team creates detailed 3D renders or technical drawings showing dimensions, joints, and finishes. You approve before fabrication begins.',
      },
      {
        title: 'Precision Fabrication',
        description:
          'Using CNC routing, laser cutting, diamond polishing, and heat bending, we fabricate each component to exact specifications with clean edges and tight joints.',
      },
      {
        title: 'Assembly, QA & Installation',
        description:
          'Pieces are assembled, quality-checked for clarity and fit, then packed with care. We also offer on-site installation for large displays and signage.',
      },
    ],
  },
  {
    slug: 'large-format-digital-printing',
    name: 'Large-Format Digital Printing',
    shortDescription:
      'Posters, canvas prints, wall graphics, and window displays for offices, retail, and events.',
    description:
      'Our large-format digital printing handles everything from indoor posters and canvas wall art to full-building window graphics. Using UV-cured and latex inks, we produce scratch-resistant, fade-proof prints on paper, canvas, self-adhesive vinyl, and backlit films for offices, retail chains, and event venues.',
    priceRange: { min: 400, max: 12000 },
    emergency: false,
    icon: 'lucide:printer',
    image: '/images/large-format-digital-printing.webp',
    processSteps: [
      {
        title: 'Scope & Substrate Selection',
        description:
          'We discuss your application (indoor, outdoor, backlit, textured wall) and recommend the best substrate and ink technology for durability and visual impact.',
      },
      {
        title: 'File Preparation & Proofing',
        description:
          'Your artwork is checked for resolution, color mode, and scaling. We produce a printed proof or digital mock-up so you can approve colors before the full run.',
      },
      {
        title: 'High-Resolution Printing',
        description:
          'We print on wide-format UV or latex printers capable of photorealistic detail. Prints are checked section by section for banding, color drift, or defects.',
      },
      {
        title: 'Protective Finishing & Delivery',
        description:
          'Optional lamination, mounting on foam board, or framing is applied. Finished pieces are carefully packed and delivered to your location, ready for display.',
      },
    ],
  },
  {
    slug: 'vehicle-branding',
    name: 'Vehicle Branding & Fleet Graphics',
    shortDescription:
      'Full and partial vehicle wraps, fleet graphics, and magnetic signs for commercial vehicles.',
    description:
      'Turn your company vehicles into mobile billboards with our vehicle branding service. We design, print, and install full wraps, partial wraps, cut vinyl lettering, and perforated window films for vans, trucks, company cars, and entire fleets operating across Abu Dhabi and Al Ain.',
    priceRange: { min: 1500, max: 35000 },
    emergency: false,
    icon: 'lucide:truck',
    image: '/images/vehicle-branding.webp',
    processSteps: [
      {
        title: 'Vehicle Survey & Template',
        description:
          'We photograph and measure your vehicle or use manufacturer templates to ensure the design fits perfectly around doors, handles, lights, and contours.',
      },
      {
        title: 'Design & Client Approval',
        description:
          'Our designers create a realistic vehicle mock-up showing how your branding will look from every angle. You approve the layout before we proceed to print.',
      },
      {
        title: 'Print & Material Selection',
        description:
          'We use premium cast vinyl with matching overlaminate for durability in UAE heat and sand. Colors are matched to your brand standards for fleet consistency.',
      },
      {
        title: 'Professional Installation',
        description:
          'Certified installers apply the graphics in a controlled environment, ensuring bubble-free adhesion and precise alignment. Fleet projects are scheduled to minimize downtime.',
      },
    ],
  },
  {
    slug: 'led-illuminated-signage',
    name: 'LED & Illuminated Signage',
    shortDescription:
      'Lightboxes, backlit signs, channel letters, and LED sign boards for storefronts and offices.',
    description:
      'We manufacture and install illuminated signage including LED lightboxes, backlit flex faces, 3D channel letters, and digital sign boards. Our signs use energy-efficient LED modules with even light distribution, built to withstand Abu Dhabi\'s climate while making your business visible day and night.',
    priceRange: { min: 2000, max: 40000 },
    emergency: false,
    icon: 'lucide:lightbulb',
    image: '/images/led-illuminated-signage.webp',
    processSteps: [
      {
        title: 'Site Survey & Permitting Advice',
        description:
          'We visit your location to assess mounting surfaces, electrical access, and visibility angles. We also advise on any municipality signage permits you may need.',
      },
      {
        title: 'Structural Design & Lighting Plan',
        description:
          'Our engineers design the sign structure, frame, and LED layout for even illumination. You receive technical drawings and a photorealistic night render for approval.',
      },
      {
        title: 'Fabrication & Assembly',
        description:
          'The sign face is printed or fabricated from acrylic, aluminum, or flex. LED modules are installed and wired, then tested for brightness consistency and waterproofing.',
      },
      {
        title: 'Installation & Commissioning',
        description:
          'Our installation team mounts the sign securely, connects power, and commissions the lighting. We provide a warranty and maintenance schedule for long-term performance.',
      },
    ],
  },
  {
    slug: 'exhibition-event-branding',
    name: 'Exhibition & Event Branding',
    shortDescription:
      'Roll-up banners, backdrops, booth graphics, and complete event branding packages.',
    description:
      'From single roll-up banners to complete exhibition booth branding, we handle event graphics for trade shows, product launches, corporate events, and retail activations. Our packages include backdrops, counter graphics, floor decals, flags, and promotional materials, all produced to tight deadlines.',
    priceRange: { min: 1000, max: 30000 },
    emergency: false,
    icon: 'lucide:flag',
    image: '/images/exhibition-event-branding.webp',
    processSteps: [
      {
        title: 'Event Requirements & Timeline',
        description:
          'We review your booth size, event guidelines, and delivery deadline. Our team creates a production schedule that ensures everything is ready before setup day.',
      },
      {
        title: 'Booth Design & Mock-Ups',
        description:
          'We design your booth layout including backdrop walls, counter wraps, and hanging graphics. 3D mock-ups help you visualize the final setup before production.',
      },
      {
        title: 'Production & Quality Control',
        description:
          'All graphics are printed on event-grade substrates (tension fabric, PVC-free media, or recyclable board) and checked for color accuracy and structural integrity.',
      },
      {
        title: 'Delivery, Setup & Post-Event',
        description:
          'We deliver to the venue and can provide on-site installation support. After the event, we offer storage, refurbishment, or recycling services for reusable items.',
      },
    ],
  },
  {
    slug: 'promotional-pos-displays',
    name: 'Promotional & POS Displays',
    shortDescription:
      'Acrylic holders, countertop display units, shelf talkers, and point-of-sale materials.',
    description:
      'We design and produce point-of-sale displays including acrylic holders, countertop units, shelf talkers, danglers, and dump bins. Our POS materials are designed to maximize product visibility and drive impulse purchases in retail environments across Abu Dhabi and Al Ain.',
    priceRange: { min: 500, max: 15000 },
    emergency: false,
    icon: 'lucide:store',
    image: '/images/promotional-pos-displays.webp',
    processSteps: [
      {
        title: 'Retail Environment Assessment',
        description:
          'We analyze your retail space, shelf dimensions, and traffic flow to recommend the most effective display types and placement strategies.',
      },
      {
        title: 'Design & Prototyping',
        description:
          'Our designers create display concepts with your branding and product dimensions. We can produce a prototype or 3D render so you can evaluate size, color, and usability.',
      },
      {
        title: 'Batch Production',
        description:
          'Once approved, we manufacture your displays at scale using acrylic, corrugated board, metal, or mixed materials. Each unit is checked for structural strength and print quality.',
      },
      {
        title: 'Kitting, Delivery & Installation',
        description:
          'Displays are flat-packed or pre-assembled per your preference, labeled by store location, and delivered with setup instructions or an installation team.',
      },
    ],
  },
  {
    slug: 'design-prepress-services',
    name: 'Design & Pre-Press Services',
    shortDescription:
      'Print-ready artwork, file preparation, color management, and design support for B2B clients.',
    description:
      'Not every business has an in-house design team. Our pre-press service handles file preparation, color correction, layout refinement, and print-ready output. We work with your existing brand assets or create new ones, ensuring every file meets the technical requirements of our presses and your quality standards.',
    priceRange: { min: 300, max: 10000 },
    emergency: false,
    icon: 'lucide:pen-tool',
    image: '/images/design-prepress-services.webp',
    processSteps: [
      {
        title: 'File Intake & Technical Review',
        description:
          'Send us your artwork in any common format. We check resolution, color mode, bleeds, fonts, and layer structure, then report any issues that could affect print quality.',
      },
      {
        title: 'Color Management & Proofing',
        description:
          'We convert colors to the correct output profile for your chosen substrate and provide a calibrated digital proof or physical chromatic proof for sign-off.',
      },
      {
        title: 'Layout Refinement & Trapping',
        description:
          'Our pre-press specialists adjust registration, trapping, and overprints. For large-format work, we tile and add cut marks for seamless panel alignment.',
      },
      {
        title: 'Final Output & Archive',
        description:
          'Print-ready files are generated at full resolution and archived in our system for easy reprints or version updates. You receive a copy of the final production file.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((s) => s.slug === slug);
}

export function getServiceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((s) => s.emergency);
}
