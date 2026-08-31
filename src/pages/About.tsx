import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, ShieldCheck, Heart, Eye, Target, Compass, 
  Clock, CheckCircle, Users, Sparkles, Phone, MessageSquare, Star, 
  Building2, ThermometerSnowflake, FileCheck
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";
import { TIMELINE_DATA, REVIEWS_DATA } from "../data/siteData";

interface AboutProps {
  onOpenWhatsAppOrder: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppOrder }) => {
  return (
    <div id="about-page" className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dedicated Healthcare Partner</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About <span className="text-emerald-600 dark:text-emerald-400 font-hindi">{BUSINESS_CONFIG.nameHindi}</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Upholding healthcare ethics, 100% genuine pharmaceutical sourcing, and compassionate patient support in Lakhibag, Manpur, Bihar.
        </p>
      </section>

      {/* 2. BUSINESS STORY & STORE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Origin &amp; Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Rooted in the Heart of Manpur, Built on Unwavering Patient Trust
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>{BUSINESS_CONFIG.nameHindi} ({BUSINESS_CONFIG.name})</strong> was established with a singular, unwavering mission: to ensure that every patient and family in Manpur, Lakhibag, and Gaya receives authentic, life-saving medicines stored under flawless conditions.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Over the years, we have grown from a modest neighborhood chemist into a full-spectrum healthcare dispensary stocking specialized cardiac, diabetic, neurological, pediatric, and surgical consumables from India&apos;s leading pharmaceutical laboratories.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">Authentic Sourcing</span>
                <span className="text-[11px] text-slate-500">Only verified C&amp;F distributor batches</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">7 Days</span>
                <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">7:00 AM - 10:30 PM</span>
                <span className="text-[11px] text-slate-500">Continuous patient assistance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80"
                alt="Inside Krishna Medical Hall Dispensary"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  State-of-the-Art Pharmacy
                </p>
                <h3 className="text-lg font-bold font-hindi">
                  स्वच्छता, शुद्धता और प्रामाणिकता की गारंटी
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Mission, Vision &amp; Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To safeguard community health in Manpur and surrounding villages by ensuring immediate access to genuine pharmaceuticals, professional prescription checks, and prompt doorstep delivery at ethical, fair rates.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be recognized as the most dependable and technologically forward community pharmacy in Gaya District, combining digital inventory transparency with compassionate human care.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Zero Counterfeits:</strong> Direct lab sourcing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Patient Dignity:</strong> Empathetic counseling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Cold-Chain Integrity:</strong> 24/7 power backup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OWNER / PHARMACIST MESSAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-900/50 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Pharmacist Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              A Personal Message to Our Valued Community
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
              &ldquo;In the pharmacy profession, our job goes far beyond just handing over a package. It is about understanding the doctor&apos;s dosage instructions, warning against potential drug interactions, and ensuring that life-critical medicines like insulin never lose potency due to improper storage. We treat every prescription that arrives at Krishna Medical Hall as if it was written for our own family member.&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-base font-bold text-emerald-400 font-hindi">
                कृष्णा मेडिकल हॉल परिवार
              </p>
              <p className="text-xs text-slate-400">
                Lakhibag, Manpur, Bihar 823003
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS TIMELINE & ACHIEVEMENTS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Evolution &amp; Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Our Journey of Continuous Service
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 sm:ml-8 space-y-10">
          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Real Community Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Customer Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Authentic experiences from patients and families across Manpur and Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500">{rev.location} • {rev.date}</p>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
              {rev.commentHindi && (
                <p className="text-xs text-slate-500 font-hindi border-t border-slate-100 dark:border-slate-800 pt-2">
                  {rev.commentHindi}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Have a Prescription to Fill?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Order directly via WhatsApp or visit our pharmacy at Lakhibag More, Manpur.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenWhatsAppOrder}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Prescription on WhatsApp</span>
            </button>
            <Link
              to="/contact"
              className="px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition"
            >
              View Location Map &amp; Contacts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
