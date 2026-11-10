"use client";

import React from "react";
import { PlatformOutputs } from "@/lib/presets";

interface TelemetryStripProps {
  telemetry: PlatformOutputs["telemetry"];
  onReroll: () => void;
  isGenerating: boolean;
}

export const TelemetryStrip: React.FC<TelemetryStripProps> = ({
  telemetry,
  onReroll,
  isGenerating,
}) => {
  return (
    <div className="rounded-xl bg-slate-100/90 border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
      {/* Left side: Pipeline execution info */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-xl">hub</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm sm:text-base text-slate-900">
              Konten Siap Dipakai!
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {telemetry.wordCount} kata diolah jadi {telemetry.channelCount} format konten siap tayang
          </p>
        </div>
      </div>

      {/* Right side: Telemetry stats & Reroll Button */}
      <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end flex-wrap">
        <div className="text-left md:text-right">
          <span className="block font-code text-xs sm:text-sm text-indigo-600 font-semibold">
            Waktu Proses: {telemetry.latency}
          </span>
          <span className="text-xs text-slate-500">
            Akurasi Konteks: {telemetry.confidence}
          </span>
        </div>

        <div className="text-left md:text-right">
          <span className="block font-code text-xs sm:text-sm text-indigo-600 font-semibold">
            {telemetry.tokens}
          </span>
          <span className="text-xs text-slate-500">
            Deviasi Ide: {telemetry.semanticDeviation}
          </span>
        </div>

        <button
          type="button"
          onClick={onReroll}
          disabled={isGenerating}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 text-slate-800 text-xs sm:text-sm font-medium transition-colors shadow-xs"
        >
          <span
            className={`material-symbols-outlined text-base text-slate-500 ${
              isGenerating ? "animate-spin" : ""
            }`}
          >
            sync
          </span>
          <span>Bikin Variasi Lain</span>
        </button>
      </div>
    </div>
  );
};
