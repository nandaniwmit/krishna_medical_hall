import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Phone, MessageSquare, Search, ShoppingBag, ShieldCheck, ChevronRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { PWAInstallButton } from "./PWAInstallButton";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenWhatsAppOrder: () => void;
  onOpenQuickSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenWhatsAppOrder,
  onOpenQuickSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" }
  ];

  return (
    <>
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0D0D0D] text-[#808080] text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C4A484] animate-pulse"></span>
            <span className="font-hindi font-medium text-[#F2F2F2] hidden sm:inline text-xs tracking-wide">
              लखीवाग, मानपुर: 100% असली दवाइयां &amp; होम डिलीवरी
            </span>
            <span className="font-hindi font-medium text-[#F2F2F2] sm:hidden text-xs">
              कृष्णा मेडिकल हॉल • मानपुर
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:flex items-center space-x-1 text-[#808080] text-[11px] uppercase tracking-wider">
              <span>Open 7 Days: 7:00 AM - 10:30 PM</span>
            </span>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center space-x-1.5 font-semibold text-[#C4A484] hover:text-[#D4B494] transition text-xs tracking-wide"
            >
              <Phone className="w-3 h-3 text-[#C4A484]" />
              <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10"
            : "bg-[#0A0A0A] py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              aria-label="Krishna Medical Hall Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#141414] border border-[#C4A484]/40 flex items-center justify-center text-[#C4A484] font-serif font-bold text-xl sm:text-2xl shadow-lg group-hover:border-[#C4A484] transition transform">
                +
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl font-bold text-[#F2F2F2] tracking-tight font-hindi leading-tight">
                  {BUSINESS_CONFIG.nameHindi}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#C4A484] tracking-[0.2em] uppercase">
                  {BUSINESS_CONFIG.name}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                      isActive
                        ? "text-[#C4A484] bg-white/[0.04] border border-[#C4A484]/30 font-semibold"
                        : "text-[#808080] hover:text-[#F2F2F2] hover:bg-white/[0.03]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Tools & PWA Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Quick Search Button */}
              <button
                onClick={onOpenQuickSearch}
                aria-label="Search Medicine Inventory"
                className="p-2 sm:px-3.5 sm:py-2 text-[#808080] hover:text-[#F2F2F2] bg-[#141414] hover:bg-[#1A1A1A] border border-white/5 hover:border-white/10 rounded-xl transition flex items-center space-x-2 text-xs font-medium"
              >
                <Search className="w-3.5 h-3.5 text-[#C4A484]" />
                <span className="hidden xl:inline tracking-wider">Search Stock</span>
              </button>

              {/* Mandatory PWA "📲 Add to Home" Button */}
              <div className="hidden sm:block">
                <PWAInstallButton variant="nav" />
              </div>

              {/* Dark Mode Toggle */}
              <button
                id="theme-toggle-btn"
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Toggle Color Theme"
                className="p-2 rounded-xl text-[#808080] hover:text-[#F2F2F2] bg-[#141414] hover:bg-[#1A1A1A] border border-white/5 transition"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-[#C4A484]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#808080]" />
                )}
              </button>

              {/* Quick WhatsApp Order Button */}
              <button
                id="header-order-btn"
                onClick={onOpenWhatsAppOrder}
                className="hidden md:inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#C4A484]/15"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#0A0A0A]" />
                <span>Order on WhatsApp</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 rounded-xl text-[#F2F2F2] bg-[#141414] border border-white/10 hover:bg-[#1C1C1C] transition"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden fixed inset-x-0 top-full bg-[#0E0E0E] border-b border-white/10 shadow-2xl px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in"
          >
            {/* PWA Button in Mobile Menu */}
            <div className="pb-3 border-b border-white/5">
              <PWAInstallButton variant="mobile" />
            </div>

            {/* Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-[0.15em] font-semibold transition ${
                      isActive
                        ? "bg-[#141414] text-[#C4A484] border border-[#C4A484]/30"
                        : "text-[#808080] hover:text-[#F2F2F2] hover:bg-white/[0.02]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#808080]" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-white/5 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppOrder();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#C4A484]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] text-[#F2F2F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C4A484]" />
                <span>Call Store: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Business info badge */}
            <div className="p-3.5 bg-[#141414] rounded-xl text-xs text-[#808080] space-y-1 border border-white/5">
              <p className="font-semibold text-[#F2F2F2] font-hindi">
                {BUSINESS_CONFIG.address.fullAddressHindi}
              </p>
              <p>Timings: 07:00 AM - 10:30 PM (All 7 Days)</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
