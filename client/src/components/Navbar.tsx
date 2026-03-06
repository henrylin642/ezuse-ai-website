/**
 * Navbar - CIS Design System
 * Logo: "ezuse" (ez=orange, use=charcoal) + "ai" (orange)
 * Colors: Brand Orange #FF8A3D, Deep Charcoal #1C1C1C, Warm Beige #FFF4E6
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "為什麼選我們", href: "#why" },
  { label: "產品服務", href: "#products" },
  { label: "成功案例", href: "#cases" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#FF8A3D] flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 4C8.5 4 5.5 6.2 4.5 9.3c1.2-.5 2.5-.8 3.8-.8 4.7 0 8.5 3.4 8.5 7.5 0 .5-.1 1-.2 1.5C19.2 16.2 21 13.3 21 10c0-3.3-4-6-9-6z" fill="white" opacity="0.9"/>
              <path d="M8.3 10.5c-3.2 0-5.8 2.1-5.8 4.8s2.6 4.8 5.8 4.8c2.5 0 4.6-1.2 5.4-3-.5.1-1 .2-1.5.2-3.2 0-5.8-2.1-5.8-4.8 0-.7.2-1.4.5-2h1.4z" fill="white" opacity="0.7"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#FF8A3D]">ez</span>
            <span className={scrolled ? "text-[#1C1C1C]" : "text-white"}>use</span>
            <span className="text-[#FF8A3D] ml-0.5">ai</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#FF8A3D] ${
                scrolled ? "text-[#1C1C1C]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-[#FF8A3D] text-white text-sm font-semibold rounded-lg hover:bg-[#e67a30] transition-colors shadow-md shadow-[#FF8A3D]/20"
          >
            取得 Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-[#1C1C1C]" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-[#1C1C1C]" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#FFF4E6] shadow-lg overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1C1C1C] font-medium py-2 hover:text-[#FF8A3D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-2.5 bg-[#FF8A3D] text-white font-semibold rounded-lg text-center"
              >
                取得 Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
