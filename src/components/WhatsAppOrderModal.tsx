import React, { useState, useEffect } from "react";
import { X, Send, Phone, UploadCloud, Check, AlertCircle, Clock, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG, generateWhatsAppOrderUrl } from "../config/businessConfig";
import { WhatsAppOrderFormData } from "../types";

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ""
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    medicine: prefilledMedicine,
    quantity: "1 Pack / As Prescribed",
    prescriptionAttached: "No",
    preferredTime: "Standard Delivery (Within 2 Hours)",
    message: ""
  });

  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicine: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange迷 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
      setFormData((prev) => ({ ...prev, prescriptionAttached: "Yes" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.medicine.trim() && formData.prescriptionAttached === "No") {
      setErrorMessage("Please specify medicine required or upload prescription.");
      return;
    }

    setErrorMessage("");

    const orderUrl = generateWhatsAppOrderUrl({
      customerName: formData.customerName,
      phone: formData.phone,
      medicine: formData.medicine || (selectedFileName ? `Prescription Attached (${selectedFileName})` : "General inquiry"),
      quantity: formData.quantity,
      address: formData.address || "Manpur / Lakhibag",
      prescription: formData.prescriptionAttached,
      preferredTime: formData.preferredTime,
      notes: `${formData.message || "Please confirm availability and dispatch timeline."} ${selectedFileName ? `(Prescription Photo: ${selectedFileName})` : ''}`
    });

    window.open(orderUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      id="whatsapp-order-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="whatsapp-order-modal-box"
        className="relative w-full max-w-xl bg-[#141414] rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 text-[#F2F2F2] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#0E0E0E] p-5 sm:p-6 text-white border-b border-white/10 relative">
          <button
            id="close-whatsapp-order-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#808080] hover:text-[#F2F2F2] rounded-full hover:bg-white/5 transition"
            aria-label="Close Order Dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-[#C4A484] text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Home Delivery &amp; Store Pickup</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-hindi text-[#F2F2F2]">
            WhatsApp पर दवाइयां मंगाएं
          </h3>
          <p className="text-xs sm:text-sm text-[#808080] mt-1">
            {BUSINESS_CONFIG.nameHindi} • {BUSINESS_CONFIG.address.area} (Call/WhatsApp: {BUSINESS_CONFIG.whatsappDisplay})
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                Your Name <span className="text-[#C4A484]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                Mobile Number <span className="text-[#C4A484]">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit WhatsApp number"
                className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@email.com"
                className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#C4A484]" />
                <span>Preferred Delivery Time</span>
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
              >
                <option value="Urgent Delivery (Within 1 Hour)">Urgent Delivery (Within 1 Hour)</option>
                <option value="Standard Delivery (Within 2-3 Hours)">Standard Delivery (Within 2-3 Hours)</option>
                <option value="Evening (5 PM - 8 PM)">Evening Slot (5 PM - 8 PM)</option>
                <option value="Store Self-Pickup in Lakhibag">Store Self-Pickup in Lakhibag</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1 flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-[#C4A484]" />
              <span>Complete Delivery Address</span>
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="House/Plot no., Lane, Landmark, Manpur, Bihar"
              className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
            />
          </div>

          {/* Medicine Name / List */}
          <div>
            <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
              Medicine Name(s) &amp; Quantity
            </label>
            <textarea
              rows={2}
              value={formData.medicine}
              onChange={(e) => setFormData({ ...formData, medicine: e.target.value })}
              placeholder="e.g. Dolo 650 (2 strips), Pan D (1 strip), Volini Gel (1 tube)..."
              className="w-full px-3.5 py-2.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition resize-none"
            />
          </div>

          {/* Prescription Upload / Select */}
          <div className="p-3.5 bg-[#0A0A0A] rounded-xl border border-dashed border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-[#F2F2F2] block">
                  Have a Doctor&apos;s Prescription?
                </span>
                <span className="text-[11px] text-[#808080]">
                  Select image / PDF from phone or gallery to send directly on WhatsApp
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <label className="cursor-pointer inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#1A1A1A] border border-white/10 rounded-lg text-xs font-semibold text-[#F2F2F2] hover:border-[#C4A484]/50 transition shadow-sm">
                  <UploadCloud className="w-3.5 h-3.5 text-[#C4A484]" />
                  <span>{selectedFileName ? "Change File" : "Upload File"}</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileChange迷}
                  />
                </label>
              </div>
            </div>

            {selectedFileName && (
              <div className="mt-2 text-xs text-[#C4A484] font-medium flex items-center space-x-1 bg-white/5 p-2 rounded-lg border border-white/5">
                <Check className="w-3.5 h-3.5 text-[#C4A484]" />
                <span>Selected: {selectedFileName}</span>
              </div>
            )}
          </div>

          {/* Message / Notes */}
          <div>
            <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1">
              Additional Instructions
            </label>
            <input
              type="text"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Call before coming, urgent requirement, etc."
              className="w-full px-3.5 py-2 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/50 focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] focus:outline-none transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              id="submit-whatsapp-order-btn"
              className="w-full py-3 px-4 bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 shadow-md shadow-[#C4A484]/20"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              id="call-now-modal-btn"
              className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#222] text-[#F2F2F2] font-semibold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#C4A484]" />
              <span>Call Store: 9955550799</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
