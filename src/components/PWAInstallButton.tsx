import React from "react";
import { Download, Smartphone, Check } from "lucide-react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { IOSInstallGuide } from "./IOSInstallGuide";

interface PWAInstallButtonProps {
  className?: string;
  variant?: "nav" | "banner" | "mobile";
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = "",
  variant = "nav"
}) => {
  const {
    isInstallable,
    isInstalled,
    showIOSModal,
    setShowIOSModal,
    triggerInstall,
    installedSuccess
  } = usePWAInstall();

  // If already installed and running in standalone, we can either hide or show a subtle status
  if (isInstalled && !installedSuccess) {
    return null;
  }

  if (installedSuccess) {
    return (
      <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#141414] text-[#C4A484] text-xs font-semibold rounded-xl border border-[#C4A484]/30">
        <Check className="w-3.5 h-3.5" />
        <span>App Installed</span>
      </div>
    );
  }

  return (
    <>
      <button
        id="pwa-add-to-home-btn"
        onClick={triggerInstall}
        aria-label="📲 Add to Home Screen"
        className={`group relative inline-flex items-center justify-center font-medium transition-all duration-200 ${
          variant === "nav"
            ? "px-3.5 py-1.5 text-xs rounded-xl bg-[#141414] hover:bg-[#1C1C1C] border border-white/10 hover:border-[#C4A484]/50 active:scale-95 text-[#F2F2F2] shadow-sm"
            : variant === "banner"
            ? "px-4 py-2 text-xs uppercase tracking-wider rounded-xl bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] shadow-md font-bold"
            : "w-full py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#1C1C1C] text-[#F2F2F2] text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 border border-white/10"
        } ${className}`}
      >
        <span className="mr-1.5 text-sm leading-none select-none">📲</span>
        <span className="whitespace-nowrap font-medium tracking-wide">Add to Home</span>
      </button>

      <IOSInstallGuide
        isOpen={showIOSModal}
        onClose={() => setShowIOSModal(false)}
      />
    </>
  );
};
