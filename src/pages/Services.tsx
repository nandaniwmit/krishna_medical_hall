import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, HeartPulse, Activity, Baby, Leaf, Stethoscope, 
  Check, ArrowRight, ShieldCheck, ShoppingBag, Sparkles, MessageSquare 
} from "lucide-react";
import { SERVICES_DATA } from "../data/siteData";
import { MedicineStockChecker } from "../components/MedicineStockChecker";
import { BUSINESS_CONFIG } from "../config/businessConfig";

interface ServicesProps {
  onOpenWhatsAppOrder: () => void;
  onSelectMedicineForOrder: (medName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenWhatsAppOrder,
  onSelectMedicineForOrder
}) => {
  return (
    <div id="services-page" className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#C4A484]/30 text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Range Pharmaceutical &amp; Healthcare Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2F2F2] tracking-tight">
          Our Services &amp; Medical Supplies
        </h1>
        <p className="text-base sm:text-lg text-[#808080] max-w-3xl mx-auto leading-relaxed font-light">
          From verified doctor&apos;s prescription dispensing and digital BP monitors to pediatric nutrition and emergency first aid supplies in Manpur, Bihar.
        </p>
      </section>

      {/* 2. EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section id="stock-checker" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
            Interactive Digital Dispensary
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F2F2F2] mt-0.5">
            Search Medicine Inventory &amp; Stock Status
          </h2>
        </div>

        <MedicineStockChecker onSelectForOrder={onSelectMedicineForOrder} />
      </section>

      {/* 3. CATEGORY-WISE SERVICES BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
            Specialized Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2] mt-1">
            Complete Pharmacy Offerings
          </h2>
          <p className="text-xs sm:text-sm text-[#808080] mt-1">
            Carefully curated, temperature-controlled, and authentic healthcare categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-6 sm:p-7 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#C4A484]/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center font-bold mb-4">
                  {service.id === "prescription-medicines" && <FileText className="w-6 h-6" />}
                  {service.id === "otc-medicines" && <HeartPulse className="w-6 h-6" />}
                  {service.id === "health-devices" && <Activity className="w-6 h-6" />}
                  {service.id === "baby-mother-care" && <Baby className="w-6 h-6" />}
                  {service.id === "ayurvedic-wellness" && <Leaf className="w-6 h-6" />}
                  {service.id === "surgical-home-care" && <Stethoscope className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#F2F2F2]">
                  {service.title}
                </h3>
                <p className="text-xs font-hindi text-[#C4A484] font-semibold mt-0.5">
                  {service.titleHindi}
                </p>

                <p className="text-xs sm:text-sm text-[#808080] mt-3 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Key Features List */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#808080] block">
                    Key Highlights
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#808080]">
                      <Check className="w-3.5 h-3.5 text-[#C4A484] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Available Brands */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#808080] block mb-1">
                    Featured Brands
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.popularBrands.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#0A0A0A] border border-white/5 text-[#808080] font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => onSelectMedicineForOrder(`Inquiry for ${service.title}`)}
                  className="w-full py-2.5 px-4 bg-[#1A1A1A] hover:bg-[#C4A484] text-[#C4A484] hover:text-[#0A0A0A] border border-[#C4A484]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition duration-150 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{service.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOME CARE & SURGICAL RENTAL GUIDELINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] text-[#F2F2F2] rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484]">
              Elderly &amp; Post-Surgical Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Home Healthcare, Adult Diapers &amp; Orthopedic Aids
            </h2>
            <p className="text-xs sm:text-sm text-[#808080] leading-relaxed">
              We provide complete care kits for bedridden patients, chronic wound dressings, cervical collars, knee braces, walker support, and high-absorbency adult diapers with discreet home delivery.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={onOpenWhatsAppOrder}
              className="px-5 py-3 rounded-xl bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-lg shadow-[#C4A484]/15"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Supplies Order</span>
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-5 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#222] text-[#F2F2F2] font-semibold text-xs uppercase tracking-wider border border-white/10 transition flex items-center justify-center space-x-2"
            >
              <span>Call Helpline: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
