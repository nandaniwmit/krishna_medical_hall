import React, { useState } from "react";
import { Search, X, ShoppingBag, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import medicineStockData from "../data/medicineStock.json";
import { MedicineItem } from "../types";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectForOrder: (medName: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectForOrder
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const results = (medicineStockData as MedicineItem[]).filter((item) => {
    if (!query.trim()) return false;
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.brand.toLowerCase().includes(query.toLowerCase()) ||
      item.composition.toLowerCase().includes(query.toLowerCase())
    );
  }).slice(0, 6);

  const handleOrder = (name: string) => {
    onSelectForOrder(name);
    onClose();
  };

  const handleViewAllInServices = () => {
    navigate("/services#stock-checker");
    onClose();
  };

  return (
    <div
      id="quick-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="quick-search-modal-box"
        className="relative w-full max-w-2xl bg-[#141414] rounded-2xl shadow-2xl border border-white/10 text-[#F2F2F2] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center space-x-3 bg-[#0E0E0E]">
          <Search className="w-5 h-5 text-[#C4A484] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type medicine name (e.g. Paracetamol, Augmentin, BP Monitor, Cerelac)..."
            className="w-full bg-transparent text-base sm:text-lg text-[#F2F2F2] placeholder-[#808080]/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#808080] hover:text-[#F2F2F2] text-xs px-2 py-1 rounded bg-[#1A1A1A] border border-white/5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#808080] hover:text-[#F2F2F2] rounded-lg hover:bg-white/5 transition"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestion Body */}
        <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#808080] uppercase tracking-[0.2em]">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dolo 650", "Augmentin 625", "BP Monitor", "Pan D", "Cerelac", "Accu-Chek", "Shelcal 500", "Volini Gel"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-xl bg-[#0A0A0A] border border-white/5 text-xs text-[#808080] hover:text-[#F2F2F2] hover:border-[#C4A484]/40 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm font-semibold text-[#F2F2F2]">
                No matching medicines found for &quot;{query}&quot;
              </p>
              <p className="text-xs text-[#808080] mt-1">
                You can inquire directly on WhatsApp with our pharmacist.
              </p>
              <button
                onClick={() => handleOrder(query)}
                className="mt-4 px-4 py-2 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
              >
                Inquire &quot;{query}&quot; via WhatsApp
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#808080] uppercase tracking-[0.2em] mb-2">
                Matching Medicines ({results.length})
              </p>
              {results.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A0A] hover:bg-[#1A1A1A] transition border border-white/5"
                >
                  <div>
                    <h4 className="text-sm font-bold text-[#F2F2F2]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#808080]">
                      {item.brand} • <span className="font-medium text-[#C4A484]">{item.status}</span> • ₹{item.mrp.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOrder(item.name)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              ))}

              <div className="pt-3 border-t border-white/5 text-center">
                <button
                  onClick={handleViewAllInServices}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#C4A484] hover:text-[#D4B494] transition"
                >
                  <span>Explore full inventory with category filters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
