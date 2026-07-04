// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Printer, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 dark:bg-zinc-950/80 dark:border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-indigo-600">
            <Printer className="w-6 h-6 stroke-[2.5]" />
            FAST<span className="text-zinc-900 dark:text-white font-light">PRINT</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
            <Link href="/industries" className="hover:text-indigo-600 transition-colors">Industries</Link>
            <Link href="/quote" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/10 hover:bg-indigo-700 transition-all flex items-center gap-1.5">
              Instant Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-900 dark:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 space-y-4 absolute top-20 left-0 w-full shadow-xl">
          <Link href="/services" onClick={() => setIsOpen(false)} className="block font-semibold">Services</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="block font-semibold">Products</Link>
          <Link href="/industries" onClick={() => setIsOpen(false)} className="block font-semibold">Industries</Link>
          <Link href="/quote" onClick={() => setIsOpen(false)} className="block bg-indigo-600 text-white text-center py-3 rounded-xl font-bold">Get an Instant Quote</Link>
        </div>
      )}
    </nav>
  );
}