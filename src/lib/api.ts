import { PlatformOutputs, ToneId } from "./presets";

/**
 * ============================================================================
 * REPURPOSE.AI — API CLIENT SERVICE DEFINITIONS
 * ============================================================================
 * Berkas ini mendefinisikan kontrak interface dan fungsi pemanggilan API
 * yang akan menghubungkan Frontend Next.js dengan Backend/Endpoint AI.
 */

// 1. Payload & Response untuk Ekstraksi Konten dari URL
export interface ExtractUrlRequest {
  url: string;
}

export interface ExtractUrlResponse {
  success: boolean;
  title: string;
  content: string;
  wordCount: number;
  sourceUrl: string;
}

// 2. Payload & Response untuk Generasi Repurposi Konten (LLM Engine)
export interface GenerateContentRequest {
  rawText: string;
  tone: ToneId;
  audience: string;
  stream?: boolean;
}

export interface GenerateContentResponse {
  success: boolean;
  data: PlatformOutputs;
}

// 3. Payload & Response untuk Acak Ulang Variasi (Reroll)
export interface RerollContentRequest {
  rawText: string;
  tone: ToneId;
  audience: string;
  currentOutputs?: Partial<PlatformOutputs>;
}

// 4. Payload & Response untuk Health Status & Telemetri Server
export interface SystemStatusResponse {
  status: "healthy" | "degraded" | "down";
  latencyMs: number;
  region: string;
  engine: {
    name: string;
    version: string;
    ready: boolean;
  };
}

// 5. User Profile & Credit Usage
export interface UserProfileResponse {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  plan: "FREE" | "PRO" | "ENTERPRISE";
  creditsRemaining: number;
  dailyQuota: number;
}

/**
 * IMPLEMENTASI FUNGSI PANGGILAN API (PLACEHOLDER SIAP SAMBUNG)
 */

// 🔗 API 1: Ekstraksi Teks dari Tautan URL (Web Scraper / Readability)
export async function apiExtractUrl(url: string): Promise<ExtractUrlResponse> {
  const response = await fetch("/api/content/extract-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error(`Gagal mengekstrak URL: ${response.statusText}`);
  }

  return response.json();
}

// 🔗 API 2: Generasi Konten Multi-Platform (Orkestrasi LLM)
export async function apiGenerateContent(
  payload: GenerateContentRequest
): Promise<GenerateContentResponse> {
  const response = await fetch("/api/content/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Gagal menghasilkan konten: ${response.statusText}`);
  }

  return response.json();
}

// 🔗 API 3: Acak Ulang Variasi Konten (Reroll / Angle Baru)
export async function apiRerollContent(
  payload: RerollContentRequest
): Promise<GenerateContentResponse> {
  const response = await fetch("/api/content/reroll", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Gagal mengacak ulang konten: ${response.statusText}`);
  }

  return response.json();
}

// 🔗 API 4: Status Sistem & Denyut AI Engine
export async function apiGetSystemStatus(): Promise<SystemStatusResponse> {
  const response = await fetch("/api/system/status", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Gagal memuat status sistem: ${response.statusText}`);
  }

  return response.json();
}

// 🔗 API 5: Profil Pengguna & Kuota Kredit
export async function apiGetUserProfile(): Promise<UserProfileResponse> {
  const response = await fetch("/api/user/me", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Gagal memuat data pengguna: ${response.statusText}`);
  }

  return response.json();
}
