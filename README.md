# RePurpose.ai — Frontend (Next.js + Tailwind CSS)

Implementasi frontend untuk **RePurpose.ai** (AI Content Repurposer — Edisi Bahasa Indonesia), sebuah aplikasi web produktivitas SaaS yang dirancang untuk kreator konten independen, pemasar pertumbuhan (growth marketers), dan pendiri (founders).

Aplikasi ini mengubah 1 draf konten panjang (artikel blog, newsletter, transkrip video/podcast) menjadi **15+ aset media sosial siap tayang** (Utas Twitter / X, Postingan Dwell LinkedIn, dan Naskah Video Singkat 60d untuk TikTok, Reels, & Shorts) hanya dalam hitungan detik.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) dengan token desain kustom *Syntropic Indigo Light*
- **Tipografi:** Plus Jakarta Sans (Headings), Inter (Body & Labels), JetBrains Mono (Tokens & Telemetri)
- **Ikon:** Google Material Symbols Outlined & SVG Native
- **Interaktivitas:** Clipboard API dengan Toast Notification, switch tone real-time, simulasi ekstraksi URL, dan pintasan keyboard (`⌘⏎` / `Ctrl+Enter`).

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Prasyarat
- Node.js versi 18+ (direkomendasikan v20+)
- npm / pnpm / yarn

### 2. Jalankan Server Pengembangan
```bash
npm run dev
```

Buka peramban Anda di [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi berjalan.

### 3. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 🌟 Fitur-Fitur Utama yang Diimplementasikan

1. **Top Navbar:**
   - Brand logo RePurpose.ai dengan badge `PRO`.
   - Navigasi ringkas "Cara Kerja".
   - Indikator status layanan denyut aktif (*pulse dot*) dengan label "Mesin Siap".
   - Avatar profil pengguna.

2. **Top Sponsored Leaderboard Banner:**
   - Banner monetisasi responsif (kemitraan SupaScale SEO) dengan badge `DISPONSORI`, CTA langsung "Klaim Akses 14 Hari", dan tombol tutup/dismissible.

3. **Hero Section:**
   - Badge orkestrasi model AI ("Mesin Konten Generasi Terbaru v2.4 • Claude 3.5 & GPT-4o").
   - Headline utama bergradien kontras tinggi.
   - Pill nilai tambah: *Tanpa Halusinasi Gaya Bahasa*, *Batas Karakter Platform Diterapkan*, *Hemat 8,5 Jam/Minggu*.

4. **Centered Input Workbench:**
   - Tab 1: **Tempel Teks Mentah / Transkrip** dengan pelacak kata dan status kepadatan optimal secara langsung.
   - Tab 2: **Impor URL Langsung** dengan input tautan dan tombol ekstraksi simulasi.
   - Pilihan Gaya Nada Mesin (*🔥 Singkat & Viral*, *👔 Otoritas Eksekutif*, *🎓 Analisis Mendalam*).
   - Dropdown Profil Target Audiens.
   - Tombol Aksi Utama ("Hasilkan 15+ Aset Media Sosial") dengan indikator loading tahapan pipeline inferensi dan shortcut `⌘⏎`.

5. **Telemetri & Status Pipeline Pemrosesan:**
   - Status pipeline eksekusi model.
   - Metrik latensi inferensi, tingkat keyakinan (confidence rate), jumlah token keluar, dan deviasi semantik.
   - Tombol "Acak Ulang Semua" (*Reroll All*).

6. **Kisi Output 3 Kolom (Multi-Platform Output Cards):**
   - **Kolom 1: Utas Twitter / X:** Tweet bernomor (1/5 Hook, 2/5 Paradigma, 3/5 Aturan, 4-5/5 Penutup), indikator batas karakter per tweet (`212/280`), tombol salin per tweet + tombol salin seluruh utas.
   - **Kolom 2: Postingan Dwell LinkedIn:** Optimalisasi waktu baca, simulasi penanda lipatan baca `...lihat lainnya`, poin-poin metodologi, dan tombol salin.
   - **Kolom 3: Naskah Video Singkat 60d (TikTok / Reels / Shorts):** Panduan audio BPM, target durasi, pembagian blok waktu (`HOOK`, `ISI UTAMA`, `KERANGKA KERJA`, `AJAKAN BERTINDAK / CTA`), arahan visual kamera, teks layar, dan tombol salin naskah.

7. **Toast Notification:**
   - Umpan balik visual instan saat menyalin ke clipboard atau mengubah preferensi model.

8. **Footer:**
   - Versi rilis `v2.4-stream`, status API normal, kepatuhan, dan latensi server `US-EAST`.
