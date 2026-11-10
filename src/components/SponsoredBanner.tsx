"use client";

import React, { useState } from "react";

export const SponsoredBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-50/80 via-blue-50/70 to-slate-50 border border-indigo-100 p-3 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          <span>PARTNER</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm sm:text-base text-slate-900 flex items-center gap-1">
            <span className="text-amber-500">⚡</span> SupaScale
          </span>
          <span className="text-slate-400 text-xs hidden md:inline">•</span>
          <p className="text-xs sm:text-sm text-slate-600">
            Lipatgandakan jangkauan organik artikel Anda 10x lebih luas dengan AI SEO terprogram.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <a
          className="px-3 py-1.5 rounded-lg bg-white border border-indigo-200 hover:border-indigo-300 text-indigo-700 hover:bg-indigo-50/50 text-xs sm:text-sm font-medium transition-all flex items-center gap-1 shadow-sm group"
          href="#sponsor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Coba Gratis 14 Hari</span>
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5 text-indigo-600">
            arrow_forward
          </span>
        </a>
        <button
          aria-label="Tutup banner sponsor"
          onClick={() => setVisible(false)}
          className="p-1 rounded hover:bg-indigo-100/60 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </div>
    </div>
  );
};
