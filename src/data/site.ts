const cdn = (p: string) =>
  `https://res.cloudinary.com/dzxyuuimk/image/upload/f_auto,q_auto/artemkravets/sessions/${p}`;

export const siteConfig = {
  siteName: 'Artem Kravets',
  tagline: 'Fashion & Portrait Photography · Vienna',
  description:
    'Vienna-based photographer specializing in fashion and portrait photography. Elegant, editorial, and deeply personal imagery.',
  url: 'https://your-domain.vercel.app',
  location: 'Vienna, Austria',
  email: 'hello@example.com',
  instagram: 'https://www.instagram.com/artemkravetsofficial',
  formspreeId: 'YOUR_FORMSPREE_FORM_ID',
  cloudName: 'dzxyuuimk',
  heroImage: cdn('nastya-1/wow/img_5395')
};

export const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export const stats = [
  { value: '150+', label: 'Sessions captured' },
  { value: '6', label: 'Years of experience' },
  { value: '48h', label: 'Average reply time' }
];

export const services = [
  {
    title: 'Fashion Session',
    description:
      'Editorial-style shoots on location across Vienna — architecture, parks, streets. Crafted for portfolios, agencies, and personal branding.',
    features: ['2–3 hour session', 'Location scouting included', 'Edited online gallery']
  },
  {
    title: 'Portrait Session',
    description:
      'Intimate, cinematic portraits with natural or studio light. Relaxed atmosphere, honest results.',
    features: ['1–2 hour session', 'Studio or outdoor', 'Personal gallery delivery']
  },
  {
    title: 'Creative Editorial',
    description:
      'Concept-driven collaborations for brands, magazines, and creative projects. Studio or location.',
    features: ['Brief & mood board call', 'Styling direction', 'Commercial licence available']
  }
];

export const testimonials = [
  {
    name: 'Anna M.',
    text: 'The photos exceeded every expectation. Artem has a rare ability to make you feel completely at ease — and the results speak for themselves.'
  },
  {
    name: 'Olya K.',
    text: 'An exceptional eye for light and composition. Every frame feels like a still from a film. Highly recommend.'
  }
];

export const galleryItems = [
  // Fashion
  { id: 1,  title: 'Vienna Street', category: 'Fashion', image: cdn('nastya-1/wow/img_5113') },
  { id: 2,  title: 'Editorial',     category: 'Fashion', image: cdn('nastya-1/wow/img_5440') },
  { id: 3,  title: 'Cold Light',    category: 'Fashion', image: cdn('nastya-1/wow/img_5471') },
  { id: 4,  title: 'Shadow Play',   category: 'Fashion', image: cdn('nastya-1/wow/img_5485') },
  { id: 5,  title: 'Soft Morning',  category: 'Fashion', image: cdn('yulia/wow/img_0971') },
  { id: 6,  title: 'In Bloom',      category: 'Fashion', image: cdn('yulia/wow/img_1460') },
  { id: 7,  title: 'City Walk',     category: 'Fashion', image: cdn('olia-1/wow/img_3642') },
  { id: 8,  title: 'Monochrome',    category: 'Fashion', image: cdn('olia-1/wow/img_3941') },
  { id: 9,  title: 'Architecture',  category: 'Fashion', image: cdn('olia-1/wow/img_3993') },
  { id: 10, title: 'Forest Light',  category: 'Fashion', image: cdn('bogdana/wow/img_3581') },
  { id: 11, title: 'Quiet Mood',    category: 'Fashion', image: cdn('lena-1/series/img_3169') },
  { id: 12, title: 'Late Autumn',   category: 'Fashion', image: cdn('tanya/series/img_2358') },
  { id: 13, title: 'Deep Forest',   category: 'Fashion', image: cdn('bogdana/wow/img_3153_1') },
  // Portrait
  { id: 14, title: 'Bridge',        category: 'Portrait', image: cdn('anna/wow/img_2540') },
  { id: 15, title: 'Gaze',          category: 'Portrait', image: cdn('anna/wow/img_2604') },
  { id: 16, title: 'River Light',   category: 'Portrait', image: cdn('anna/wow/img_2803') },
  { id: 17, title: 'Golden Hour',   category: 'Portrait', image: cdn('anna/wow/img_2863') },
  { id: 18, title: 'Studio Dark',   category: 'Portrait', image: cdn('nastya-2/wow/img_0937') },
  { id: 19, title: 'Window',        category: 'Portrait', image: cdn('diana/wow/090') },
  { id: 20, title: 'Close',         category: 'Portrait', image: cdn('dasha/series/img_5389') },
  { id: 21, title: 'Soft Shadow',   category: 'Portrait', image: cdn('maria/wow/img_9828') },
  // Studio
  { id: 22, title: 'Red Study I',   category: 'Studio', image: cdn('lena-2/wow/img_2401') },
  { id: 23, title: 'Red Study II',  category: 'Studio', image: cdn('lena-2/wow/img_2420') },
  { id: 24, title: 'Red Study III', category: 'Studio', image: cdn('lena-2/wow/img_2441') },
];
