"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Printer, Mail, Phone, MapPin, ArrowRight, Send
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pure SVG Path maps to eliminate dependency-breaking version issues with third-party social icons
  const socialIcons = [
    {
      name: "Facebook",
      href: "#",
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    },
    {
      name: "Twitter",
      href: "#",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    },
    {
      name: "Instagram",
      href: "#",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    },
    {
      name: "Linkedin",
      href: "#",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    }
  ];

  const services = ["Custom Packaging", "Offset Press Runs", "Digital High-Output", "Large Format Displays"];
  const quickLinks = [
    { href: "/products", label: "Custom Products" },
    { href: "/quote", label: "Request a Quote" },
    { href: "/contact", label: "Contact Support" },
  ];

  return (
    <footer ref={footerRef} className="bg-white dark:bg-zinc-950 border-t border-zinc-200/80 dark:border-zinc-900/60 pt-16 pb-12 text-zinc-900 dark:text-white antialiased relative overflow-hidden">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes popCheck {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .footer-fade-up { opacity: 0; animation: fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .footer-top-bar { background-size: 200% 100%; animation: gradientShift 6s ease infinite; }
        .footer-link-underline { position: relative; }
        .footer-link-underline::after {
          content: '';
          position: absolute;
          left: 0; right: 100%; bottom: -2px;
          height: 1px;
          background: currentColor;
          transition: right 0.3s cubic-bezier(0.65,0,0.35,1);
        }
        .footer-link-underline:hover::after { right: 0; }
        .btn-shine { position: relative; overflow: hidden; isolation: isolate; }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-150%) skewX(-20deg);
          pointer-events: none;
        }
        .btn-shine:hover::after { animation: shine 0.85s ease forwards; }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        .pop-check { animation: popCheck 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .footer-fade-up { opacity: 1; animation: none !important; }
          .footer-top-bar, .btn-shine::after, .pop-check { animation: none !important; }
        }
      `}</style>

      <div className="footer-top-bar absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-400 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-100 dark:border-zinc-900">
          
          {/* COLUMN 1: BRAND MANIFEST & SOCIAL MATRIX */}
          <div className={`space-y-5 ${visible ? "footer-fade-up" : "opacity-0"}`} style={{ animationDelay: "0ms" }}>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-6deg]">
                <Printer className="w-5 h-5" />
              </div>
              <span className="font-black text-base uppercase tracking-wider text-zinc-900 dark:text-white">
                FastPrint<span className="text-indigo-600 dark:text-indigo-400">Pack</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              Leading printing and packaging provider. We deliver uncompromised quality, industrial speed, and certified sustainability across every production run.
            </p>
            
            {/* Hardcoded SVG Icon Map to safely render social circles */}
            <div className="flex gap-2 pt-2">
              {socialIcons.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="w-9 h-9 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all shadow-sm hover:scale-110 hover:-translate-y-0.5 duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: SERVICES DESK */}
          <div className={`space-y-4 ${visible ? "footer-fade-up" : "opacity-0"}`} style={{ animationDelay: "80ms" }}>
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              {services.map((service, idx) => (
                <li key={idx} className="footer-link-underline w-fit hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-black text-indigo-600 dark:text-indigo-400 hover:underline group">
                View All Services <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* COLUMN 3: QUICK PLATFORM LINKS */}
          <div className={`space-y-4 ${visible ? "footer-fade-up" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link-underline w-fit inline-block text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT & NEWSLETTER BLOCK */}
          <div className={`space-y-4 ${visible ? "footer-fade-up" : "opacity-0"}`} style={{ animationDelay: "220ms" }}>
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400">
              Get In Touch
            </h4>
            
            <ul className="space-y-3.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed text-zinc-600 dark:text-zinc-300">101 Queen Street, West Toronto ON M5H 2N1, Canada</span>
              </li>
              <li className="flex gap-3 items-center group">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-mono font-bold text-zinc-700 dark:text-zinc-200">+1 (604) 239-6141</span>
              </li>
              <li className="flex gap-3 items-center group">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-mono truncate text-zinc-700 dark:text-zinc-200">hello@fastprintpack.com</span>
              </li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="pt-2"
            >
              <div className="flex rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-1.5 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-300">
                <input 
                  type="email" 
                  required
                  placeholder="Your email address" 
                  className="bg-transparent px-3 py-2 text-sm w-full focus:outline-none font-medium placeholder-zinc-400 text-zinc-800 dark:text-zinc-100"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="btn-shine bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/10 group hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
              <p className={`text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-2 flex items-center gap-1.5 transition-all duration-300 ${subscribed ? "opacity-100 max-h-6" : "opacity-0 max-h-0 overflow-hidden"}`}>
                <span className="pop-check">✓</span> Thanks — you're on the list.
              </p>
            </form>
          </div>

        </div>

        {/* BOTTOM METRICS BAR */}
        <div className={`flex flex-col sm:flex-row justify-between items-center gap-6 text-sm font-medium text-zinc-400 ${visible ? "footer-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> Mon-Sat: 10:00 AM - 8:00 PM
            </span>
            <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Sunday: Closed
            </span>
          </div>
          <p className="font-mono text-xs text-center sm:text-right text-zinc-400/80">
            &copy; {currentYear} Fast Print Pack. All operational runs preserved under system registry.
          </p>
        </div>

      </div>
    </footer>
  );
}
