// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Printer, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 border-zinc-200/60 dark:border-zinc-800/80 shadow-sm"
          : "bg-white/80 dark:bg-zinc-950/80 border-zinc-200/50 dark:border-zinc-800/80"
      }`}
    >
      <style>{`
        @keyframes navFadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        .nav-fade-down { animation: navFadeDown 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-item-in { animation: navItemIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-underline {
          position: relative;
        }
        .nav-underline::after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: -4px;
          height: 2px;
          background: currentColor;
          transition: right 0.3s cubic-bezier(0.65,0,0.35,1);
        }
        .nav-underline:hover::after { right: 0; }
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
        .mobile-panel {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-fade-down, .nav-item-in, .btn-shine::after, .nav-underline::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-600 group"
          >
            <Printer className="w-6 h-6 stroke-[2.5] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />
            FAST<span className="text-zinc-900 dark:text-white font-light">PRINT</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-zinc-600 dark:text-zinc-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-underline hover:text-indigo-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="btn-shine bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/10 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
            >
              Instant Quote <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-900 dark:text-white transition-transform duration-300 active:scale-90"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative block w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-panel md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 absolute top-20 left-0 w-full shadow-xl ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-semibold hover:text-indigo-600 transition-colors ${isOpen ? "nav-item-in" : ""}`}
              style={{ animationDelay: isOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className={`btn-shine block bg-indigo-600 text-white text-center py-3 rounded-xl font-bold ${isOpen ? "nav-item-in" : ""}`}
            style={{ animationDelay: isOpen ? `${navLinks.length * 60}ms` : "0ms" }}
          >
            Get an Instant Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
