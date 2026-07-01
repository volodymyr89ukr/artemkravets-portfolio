const cdn = (p: string) =>
  `https://res.cloudinary.com/dzxyuuimk/image/upload/f_auto,q_auto/artemkravets/sessions/${p}`;

export const siteConfig = {
  siteName: 'Artem Kravets',
  tagline: 'Fashion & Portrait Photography · Vienna',
  description:
    'Vienna-based photographer specializing in fashion and portrait photography. Elegant, editorial, and deeply personal imagery.',
  url: 'https://your-domain.vercel.app',
  location: 'Vienna, Austria',
  email: 'artemkravetsofficialph@gmail.com',
  instagram: 'https://www.instagram.com/artemkravetsofficial',
  whatsapp: '+43 690 10174950',
  formspreeId: 'YOUR_FORMSPREE_FORM_ID',
  cloudName: 'dzxyuuimk',
  heroImage: cdn('hero/hero-2')
};

export const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
];

export const stats = [
  { value: '150+', label: 'Sessions captured' },
  { value: '6', label: 'Years of experience' },
  { value: '48h', label: 'Average reply time' }
];

export const services = [
  {
    title: 'Personal Studio Shooting',
    duration: '1 hour',
    price: '350 €',
    priceNote: '+ studio rent',
    photos: '15 edited photos selected by me (each additional edited photo — 20 €)',
    creativeDirection:
      'Concept development, styling, location, wardrobe selection, shoot coordination, and atmosphere — all thoughtfully arranged and managed by me.'
  },
  {
    title: 'Personal Outdoor Shooting',
    duration: '1 hour',
    price: '350 €',
    priceNote: "+ photographer's travel expenses",
    photos: '15 edited photos (each additional edited photo — 20 €)',
    creativeDirection:
      'Concept development, styling, location, wardrobe selection, shoot coordination, and atmosphere — all thoughtfully arranged and managed by me.'
  }
];

export const brandServices = [
  'Fine Art Photography',
  'Fashion Campaigns',
  'Brand Campaigns',
  'Lookbooks',
  'Clothing Collection Presentations',
  'Editorial Photography',
  'Model Tests'
];

export type GalleryItem = {
  id: number;
  title: string;
  tone: 'bw' | 'color';
  orientation?: 'landscape';
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1,  title: 'Morning Light', tone: 'bw',    image: cdn('yulia/series/img_0187') },
  { id: 2,  title: 'Soft Walk',     tone: 'bw',    orientation: 'landscape', image: cdn('yulia/series/img_1387') },
  { id: 3,  title: 'City Frame',    tone: 'color', image: cdn('lena-1/series/img_3321') },
  { id: 4,  title: 'Autumn Street', tone: 'color', image: cdn('lena-1/series/img_3455') },
  { id: 5,  title: 'Forest Mood',   tone: 'color', image: cdn('bogdana/series/img_3502') },
  { id: 6,  title: 'Between Steps', tone: 'bw',    image: cdn('olia-1/series/img_3854') },
  { id: 7,  title: 'Late Light',    tone: 'bw',    image: cdn('olia-1/series/img_3922') },
  { id: 8,  title: 'Still Moment',  tone: 'bw',    image: cdn('olia-1/series/img_3976') },
  { id: 9,  title: 'Shadow Play',   tone: 'bw',    image: cdn('nastya-1/wow/img_5485') },
  { id: 10, title: 'Rooftop',       tone: 'bw',    image: cdn('rooftop/wow/img_2233') },
  { id: 20, title: 'Poise',         tone: 'bw',    image: cdn('hero/hero-1') },
  { id: 11, title: 'Window',        tone: 'bw',    orientation: 'landscape', image: cdn('diana/series/105') },
  { id: 12, title: 'River Light',   tone: 'bw',    image: cdn('anna/series/img_2584') },
  { id: 13, title: 'Bridge',        tone: 'bw',    image: cdn('anna/wow/img_2803') },
  { id: 14, title: 'Deep Gaze',     tone: 'bw',    image: cdn('maria/series/img_9032') },
  { id: 15, title: 'Quiet Hour',    tone: 'bw',    image: cdn('maria/series/img_9690') },
  { id: 16, title: 'Staircase I',   tone: 'bw',    image: cdn('staircase/wow/img_0264') },
  { id: 17, title: 'Staircase II',  tone: 'bw',    image: cdn('staircase/wow/img_0309') },
  { id: 18, title: 'Red Study',     tone: 'color', image: cdn('lena-2/wow/img_2401') },
  { id: 19, title: 'Veil',          tone: 'bw',    image: cdn('ballet/wow/img_0839') },
];
