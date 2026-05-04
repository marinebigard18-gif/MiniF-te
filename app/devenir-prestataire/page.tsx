"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle2, Loader } from "lucide-react";

export default function BecomeProviderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Amiens",
    serviceType: "animation",
    description: "",
    experience: "",
    references: "",
    insurance: "",
    agreedTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(key: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!form.agreedTerms) {
      setError("Vous devez accepter les conditions pour continuer.");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "Amiens",
        serviceType: "animation",
        description: "",
        experience: "",
        references: "",
        insurance: "",
        agreedTerms: false,
      });
    } catch (err) {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#fff7f2] text-slate-900 min-h-screen py-10">
        <main className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl bg-white p-12 text-center shadow-xl ring-1 ring-rose-100">
            <div className="flex justify-center mb-6">
              <div className="rounded-2xl bg-emerald-100 p-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl font-black mb-3">Merci de votre intérêt !</h1>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Votre demande d'inscription a bien été reçue. Notre équipe examinera votre profil et vous contactera dans les 48 heures.
            </p>
            <div className="rounded-xl bg-blue-50 p-4 border border-blue-200 text-left mb-6">
              <p className="font-semibold text-blue-900 mb-2">Nous contrôlons :</p>
              <ul className="text-sm text-blue-900 space-y-1 list-disc list-inside">
                <li>Vos références et expérience</li>
                <li>Votre couverture d'assurance</li>
                <li>Vos antécédents</li>
                <li>Votre engagement envers la sécurité</li>
              </ul>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-3 font-bold text-white hover:bg-rose-600 transition"
            >
              Retour à l'accueil
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#fff7f2] text-slate-900 min-h-screen py-10">
      <main className="mx-auto max-w-4xl px-5">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black md:text-5xl mb-3">Devenir prestataire MiniFête</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Rejoignez notre réseau de prestataires vérifiés et développez votre clientèle. Nous mettrons en avant votre expertise auprès des parents de la région.
          </p>
        </div>

        {/* Security Notice */}
        <div className="mb-8 rounded-2xl bg-yellow-50 p-6 border border-yellow-200">
          <h3 className="font-bold text-yellow-900 mb-2">🔒 Notre engagement pour la sécurité</h3>
          <p className="text-sm text-yellow-900 leading-6">
            MiniFête applique des contrôles stricts sur tous ses prestataires. Vous devrez fournir des références vérifiables, justifier d'une assurance responsabilité civile et accepter nos standards de sécurité. La sécurité des enfants est notre priorité absolue.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Form */}
          <section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-rose-100">
            <h2 className="text-2xl font-black mb-6">Votre candidature</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Nom complet / Nom de l'entreprise *</span>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="ex: Sarah Animation"
                />
              </label>

              {/* Email */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Email *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="contact@email.fr"
                />
              </label>

              {/* Phone */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Téléphone *</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="+33 6 XX XX XX XX"
                />
              </label>

              {/* City */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Ville d'activité</span>
                <input
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Amiens"
                />
              </label>

              {/* Service Type */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Type de service</span>
                <select
                  value={form.serviceType}
                  onChange={(e) => update("serviceType", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  <option value="animation">Animation / Activités</option>
                  <option value="gateau">Gâteau / Pâtisserie</option>
                  <option value="decoration">Décoration / Ballons</option>
                  <option value="photographie">Photographie / Vidéo</option>
                  <option value="location">Location d'équipements</option>
                  <option value="aide">Aide logistique</option>
                  <option value="autre">Autre</option>
                </select>
              </label>

              {/* Description */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Présentation de votre service</span>
                <textarea
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  className="min-h-[100px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Décrivez votre service, ce que vous proposez, votre approche..."
                />
              </label>

              {/* Experience */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Expérience et formation</span>
                <textarea
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                  className="min-h-[80px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="ex: 5 ans d'expérience, formation en animation, diplôme..."
                />
              </label>

              {/* References */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Références (clients précédents)</span>
                <textarea
                  value={form.references}
                  onChange={(e) => update("references", e.target.value)}
                  className="min-h-[80px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Donnez-nous des contacts que nous pouvons appeler pour vérifier votre travail."
                />
              </label>

              {/* Insurance */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Assurance responsabilité civile</span>
                <select
                  value={form.insurance}
                  onChange={(e) => update("insurance", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="oui">Oui, j'ai une assurance RC</option>
                  <option value="en-cours">En cours d'obtention</option>
                  <option value="non">Non, mais je peux l'obtenir</option>
                </select>
              </label>

              {/* Terms */}
              <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <input
                  type="checkbox"
                  checked={form.agreedTerms}
                  onChange={(e) => update("agreedTerms", e.target.checked)}
                  className="mt-1 rounded"
                />
                <div className="text-sm">
                  <p className="text-slate-700">
                    J'accepte les conditions de MiniFête et m'engage à respecter les standards de sécurité et de qualité. *
                  </p>
                </div>
              </label>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 border border-red-200">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4 font-bold text-white shadow-lg shadow-rose-200 hover:from-rose-600 hover:to-rose-700 disabled:opacity-60 transition"
              >
                {loading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Envoyer ma candidature
                  </>
                )}
              </button>
            </form>
          </section>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Why Join */}
            <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100">
              <h3 className="text-xl font-black mb-4">Pourquoi rejoindre MiniFête ?</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Accès à une base de clients régulière et qualifiée</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Visibility locale (annuaire + site web)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Pas de commission sur les transactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Vérification et sécurité (renforce votre crédibilité)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Support MiniFête pour vos questions</span>
                </li>
              </ul>
            </section>

            {/* Process */}
            <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100">
              <h3 className="text-xl font-black mb-4">Notre processus</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-600">1</div>
                  <div>
                    <p className="font-semibold text-slate-900">Candidature</p>
                    <p className="text-sm text-slate-600">Vous envoyez votre formulaire</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-600">2</div>
                  <div>
                    <p className="font-semibold text-slate-900">Vérification</p>
                    <p className="text-sm text-slate-600">On contrôle vos références et assurance</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-600">3</div>
                  <div>
                    <p className="font-semibold text-slate-900">Validation</p>
                    <p className="text-sm text-slate-600">Vous êtes accepté(e) au réseau</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-600">4</div>
                  <div>
                    <p className="font-semibold text-slate-900">Activité</p>
                    <p className="text-sm text-slate-600">Les parents peuvent vous contacter</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
