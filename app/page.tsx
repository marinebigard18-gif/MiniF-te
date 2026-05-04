import Link from "next/link";
import { Gift, PartyPopper, Sparkles, Wand2, ShieldCheck, Heart } from "lucide-react";

const packages = [
  {
    name: "Kit DIY",
    price: "19€ - 39€",
    icon: Gift,
    desc: "Invitations, jeux, checklist, planning et déco imprimable.",
  },
  {
    name: "À la carte",
    price: "Dès 89€",
    icon: Wand2,
    desc: "Choisissez animation, gâteau, décoration, lieu ou aide ponctuelle.",
  },
  {
    name: "Clé en main",
    price: "199€ - 900€",
    icon: PartyPopper,
    desc: "Une formule complète selon l'âge, le thème et le budget.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#fff7f2] text-slate-900">
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100">
              <Sparkles className="h-4 w-4" /> Marketplace locale + agent IA
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Un anniversaire magique pour l'enfant. Une organisation légère pour les parents.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              MiniFête aide les parents à composer un anniversaire d'enfant selon l'âge, le thème, le budget et la ville : kit digital, prestataires vérifiés ou formule clé en main.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/organiser"
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 font-bold text-white shadow-lg shadow-rose-200 hover:bg-rose-600 transition"
              >
                Créer mon anniversaire
              </Link>
              <Link
                href="/themes"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
              >
                Découvrir les thèmes
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-rose-100 ring-1 ring-rose-100">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-pink-100 to-rose-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-2xl bg-white/80 p-3 shadow-sm"><PartyPopper className="h-6 w-6 text-rose-600" /></div>
                <div className="rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-slate-700">Exemple agent</div>
              </div>
              <h2 className="text-2xl font-black">Anniversaire Licorne</h2>
              <p className="mt-2 text-slate-700">8 enfants de 6 ans à Amiens, budget 300€.</p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm">
                  <div className="flex items-center gap-2 font-bold"><Wand2 className="h-4 w-4 text-rose-600" /> Proposition IA</div>
                  <p className="mt-1 text-sm text-slate-600">Animation 1h30, gâteau simple, kit digital et aide installation.</p>
                </div>
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm">
                  <div className="flex items-center gap-2 font-bold"><ShieldCheck className="h-4 w-4 text-blue-600" /> Sécurité</div>
                  <p className="mt-1 text-sm text-slate-600">Présence parent obligatoire, prestataires vérifiés, paiement sécurisé.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <h2 className="text-3xl font-black md:text-4xl mb-8">Nos formules</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-rose-100 hover:shadow-lg transition"
                >
                  <Icon className="h-7 w-7 text-rose-500" />
                  <h3 className="mt-4 text-xl font-black">{p.name}</h3>
                  <p className="mt-1 font-bold text-rose-600">{p.price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-3xl font-black md:text-4xl mb-8 text-center">Pourquoi MiniFête ?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-rose-50 p-6">
                <Heart className="h-8 w-8 text-rose-600 mb-3" />
                <h3 className="font-black text-lg mb-2">Pour les parents</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Organisez un anniversaire mémorable sans stress. Trouvez tous les services en un seul endroit.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50 p-6">
                <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-black text-lg mb-2">Sécurité prioritaire</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Tous les prestataires sont vérifiés. La présence d'un parent est obligatoire.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50 p-6">
                <Sparkles className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="font-black text-lg mb-2">Personnalisé par IA</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Notre agent IA génère une proposition unique adaptée à votre enfant, budget et ville.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-rose-500 to-rose-600 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-black md:text-4xl mb-4">Prêt à organiser l'anniversaire parfait ?</h2>
            <p className="text-rose-100 mb-6 text-lg">
              En 5 minutes, notre agent IA vous prépare une proposition complète et personnalisée.
            </p>
            <Link
              href="/organiser"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-rose-600 hover:bg-rose-50 transition"
            >
              Commencer maintenant
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
