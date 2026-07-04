// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Printing & Packaging | Premium Commercial Graphics",
  description: "Enterprise grade structural packaging, custom boxes, and commercial printing systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white tier-antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}