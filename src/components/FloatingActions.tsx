import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp, ShoppingBag } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-[#141414] text-[#F2F2F2] shadow-2xl border border-white/10 hover:border-[#C4A484]/50 hover:bg-[#1C1C1C] transition transform hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#C4A484]" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_CONFIG.phone}`}
        id="floating-call-btn"
        aria-label="Call Store Helpline"
        className="pointer-events-auto p-3 rounded-full bg-[#141414] text-[#F2F2F2] border border-white/10 hover:border-[#C4A484]/50 hover:bg-[#1C1C1C] shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center group"
      >
        <Phone className="w-5 h-5 text-[#C4A484] group-hover:rotate-12 transition" />
      </a>

      {/* Floating WhatsApp Quick Order Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onOpenOrderModal}
        aria-label="WhatsApp Medicine Order"
        className="pointer-events-auto relative group flex items-center space-x-2 pl-3.5 pr-4 py-3 rounded-full bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] shadow-2xl transition transform hover:-translate-y-1"
      >
        <span className="absolute -top-1.5 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-[#0A0A0A]"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current text-[#0A0A0A]" />
        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase hidden sm:inline text-[#0A0A0A]">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
};
