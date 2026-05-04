import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black mb-3">MiniFête ✨</h3>
            <p className="text-slate-400 text-sm leading-6">
              Organisez un anniversaire d'enfant sans charge mentale avec nos prestataires vérifiés et notre agent IA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition">Accueil</Link></li>
              <li><Link href="/organiser" className="text-slate-400 hover:text-white transition">Créer un anniversaire</Link></li>
              <li><Link href="/themes" className="text-slate-400 hover:text-white transition">Thèmes</Link></li>
              <li><Link href="/prestataires" className="text-slate-400 hover:text-white transition">Prestataires</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-slate-400 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/devenir-prestataire" className="text-slate-400 hover:text-white transition">Devenir prestataire</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@minifete.fr" className="text-slate-400 hover:text-white transition">contact@minifete.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-slate-400">+33 (0)3 22 XX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-slate-400">Amiens, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-400">
            <p>&copy; {currentYear} MiniFête. Tous droits réservés.</p>
            <div className="flex gap-4 justify-end">
              <Link href="#" className="hover:text-white transition">Mention légale</Link>
              <Link href="#" className="hover:text-white transition">Confidentialité</Link>
              <Link href="#" className="hover:text-white transition">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
