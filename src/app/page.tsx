"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SponsoredBanner } from "@/components/SponsoredBanner";
import { HeroSection } from "@/components/HeroSection";
import { WorkbenchInput } from "@/components/WorkbenchInput";
import { TelemetryStrip } from "@/components/TelemetryStrip";
import { OutputGrid } from "@/components/OutputGrid";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";
import {
  DEFAULT_RAW_TEXT,
  PRESETS_DATA,
  ToneId,
  PlatformOutputs,
} from "@/lib/presets";

export default function Home() {
  const [rawText, setRawText] = useState(DEFAULT_RAW_TEXT);
  const [selectedTone, setSelectedTone] = useState<ToneId>("viral");
  const [selectedAudience, setSelectedAudience] = useState(
    "Founder & Solo Creator"
  );
  const [outputs, setOutputs] = useState<PlatformOutputs>(
    PRESETS_DATA["viral"]
  );

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingStep, setGeneratingStep] = useState(
    "Membaca pesan utama & sudut pandang..."
  );

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Helper to trigger toast notification
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2500);
  };

  // Tone switch handler
  const handleToneChange = (tone: ToneId) => {
    setSelectedTone(tone);
    const newOutputs = PRESETS_DATA[tone];
    setOutputs(newOutputs);
    triggerToast(
      `Gaya bahasa diubah: ${
        tone === "viral"
          ? "🔥 Singkat & Nendang"
          : tone === "executive"
          ? "👔 Otoritas & Profesional"
          : "🎓 Bedah Tuntas & Edukatif"
      }`
    );
  };

  // ===========================================================================
  // 🔗 [TITIK INTEGRASI API #2]: GENERASI KONTEN MULTI-PLATFORM (LLM ENGINE)
  // Endpoint: POST /api/content/generate (atau SSE streaming)
  // Payload: { rawText: string, tone: ToneId, audience: string }
  // Response: { success: boolean, data: PlatformOutputs }
  // Fungsi Client: apiGenerateContent(...) di src/lib/api.ts
  // ===========================================================================
  const handleGenerate = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setGeneratingStep("Membaca pesan utama & sudut pandang...");

    try {
      // TODO: Ganti simulasi di bawah dengan pemanggilan API nyata:
      // const res = await apiGenerateContent({
      //   rawText,
      //   tone: selectedTone,
      //   audience: selectedAudience,
      // });
      // setOutputs(res.data);

      setTimeout(() => {
        setGeneratingStep("Menata format khusus tiap sosmed...");
      }, 600);

      setTimeout(() => {
        const basePreset = PRESETS_DATA[selectedTone];
        const wordCount = rawText.trim() ? rawText.trim().split(/\s+/).length : 0;

        // Dynamically reflect current words and compute random realistic tokens/latency
        const updatedOutputs: PlatformOutputs = {
          ...basePreset,
          telemetry: {
            ...basePreset.telemetry,
            wordCount: wordCount > 0 ? wordCount : basePreset.telemetry.wordCount,
            latency: `${(1.1 + Math.random() * 0.4).toFixed(2)} dtk`,
            tokens: `${Math.floor(750 + Math.random() * 200)} Token`,
          },
        };

        setOutputs(updatedOutputs);
        setIsGenerating(false);
        triggerToast("✨ 15+ Konten Medsos berhasil diracik!");
      }, 1200);
    } catch (err) {
      console.error("Gagal melakukan generasi konten:", err);
      setIsGenerating(false);
      triggerToast("❌ Gagal memproses konten. Coba beberapa saat lagi.");
    }
  };

  // ===========================================================================
  // 🔗 [TITIK INTEGRASI API #3]: ACAK ULANG VARIASI KONTEN (REROLL)
  // Endpoint: POST /api/content/reroll
  // Payload: { rawText: string, tone: ToneId, audience: string }
  // Response: { success: boolean, data: PlatformOutputs }
  // Fungsi Client: apiRerollContent(...) di src/lib/api.ts
  // ===========================================================================
  const handleReroll = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGeneratingStep("Meracik variasi sudut pandang baru...");

    try {
      // TODO: Ganti simulasi di bawah dengan pemanggilan API nyata:
      // const res = await apiRerollContent({
      //   rawText,
      //   tone: selectedTone,
      //   audience: selectedAudience,
      // });
      // setOutputs(res.data);

      setTimeout(() => {
        const basePreset = PRESETS_DATA[selectedTone];
        setOutputs({
          ...basePreset,
          telemetry: {
            ...basePreset.telemetry,
            latency: `${(1.0 + Math.random() * 0.3).toFixed(2)} dtk`,
            tokens: `${Math.floor(800 + Math.random() * 150)} Token`,
          },
        });
        setIsGenerating(false);
        triggerToast("✨ Variasi konten baru siap dipakai!");
      }, 850);
    } catch (err) {
      console.error("Gagal mengacak ulang variasi:", err);
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 pb-12 bg-background flex-1">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* 1. Sponsored Leaderboard Banner */}
          <SponsoredBanner />

          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. Centered Input Workbench */}
          <WorkbenchInput
            rawText={rawText}
            setRawText={setRawText}
            selectedTone={selectedTone}
            onToneChange={handleToneChange}
            selectedAudience={selectedAudience}
            setSelectedAudience={setSelectedAudience}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            generatingStep={generatingStep}
          />

          {/* 4. Generation Status & Telemetry Strip */}
          <TelemetryStrip
            telemetry={outputs.telemetry}
            onReroll={handleReroll}
            isGenerating={isGenerating}
          />

          {/* 5. Output Workspace: 3 Columns (X Thread, LinkedIn, Short Video Script) */}
          <OutputGrid outputs={outputs} onCopySuccess={triggerToast} />
        </div>
      </main>

      <Footer />

      {/* Global Toast Feedback */}
      <Toast message={toastMessage} visible={isToastVisible} />
    </>
  );
}
