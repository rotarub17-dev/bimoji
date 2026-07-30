"use client";

import { useState } from "react";
import { categories, stickers, type Category } from "@/data/stickers";

export default function Gallery() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All"
      ? stickers
      : stickers.filter((s) => s.category === active);

  return (
    <section id="categories" className="px-6 py-16">
      <div id="gallery" className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-semibold text-gradient md:text-5xl">
            Categorii
          </h2>
          <p className="mt-3 text-rose-400/80">
            Alege o categorie și descoperă stickerele potrivite stării tale.
          </p>
        </div>

        {/* chips */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActive("All")}
            className={`chip ${active === "All" ? "chip-active" : "chip-idle"}`}
          >
            Toate
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`chip ${active === c ? "chip-active" : "chip-idle"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((s, i) => (
            <article
              key={s.id}
              className="group relative animate-pop overflow-hidden rounded-4xl border border-white/60 bg-white/70 p-6 text-center shadow-sm shadow-rose-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blush-200/40"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br ${s.accent} text-5xl transition-transform duration-300 group-hover:scale-110 md:h-32 md:w-32 md:text-6xl`}
              >
                {s.emoji}
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-rose-500">
                {s.name}
              </h3>
              <span className="mt-1 inline-block rounded-full bg-blush-50 px-3 py-1 text-xs font-medium text-blush-500">
                {s.category}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
