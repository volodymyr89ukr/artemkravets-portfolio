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
  { id: 1,  title: 'Morning Light',  category: 'Fashion', image: cdn('yulia/series/img_0187') },
  { id: 2,  title: 'Soft Walk',      category: 'Fashion', image: cdn('yulia/series/img_1387') },
  { id: 3,  title: 'City Frame',     category: 'Fashion', image: cdn('lena-1/series/img_3321') },
  { id: 4,  title: 'Autumn Street',  category: 'Fashion', image: cdn('lena-1/series/img_3455') },
  { id: 5,  title: 'Forest Mood',    category: 'Fashion', image: cdn('bogdana/series/img_3502') },
  { id: 6,  title: 'Between Steps',  category: 'Fashion', image: cdn('olia-1/series/img_3854') },
  { id: 7,  title: 'Late Light',     category: 'Fashion', image: cdn('olia-1/series/img_3922') },
  { id: 8,  title: 'Still Moment',   category: 'Fashion', image: cdn('olia-1/series/img_3976') },
  { id: 9,  title: 'Shadow Play',    category: 'Fashion', image: cdn('nastya-1/wow/img_5485') },
  // Portrait
  { id: 10, title: 'Window',         category: 'Portrait', image: cdn('diana/series/105') },
  { id: 11, title: 'River Light',    category: 'Portrait', image: cdn('anna/series/img_2584') },
  { id: 12, title: 'Bridge',         category: 'Portrait', image: cdn('anna/wow/img_2803') },
  { id: 13, title: 'Deep Gaze',      category: 'Portrait', image: cdn('maria/series/img_9032') },
  { id: 14, title: 'Quiet Hour',     category: 'Portrait', image: cdn('maria/series/img_9690') },
  // Studio
  { id: 15, title: 'Red Study',      category: 'Studio',   image: cdn('lena-2/wow/img_2401') },
];
