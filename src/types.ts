export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  composition: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: "Available" | "Limited Stock" | "Out of Stock";
  requiresPrescription: boolean;
  dosageForm: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  titleHindi: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  popularBrands: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleHindi: string;
  category: "all" | "store" | "shelves" | "devices" | "baby-care" | "ayurvedic";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  commentHindi?: string;
  verifiedPurchase: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  questionHindi?: string;
  answer: string;
  category: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  titleHindi: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  tips: string[];
  icon: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicine: string;
  quantity: string;
  prescriptionAttached: "Yes" | "No";
  preferredTime: string;
  message: string;
}
