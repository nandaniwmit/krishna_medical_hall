import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Award, ArrowUpRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // STEP 11 — GLOBAL TRACKING (MANDATORY INTEGRATION)
  useEffect(() => {
    const TRACKING_ENDPOINT = "https://crm.webmakerit.com/tracker/track.php";
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get("cid") || localStorage.getItem("wmit_active_cid");
    if (urlParams.get("cid")) {
      localStorage.setItem("wmit_active_cid", urlParams.get("cid") as string);
    }
    if (!cid) return;

    let visitorId =
      localStorage.getItem("wmit_visitor_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("wmit_visitor_id", visitorId);

    let sessionId =
      sessionStorage.getItem("wmit_session_id") ||
      "wmit_" + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("wmit_session_id", sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split("?")[0] : "Home";
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || "",
        device: window.innerWidth < 768 ? "Mobile" : "Desktop",
        browser: navigator.userAgent,
        action: "init"
      };
      fetch(TRACKING_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: "page_change"
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json"
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ["mousemove", "keydown", "scroll", "touchstart"];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer(); // Initialize idle timer

    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener("popstate", handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendExitPayload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", sendExitPayload);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] text-[#808080] pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#C4A484]/40 flex items-center justify-center text-[#C4A484] font-serif font-bold text-xl shadow-lg">
                +
              </div>
              <div>
                <span className="text-xl font-bold text-[#F2F2F2] tracking-tight block font-hindi">
                  {BUSINESS_CONFIG.nameHindi}
                </span>
                <span className="text-xs text-[#C4A484] font-medium tracking-[0.2em] uppercase">
                  {BUSINESS_CONFIG.name}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#808080] leading-relaxed">
              {BUSINESS_CONFIG.tagline}
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#808080] bg-[#141414] p-3 rounded-xl border border-white/5">
              <Award className="w-4 h-4 text-[#C4A484] shrink-0" />
              <span>100% Genuine Medicines • Cold-Chain Storage</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>About Our Pharmacy</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>Services &amp; Medicine Stock</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>Store Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>Contact &amp; Directions</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-[#808080] hover:text-[#F2F2F2] transition flex items-center space-x-1.5">
                  <span>Customer &amp; Staff Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Emergency */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4">
              Store Timings
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#C4A484] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#F2F2F2] font-medium block">All 7 Days Open</span>
                  <span className="text-xs text-[#808080]">07:00 AM – 10:30 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C4A484] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#F2F2F2] font-medium block">Emergency Helpline</span>
                  <span className="text-xs text-[#808080]">{BUSINESS_CONFIG.phoneDisplay}</span>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hello%20Krishna%20Medical%20Hall%20Lakhibag`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#C4A484] hover:text-[#D4B494] bg-[#141414] border border-[#C4A484]/30 px-3 py-2 rounded-xl transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Map Directions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A484] mb-4">
              Our Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C4A484] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#F2F2F2] font-medium block font-hindi">
                    {BUSINESS_CONFIG.address.fullAddressHindi}
                  </span>
                  <span className="text-xs text-[#808080] block mt-0.5">
                    {BUSINESS_CONFIG.address.fullAddress}
                  </span>
                  <span className="text-[11px] text-[#C4A484]/90 block mt-0.5 font-mono">
                    Plus Code: {BUSINESS_CONFIG.address.plusCode}
                  </span>
                </div>
              </div>

              <a
                href={BUSINESS_CONFIG.mapLinks.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#F2F2F2] bg-[#141414] hover:bg-[#1A1A1A] px-3 py-2 rounded-xl border border-white/10 transition"
              >
                <span>Get Google Map Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C4A484]" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#808080] border-b border-white/5">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#C4A484] transition"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-[#C4A484] transition"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span className="text-[#808080]/70">
              Disclaimer: Prescription mandatory for Scheduled drugs
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[#808080]">
            <Phone className="w-3.5 h-3.5 text-[#C4A484]" />
            <span>Support: {BUSINESS_CONFIG.phoneDisplay}</span>
          </div>
        </div>

        {/* STEP 12 MANDATORY COPYRIGHT LINE WITH EXACT POPUP TRIGGER ANCHOR */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#808080]">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.nameHindi} ({BUSINESS_CONFIG.name}). All rights reserved.
          </p>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY: */}
          <div className="text-center">
            <a href="#" className="wmit-popup-trigger text-[#C4A484] hover:text-[#D4B494] font-medium underline underline-offset-4 decoration-[#C4A484]/40 transition">Developed by WMIT</a>
          </div>

          <p className="text-center md:text-right text-[#808080]/60">
            Lakhibag, Manpur, Bihar 823003
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/10 text-[#F2F2F2] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-[#F2F2F2]">Privacy Policy</h3>
            <p className="text-xs text-[#808080] leading-relaxed">
              At Krishna Medical Hall, customer confidentiality is our highest priority. Any prescription files, phone numbers, or delivery addresses shared via WhatsApp or web forms are solely used for medicine dispensation and verification in compliance with Pharmacy Council regulations. We never sell or share patient data.
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/10 text-[#F2F2F2] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-[#F2F2F2]">Terms of Service</h3>
            <p className="text-xs text-[#808080] leading-relaxed">
              1. All prescription medicines require a verified doctor&apos;s prescription.<br />
              2. Delivery timelines are subject to stock availability and local weather in Manpur.<br />
              3. Returns or exchanges of opened medical bottles/sealed strips are subject to Drug Act rules.
            </p>
            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full py-2.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
