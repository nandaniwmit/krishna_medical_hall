import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck, 
  Clock, CheckCircle, Award, Truck, HeartPulse, Search, 
  HelpCircle, Sparkles, ChevronRight, Star, Mail, Check
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { SERVICES_DATA, REVIEWS_DATA, FAQ_DATA, HEALTH_TIPS_DATA } from "../data/siteData";
import medicineStockData from "../data/medicineStock.json";
import { MedicineItem } from "../types";

interface HomeProps {
  onOpenWhatsAppOrder: () => void;
  onSelectMedicineForOrder: (medName: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenWhatsAppOrder,
  onSelectMedicineForOrder
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const featuredMedicines = (medicineStockData as MedicineItem[]).slice(0, 6);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      {/* 1. HERO BANNER */}
      <section
        id="hero-banner"
        className="relative overflow-hidden bg-[#0A0A0A] pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-white/10"
      >
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#C4A484]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[#C4A484]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] text-[#C4A484] text-xs font-bold tracking-wider uppercase border border-[#C4A484]/30 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#C4A484]" />
                <span className="font-hindi">{BUSINESS_CONFIG.nameHindi} • लखीवाग, मानपुर</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#F2F2F2] tracking-tight leading-[1.15]">
                Your Trusted Medical Store for{" "}
                <span className="text-[#C4A484] italic">
                  Genuine Medicines
                </span>{" "}
                &amp; Healthcare Needs
              </h1>

              {/* Required Exact Description */}
              <p className="text-base sm:text-lg text-[#808080] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Action Buttons: Call Now, WhatsApp Order, Get Directions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                {/* Call Now */}
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  id="hero-call-btn"
                  className="px-5 py-3 rounded-xl bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 shadow-lg shadow-[#C4A484]/15"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: 9955550799</span>
                </a>

                {/* WhatsApp Order */}
                <button
                  onClick={onOpenWhatsAppOrder}
                  id="hero-whatsapp-btn"
                  className="px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#1C1C1C] border border-white/10 hover:border-[#C4A484]/50 text-[#F2F2F2] font-semibold text-xs uppercase tracking-wider transition flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C4A484]" />
                  <span>WhatsApp Order</span>
                </button>

                {/* Get Directions */}
                <a
                  href={BUSINESS_CONFIG.mapLinks.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-directions-btn"
                  className="px-4 py-3 rounded-xl bg-[#141414] hover:bg-[#1C1C1C] text-[#808080] hover:text-[#F2F2F2] font-semibold text-xs uppercase tracking-wider border border-white/10 transition flex items-center space-x-1.5"
                >
                  <MapPin className="w-4 h-4 text-[#C4A484]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
                <div>
                  <span className="block text-lg sm:text-xl font-bold font-serif text-[#F2F2F2]">
                    100%
                  </span>
                  <span className="text-xs text-[#808080]">
                    Genuine Batch Sourcing
                  </span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-bold font-serif text-[#F2F2F2]">
                    7 AM - 10:30 PM
                  </span>
                  <span className="text-xs text-[#808080]">
                    Open All 7 Days
                  </span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-bold font-serif text-[#F2F2F2]">
                    Manpur, Gaya
                  </span>
                  <span className="text-xs text-[#808080]">
                    Fast Doorstep Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card with Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
                  alt="Krishna Medical Hall Pharmacy Storefront"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>

                {/* Floating Overlay Badge 1 */}
                <div className="absolute top-4 left-4 p-3 bg-[#141414]/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#C4A484] animate-pulse"></span>
                    <span className="font-bold text-[#F2F2F2]">
                      Cold-Chain Protected
                    </span>
                  </div>
                  <p className="text-[10px] text-[#808080] mt-0.5">Insulin &amp; Vaccines at 2°C - 8°C</p>
                </div>

                {/* Floating Overlay Badge 2 */}
                <div className="absolute bottom-4 inset-x-4 p-4 bg-[#141414]/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#F2F2F2] font-hindi">
                        {BUSINESS_CONFIG.nameHindi}
                      </p>
                      <p className="text-[11px] text-[#808080]">
                        {BUSINESS_CONFIG.address.fullAddress}
                      </p>
                    </div>
                    <Link
                      to="/services"
                      className="px-3 py-1.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center space-x-1"
                    >
                      <span>Check Stock</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section id="about-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#C4A484] text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Krishna Medical Hall</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2]">
              Committed to Health, Authenticity &amp; Patient Trust in Manpur
            </h2>
            <p className="text-sm sm:text-base text-[#808080] leading-relaxed">
              Located at Lakhibag, Manpur, Bihar, <strong className="text-[#F2F2F2]">{BUSINESS_CONFIG.nameHindi}</strong> has been the benchmark for authentic medicine dispensing. We partner directly with licensed pharmaceutical houses to guarantee genuine batch expiry, climate-controlled storage for temperature-sensitive drugs, and personalized pharmacist counseling.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#F2F2F2]">
                <Check className="w-4 h-4 text-[#C4A484]" />
                <span>Zero Compromise on Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#F2F2F2]">
                <Check className="w-4 h-4 text-[#C4A484]" />
                <span>Expert Pharmacist Advice</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#F2F2F2]">
                <Check className="w-4 h-4 text-[#C4A484]" />
                <span>Doorstep Prescription Dispatch</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <Link
              to="/about"
              id="about-view-more-btn"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C4A484]/15 transition"
            >
              <span>View More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-[#808080] mt-2">
              Discover our story, mission &amp; values
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section id="featured-services-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <HeartPulse className="w-4 h-4" />
              <span>Comprehensive Pharmacy Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2]">
              Featured Healthcare Services
            </h2>
          </div>

          <Link
            to="/services"
            id="services-view-more-btn"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#C4A484] hover:text-[#D4B494] uppercase tracking-wider self-start sm:self-auto"
          >
            <span>View All Services &amp; Live Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#C4A484]/40 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#C4A484]/20 text-[#C4A484] flex items-center justify-center font-bold mb-4 group-hover:border-[#C4A484]/50 transition">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F2F2F2] group-hover:text-[#C4A484] transition">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#C4A484] font-hindi mt-0.5">
                  {srv.titleHindi}
                </p>
                <p className="text-xs sm:text-sm text-[#808080] mt-2.5 leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#808080]/70">
                  {srv.popularBrands.slice(0, 3).join(", ")}
                </span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#C4A484] inline-flex items-center space-x-1 group-hover:translate-x-1 transition uppercase tracking-wider"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section id="why-choose-us" className="bg-[#0E0E0E] text-[#F2F2F2] py-16 sm:py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              The Krishna Medical Hall Promise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 tracking-tight">
              Why Families in Manpur Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-[#808080] mt-2">
              We stand apart through strict authenticity standards, modern storage protocols, and respectful healthcare assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#F2F2F2]">100% Genuine Medicines</h3>
              <p className="text-xs text-[#808080] leading-relaxed">
                Direct procurement from authorized pharmaceutical manufacturers ensures zero counterfeit risks and valid batch codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#F2F2F2]">Precision Cold Storage</h3>
              <p className="text-xs text-[#808080] leading-relaxed">
                24/7 uninterrupted temperature-monitored medical refrigerators for insulin, vaccines, eye drops, and delicate syrups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#F2F2F2]">Fast WhatsApp Delivery</h3>
              <p className="text-xs text-[#808080] leading-relaxed">
                Send your prescription image on 9955550799 and get required medicines packed and delivered swiftly to your home in Manpur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#F2F2F2]">Extended Hours &amp; Helpline</h3>
              <p className="text-xs text-[#808080] leading-relaxed">
                Open from 7:00 AM to 10:30 PM every single day, with dedicated on-call emergency medicine support for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section id="featured-products-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              Popular Daily Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2] mt-1">
              Featured Medicine &amp; Health Products
            </h2>
          </div>

          <Link
            to="/services"
            id="products-view-stock-btn"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#C4A484] hover:text-[#D4B494] uppercase tracking-wider"
          >
            <span>Search 40+ Medicines in Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredMedicines.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C4A484]/40 shadow-sm flex flex-col justify-between transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4A484] bg-[#1A1A1A] px-2 py-0.5 rounded border border-white/5">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#808080]">
                    {item.brand}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#F2F2F2]">
                  {item.name}
                </h3>
                <p className="text-xs text-[#808080] mt-1 line-clamp-1">
                  Salt: {item.composition}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-[#808080]">
                  <span>Form: {item.dosageForm}</span>
                  <span className="text-[#C4A484] font-semibold">{item.status}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#808080] block uppercase tracking-wider">MRP</span>
                  <span className="text-base font-bold text-[#F2F2F2]">
                    ₹{item.mrp.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => onSelectMedicineForOrder(item.name)}
                  className="px-3 py-1.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition flex items-center space-x-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section id="reviews-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] rounded-3xl p-6 sm:p-10 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center space-x-1 text-[#C4A484] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-[#F2F2F2] ml-1">
                  5.0 / 5.0 Rating
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2]">
                What Customers Say About Us
              </h2>
            </div>

            <Link
              to="/about"
              id="reviews-view-more-btn"
              className="text-xs font-bold text-[#C4A484] hover:text-[#D4B494] uppercase tracking-wider inline-flex items-center space-x-1"
            >
              <span>Read Full History &amp; Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#F2F2F2]">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#808080]">{rev.location}</p>
                  </div>
                  <span className="text-[11px] text-[#C4A484] font-semibold bg-[#141414] border border-[#C4A484]/30 px-2 py-0.5 rounded">
                    Verified Customer
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#808080] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
                {rev.commentHindi && (
                  <p className="text-xs text-[#808080]/70 font-hindi pt-1">
                    {rev.commentHindi}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section id="faq-preview" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.slice(0, 3).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-[#141414] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#F2F2F2] hover:text-[#C4A484] transition"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#808080] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-90 text-[#C4A484]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#808080] leading-relaxed border-t border-white/5 pt-3">
                    <p>{faq.answer}</p>
                    {faq.questionHindi && (
                      <p className="mt-2 text-xs text-[#808080]/70 font-hindi">
                        {faq.questionHindi}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/contact"
            id="faq-view-more-btn"
            className="text-xs sm:text-sm font-bold text-[#C4A484] hover:text-[#D4B494] uppercase tracking-wider inline-flex items-center space-x-1"
          >
            <span>Have more questions? Visit Contact &amp; Inquiry page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section id="health-tips-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              Wellness &amp; Prevention
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2] mt-1">
              Latest Health Advice &amp; Tips
            </h2>
          </div>

          <Link
            to="/about"
            className="text-xs font-bold text-[#C4A484] hover:text-[#D4B494] uppercase tracking-wider inline-flex items-center space-x-1"
          >
            <span>View All Health Tips</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS_DATA.map((tip) => (
            <div
              key={tip.id}
              className="p-6 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#C4A484]/40 shadow-sm flex flex-col justify-between transition"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#808080] mb-3">
                  <span className="font-semibold text-[#C4A484]">
                    {tip.category}
                  </span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#F2F2F2]">
                  {tip.title}
                </h3>
                <p className="text-xs font-hindi text-[#808080] mt-1">
                  {tip.titleHindi}
                </p>
                <p className="text-xs sm:text-sm text-[#808080] mt-3 leading-relaxed">
                  {tip.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5">
                <ul className="space-y-1.5 text-xs text-[#808080]">
                  {tip.tips.slice(0, 2).map((t, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#C4A484] font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section id="cta-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-white/10 text-[#F2F2F2] p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 bg-[#1A1A1A] border border-[#C4A484]/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              Instant Medicine Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight">
              Need Medicines Delivered at Home in Manpur?
            </h2>
            <p className="text-sm sm:text-base text-[#808080] leading-relaxed">
              Simply photograph your doctor&apos;s prescription or send us your medicine list via WhatsApp. Our team will verify and dispatch immediately.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenWhatsAppOrder}
                className="px-6 py-3.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] rounded-2xl font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp (9955550799)</span>
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="px-5 py-3.5 bg-[#1A1A1A] hover:bg-[#222] text-[#F2F2F2] rounded-2xl font-semibold text-xs uppercase tracking-wider border border-white/10 transition flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#C4A484]" />
                <span>Call Store Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section id="newsletter-section" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] mx-auto flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F2F2F2]">
            Subscribe for Monthly Health Tips &amp; Vaccine Alerts
          </h3>
          <p className="text-xs sm:text-sm text-[#808080] max-w-md mx-auto">
            Get seasonal healthcare advice, medicine availability notices, and diabetes care tips delivered directly to your inbox.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-sm"
            >
              Subscribe
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-[#C4A484] font-semibold pt-1">
              ✓ Thank you for subscribing to Krishna Medical Hall health updates!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
