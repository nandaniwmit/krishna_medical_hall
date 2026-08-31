export interface BusinessConfig {
  name: string;
  nameHindi: string;
  shortName: string;
  category: string;
  tagline: string;
  taglineHindi: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    streetHindi: string;
    landmark: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    plusCode: string;
    fullAddress: string;
    fullAddressHindi: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  workingHours: {
    days: string;
    hours: string;
    emergency: string;
    openStatusText: string;
  };
  mapLinks: {
    embedUrl: string;
    directionsUrl: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Krishna Medical Hall",
  nameHindi: "कृष्णा मेडिकल हॉल",
  shortName: "Krishna Medical",
  category: "Pharmacy & Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  taglineHindi: "100% असली दवाइयां और स्वास्थ्य देखभाल का आपका विश्वसनीय केंद्र",
  phone: "+919955550799",
  phoneDisplay: "+91 99555 50799",
  whatsappNumber: "919955550799",
  whatsappDisplay: "9955550799",
  email: "care.krishnamedical@gmail.com",
  address: {
    street: "Q2RC+P7Q, Lakhibag",
    streetHindi: "Q2RC+P7Q, लखीवाग",
    landmark: "Near Lakhibag More / Manpur Main Road",
    area: "Lakhibag, Manpur",
    city: "Manpur",
    district: "Gaya",
    state: "Bihar",
    pincode: "823003",
    plusCode: "Q2RC+P7Q Manpur, Bihar",
    fullAddress: "Q2RC+P7Q, Lakhibag, Manpur, Bihar 823003",
    fullAddressHindi: "Q2RC+P7Q, लखीवाग, मानपुर, बिहार 823003"
  },
  geo: {
    lat: 24.8052,
    lng: 85.0234
  },
  workingHours: {
    days: "Monday - Sunday (All 7 Days Open)",
    hours: "07:00 AM - 10:30 PM",
    emergency: "24/7 On-Call Emergency Medicine Support",
    openStatusText: "Open Today: 7:00 AM – 10:30 PM"
  },
  mapLinks: {
    // High accuracy embed for Manpur Lakhibag Gaya
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14460.556272533816!2d85.02102148715822!3d24.805221999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf526b7c4d5%3A0x6b63c224c6ef6e60!2sLakhibagh%2C%20Manpur%2C%20Bihar%20823003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Lakhibag+Manpur+Bihar+823003"
  },
  socials: {
    whatsapp: "https://wa.me/919955550799",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },
  pwa: {
    enabled: true,
    appName: "कृष्णा मेडिकल हॉल (Krishna Medical Hall)",
    shortName: "Krishna Medical",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};

export function generateWhatsAppOrderUrl(params: {
  customerName: string;
  phone: string;
  medicine: string;
  quantity?: string;
  address: string;
  prescription: "Yes" | "No";
  preferredTime?: string;
  notes?: string;
}): string {
  const text = 
`*Hello Krishna Medical Hall (कृष्णा मेडिकल हॉल)*
*Medicine Order & Inquiry*
━━━━━━━━━━━━━━━━━━━━
*Customer Name:* ${params.customerName || "N/A"}
*Phone:* ${params.phone || "N/A"}
*Medicine Required:* ${params.medicine || "N/A"}
*Quantity / Duration:* ${params.quantity || "As per prescription/need"}
*Delivery Address:* ${params.address || "Manpur / Local pickup"}
*Prescription Available:* ${params.prescription}
*Preferred Delivery Time:* ${params.preferredTime || "Standard Delivery"}
*Notes / Message:* ${params.notes || "Please check availability and confirm price."}
━━━━━━━━━━━━━━━━━━━━
Sent from Krishna Medical Hall Website`;

  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function generateQuickInquiryUrl(subject: string, message?: string): string {
  const text = `*Hello Krishna Medical Hall (कृष्णा मेडिकल हॉल)*\n*Inquiry:* ${subject}\n${message ? `*Details:* ${message}\n` : ''}Please assist me with medicine availability.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
