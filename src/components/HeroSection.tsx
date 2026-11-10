"use client";

import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-4 pt-2">
      {/* Model Orchestration Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs shadow-sm">
        <span className="material-symbols-outlined text-indigo-600 text-base">
          auto_awesome
        </span>
        <span className="font-medium">Mesin Repurposi AI v2.4</span>
        <span className="text-slate-300">•</span>
        <span className="text-indigo-600 font-semibold">
          Didukung Claude 3.5 & GPT-4o
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 font-extrabold leading-tight sm:leading-tight">
        Sulap 1 Tulisan Panjang Jadi{" "}
        <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
          15+ Konten Medsos Siap Tayang
        </span>{" "}
        dalam Hitungan Detik.
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Tinggal tempel draf artikel, newsletter, atau transkrip video. Dapatkan thread X
        yang nagih dibaca, postingan LinkedIn berbobot, dan naskah video pendek anti-skip
        tanpa perlu repot menyusun ulang dari nol.
      </p>

      {/* Value Proposition Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-600">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
          <span className="material-symbols-outlined text-indigo-600 text-base">
            bolt
          </span>
          <span>Gaya Bahasa Alami & Anti-Kaku</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
          <span className="material-symbols-outlined text-blue-600 text-base">
            equalizer
          </span>
          <span>Format Presisi Sesuai Limit Sosmed</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
          <span className="material-symbols-outlined text-indigo-600 text-base">
            schedule
          </span>
          <span>Hemat 8,5 Jam Tiap Minggu</span>
        </div>
      </div>
    </div>
  );
};
