import React, { useState } from "react";
import { 
  Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight, 
  Sparkles, Filter, ShieldCheck, MapPin 
} from "lucide-react";
import { GALLERY_DATA } from "../data/siteData";
import { GalleryItem } from "../types";
import { BUSINESS_CONFIG } from "../config/businessConfig";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "store", label: "Store Front & Counter" },
    { id: "shelves", label: "Medicine Shelves & Cold Storage" },
    { id: "devices", label: "Health Devices & Diagnostics" },
    { id: "baby-care", label: "Baby Care & Nutrition" },
    { id: "ayurvedic", label: "Ayurvedic Products" }
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (id: string) => {
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div id="gallery-page" className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#C4A484]/30 text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Tour &amp; Facilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F2F2F2] tracking-tight">
          Store &amp; Inventory Gallery
        </h1>
        <p className="text-base sm:text-lg text-[#808080] max-w-2xl mx-auto leading-relaxed font-light">
          Explore our hygienic dispensary, systematic medicine storage, cold-chain refrigeration units, and diagnostic device counters in Manpur.
        </p>
      </section>

      {/* 2. CATEGORY FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                selectedCategory === cat.id
                  ? "bg-[#C4A484] text-[#0A0A0A] shadow-md shadow-[#C4A484]/20"
                  : "bg-[#141414] text-[#808080] hover:text-[#F2F2F2] hover:bg-[#1C1C1C] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PHOTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#C4A484]/40 shadow-sm transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom hover */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0A0A0A]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity"></div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#141414]/90 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#C4A484] border border-white/10">
                  {item.tag}
                </div>

                {/* Zoom Icon Button Overlay */}
                <div className="absolute bottom-3 right-3 p-2 bg-[#C4A484] text-[#0A0A0A] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#F2F2F2] group-hover:text-[#C4A484] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs font-hindi text-[#C4A484] font-semibold mt-0.5">
                    {item.titleHindi}
                  </p>
                  <p className="text-xs text-[#808080] mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {currentLightboxItem && (
        <div
          id="gallery-lightbox-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <div
            id="gallery-lightbox-modal"
            className="relative max-w-4xl w-full bg-[#141414] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-[#F2F2F2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 bg-[#0A0A0A] flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-xs text-[#C4A484] font-semibold uppercase tracking-wider">
                  {currentLightboxItem.categoryLabel} ({activeLightboxIndex! + 1} of {filteredItems.length})
                </span>
                <h3 className="text-base font-serif font-bold text-[#F2F2F2]">
                  {currentLightboxItem.title}
                </h3>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2 text-[#808080] hover:text-[#F2F2F2] rounded-full hover:bg-white/5 transition"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Stage with Prev/Next Controls */}
            <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141414]/90 hover:bg-[#C4A484] hover:text-[#0A0A0A] text-[#F2F2F2] border border-white/10 transition shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141414]/90 hover:bg-[#C4A484] hover:text-[#0A0A0A] text-[#F2F2F2] border border-white/10 transition shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 sm:p-5 bg-[#0A0A0A] space-y-1 border-t border-white/5">
              <p className="text-sm font-hindi text-[#C4A484]">
                {currentLightboxItem.titleHindi}
              </p>
              <p className="text-xs text-[#808080]">
                {currentLightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. LOCATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/30 text-[#C4A484] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#F2F2F2]">
                Visit Us at Lakhibag More, Manpur, Bihar
              </h4>
              <p className="text-xs text-[#808080]">
                Ample customer parking &amp; sanitized medicine dispensing counters.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.mapLinks.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition whitespace-nowrap shadow-sm"
          >
            Get Driving Directions
          </a>
        </div>
      </section>
    </div>
  );
};
