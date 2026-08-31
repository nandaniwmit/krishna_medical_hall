import React from "react";
import { Share, PlusSquare, CheckCircle, X, Smartphone } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="ios-pwa-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="ios-pwa-modal-content"
        className="relative w-full max-w-md bg-[#141414] rounded-2xl shadow-2xl p-6 border border-white/10 text-[#F2F2F2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="ios-pwa-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#808080] hover:text-[#F2F2F2] rounded-full hover:bg-white/5 transition"
          aria-label="Close Install Guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 flex items-center justify-center text-[#C4A484]">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-snug font-hindi text-[#F2F2F2]">{BUSINESS_CONFIG.nameHindi}</h3>
            <p className="text-xs text-[#808080] uppercase tracking-wider">Add to Home Screen as App</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#808080] mb-5 leading-relaxed">
          Install the official {BUSINESS_CONFIG.name} app on your iPhone / iPad for instant medicine stock search and direct WhatsApp ordering:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3 p-3 bg-[#0A0A0A] rounded-xl border border-white/5">
            <div className="p-2 bg-[#1A1A1A] text-[#C4A484] rounded-lg shrink-0 mt-0.5 border border-white/5">
              <Share className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#F2F2F2]">1. Tap the Share button</p>
              <p className="text-xs text-[#808080]">Found in Safari browser's bottom navigation bar.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-[#0A0A0A] rounded-xl border border-white/5">
            <div className="p-2 bg-[#1A1A1A] text-[#C4A484] rounded-lg shrink-0 mt-0.5 border border-white/5">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#F2F2F2]">2. Select &quot;Add to Home Screen&quot;</p>
              <p className="text-xs text-[#808080]">Scroll down the share sheet options and tap it.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-[#0A0A0A] rounded-xl border border-white/5">
            <div className="p-2 bg-[#1A1A1A] text-[#C4A484] rounded-lg shrink-0 mt-0.5 border border-white/5">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#F2F2F2]">3. Tap &quot;Add&quot; in top right</p>
              <p className="text-xs text-[#808080]">The app icon will now appear directly on your home screen!</p>
            </div>
          </div>
        </div>

        <button
          id="ios-pwa-got-it-btn"
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-[#C4A484] hover:bg-[#D4B494] active:scale-98 text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition duration-150 shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
