"use client";

import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Pro Badge */}
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-2 group" href="#">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-700 via-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-lg">sync_alt</span>
            </div>
            <span className="font-headline-sm text-lg font-bold text-slate-900 tracking-tight">
              RePurpose<span className="text-indigo-600">.ai</span>
            </span>
          </a>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs uppercase tracking-wider font-semibold">
            Pro
          </span>
        </div>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            href="#cara-kerja"
          >
            Cara Kerja
          </a>
        </nav>

        {/* Status Pill & User Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Engine Aktif</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 p-0.5 ring-2 ring-slate-200 shadow-sm">
              <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                RP
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
