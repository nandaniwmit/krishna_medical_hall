import { ServiceCategory, GalleryItem, ReviewItem, FaqItem, HealthTipItem } from "../types";

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    titleHindi: "डॉक्टर द्वारा पर्ची की दवाइयां",
    iconName: "FileText",
    shortDesc: "100% genuine allopathic medicines directly sourced from authorized pharmaceutical distributors.",
    fullDesc: "We stock authentic branded and generic prescription drugs for cardiac, hypertension, diabetes, neurology, gastro, orthopedic, and respiratory health with strict temperature-controlled storage.",
    features: [
      "Authentic batch & expiry guarantee",
      "Temperature-controlled refrigerated storage for insulin and vaccines",
      "Experienced pharmacist prescription review",
      "Doorstep delivery in Manpur & surrounding areas"
    ],
    popularBrands: ["Cipla", "Sun Pharma", "Torrent", "Abbott", "Glenmark", "Alkem", "GSK"],
    ctaText: "Order Prescription Medicine"
  },
  {
    id: "otc-medicines",
    title: "OTC Daily Essentials & First Aid",
    titleHindi: "दैनिक प्राथमिक चिकित्सा व ओटीसी",
    iconName: "HeartPulse",
    shortDesc: "Pain relief, fever relievers, digestive care, cold & cough remedies, antiseptics, and burn relief.",
    fullDesc: "Instant access to everyday over-the-counter medical solutions, emergency bandages, antiseptic liquids, rehydration salts, pain balms, and digestive syrups.",
    features: [
      "Immediate walk-in purchase without long wait",
      "First aid kit supplies & refill packs",
      "Wide selection of digestive & pain relief formulas",
      "Guidance on appropriate dosage & usage"
    ],
    popularBrands: ["Dolo", "Vicks", "Betadine", "Volini", "Electral", "Digene", "Moov"],
    ctaText: "Browse OTC Items"
  },
  {
    id: "health-devices",
    title: "Health & Diagnostic Devices",
    titleHindi: "डिजिटल स्वास्थ्य व जांच उपकरण",
    iconName: "Activity",
    shortDesc: "Digital BP monitors, glucometers, mesh nebulizers, pulse oximeters, and digital thermometers.",
    fullDesc: "Equip your home with accurate, certified diagnostic tools from trusted clinical brands. We provide live operational demonstrations and warranty support.",
    features: [
      "Omron & Dr. Morepen digital BP apparatus",
      "Accu-Chek & OneTouch blood glucose meters & strips",
      "Adult & pediatric mesh/compressor nebulizers",
      "Steam inhalers & hot water bags"
    ],
    popularBrands: ["Omron", "Roche Accu-Chek", "Dr. Morepen", "BPL Medical", "Beurer"],
    ctaText: "Check Device Stock"
  },
  {
    id: "baby-mother-care",
    title: "Baby & Mother Care Essentials",
    titleHindi: "शिशु व मातृत्व देखभाल",
    iconName: "Baby",
    shortDesc: "Infant milk formula, nutritional cereals, baby wipes, gentle lotions, massage oils, and feeding care.",
    fullDesc: "Top-tier pediatric nutritional products, baby skincare, hygienic diapers, gripe water, teething essentials, and maternity supplements.",
    features: [
      "Nestle Cerelac, Lactogen & Nan Pro formulas",
      "Himalaya & Sebamed gentle baby skincare",
      "Premium diapers & organic wet wipes",
      "Maternal nutritional drinks & prenatal vitamins"
    ],
    popularBrands: ["Nestle", "Himalaya Baby", "Johnson's", "Pampers", "MamyPoko", "Dexolac"],
    ctaText: "Explore Baby Care"
  },
  {
    id: "ayurvedic-wellness",
    title: "Ayurvedic & Herbal Wellness",
    titleHindi: "आयुर्वेदिक व प्राकृतिक जड़ी-बूटी उत्पाद",
    iconName: "Leaf",
    shortDesc: "Time-tested herbal tonics, immunity boosters, Chyawanprash, liver care, and herbal oils.",
    fullDesc: "Pure herbal and ayurvedic preparations from certified Ayurvedic pharmacies to strengthen natural immunity, support digestion, and relieve joint stiffness.",
    features: [
      "Authentic Dabur, Baidyanath & Patanjali formulations",
      "Herbal syrups for cough, liver care, and digestion",
      "Chyawanprash, Ashwagandha & Giloy capsules",
      "Ayurvedic pain relief oils & kadhas"
    ],
    popularBrands: ["Dabur", "Baidyanath", "Himalaya", "Patanjali", "Zandu"],
    ctaText: "View Ayurvedic Products"
  },
  {
    id: "surgical-home-care",
    title: "Surgical Supplies & Home Healthcare",
    titleHindi: "सर्जिकल सामान व होम केयर",
    iconName: "Stethoscope",
    shortDesc: "Sterile gauze, surgical tape, crepe bandages, adult diapers, IV sets, syringes, and wound dressings.",
    fullDesc: "Comprehensive surgical disposables and patient care items for post-operative recovery, elder care, chronic wound management, and home nursing.",
    features: [
      "Sterile disposable syringes, needles & cannulas",
      "Orthopedic supports, knee braces & cervical collars",
      "High-absorbency adult diapers & bed underpads",
      "Surgical cotton, gauze rolls & micropore tapes"
    ],
    popularBrands: ["Romsons", "Dyna", "Flamingo", "Friends", "3M", "Nirlife"],
    ctaText: "Order Surgical Supplies"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Krishna Medical Hall Storefront",
    titleHindi: "दुकान का मुख्य प्रवेश द्वार",
    category: "store",
    categoryLabel: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    description: "Prominent location in Lakhibag, Manpur with clean, illuminated signage and convenient parking.",
    tag: "Store Entrance"
  },
  {
    id: "gal-2",
    title: "Organized Medicine Dispensary Shelves",
    titleHindi: "व्यवस्थित दवाइयों की रैक",
    category: "shelves",
    categoryLabel: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    description: "Systematically categorized inventory ensuring fast dispensing and strict expiry control.",
    tag: "Organized Shelves"
  },
  {
    id: "gal-3",
    title: "Digital BP & Healthcare Diagnostics Display",
    titleHindi: "डिजिटल बीपी व शुगर जांच उपकरण",
    category: "devices",
    categoryLabel: "Health Devices",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "Omron, Accu-Chek and Dr. Morepen certified blood pressure and glucose monitoring units.",
    tag: "Medical Devices"
  },
  {
    id: "gal-4",
    title: "Baby Nutrition & Hygiene Counter",
    titleHindi: "शिशु आहार व पोषण काउंटर",
    category: "baby-care",
    categoryLabel: "Baby Care",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    description: "Wide assortment of baby cereals, formulas, baby diapers and pediatrician-recommended wipes.",
    tag: "Baby Essentials"
  },
  {
    id: "gal-5",
    title: "Temperature Controlled Storage",
    titleHindi: "तापमान नियंत्रित कोल्ड स्टोरेज",
    category: "shelves",
    categoryLabel: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    description: "Dedicated medical refrigeration maintaining 2°C to 8°C for insulin, biologics, and eye drops.",
    tag: "Cold Chain Storage"
  },
  {
    id: "gal-6",
    title: "Ayurvedic Tonics & Herbal Supplements",
    titleHindi: "आयुर्वेदिक टॉनिक एवं सप्लीमेंट्स",
    category: "ayurvedic",
    categoryLabel: "Ayurvedic Care",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description: "Natural herbal remedies, Chyawanprash, liver health supplements and pain management balms.",
    tag: "Ayurvedic Remedies"
  },
  {
    id: "gal-7",
    title: "Orthopedic Belts, Collars & First Aid",
    titleHindi: "ऑर्थोपेडिक बेल्ट व पट्टी सहायता",
    category: "devices",
    categoryLabel: "Health Devices",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80",
    description: "Lumbo-sacral belts, knee braces, walker aids, crepe bandages and emergency wound care kits.",
    tag: "Orthopedic & Support"
  },
  {
    id: "gal-8",
    title: "Prescription Verification Counter",
    titleHindi: "पर्ची जांच व वितरण काउंटर",
    category: "store",
    categoryLabel: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
    description: "Friendly pharmacists double-checking dosages, expiration dates, and advising patients accurately.",
    tag: "Pharmacist Desk"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rajesh Kumar Sharma",
    location: "Manpur, Gaya",
    rating: 5,
    date: "10 days ago",
    comment: "Very dependable medical store in Lakhibag. All cardiac and BP medicines for my parents are always in stock. The staff is polite, and WhatsApp delivery was at my doorstep within 40 minutes.",
    commentHindi: "लखीवाग में बहुत ही भरोसेमंद मेडिकल स्टोर। माता-पिता की बीपी की सारी दवाइयां हमेशा मिल जाती हैं।",
    verifiedPurchase: true
  },
  {
    id: "rev-2",
    author: "Pooja Kumari",
    location: "Lakhibag More, Manpur",
    rating: 5,
    date: "3 weeks ago",
    comment: "I regularly purchase baby formula and diapers here. Genuine products with valid batch bills and fair pricing. The digital stock checker is super helpful before visiting!",
    commentHindi: "बेबी केयर और दवाइयों के लिए सबसे अच्छी दुकान। रेट भी बहुत सही है।",
    verifiedPurchase: true
  },
  {
    id: "rev-3",
    author: "Dr. Arvind Pathak",
    location: "Gaya Road, Manpur",
    rating: 5,
    date: "1 month ago",
    comment: "One of the few pharmacies in the area maintaining strict cold-chain refrigeration for insulin and eye drops. High ethics and 100% genuine pharmaceutical sourcing.",
    commentHindi: "दवाइयों की गुणवत्ता और कोल्ड-चेन स्टोरेज का पूरा ध्यान रखते हैं।",
    verifiedPurchase: true
  },
  {
    id: "rev-4",
    author: "Manoj Singh",
    location: "Manpur Bazar",
    rating: 5,
    date: "1 month ago",
    comment: "Instant response on WhatsApp. I sent my prescription photo and received exact medicine without having to wait in crowd. Thank you Krishna Medical Hall!",
    commentHindi: "व्हाट्सएप पर पर्ची भेजने पर तुरंत रिस्पांस और होम डिलीवरी की सुविधा बहुत बढ़िया है।",
    verifiedPurchase: true
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you provide home delivery in Manpur and surrounding areas?",
    questionHindi: "क्या आप मानपुर और आसपास के क्षेत्रों में होम डिलीवरी प्रदान करते हैं?",
    answer: "Yes! You can easily order via WhatsApp (9955550799) or our online WhatsApp Order Form. Send your medicine list or prescription photo, and our team will confirm availability and deliver promptly to your doorstep.",
    category: "Delivery"
  },
  {
    id: "faq-2",
    question: "Are all medicines 100% genuine and original?",
    questionHindi: "क्या सभी दवाइयां 100% असली और ओरिजिनल हैं?",
    answer: "Absolutely. We procure all pharmaceuticals, baby care goods, and medical devices directly from licensed C&F agents and certified corporate distributors. Every medicine is stored under climate-controlled conditions with batch tracking.",
    category: "Quality"
  },
  {
    id: "faq-3",
    question: "Can I buy prescription-only medicines without a doctor's prescription?",
    questionHindi: "क्या बिना डॉक्टर के पर्चे के शेड्यूल ड्रग्स मिल सकती हैं?",
    answer: "For Schedule H, H1, and X medicines, a valid prescription from a registered medical practitioner (RMP) is mandatory as per Drug and Cosmetics Act guidelines. You can easily upload/photograph your prescription when ordering.",
    category: "Prescription"
  },
  {
    id: "faq-4",
    question: "What are your store operating hours?",
    questionHindi: "दुकान खुलने और बंद होने का समय क्या है?",
    answer: "We are open all 7 days from 7:00 AM in the morning to 10:30 PM at night. For urgent late-night medical requirements, our emergency helpline on +91 9955550799 is accessible.",
    category: "Timings"
  },
  {
    id: "faq-5",
    question: "Which payment methods are accepted at Krishna Medical Hall?",
    questionHindi: "भुगतान के कौन-कौन से माध्यम स्वीकार किए जाते हैं?",
    answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), all major Debit/Credit Cards, and Net Banking for deliveries and in-store purchases.",
    category: "Payment"
  },
  {
    id: "faq-6",
    question: "Do you sell medical devices like BP monitors and Nebulizers with warranty?",
    questionHindi: "क्या बीपी मशीन और नेबुलाइजर पर वारंटी मिलती है?",
    answer: "Yes, all medical equipment (Omron, Dr. Morepen, Accu-Chek) comes with manufacturer warranty cards, original tax invoices, and a live demonstration by our knowledgeable staff.",
    category: "Devices"
  }
];

export const HEALTH_TIPS_DATA: HealthTipItem[] = [
  {
    id: "tip-1",
    title: "Proper Storage Guidelines for Insulin & Eye Drops",
    titleHindi: "इंसुलिन और आई ड्रॉप्स को सुरक्षित रखने के नियम",
    category: "Medicine Care",
    readTime: "3 min read",
    date: "Aug 2026",
    summary: "Maintaining the correct cold chain temperature is vital for biological medicines and eye suspensions.",
    tips: [
      "Keep unopened insulin vials between 2°C to 8°C in your refrigerator door shelf (never in the freezer).",
      "Do not use eye drops after 30 days of breaking the original seal.",
      "Protect light-sensitive capsules and syrups from direct sun exposure."
    ],
    icon: "ThermometerSnowflake"
  },
  {
    id: "tip-2",
    title: "Managing Blood Pressure at Home: Best Practices",
    titleHindi: "घर पर सही ब्लड प्रेशर नापने के आसान तरीके",
    category: "Chronic Wellness",
    readTime: "4 min read",
    date: "Aug 2026",
    summary: "Accurate digital BP measurements require correct posture, cuff positioning, and calm breathing.",
    tips: [
      "Rest quietly for 5 minutes before strapping the arm cuff.",
      "Place the cuff at heart level without thick clothing underneath.",
      "Avoid caffeinated tea/coffee or smoking 30 minutes prior to measurement."
    ],
    icon: "Heart"
  },
  {
    id: "tip-3",
    title: "First Aid Kit Essentials Every Household Must Keep",
    titleHindi: "हर घर में आवश्यक फर्स्ट एड किट सामग्री",
    category: "First Aid",
    readTime: "3 min read",
    date: "Aug 2026",
    summary: "Be prepared for minor household injuries, sudden seasonal fever, and common stomach distress.",
    tips: [
      "Keep digital thermometer, antiseptic lotion (Betadine), cotton, and sterile adhesive bandages.",
      "Include ORS electrolyte sachets for quick dehydration relief during warm days.",
      "Check expiration dates every 6 months and replace exhausted strips."
    ],
    icon: "ShieldAlert"
  }
];

export const TIMELINE_DATA = [
  {
    year: "Establishment",
    title: "Founded in Lakhibag, Manpur",
    desc: "Started with a vision to make 100% genuine pharmaceutical supplies easily accessible to families in Manpur and Gaya district."
  },
  {
    year: "Expansion",
    title: "Advanced Cold-Chain & Diagnostic Gear",
    desc: "Upgraded facility with high-grade medical refrigeration for insulin/vaccines and a dedicated diagnostic testing counter."
  },
  {
    year: "Digital Era",
    title: "WhatsApp Ordering & PWA Launch",
    desc: "Introduced digital inventory stock checker and rapid WhatsApp prescription order dispatch for convenient local delivery."
  },
  {
    year: "Today",
    title: "Trusted Healthcare Partner",
    desc: "Serving thousands of recurring patients with authentic medicine inventory, surgical goods, and trusted patient care."
  }
];
