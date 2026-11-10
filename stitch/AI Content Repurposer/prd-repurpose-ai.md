# Product Requirements Document (PRD) — RePurpose.ai

**Versi Dokumen:** 1.0.0  
**Status:** Disetujui / Baseline Desain  
**Bahasa:** Bahasa Indonesia  
**Target Platform:** Web Desktop (Responsive)  

---

## 1. Ringkasan Eksekutif & Visi Produk

**RePurpose.ai** adalah aplikasi berbasis web (*SaaS / AI Productivity Tool*) yang dirancang khusus untuk kreator konten independen, pemasar digital (*growth marketers*), dan pendiri (*founders*). Masalah utama yang diselesaikan adalah **inefisiensi distribusi konten**: membuat konten mendalam (*long-form content* seperti draf artikel, buletin, transkrip podcast, atau catatan video) membutuhkan waktu berjam-jam, namun mendistribusikannya ke format media sosial yang spesifik (*X/Twitter threads, LinkedIn dwell posts, short-form video scripts*) sering kali terabaikan atau memakan waktu manual yang sangat besar.

RePurpose.ai mengotomatisasi konversi 1 teks mentah panjang menjadi 15+ aset media sosial siap tayang dengan kepatuhan format platform, mitigasi halusinasi, dan gaya nada yang terarah hanya dalam hitungan detik.

---

## 2. Tujuan & Sasaran Bisnis (OKRs / KPIs)

1. **Efisiensi Waktu:** Memangkas waktu repurposisi konten dari rata-rata 3–4 jam menjadi kurang dari 2 menit per artikel panjang (hemat ~8,5 jam/minggu bagi kreator aktif).
2. **Kualitas Distribusi (Platform Native):** Mengurangi *churn* hasil AI dengan memastikan pemformatan mematuhi batasan karakter asli (misal: 280 karakter untuk X, format lipatan *see more* untuk LinkedIn, dan time-coded hook untuk Reels/TikTok/Shorts).
3. **Model Monetisasi Non-Intrusif:** Menampilkan slot sponsor terkurasi (*sponsored placements*) tanpa mengganggu produktivitas alur kerja pengguna (misalnya top sponsorship bar yang informatif).

---

## 3. Profil Pengguna (User Personas)

### Persona A: Dika — Kreator Konten & Solopreneur
- **Tantangan:** Menulis artikel mendalam di Substack mingguan, tetapi tidak punya waktu menyusun thread X atau naskah video TikTok setiap hari.
- **Kebutuhan:** Memasukkan draf teks mentah, memilih gaya nada "Singkat & Viral", lalu langsung menyalin hasil format siap posting dalam 1 klik.

### Persona B: Sarah — B2B Content Marketer / Founder
- **Tantangan:** Membutuhkan postingan LinkedIn berbasis otoritas (*thought leadership*) yang terstruktur rapi untuk menjaga retensi pembaca dan metrik *dwell time*.
- **Kebutuhan:** Kontrol nada suara "Otoritas Eksekutif", ekstraksi poin-poin kerangka kerja operasional tanpa bahasa generik/klise AI.

---

## 4. Arsitektur Informasi & Fitur Antarmuka (UI/UX)

Sesuai rancangan aplikasi satu halaman (*single-page app*) edisi Light Mode Bahasa Indonesia:

### 4.1. Bilah Navigasi Atas (Top Navbar)
- **Identitas Brand:** Logo geometris RePurpose.ai dengan badge status "PRO".
- **Menu Navigasi:** Tautan ringkas "Cara Kerja" (navigasi dibuat minimalis, bersih, tanpa menu berlebih).
- **Status Layanan:** Indikator denyut aktif (*pulse dot*) dengan label "Mesin Siap".
- **Profil Pengguna:** Avatar profil pengguna di pojok kanan atas.

### 4.2. Slot Sponsor Atas (Top Sponsored Banner)
- Komponen banner responsif tipis tepat di bawah navbar untuk monetisasi mitra (misal: penawaran uji coba alat SEO atau produktivitas mitra).
- Dilengkapi badge jelas `DISPONSORI` dan tombol aksi langsung (*Direct CTA*).

### 4.3. Area Hero & Ruang Kerja Input (Workbench)
- **Headline Utama:** *"Ubah 1 Postingan Panjang Menjadi 15+ Aset Media Sosial Viral dalam Hitungan Detik."*
- **Pill Nilai Tambah:**
  - Tanpa Halusinasi Gaya Bahasa
  - Batas Karakter Platform Diterapkan
  - Hemat 8,5 Jam/Minggu
- **Dukungan Input:**
  - Tab 1: *Tempel Teks Mentah / Transkrip* (Area teks besar dengan pelacak jumlah kata real-time).
  - Tab 2: *Impor URL Langsung* (Ekstraksi teks otomatis dari tautan artikel blog).
- **Kontrol Inferensi AI:**
  - *Gaya Nada Mesin:* Pilihan taktil (*Singkat & Viral*, *Otoritas Eksekutif*, *Analisis Mendalam*).
  - *Profil Target:* Dropdown segmentasi persona (contoh: "Pendiri & Kreator Independen").
- **Tombol Aksi Utama (Primary CTA):** Tombol gradien kontras tinggi: **"Hasilkan 15+ Aset Media Sosial"**.

### 4.4. Telemetri & Status Pipeline Pemrosesan
- Baris metrik real-time pasca-eksekusi model:
  - Status: "Pipa Pemrosesan Selesai"
  - Latensi inferensi (misal: 1.41d)
  - Jumlah token output (misal: 824 Token)
  - Deviasi semantik & Tingkat keyakinan (99.4%)
  - Tombol aksi "Acak Ulang Semua" (*Reroll All*)

### 4.5. Kisi Output 3 Kolom (Multi-Platform Output Cards)
1. **Kolom 1: Utas Twitter / X**
   - Struktur kartu tweet bernomor (misal: `1/5 Hook Viral`, `2/5 Perubahan Paradigma`).
   - Indikator penghitung karakter individual (`212/280`).
   - Tombol salin per tweet individual + tombol global "Salin Semua".
2. **Kolom 2: Postingan Dwell LinkedIn**
   - Dioptimalkan untuk arsitektur waktu baca tinggi (*Dwell-Time Architecture*).
   - Penanda taktis lipatan baca *"...lihat lainnya"* (*simulate fold line*).
   - Pemformatan poin-poin metodologi dan tombol aksi "Salin Postingan".
3. **Kolom 3: Naskah Video Singkat 60d (TikTok, Reels, Shorts)**
   - Target durasi (misal: Target 54 Detik) dan panduan audio/BPM latar.
   - Pembagian blok berwaktu:
     - `[00:00 - 00:05] Hook` (Retensi Tinggi & Arahan Visual)
     - `[00:05 - 00:30] Isi Utama` (Potongan Cepat & Teks di Layar)
     - `[00:30 - 00:48] Kerangka Kerja` (Visual B-Roll)
     - `[00:48 - 01:00] Konversi & CTA Komentar`
   - Tombol "Salin Naskah".

### 4.6. Footer
- Branding versi rilis (`RePurpose.ai v2.4-stream`).
- Tautan kepatuhan: Kebijakan Privasi, Ketentuan Layanan.
- Status API Sistem & Wilayah Server (misal: `US-EAST`, Latensi 24ms).

---

## 5. Persyaratan Teknis & Non-Fungsional

1. **Desain Sistem & Estetika (Syntropic Indigo Light):**
   - Latar belakang: `#f8f9ff` dengan kartu putih bersih `#ffffff` dan garis tepi halus slate (`#e2e8f0`).
   - Tipografi: *Plus Jakarta Sans* / *Space Grotesk* untuk kesan modern, profesional, dan sangat mudah dibaca.
   - Warna Aksen: Indigo utama (`#4f46e5` / `#6366f1`).
2. **Performa:** Waktu render antarmuka < 1 detik; latensi pemrosesan pipeline LLM streaming < 3 detik.
3. **Interaktivitas:** Fitur *Copy to Clipboard* native dengan umpan balik visual (*toast* / status "Tersalin!") instan.
4. **Kebersihan Konten (Content Constraints):**
   - Tidak ada elemen *paywall* langganan yang menghalangi output gratis utama.
   - Tidak ada kartu sponsor ganda di area hasil kerja (menjaga fokus kreator).

---

## 6. Rencana Pengembangan Masa Depan (Roadmap v2.5+)
- [ ] Integrasi direct posting API ke akun X dan LinkedIn pengguna.
- [ ] Ekspor naskah video langsung ke format Teleprompter mobile.
- [ ] Dukungan multibahasa tambahan (Inggris, Spanyol, Jepang) dengan toggle bahasa cepat di navbar.
