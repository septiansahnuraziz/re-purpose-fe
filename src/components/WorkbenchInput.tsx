"use client";

import React, { useState, useEffect } from "react";
import { TONES, ToneId, AUDIENCE_PROFILES } from "@/lib/presets";

interface WorkbenchInputProps {
  rawText: string;
  setRawText: (text: string) => void;
  selectedTone: ToneId;
  onToneChange: (tone: ToneId) => void;
  selectedAudience: string;
  setSelectedAudience: (audience: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  generatingStep: string;
}

export const WorkbenchInput: React.FC<WorkbenchInputProps> = ({
  rawText,
  setRawText,
  selectedTone,
  onToneChange,
  selectedAudience,
  setSelectedAudience,
  onGenerate,
  isGenerating,
  generatingStep,
}) => {
  const [activeTab, setActiveTab] = useState<"text" | "url">("text");
  const [urlInput, setUrlInput] = useState("");
  const [isExtractingUrl, setIsExtractingUrl] = useState(false);

  // Calculate word count
  const wordCount = rawText.trim() ? rawText.trim().split(/\s+/).length : 0;
  const isOptimalDensity = wordCount >= 150;

  // Handle URL Extraction Simulation
  const handleExtractUrl = () => {
    if (!urlInput.trim()) return;
    setIsExtractingUrl(true);
    setTimeout(() => {
      setRawText(
        `[Artikel Diambil dari: ${urlInput}]\n\nMembangun Monopoli Personal di Era AI:\nDi tengah maraknya konten instan berbasis AI, batas antara opini umum dan keahlian sejati semakin kentara. Mengandalkan tips generik kini jadi strategi yang cepat usang. Para kreator dengan retensi tertinggi beralih ke formulasi vertikal mikro yang menggabungkan 2 atau 3 keahlian berbeda menjadi satu positioning yang tak tergantikan.`
      );
      setIsExtractingUrl(false);
      setActiveTab("text");
    }, 800);
  };

  // Keyboard shortcut listener for Cmd/Ctrl + Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        if (!isGenerating) {
          onGenerate();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onGenerate, isGenerating]);

  return (
    <div className="relative rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-slate-200/90">
      {/* Soft ambient glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-100/60 via-blue-100/40 to-indigo-100/60 rounded-2xl blur-lg -z-10 pointer-events-none" />

      {/* Mode Selector Tabs & Word Count */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4">
        <div className="inline-flex p-1 rounded-lg bg-slate-100 text-sm border border-slate-200/70">
          <button
            type="button"
            onClick={() => setActiveTab("text")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium text-xs sm:text-sm ${
              activeTab === "text"
                ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="material-symbols-outlined text-base text-indigo-600">
              article
            </span>
            <span>Tempel Draf / Transkrip</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("url")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium text-xs sm:text-sm ${
              activeTab === "url"
                ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span className="material-symbols-outlined text-base">link</span>
            <span>Tarik dari Link / URL</span>
          </button>
        </div>

        <div className="flex items-center gap-1 text-slate-500 text-xs">
          <span className="material-symbols-outlined text-base text-indigo-600">
            memory
          </span>
          <span className="font-code font-medium text-slate-600">
            {wordCount} Kata ({isOptimalDensity ? "Panjang Ideal" : "Min. ~150 Kata"})
          </span>
        </div>
      </div>

      {/* Raw text / URL container */}
      <div className="space-y-4">
        {activeTab === "url" && (
          <div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <div className="flex items-center gap-2 flex-1 px-2">
                <span className="material-symbols-outlined text-slate-400">
                  language
                </span>
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://websiteanda.com/blog/artikel-terbaru"
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={handleExtractUrl}
                disabled={isExtractingUrl}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs sm:text-sm font-medium whitespace-nowrap shadow-sm transition-colors flex items-center justify-center gap-1"
              >
                {isExtractingUrl ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Mengambil data...</span>
                  </>
                ) : (
                  <span>Ambil Konten</span>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-1">
              Tempel link artikel blog atau newsletter Substack untuk mengekstrak naskah intinya secara otomatis.
            </p>
          </div>
        )}

        <div className="relative">
          <textarea
            rows={7}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Tempel draf artikel, newsletter, atau transkrip video Anda di sini (disarankan minimal 150 kata agar hasilnya maksimal)..."
            className="w-full rounded-xl bg-slate-50/70 border border-slate-200 p-4 text-slate-800 placeholder:text-slate-400 text-sm sm:text-base leading-relaxed focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-50 transition-all resize-y shadow-inner font-sans"
          />
        </div>
      </div>

      {/* Content Configuration Matrix */}
      <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Tone Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs text-slate-600 uppercase tracking-wider font-semibold">
            Pilihan Gaya Bahasa
          </label>
          <div className="flex flex-wrap gap-1.5">
            {TONES.map((tone) => {
              const isSelected = selectedTone === tone.id;
              return (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => onToneChange(tone.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200/70"
                  }`}
                >
                  {tone.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Target Profile Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs text-slate-600 uppercase tracking-wider font-semibold">
            Target Audiens Utama
          </label>
          <div className="relative">
            <select
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:bg-white appearance-none cursor-pointer transition-colors shadow-sm font-medium pr-8"
            >
              {AUDIENCE_PROFILES.map((profile) => (
                <option key={profile} value={profile}>
                  {profile}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-slate-400 pointer-events-none text-lg">
              expand_more
            </span>
          </div>
        </div>

        {/* Trigger Button */}
        <div className="flex flex-col justify-end pt-1 md:pt-0">
          <label className="hidden md:block text-xs text-transparent select-none">
            Mulai
          </label>
          <button
            type="button"
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:opacity-75 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] group"
          >
            {isGenerating ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>{generatingStep}</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform">
                  bolt
                </span>
                <span>Racik Jadi 15+ Konten Medsos</span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/50 font-code text-xs text-indigo-100 font-medium">
                  ⌘⏎
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
