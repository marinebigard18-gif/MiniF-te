"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-rose-600">
            MiniFête ✨
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Accueil
            </Link>
            <Link href="/organiser" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Organiser
            </Link>
            <Link href="/themes" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Thèmes
            </Link>
            <Link href="/prestataires" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Prestataires
            </Link>
            <Link href="/faq" className="font-medium text-slate-700 hover:text-rose-600 transition">
              FAQ
            </Link>
            <Link href="/contact" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/organiser"
              className="rounded-full bg-rose-500 px-6 py-2 font-bold text-white hover:bg-rose-600 transition"
            >
              Créer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 md:hidden">
            <Link href="/" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Accueil
            </Link>
            <Link href="/organiser" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Organiser
            </Link>
            <Link href="/themes" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Thèmes
            </Link>
            <Link href="/prestataires" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Prestataires
            </Link>
            <Link href="/faq" className="font-medium text-slate-700 hover:text-rose-600 transition">
              FAQ
            </Link>
            <Link href="/contact" className="font-medium text-slate-700 hover:text-rose-600 transition">
              Contact
            </Link>
            <Link
              href="/organiser"
              className="rounded-full bg-rose-500 px-6 py-2 font-bold text-white hover:bg-rose-600 transition text-center"
            >
              Créer un anniversaire
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
