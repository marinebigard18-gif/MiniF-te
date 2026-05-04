"use client";

import { useState } from "react";
import { Wand2, Sparkles, CheckCircle2, AlertCircle, Loader } from "lucide-react";
import { themes } from "@/lib/data";

export default function OrganiserPage() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    city: "Amiens",
    childAge: "6",
    numberOfChildren: "8",
    budget: "300",
    date: "",
    place: "domicile",
    helpLevel: "a-la-carte",
    theme: "licorne",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function generatePlan() {
    setError("");
    setSuccess(false);
    
    if (!form.parentName || !form.email || !form.date) {
      setError("Veuillez remplir au minimum le prénom, email et date.");
      return;
    }

    if (form.email && !form.email.includes("@")) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    setPlan("");

    try {
      const res = await fetch("/api/minifete-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        setError(data.error || "Erreur : impossible de générer la proposition MiniFête. Vérifiez votre clé API OpenAI.");
        return;
      }

      setPlan(data.plan);
      setSuccess(true);
    } catch (err) {
      setError("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#fff7f2] text-slate-900 min-h-screen py-10">
      <main className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black md:text-5xl mb-3">Créer un anniversaire unique</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Répondez à quelques questions sur votre enfant, son âge, le budget et le thème. Notre agent IA vous prépare une proposition complète et personnalisée en quelques secondes.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 flex items-start gap-3 rounded-2xl bg-blue-50 p-5 border border-blue-200">
          <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-900 mb-1">⚠️ Point important sur la sécurité</p>
            <p className="text-sm text-blue-900 leading-6">
              <strong>MiniFête n'est pas un service de garde d'enfants.</strong> La présence d'un parent ou d'un responsable légal est <strong>obligatoire</strong> pendant toute la durée de l'anniversaire. Notre rôle est de vous aider à organiser une fête mémorable, pas de remplacer la supervision parentale.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Formulaire */}
          <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-rose-100 ring-1 ring-rose-100">
            <h2 className="text-2xl font-black mb-6">Votre projet d'anniversaire</h2>
            
            <div className="grid gap-5 md:grid-cols-2">
              {/* Prénom */}
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Prénom du parent *</span>
                <input
                  value={form.parentName}
                  onChange={(e) => update("parentName", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Marine"
                />
              </label>

              {/* Email */}
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Email *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="parent@email.fr"
                />
              </label>

              {/* Ville */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Ville</span>
                <input
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Amiens"
                />
              </label>

              {/* Âge */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Âge de l'enfant</span>
                <input
                  type="number"
                  min="1"
                  max="18"
                  value={form.childAge}
                  onChange={(e) => update("childAge", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                />
              </label>

              {/* Nombre d'enfants */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Nombre d'enfants</span>
                <input
                  type="number"
                  min="1"
                  value={form.numberOfChildren}
                  onChange={(e) => update("numberOfChildren", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                />
              </label>

              {/* Budget */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Budget (€)</span>
                <input
                  type="number"
                  min="0"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                />
              </label>

              {/* Date */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Date de l'anniversaire *</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                />
              </label>

              {/* Lieu */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Lieu</span>
                <select
                  value={form.place}
                  onChange={(e) => update("place", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  <option value="domicile">À domicile</option>
                  <option value="salle">Salle des fêtes</option>
                  <option value="exterieur">En extérieur (parc, jardin)</option>
                  <option value="parc-indoor">Parc indoor / Loisirs</option>
                </select>
              </label>

              {/* Thème */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Thème de l'anniversaire</span>
                <select
                  value={form.theme}
                  onChange={(e) => update("theme", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  {themes.map((theme) => (
                    <option key={theme.id} value={theme.id}>
                      {theme.name} ({theme.age})
                    </option>
                  ))}
                </select>
              </label>

              {/* Niveau d'aide */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Type d'aide souhaitée</span>
                <select
                  value={form.helpLevel}
                  onChange={(e) => update("helpLevel", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  <option value="kit">Kit DIY (je fais presque tout)</option>
                  <option value="a-la-carte">À la carte (animation + gâteau + déco)</option>
                  <option value="cle-en-main">Clé en main (tout organisé)</option>
                </select>
              </label>

              {/* Notes */}
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Détails ou demandes spéciales</span>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Ex : enfant allergique, besoin d'aide pour installer la déco et ranger après, animation 2 heures..."
                />
              </label>

              {/* Error Message */}
              {error && (
                <div className="md:col-span-2 flex items-start gap-3 rounded-xl bg-red-50 p-4 border border-red-200">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  onClick={generatePlan}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4 font-bold text-white shadow-lg shadow-rose-200 hover:from-rose-600 hover:to-rose-700 disabled:opacity-60 transition"
                >
                  {loading ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-5 w-5" />
                      Générer ma proposition personnalisée
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Proposition IA */}
          <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-rose-100 ring-1 ring-rose-100 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-xl bg-rose-100 p-3">
                <Sparkles className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Votre proposition IA</h2>
                <p className="text-sm text-slate-500">Personnalisée en fonction de vos réponses</p>
              </div>
            </div>

            {!plan && !loading && (
              <div className="rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 p-6 border border-rose-200 text-slate-700 text-sm leading-6">
                <p className="font-semibold mb-3">📋 Comment ça marche ?</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                  <li>Remplissez le formulaire à gauche</li>
                  <li>Cliquez sur "Générer ma proposition"</li>
                  <li>Recevez une recommandation complète : budget, animations, prestataires</li>
                  <li>Contactez directement les prestataires pour confirmer</li>
                </ol>
              </div>
            )}

            {loading && (
              <div className="rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 p-6 border border-rose-200">
                <div className="flex items-center gap-3 mb-3">
                  <Loader className="h-5 w-5 text-rose-600 animate-spin" />
                  <p className="font-semibold text-slate-700">Votre agent IA prépare votre proposition...</p>
                </div>
                <p className="text-sm text-slate-600">Cela prend généralement 5-10 secondes.</p>
              </div>
            )}

            {plan && success && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 border border-emerald-200 font-semibold text-emerald-800">
                  <CheckCircle2 className="h-5 w-5" /> Proposition générée avec succès !
                </div>
                <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                  <div className="whitespace-pre-wrap leading-7 text-slate-800 text-sm font-mono">
                    {plan}
                  </div>
                </div>
                <div className="rounded-xl bg-blue-50 p-4 border border-blue-200 text-sm text-blue-900">
                  <p className="font-semibold mb-2">📞 Prochaine étape</p>
                  <p>Allez sur <a href="/prestataires" className="font-bold text-blue-700 hover:underline">notre annuaire de prestataires</a> pour contacter directement les professionnels recommandés.</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
