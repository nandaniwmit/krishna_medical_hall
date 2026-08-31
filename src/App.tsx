import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { WhatsAppOrderModal } from "./components/WhatsAppOrderModal";
import { QuickSearchModal } from "./components/QuickSearchModal";

// Lazy loading the 6 mandatory React Router pages
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Services = lazy(() => import("./pages/Services").then((module) => ({ default: module.Services })));
const Gallery = lazy(() => import("./pages/Gallery").then((module) => ({ default: module.Gallery })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const Login = lazy(() => import("./pages/Login").then((module) => ({ default: module.Login })));

// Scroll Restoration on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page Suspense Loading Skeleton
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8 bg-[#0A0A0A]">
      <div className="w-10 h-10 border-2 border-[#C4A484]/30 border-t-[#C4A484] rounded-full animate-spin"></div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#808080] font-hindi">
        कृष्णा मेडिकल हॉल • Loading...
      </p>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("kmh_dark_mode");
    if (saved !== null) {
      return saved === "true";
    }
    return true; // Default to Sophisticated Dark
  });

  const [isWhatsAppOrderOpen, setIsWhatsAppOrderOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>("");
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("kmh_dark_mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleOpenWhatsAppOrder = (medName: string = "") => {
    setPrefilledMedicine(medName);
    setIsWhatsAppOrderOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F2F2F2] selection:bg-[#C4A484] selection:text-[#0A0A0A] transition-colors duration-200">
        {/* Navigation */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
          onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
        />

        {/* Main Content Area with Lazy-loaded Routes */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
                    onSelectMedicineForOrder={(med) => handleOpenWhatsAppOrder(med)}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <Services
                    onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
                    onSelectMedicineForOrder={(med) => handleOpenWhatsAppOrder(med)}
                  />
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/contact"
                element={
                  <Contact
                    onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
                  />
                }
              />
              <Route path="/login" element={<Login />} />
              {/* Fallback route back to Home */}
              <Route
                path="*"
                element={
                  <Home
                    onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder("")}
                    onSelectMedicineForOrder={(med) => handleOpenWhatsAppOrder(med)}
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer with Mandatory Tracking & WMIT Trigger */}
        <Footer />

        {/* Global Floating Action Buttons */}
        <FloatingActions
          onOpenOrderModal={() => handleOpenWhatsAppOrder("")}
        />

        {/* Global Interactive Modals */}
        <WhatsAppOrderModal
          isOpen={isWhatsAppOrderOpen}
          onClose={() => setIsWhatsAppOrderOpen(false)}
          prefilledMedicine={prefilledMedicine}
        />

        <QuickSearchModal
          isOpen={isQuickSearchOpen}
          onClose={() => setIsQuickSearchOpen(false)}
          onSelectForOrder={(med) => handleOpenWhatsAppOrder(med)}
        />
      </div>
    </Router>
  );
}
