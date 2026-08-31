import React, { useState } from "react";
import { 
  Phone, MessageSquare, MapPin, Mail, Clock, Send, 
  CheckCircle, Sparkles, Navigation, AlertCircle, Compass 
} from "lucide-react";
import { BUSINESS_CONFIG, generateQuickInquiryUrl } from "../config/businessConfig";

interface ContactProps {
  onOpenWhatsAppOrder: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppOrder }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Medicine Availability Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formState.phone.trim() || formState.phone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Also trigger prefilled WhatsApp link for direct instant assistance
    const waUrl = generateQuickInquiryUrl(
      `${formState.subject} (From: ${formState.name}, Phone: ${formState.phone})`,
      formState.message
    );
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="contact-page" className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#C4A484]/30 text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>We Are Here to Help You</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2F2F2] tracking-tight">
          Contact &amp; Visit <span className="font-hindi">{BUSINESS_CONFIG.nameHindi}</span>
        </h1>
        <p className="text-base sm:text-lg text-[#808080] max-w-2xl mx-auto leading-relaxed font-light">
          Reach out for prescription medicine availability, home delivery in Manpur, emergency medicines, or surgical supplies.
        </p>
      </section>

      {/* 2. DIRECT ACTION BUTTONS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            id="contact-call-btn"
            className="p-5 rounded-2xl bg-[#141414] hover:bg-[#1C1C1C] border border-white/10 hover:border-[#C4A484]/40 text-[#F2F2F2] transition flex items-center justify-between shadow-md group"
          >
            <div>
              <span className="text-xs text-[#808080] uppercase font-bold tracking-wider block">
                Direct Phone Call
              </span>
              <span className="text-base font-bold block mt-0.5 text-[#F2F2F2]">
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </div>
            <div className="p-3 bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] rounded-xl group-hover:scale-110 transition">
              <Phone className="w-5 h-5" />
            </div>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={onOpenWhatsAppOrder}
            id="contact-whatsapp-btn"
            className="p-5 rounded-2xl bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] transition flex items-center justify-between shadow-lg shadow-[#C4A484]/15 group text-left"
          >
            <div>
              <span className="text-xs text-[#0A0A0A]/70 uppercase font-bold tracking-wider block">
                Instant WhatsApp Chat
              </span>
              <span className="text-base font-bold block mt-0.5 text-[#0A0A0A]">
                {BUSINESS_CONFIG.whatsappDisplay}
              </span>
            </div>
            <div className="p-3 bg-[#0A0A0A] text-[#C4A484] rounded-xl group-hover:scale-110 transition">
              <MessageSquare className="w-5 h-5" />
            </div>
          </button>

          {/* Get Directions */}
          <a
            href={BUSINESS_CONFIG.mapLinks.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-directions-btn"
            className="p-5 rounded-2xl bg-[#141414] hover:bg-[#1C1C1C] text-[#F2F2F2] transition flex items-center justify-between shadow-sm group border border-white/10 hover:border-[#C4A484]/40"
          >
            <div>
              <span className="text-xs text-[#808080] uppercase font-bold tracking-wider block">
                GPS Navigation
              </span>
              <span className="text-base font-bold block mt-0.5 text-[#F2F2F2]">
                Get Directions
              </span>
            </div>
            <div className="p-3 bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] rounded-xl group-hover:scale-110 transition">
              <Navigation className="w-5 h-5" />
            </div>
          </a>
        </div>
      </section>

      {/* 3. BUSINESS INFO & CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-[#F2F2F2]">
                Store Information
              </h2>

              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#F2F2F2]">
                    Physical Store Address
                  </h3>
                  <p className="text-xs sm:text-sm font-hindi text-[#C4A484] font-semibold mt-0.5">
                    {BUSINESS_CONFIG.address.fullAddressHindi}
                  </p>
                  <p className="text-xs text-[#808080] mt-0.5">
                    {BUSINESS_CONFIG.address.fullAddress}
                  </p>
                  <p className="text-[11px] text-[#C4A484] font-mono mt-1">
                    Google Plus Code: {BUSINESS_CONFIG.address.plusCode}
                  </p>
                </div>
              </div>

              {/* Landmark */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#F2F2F2]">
                    Nearby Landmark
                  </h3>
                  <p className="text-xs text-[#808080] mt-0.5">
                    {BUSINESS_CONFIG.address.landmark}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#F2F2F2]">
                    Store Operating Hours
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#C4A484] mt-0.5">
                    {BUSINESS_CONFIG.workingHours.days}
                  </p>
                  <p className="text-xs text-[#808080]">
                    {BUSINESS_CONFIG.workingHours.hours}
                  </p>
                  <p className="text-[11px] text-[#808080]/70 mt-1">
                    {BUSINESS_CONFIG.workingHours.emergency}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#F2F2F2]">
                    Email Correspondence
                  </h3>
                  <p className="text-xs text-[#808080] mt-0.5">
                    {BUSINESS_CONFIG.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F2F2F2]">
                Send an Online Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#808080] mt-1">
                Fill this form to check medicine availability or request a callback from our licensed pharmacist.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#1A1A1A] border border-[#C4A484]/40 text-[#C4A484] rounded-2xl mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#F2F2F2]">
                    Inquiry Transmitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#808080] max-w-sm mx-auto">
                    We have received your message and opened WhatsApp for rapid confirmation. Our staff will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "Medicine Availability Inquiry",
                        message: ""
                      });
                    }}
                    className="mt-4 px-4 py-2 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {error && (
                    <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded-xl flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-[#C4A484]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number <span className="text-[#C4A484]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
                      >
                        <option value="Medicine Availability Inquiry" className="bg-[#0A0A0A] text-[#F2F2F2]">Medicine Availability Inquiry</option>
                        <option value="Home Delivery Request" className="bg-[#0A0A0A] text-[#F2F2F2]">Home Delivery Request in Manpur</option>
                        <option value="Medical Devices & Equipment" className="bg-[#0A0A0A] text-[#F2F2F2]">Medical Devices (BP/Sugar/Nebulizer)</option>
                        <option value="Baby Care & Nutritional Products" className="bg-[#0A0A0A] text-[#F2F2F2]">Baby Care &amp; Nutritional Products</option>
                        <option value="General Question" className="bg-[#0A0A0A] text-[#F2F2F2]">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                      Medicine Names or Detailed Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please list medicine brand/strength or questions about prescription..."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-[#C4A484]/15"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Open WhatsApp Confirmation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAP INTERACTIVE EMBED */}
      <section id="google-map-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-6 rounded-3xl bg-[#141414] border border-white/10 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#F2F2F2]">
                Live Google Map Location
              </h3>
              <p className="text-xs text-[#808080]">
                Lakhibag, Manpur, Bihar 823003 (Plus Code: Q2RC+P7Q)
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.mapLinks.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#222] text-[#F2F2F2] border border-white/10 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center space-x-1.5 self-start sm:self-auto transition"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C4A484]" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full border border-white/10 relative bg-[#0A0A0A]">
            <iframe
              title="Krishna Medical Hall Google Map Location"
              src={BUSINESS_CONFIG.mapLinks.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
