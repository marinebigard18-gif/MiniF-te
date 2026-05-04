"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "question",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "question", message: "" });
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
            <h1 className="text-3xl font-black mb-3">Merci de votre message !</h1>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Nous avons bien reçu votre message. Notre équipe vous contactera dès que possible.
            </p>
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
      <main className="mx-auto max-w-5xl px-5">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black md:text-5xl mb-3">Nous contacter</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Une question sur MiniFête ? Un problème avec un prestataire ? Nous sommes là pour vous aider !
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {/* Email */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-xl bg-rose-100 p-3">
                <Mail className="h-6 w-6 text-rose-600" />
              </div>
            </div>
            <h3 className="font-black text-lg mb-2">Email</h3>
            <a href="mailto:contact@minifete.fr" className="text-rose-600 hover:text-rose-700 font-semibold">
              contact@minifete.fr
            </a>
            <p className="text-sm text-slate-500 mt-2">Réponse en 24h</p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-xl bg-rose-100 p-3">
                <Phone className="h-6 w-6 text-rose-600" />
              </div>
            </div>
            <h3 className="font-black text-lg mb-2">Téléphone</h3>
            <a href="tel:+33322XXXXXX" className="text-rose-600 hover:text-rose-700 font-semibold">
              +33 (0)3 22 XX XX XX
            </a>
            <p className="text-sm text-slate-500 mt-2">Lun-Sam 9h-18h</p>
          </div>

          {/* Location */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-rose-100 text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-xl bg-rose-100 p-3">
                <MapPin className="h-6 w-6 text-rose-600" />
              </div>
            </div>
            <h3 className="font-black text-lg mb-2">Adresse</h3>
            <p className="text-slate-600 font-semibold">
              Amiens<br />Hauts-de-France, France
            </p>
            <p className="text-sm text-slate-500 mt-2">Siège social</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-rose-100">
            <h2 className="text-2xl font-black mb-6">Envoyez-nous un message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Nom *</span>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Votre nom"
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
                  placeholder="votre@email.fr"
                />
              </label>

              {/* Subject */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Sujet</span>
                <select
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                >
                  <option value="question">Question générale</option>
                  <option value="probleme-prestataire">Problème avec un prestataire</option>
                  <option value="prestataire">Je suis prestataire</option>
                  <option value="bug">Bug ou problème technique</option>
                  <option value="autre">Autre</option>
                </select>
              </label>

              {/* Message */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Message *</span>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="min-h-[150px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder="Dites-nous comment nous pouvons vous aider..."
                />
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
                  <>Envoi en cours...</>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </section>

          {/* FAQ Sidebar */}
          <section className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-rose-100 h-fit">
            <h3 className="text-xl font-black mb-6">Questions fréquentes</h3>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-semibold text-slate-900 group-open:text-rose-600 transition">
                  Comment modifier ma réservation ?
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Contactez directement le prestataire à qui vous avez réservé. MiniFête vous aide à entrer en contact, mais c'est un service direct.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-semibold text-slate-900 group-open:text-rose-600 transition">
                  Y a-t-il des frais cachés ?
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Non. MiniFête est une plateforme gratuite. Vous payez directement le prestataire au tarif convenu.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-semibold text-slate-900 group-open:text-rose-600 transition">
                  Que faire si je ne suis pas satisfait ?
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Contactez-nous avec les détails. Nous investiguerons et vous aiderons à trouver une solution.
                </p>
              </details>

              <div className="mt-8 rounded-xl bg-rose-50 p-4 border border-rose-200">
                <p className="text-sm text-rose-900">
                  <span className="font-semibold">💡 Besoin d'aide ?</span><br />
                  Consultez notre <a href="/faq" className="font-bold text-rose-700 hover:underline">FAQ complète</a> pour plus de réponses.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
