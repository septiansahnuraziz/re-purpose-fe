"use client";

import React, { useState } from "react";
import { PlatformOutputs } from "@/lib/presets";

interface OutputGridProps {
  outputs: PlatformOutputs;
  onCopySuccess: (message: string) => void;
}

export const OutputGrid: React.FC<OutputGridProps> = ({ outputs, onCopySuccess }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string, keyId?: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    if (keyId) {
      setCopiedId(keyId);
      setTimeout(() => setCopiedId(null), 2000);
    }
    onCopySuccess(label);
  };

  // Helper to compile full thread text
  const getFullThreadText = () => {
    return outputs.tweets
      .map((t) => `${t.stage} (${t.charCount}/280):\n${t.content}`)
      .join("\n\n---\n\n");
  };

  // Helper to compile full LinkedIn text
  const getFullLinkedinText = () => {
    const l = outputs.linkedin;
    return `${l.headline}\n\n${l.hook}\n\n${l.context.join("\n\n")}\n\n${l.frameworkTitle}\n${l.frameworkPoints
      .map((p) => `→ ${p.bold} ${p.desc}`)
      .join("\n")}\n\n${l.closingQuestion}\n\n${l.hashtags.join(" ")}`;
  };

  // Helper to compile full video script text
  const getFullScriptText = () => {
    const s = outputs.videoScript;
    return `${s.audioGuide} | ${s.targetDuration}\n\n` +
      s.blocks
        .map(
          (b) =>
            `${b.timeRange} ${b.title} (${b.tag})\n${b.visualCue}\n${b.dialogue}`
        )
        .join("\n\n");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* =========================================================================
          COLUMN 1: TWITTER / X THREAD
      ========================================================================= */}
      <div className="flex flex-col rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
              𝕏
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-slate-900">
                Thread Twitter / X
              </h2>
              <span className="text-xs text-indigo-600 font-medium">
                {outputs.tweets.length} Tweet Bersambung
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              copyToClipboard(
                getFullThreadText(),
                "✓ Seluruh thread Twitter / X berhasil disalin!",
                "thread-full"
              )
            }
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 text-xs font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {copiedId === "thread-full" ? "check" : "content_copy"}
            </span>
            <span>{copiedId === "thread-full" ? "Tersalin!" : "Salin Utas"}</span>
          </button>
        </div>

        {/* Thread Items List */}
        <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[640px] pr-1 custom-scrollbar">
          {outputs.tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-2 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-code text-indigo-600 font-semibold">
                  {tweet.stage}
                </span>
                <span className="font-code text-slate-400">
                  {tweet.charCount}/280
                </span>
              </div>

              <p className="text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                {tweet.content}
              </p>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      tweet.content,
                      "✓ Tweet berhasil disalin!",
                      `tweet-${tweet.id}`
                    )
                  }
                  className="text-slate-500 hover:text-indigo-600 text-xs flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedId === `tweet-${tweet.id}` ? "check" : "content_copy"}
                  </span>
                  <span>
                    {copiedId === `tweet-${tweet.id}` ? "Tersalin" : "Salin"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          COLUMN 2: LINKEDIN DWELL POST
      ========================================================================= */}
      <div className="flex flex-col rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center text-white font-bold text-sm">
              <span>in</span>
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-slate-900">
                Postingan LinkedIn
              </h2>
              <span className="text-xs text-indigo-600 font-medium">
                Optimasi Waktu Baca (Dwell-Time)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              copyToClipboard(
                getFullLinkedinText(),
                "✓ Naskah LinkedIn siap posting disalin!",
                "linkedin-post"
              )
            }
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 text-xs font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {copiedId === "linkedin-post" ? "check" : "content_copy"}
            </span>
            <span>
              {copiedId === "linkedin-post" ? "Tersalin!" : "Salin Postingan"}
            </span>
          </button>
        </div>

        {/* Post Content Preview Container */}
        <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-3.5 flex-1 overflow-y-auto max-h-[640px] custom-scrollbar">
          {/* Meta stats */}
          <div className="flex items-center justify-between pb-2 text-xs text-slate-500 border-b border-slate-200/60">
            <span>
              {outputs.linkedin.wordCount} Kata • {outputs.linkedin.readTime}
            </span>
            <span className="text-indigo-600 font-medium">
              Hook sebelum tombol &quot;...lihat lainnya&quot;
            </span>
          </div>

          {/* Formatted body */}
          <div className="text-sm text-slate-800 space-y-2.5 leading-relaxed">
            <p className="font-bold text-slate-900">
              {outputs.linkedin.headline}
            </p>

            <p className="text-slate-600">{outputs.linkedin.hook}</p>

            <p className="text-slate-400 italic text-xs py-0.5">
              {outputs.linkedin.foldNote}
            </p>

            {outputs.linkedin.context.map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}

            <p className="font-semibold text-slate-900 pt-1">
              {outputs.linkedin.frameworkTitle}
            </p>

            <div className="space-y-1.5 pl-1 text-slate-700">
              {outputs.linkedin.frameworkPoints.map((pt, i) => (
                <p key={i}>
                  → <strong>{pt.bold}</strong> {pt.desc}
                </p>
              ))}
            </div>

            <p className="pt-2">{outputs.linkedin.closingQuestion}</p>

            <p className="pt-1 text-indigo-600 font-code text-xs font-medium">
              {outputs.linkedin.hashtags.join(" ")}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          COLUMN 3: SHORT-FORM VIDEO SCRIPT (TIKTOK / REELS / SHORTS)
      ========================================================================= */}
      <div className="flex flex-col rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-4 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">movie</span>
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-slate-900">
                Naskah Video Vertikal
              </h2>
              <span className="text-xs text-indigo-600 font-medium">
                TikTok • Reels • Shorts
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              copyToClipboard(
                getFullScriptText(),
                "✓ Naskah video lengkap arahan visual disalin!",
                "video-script"
              )
            }
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 text-xs font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {copiedId === "video-script" ? "check" : "content_copy"}
            </span>
            <span>
              {copiedId === "video-script" ? "Tersalin!" : "Salin Naskah Video"}
            </span>
          </button>
        </div>

        {/* Script Flow */}
        <div className="space-y-3 flex-1 overflow-y-auto max-h-[640px] pr-1 custom-scrollbar">
          {/* Audio info banner */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/60 font-code text-xs text-slate-600">
            <span>{outputs.videoScript.audioGuide}</span>
            <span className="text-indigo-600 font-medium">
              {outputs.videoScript.targetDuration}
            </span>
          </div>

          {/* Time-coded blocks */}
          {outputs.videoScript.blocks.map((block) => {
            const badgeClasses =
              block.tagColor === "sky"
                ? "bg-sky-100 text-sky-800"
                : block.tagColor === "indigo"
                ? "bg-indigo-100 text-indigo-800"
                : block.tagColor === "primary"
                ? "bg-indigo-600 text-white"
                : "bg-slate-200 text-slate-800";

            return (
              <div
                key={block.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded font-code text-xs font-semibold ${badgeClasses}`}
                  >
                    {block.timeRange} {block.title}
                  </span>
                  <span className="text-slate-600 text-xs font-medium">
                    {block.tag}
                  </span>
                </div>

                <p className="font-code text-xs text-slate-500 italic">
                  {block.visualCue}
                </p>

                <p className="text-sm text-slate-900 font-medium leading-snug">
                  {block.dialogue}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
