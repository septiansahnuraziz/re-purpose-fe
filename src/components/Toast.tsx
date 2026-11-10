"use client";

import React from "react";

interface ToastProps {
  message: string | null;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-xl transition-all duration-300 border border-slate-800 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="material-symbols-outlined text-emerald-400 text-xl">
        check_circle
      </span>
      <span className="font-medium text-sm text-slate-100">
        {message || "Berhasil disalin ke papan klip!"}
      </span>
    </div>
  );
};
