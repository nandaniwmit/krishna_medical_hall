import React, { useState, useMemo } from "react";
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, ArrowUpDown, Sparkles, RefreshCw, FileText } from "lucide-react";
import medicineStockData from "../data/medicineStock.json";
import { MedicineItem } from "../types";
import { generateWhatsAppOrderUrl } from "../config/businessConfig";

interface MedicineStockCheckerProps {
  initialSearch?: string;
  className?: string;
  onSelectForOrder?: (medName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  initialSearch = "",
  className = "",
  onSelectForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  const categories = useMemo(() => {
    const cats = new Set(medicineStockData.map((item) => item.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineStockData as MedicineItem[])
      .filter((item) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.composition.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;

        const matchesStatus =
          selectedStatus === "All" || item.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "price-asc") return a.mrp - b.mrp;
        if (sortBy === "price-desc") return b.mrp - a.mrp;
        return 0;
      });
  }, [searchTerm, selectedCategory, selectedStatus, sortBy]);

  const handleOrderClick = (med: MedicineItem) => {
    if (onSelectForOrder) {
      onSelectForOrder(med.name);
      return;
    }
    const orderUrl = generateWhatsAppOrderUrl({
      customerName: "",
      phone: "",
      medicine: `${med.name} (${med.brand})`,
      quantity: "1 Pack / Strip",
      address: "Manpur / Lakhibag",
      prescription: med.requiresPrescription ? "Yes" : "No",
      preferredTime: "Urgent / ASAP",
      notes: `Inquiring about stock status: ${med.status}. MRP: ₹${med.mrp.toFixed(2)}`
    });
    window.open(orderUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="medicine-stock-checker-section"
      className={`bg-[#141414] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-7 md:p-8 transition-colors ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Inventory Availability</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#F2F2F2]">
            Medicine Stock Checker
          </h2>
          <p className="text-xs sm:text-sm text-[#808080] mt-1">
            Instant search for authentic tablets, syrups, baby products, and health devices in Lakhibag, Manpur.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="flex items-center space-x-1.5 text-[#C4A484] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#C4A484] animate-pulse"></span>
            <span>Real-time Stock</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#808080] font-medium">
            {filteredMedicines.length} Products Found
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-6">
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <label htmlFor="medicine-search-input" className="sr-only">Search medicine or salt composition</label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#808080]">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="medicine-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine (e.g. Dolo, Augmentin, BP Monitor, Cerelac)..."
            className="w-full pl-10 pr-10 py-3 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] placeholder-[#808080]/60 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#808080] hover:text-[#F2F2F2]"
              aria-label="Clear Search"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="md:col-span-3">
          <label htmlFor="category-select" className="sr-only">Filter by category</label>
          <div className="relative">
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-3 px-3.5 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] appearance-none transition cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#141414] text-[#F2F2F2]">
                  Category: {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#808080]">
              <Filter className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Status / Sort Dropdown */}
        <div className="md:col-span-3 flex gap-2">
          <div className="relative flex-1">
            <label htmlFor="status-select" className="sr-only">Stock status</label>
            <select
              id="status-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full py-3 px-3 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] appearance-none transition cursor-pointer"
            >
              <option value="All" className="bg-[#141414] text-[#F2F2F2]">All Status</option>
              <option value="Available" className="bg-[#141414] text-[#F2F2F2]">Available Only</option>
              <option value="Limited Stock" className="bg-[#141414] text-[#F2F2F2]">Limited Stock</option>
              <option value="Out of Stock" className="bg-[#141414] text-[#F2F2F2]">Out of Stock</option>
            </select>
          </div>

          <div className="relative flex-1">
            <label htmlFor="sort-select" className="sr-only">Sort by</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "price-asc" | "price-desc")}
              className="w-full py-3 px-3 text-sm bg-[#0A0A0A] border border-white/10 rounded-xl text-[#F2F2F2] focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] appearance-none transition cursor-pointer"
            >
              <option value="name" className="bg-[#141414] text-[#F2F2F2]">Name (A-Z)</option>
              <option value="price-asc" className="bg-[#141414] text-[#F2F2F2]">Price (Low → High)</option>
              <option value="price-desc" className="bg-[#141414] text-[#F2F2F2]">Price (High → Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Category Pill Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 text-xs no-scrollbar">
        {categories.slice(0, 7).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-[#C4A484] text-[#0A0A0A] font-bold shadow-sm"
                : "bg-[#0A0A0A] hover:bg-[#1A1A1A] text-[#808080] hover:text-[#F2F2F2] border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Medicines Grid / List */}
      {filteredMedicines.length === 0 ? (
        <div className="py-12 px-4 text-center rounded-2xl bg-[#0A0A0A] border border-dashed border-white/10">
          <AlertTriangle className="w-10 h-10 text-[#C4A484] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#F2F2F2]">
            No exact matching medicine found
          </h3>
          <p className="text-xs text-[#808080] mt-1 max-w-md mx-auto">
            We may have substitute brands or fresh stock arriving today. Contact our pharmacist directly on WhatsApp to check manual inventory.
          </p>
          <button
            onClick={() => {
              const url = generateWhatsAppOrderUrl({
                customerName: "",
                phone: "",
                medicine: searchTerm || "Custom Medicine Requirement",
                address: "Manpur, Bihar",
                prescription: "Yes",
                notes: `I searched for "${searchTerm}" on your website. Please let me know if it is in stock or if an alternative is available.`
              });
              window.open(url, "_blank");
            }}
            className="mt-4 inline-flex items-center space-x-2 px-5 py-2.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Inquire Availability on WhatsApp</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((med) => {
            const isAvailable = med.status === "Available";
            const isLimited = med.status === "Limited Stock";
            const isOutOfStock = med.status === "Out of Stock";

            return (
              <div
                key={med.id}
                id={`med-card-${med.id}`}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] hover:bg-[#111] border border-white/5 hover:border-[#C4A484]/40 shadow-sm transition-all duration-200"
              >
                <div>
                  {/* Status & Prescription Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                        isAvailable
                          ? "bg-[#1A1A1A] text-[#C4A484] border border-[#C4A484]/30"
                          : isLimited
                          ? "bg-amber-950/40 text-amber-300 border border-amber-800/50"
                          : "bg-rose-950/40 text-rose-300 border border-rose-800/50"
                      }`}
                    >
                      {isAvailable && <CheckCircle2 className="w-3 h-3" />}
                      {isLimited && <AlertTriangle className="w-3 h-3" />}
                      {isOutOfStock && <XCircle className="w-3 h-3" />}
                      <span>{med.status}</span>
                    </span>

                    {med.requiresPrescription ? (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#1A1A1A] text-[#C4A484] border border-white/10">
                        <FileText className="w-2.5 h-2.5" />
                        <span>Rx Required</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-[#808080] bg-[#141414] px-1.5 py-0.5 rounded border border-white/5">
                        OTC Care
                      </span>
                    )}
                  </div>

                  {/* Name & Brand */}
                  <h3 className="font-bold text-base text-[#F2F2F2] group-hover:text-[#C4A484] transition leading-snug">
                    {med.name}
                  </h3>
                  <p className="text-xs text-[#808080] mt-0.5 font-medium">
                    Brand: <span className="text-[#F2F2F2] font-medium">{med.brand}</span>
                  </p>

                  {/* Composition */}
                  <p className="text-[11px] text-[#808080] mt-1.5 line-clamp-2 bg-[#141414] p-2 rounded-lg border border-white/5">
                    <span className="font-semibold text-[#F2F2F2]">Salt:</span> {med.composition}
                  </p>

                  {/* Dosage & Expiry Info */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#808080] mt-3 pt-2 border-t border-white/5">
                    <div>
                      <span className="text-[#808080]/70 block text-[10px]">Form:</span>
                      <span className="font-medium text-[#F2F2F2]">{med.dosageForm}</span>
                    </div>
                    <div>
                      <span className="text-[#808080]/70 block text-[10px]">Valid Expiry:</span>
                      <span className="font-medium text-[#F2F2F2]">{med.expiry}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#808080] block uppercase tracking-wider font-medium">MRP Rate</span>
                    <span className="text-base sm:text-lg font-bold text-[#F2F2F2]">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrderClick(med)}
                    disabled={isOutOfStock}
                    aria-label={`Order ${med.name} on WhatsApp`}
                    className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm ${
                      isOutOfStock
                        ? "bg-[#1A1A1A] text-[#808080]/50 border border-white/5 cursor-not-allowed"
                        : "bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] shadow-md"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{isOutOfStock ? "Out of Stock" : "Order via WhatsApp"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer Info Note */}
      <div className="mt-6 p-3.5 bg-[#0A0A0A] rounded-xl border border-white/10 text-[11px] text-[#808080] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>
          💡 <strong className="text-[#F2F2F2]">Tip:</strong> If your prescribed medicine isn&apos;t listed above, upload your doctor&apos;s slip via WhatsApp for immediate physical stock verification.
        </span>
        <span className="font-semibold text-[#C4A484] whitespace-nowrap">
          Call Helpline: +91 9955550799
        </span>
      </div>
    </div>
  );
};
