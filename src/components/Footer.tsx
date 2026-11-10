"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-base font-bold text-slate-900">
                RePurpose<span className="text-indigo-600">.ai</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-indigo-700 font-code text-xs font-medium">
                v2.4-stream
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Asisten cerdas repurposi konten buat kreator, founder, dan tim marketing.
            </p>
          </div>

          {/* Links & API Status */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <a
              className="hover:text-slate-900 transition-colors"
              href="#kebijakan-privasi"
            >
              Kebijakan Privasi
            </a>
            <a
              className="hover:text-slate-900 transition-colors"
              href="#ketentuan-layanan"
            >
              Ketentuan Layanan
            </a>
            {/* ===================================================================
                🔗 [TITIK INTEGRASI API #4 (LANJUTAN)]: SISTEM API & STATUS SERVER
                Endpoint: GET /api/system/status
                Data ini bisa di-fetch secara periodik (misal polling tiap 60s)
            =================================================================== */}
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Semua Sistem Normal</span>
            </div>
          </div>

          {/* Icon Quick Actions */}
          <div className="flex items-center gap-2">
            <a
              aria-label="Dokumentasi Terminal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              href="#docs"
            >
              <span className="material-symbols-outlined text-xl">terminal</span>
            </a>
            <a
              aria-label="Pembaruan Komunitas"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              href="#community"
            >
              <span className="material-symbols-outlined text-xl">forum</span>
            </a>
            <a
              aria-label="Pusat Bantuan"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              href="#support"
            >
              <span className="material-symbols-outlined text-xl">
                contact_support
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© 2025 RePurpose.ai. Didesain untuk kreator dan tim yang bergerak cepat.</p>
          <p className="font-code text-slate-400">
            SERVER: US-EAST • RESPON: 24ms
          </p>
        </div>
      </div>
    </footer>
  );
};
