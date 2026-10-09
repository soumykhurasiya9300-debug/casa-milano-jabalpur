export type Language = 'en' | 'hi';

export interface BusinessSettings {
  business_name: string;
  tagline: string;
  campaign_line: string;
  city: string;
  state: string;
  address: string;
  address_verification_note: string;
  instagram_handle: string;
  instagram_url: string;
  google_maps_url: string;
  phone: string | null;
  whatsapp_number: string | null;
  email: string | null;
  operating_hours: {
    status: 'confirmed' | 'unconfirmed';
    announcement: string;
  };
}

export type ExperienceSlug = 'racing' | 'snooker' | 'ps5' | 'arcade' | 'foosball';

export interface Experience {
  id: string;
  slug: ExperienceSlug;
  title_en: string;
  title_hi: string;
  tagline_en: string;
  tagline_hi: string;
  short_desc_en: string;
  short_desc_hi: string;
  long_desc_en: string;
  long_desc_hi: string;
  accent_color: string;
  equipment_info: string;
  rate_info: string;
  capacity: string;
  rules_en: string[];
  rules_hi: string[];
  hero_image: string;
  secondary_image: string;
  display_order: number;
  is_published: boolean;
}

export interface MenuItemCategory {
  id: string;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  highlights: string[];
  image: string;
}

export interface PackageOffer {
  id: string;
  title_en: string;
  title_hi: string;
  desc_en: string;
  desc_hi: string;
  benefits_en: string[];
  benefits_hi: string[];
  badge_en: string;
  badge_hi: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'racing' | 'snooker' | 'ps5' | 'arcade' | 'foosball' | 'cafe';
  title_en: string;
  title_hi: string;
  caption_en: string;
  caption_hi: string;
  image: string;
  aspect: 'wide' | 'portrait' | 'landscape';
}

export interface EnquirySubmission {
  activity_slug: string;
  preferred_date: string;
  preferred_time: string;
  party_size: number;
  customer_name: string;
  phone: string;
  email?: string;
  message?: string;
  consent: boolean;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  reference?: string;
  errors?: Record<string, string>;
}
