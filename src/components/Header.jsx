import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-slate-950/70 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/25" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold font-display text-white tracking-tight">
            {profile.shortName}<span className="text-cyan-400">.</span>dev
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${active === link.href ? "text-cyan-300" : "text-slate-400 hover:text-cyan-400"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold text-cyan-400 hover:text-white bg-cyan-950/40 border border-cyan-800/40 rounded-xl hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-950/95 border-b border-white/5 border-t border-slate-900/60 overflow-hidden"
          >
            <nav id="mobile-navigation" className="flex flex-col px-6 py-6 space-y-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`text-base font-semibold transition-colors ${active === link.href ? "text-cyan-300" : "text-slate-300 hover:text-cyan-400"}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
