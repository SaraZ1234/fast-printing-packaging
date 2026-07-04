// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Printing & Packaging | Premium Commercial Graphics",
  description:
    "Enterprise grade structural packaging, custom boxes, and commercial printing systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white tier-antialiased`}
      >
        <Navbar />

        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923252467463?text=Hello%20I%20would%20like%20to%20get%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-white"
          >
            <path d="M16.001 3C8.82 3 3 8.82 3 16a12.9 12.9 0 0 0 1.76 6.52L3 29l6.67-1.74A13 13 0 1 0 16 3zm0 23.5a10.43 10.43 0 0 1-5.31-1.45l-.38-.23-3.95 1.03 1.06-3.85-.25-.4A10.47 10.47 0 1 1 16 26.5zm5.74-7.83c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.69.16-.2.31-.79 1-.97 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.48-1.54-.91-.81-1.52-1.82-1.7-2.12-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.51.08-.78.38-.26.31-1 1-.1 2.44.9 1.44 2.32 2.83 5.3 4 .7.3 1.25.48 1.68.61.71.22 1.36.19 1.87.12.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36z" />
          </svg>
        </a>

        <Footer />
      </body>
    </html>
  );
}