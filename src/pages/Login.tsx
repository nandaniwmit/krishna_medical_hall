import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Lock, Mail, Eye, EyeOff, ShieldCheck, CheckCircle2, 
  AlertCircle, ArrowRight, Sparkles, KeyRound, Phone 
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config/businessConfig";

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!identifier.trim()) {
      setErrorMessage("Please enter your registered email or 10-digit mobile number.");
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters in length.");
      return;
    }

    setIsLoading(true);

    // Simulate secure pharmacy portal authentication
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Authentication verified! Welcome to Krishna Medical Portal.");
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail) {
      setForgotSuccess(true);
      setTimeout(() => {
        setForgotSuccess(false);
        setShowForgotModal(false);
        setForgotEmail("");
      }, 3500);
    }
  };

  return (
    <div id="login-page" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#C4A484]/40 flex items-center justify-center text-[#C4A484] font-bold text-3xl shadow-xl shadow-black/40 mx-auto transform hover:scale-105 transition">
          +
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#F2F2F2] font-hindi">
            {BUSINESS_CONFIG.nameHindi}
          </h1>
          <p className="text-xs font-bold text-[#C4A484] uppercase tracking-[0.2em] mt-0.5">
            {BUSINESS_CONFIG.name} Portal
          </p>
        </div>
        <p className="text-xs text-[#808080] max-w-xs mx-auto font-light">
          Secure login for patients, repeat prescription re-orders &amp; pharmacy account management.
        </p>
      </div>

      {/* Main Login Card */}
      <div className="bg-[#141414] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-[#C4A484]/40 text-[#C4A484] text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C4A484]" />
            <span>{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email / Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider mb-1.5">
              Email / Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#808080]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@example.com or 9955550799"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] transition"
              />
            </div>
          </div>

          {/* Password with Show/Hide */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-[#808080] uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="text-xs text-[#C4A484] hover:underline font-semibold"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#808080]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#808080] hover:text-[#F2F2F2]"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center space-x-2 text-xs text-[#808080] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded accent-[#C4A484] bg-[#0A0A0A] border border-white/10"
              />
              <span>Remember this device</span>
            </label>

            <span className="text-[11px] text-[#808080] flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C4A484]" />
              <span>SSL 256-bit</span>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            id="secure-login-btn"
            className="w-full py-3.5 px-4 rounded-xl bg-[#C4A484] hover:bg-[#D4B494] active:scale-95 text-[#0A0A0A] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C4A484]/15 transition flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-wait"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Secure Login</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Helper Box */}
        <div className="p-3.5 bg-[#0A0A0A] rounded-2xl text-xs text-[#808080] space-y-1 border border-white/5">
          <p className="font-semibold text-[#F2F2F2]">
            Quick Customer &amp; Staff Access:
          </p>
          <p>You can enter your phone number or test with any password (min. 6 characters) to preview the portal.</p>
        </div>
      </div>

      {/* Return to Home link */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="text-xs font-semibold text-[#C4A484] hover:underline"
        >
          ← Return to Pharmacy Home
        </Link>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div
          id="forgot-password-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setShowForgotModal(false)}
        >
          <div
            className="bg-[#141414] border border-white/10 text-[#F2F2F2] rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-serif font-bold text-[#F2F2F2]">
              Reset Password
            </h3>
            <p className="text-xs text-[#808080]">
              Enter your registered mobile number or email to receive an instant OTP via WhatsApp / SMS.
            </p>

            {forgotSuccess ? (
              <div className="p-3 bg-[#1A1A1A] border border-[#C4A484]/40 text-[#C4A484] rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C4A484]" />
                <span>Reset OTP dispatched to your mobile number!</span>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="Registered phone or email"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#0A0A0A] border border-white/10 text-[#F2F2F2] placeholder-[#808080]/50 focus:outline-none focus:border-[#C4A484]/60 focus:ring-1 focus:ring-[#C4A484]"
                />
                <div className="flex space-x-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-[#C4A484] hover:bg-[#D4B494] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-xl transition"
                  >
                    Send OTP Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#222] text-[#808080] hover:text-[#F2F2F2] border border-white/10 text-xs font-semibold rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
