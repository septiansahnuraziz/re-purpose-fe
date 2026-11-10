export interface TweetItem {
  id: number;
  stage: string;
  charCount: number;
  content: string;
}

export interface ScriptBlock {
  id: number;
  timeRange: string;
  title: string;
  tag: string;
  tagColor: "sky" | "indigo" | "slate" | "primary";
  visualCue: string;
  dialogue: string;
}

export interface PlatformOutputs {
  tweets: TweetItem[];
  linkedin: {
    wordCount: number;
    readTime: string;
    headline: string;
    hook: string;
    foldNote: string;
    context: string[];
    frameworkTitle: string;
    frameworkPoints: { bold: string; desc: string }[];
    closingQuestion: string;
    hashtags: string[];
  };
  videoScript: {
    audioGuide: string;
    targetDuration: string;
    blocks: ScriptBlock[];
  };
  telemetry: {
    latency: string;
    confidence: string;
    tokens: string;
    semanticDeviation: string;
    wordCount: number;
    channelCount: number;
  };
}

export const TONES = [
  { id: "viral", label: "🔥 Singkat & Nendang" },
  { id: "executive", label: "👔 Otoritas & Profesional" },
  { id: "deep", label: "🎓 Bedah Tuntas & Edukatif" },
] as const;

export type ToneId = (typeof TONES)[number]["id"];

export const AUDIENCE_PROFILES = [
  "Founder & Solo Creator",
  "Growth Marketer & Brand Lead",
  "Profesional & Tech Talent",
  "Agensi & Tim Konten",
];

export const PRESETS_DATA: Record<ToneId, PlatformOutputs> = {
  viral: {
    tweets: [
      {
        id: 1,
        stage: "1/5 • Hook Pembuka",
        charCount: 206,
        content: `Zaman jadi kreator serba-bisa (generalis) udah resmi habis.\n\nSekarang AI bisa nulis '10 tips produktivitas' cuma dalam 2 detik.\n\nIni cara bangun 'Monopoli Personal' yang bikin audiens loyal dan rela bayar mahal 🧵👇`,
      },
      {
        id: 2,
        stage: "2/5 • Geser Sudut Pandang",
        charCount: 218,
        content: `Ketika jawaban teori melimpah di mana-mana, pengalaman nyata di lapangan jadi satu-satunya hal yang bernilai.\n\nJangan cuma ngaku 'Marketer'.\n\nJadilah: 'Spesialis aktivasi user baru untuk startup SaaS B2B.' Bedanya jauh banget!`,
      },
      {
        id: 3,
        stage: "3/5 • 3 Prinsip Utama",
        charCount: 238,
        content: `3 langkah bikin monopoli personal lo:\n\n1. Bikin istilah sendiri (punya framework orisinal)\n2. Buka dapur kerja (bagikan data dan proses asli, bukan rangkuman buku)\n3. Stop kejar followers kosong. 2.000 audiens loyal jauh lebih bernilai dibanding 100k penonton pasif.`,
      },
      {
        id: 4,
        stage: "4/5 • Diskusi & Aksi",
        charCount: 178,
        content: `Keahlian spesifik apa yang lagi lo bangun tahun ini?\n\nCoba tulis di reply, nanti gue kasih masukan sudut pandangnya.\n\nKalau ngerasa kebantu, RT tweet pertama ya biar makin banyak yang paham! 🚀`,
      },
    ],
    linkedin: {
      wordCount: 265,
      readTime: "~1,2 mnt baca",
      headline: "Kreator yang cuma berbagi tips umum perlahan bakal kehilangan panggung di 2025.",
      hook: "Kenapa? Karena AI generatif sudah bisa memproduksi ribuan saran generik dalam hitungan detik. Inilah alasan kenapa 1% kreator teratas beralih ke 'Monopoli Personal':",
      foldNote: '[...pembaca klik "lihat lainnya" di sini...]',
      context: [
        "Waktu informasi masih langka, sekadar merangkum buku atau mengurasi tren sudah cukup untuk dapat perhatian.",
        'Sekarang kondisi berbalik: informasi banjir, tapi wawasan praktis yang teruji di lapangan justru makin langka.\n\nMengaku sebagai "Konsultan Bisnis" sudah terlalu pasaran.\nTapi memposisikan diri sebagai "Spesialis retensi user untuk produk software open-source" adalah posisi unik yang tidak punya saingan langsung.',
      ],
      frameworkTitle: "3 pilar eksekusi yang bisa Anda tiru mulai hari ini:",
      frameworkPoints: [
        {
          bold: "1. Ciptakan kerangka berpikir sendiri:",
          desc: "Beri nama pada metodologi kerja Anda. Jika Anda tidak menamai cara kerja Anda, Anda hanya membebek ide orang lain.",
        },
        {
          bold: "2. Bagikan realita di balik layar:",
          desc: "Orang tidak butuh teori sempurna. Tunjukkan spreadsheet nyata, eksperimen yang gagal, dan pelajaran konkret dari prosesnya.",
        },
        {
          bold: "3. Fokus pada relevansi, bukan sensasi:",
          desc: "Komunitas kecil beranggotakan 1.500 praktisi yang tepat akan mendatangkan peluang bisnis jauh lebih besar daripada 100.000 pengikut pasif.",
        },
      ],
      closingQuestion:
        "Bagaimana dengan Anda: masih nyaman dengan topik umum, atau sudah mulai memetakan posisi unik Anda sendiri?",
      hashtags: [
        "#PersonalBranding",
        "#StrategiKonten",
        "#KreatorIndonesia",
        "#B2BMarketing",
        "#PertumbuhanBisnis",
      ],
    },
    videoScript: {
      audioGuide: "Rekomendasi Musik: 120 BPM Lo-Fi / Upbeat Chill",
      targetDuration: "Durasi Target: ~52 Detik",
      blocks: [
        {
          id: 1,
          timeRange: "[00:00 - 00:05]",
          title: "HOOK STOP-SCROLL",
          tag: "Anti-Skip Hook",
          tagColor: "sky",
          visualCue: "Visual: Tatap kamera dengan ekspresi serius, tunjukkan layar HP sebentar, lalu geser ke samping.",
          dialogue:
            '"Kalau konten lo masih sebatas tips umum yang bisa dijawab ChatGPT dalam 2 detik, siap-siap ditinggal audiens."',
        },
        {
          id: 2,
          timeRange: "[00:05 - 00:28]",
          title: "POIN MASALAH",
          tag: "Fakta Menohok",
          tagColor: "indigo",
          visualCue: 'Teks di Layar: "SARAN UMUM = NILAINYA NOL"',
          dialogue:
            '"Internet udah gak butuh tips produktivitas generik lainnya. Yang dicari orang sekarang adalah bukti nyata dan pengalaman lapangan yang beneran teruji."',
        },
        {
          id: 3,
          timeRange: "[00:28 - 00:45]",
          title: "SOLUSI & CONTOH",
          tag: "Framework Jelas",
          tagColor: "slate",
          visualCue: "Visual: Tampilkan diagram 2 lingkaran beririsan di layar atau gestur tangan yang mempersempit fokus.",
          dialogue:
            '"Cari irisan 2 keahlian unik lo. Jangan cuma jadi fitness coach biasa. Jadilah pelatih postur & sakit pinggang khusus programmer yang duduk 10 jam sehari. Itu baru posisi yang gak ada tandingannya."',
        },
        {
          id: 4,
          timeRange: "[00:45 - 00:52]",
          title: "CALL TO ACTION",
          tag: "Pancing Komen & Save",
          tagColor: "primary",
          visualCue: 'Teks di Layar: KETIK "MONOPOLI" DI BAWAH',
          dialogue:
            '"Mau lembar panduan cara nemuin posisi unik lo? Ketik \'MONOPOLI\' di komen, nanti gue kirim langsung ke DM."',
        },
      ],
    },
    telemetry: {
      latency: "1.34 dtk",
      confidence: "99.6%",
      tokens: "812 Token",
      semanticDeviation: "0.01%",
      wordCount: 342,
      channelCount: 3,
    },
  },
  executive: {
    tweets: [
      {
        id: 1,
        stage: "1/4 • Tesis Utama",
        charCount: 215,
        content: `Banjirnya konten berbasis AI memaksa para pemimpin bisnis mengubah strategi: dari sekadar kejar kuantitas ke diferensiasi yang tajam.\n\nBerikut ringkasan bagaimana para leader membangun reputasi yang sulit ditiru kompetitor 🧵`,
      },
      {
        id: 2,
        stage: "2/4 • Bobot Kredibilitas",
        charCount: 236,
        content: `Ketika teori bisnis bisa dirangkum mesin dalam sekejap, kredibilitas sejati hanya lahir dari data lapangan.\n\nKurangi membagikan kutipan motivasi umum. Mulailah mendokumentasikan post-mortem kegagalan, metrik unit ekonomi, dan keputusan sulit di balik layar.`,
      },
      {
        id: 3,
        stage: "3/4 • 3 Pilar Otoritas",
        charCount: 224,
        content: `Fondasi thought leadership modern:\n\n1. Pemosisian kategori tanpa tandingan langsung\n2. Keterbukaan data operasional & studi kasus riil\n3. Jaringan audiens berkualitas tinggi (fokus pada pengambil keputusan, bukan angka vanity).`,
      },
      {
        id: 4,
        stage: "4/4 • Evaluasi Strategis",
        charCount: 189,
        content: `Apakah narasi industri perusahaan Anda masih berkutat di hal-hal generik, atau sudah punya ciri khas yang kokoh?\n\nMari berdiskusi di kolom balasan, saya ingin mendengar perspektif Anda.`,
      },
    ],
    linkedin: {
      wordCount: 295,
      readTime: "~1,4 mnt baca",
      headline: "Mengapa strategi konten korporat konvensional mulai kehilangan taringnya di era kecerdasan buatan.",
      hook: "Pergeseran mendasar dalam cara para pembuat keputusan menyerap wawasan industri:",
      foldNote: '[...buka perspektif lengkap eksekutif...]',
      context: [
        "Dalam lanskap bisnis modern di mana siapa saja bisa memproduksi artikel dalam hitungan detik, konten yang bernada normatif langsung diabaikan.",
        "Para pemimpin industri yang disegani tidak lagi berlomba membanjiri lini masa dengan publikasi rutin tanpa isi. Mereka memilih membangun reputasi kokoh lewat validasi operasional yang nyata.",
      ],
      frameworkTitle: "Tiga prinsip menjaga relevansi narasi kepemimpinan Anda:",
      frameworkPoints: [
        {
          bold: "1. Rumuskan sudut pandang khas:",
          desc: "Definisikan tantangan industri dengan kacamata khas perusahaan Anda sendiri, bukan sekadar mengulang jargon populer.",
        },
        {
          bold: "2. Jadikan data internal sebagai amunisi:",
          desc: "Tinggalkan infografis umum. Paparkan tolok ukur dampak, rasio efisiensi, dan pembelajaran nyata dari inisiatif yang pernah Anda pimpin.",
        },
        {
          bold: "3. Utamakan kedalaman relasi:",
          desc: "Membangun kepercayaan dengan 200 pembuat keputusan industri jauh lebih berharga untuk bisnis dibanding menjangkau 50.000 pembaca pasif.",
        },
      ],
      closingQuestion:
        "Bagaimana tim kepemimpinan Anda memetakan narasi strategis untuk tetap relevan di tahun mendatang?",
      hashtags: [
        "#KepemimpinanBisnis",
        "#StrategiB2B",
        "#ThoughtLeadership",
        "#TransformasiDigital",
        "#PertumbuhanOrganisasi",
      ],
    },
    videoScript: {
      audioGuide: "Rekomendasi Musik: 95 BPM Ambient Modern Minimalis",
      targetDuration: "Durasi Target: ~56 Detik",
      blocks: [
        {
          id: 1,
          timeRange: "[00:00 - 00:06]",
          title: "HOOK EKSEKUTIF",
          tag: "Tingkat Strategis",
          tagColor: "indigo",
          visualCue: "Visual: Suasana ruang kerja modern, ekspresi tenang dan percaya diri menghadap kamera.",
          dialogue:
            '"Kalau narasi kepemimpinan brand Anda masih berupa rangkuman buku teks, reputasi Anda sedang terancam tenggelam."',
        },
        {
          id: 2,
          timeRange: "[00:06 - 00:30]",
          title: "TANTANGAN PASAR",
          tag: "Realita B2B",
          tagColor: "sky",
          visualCue: 'Teks di Layar: "KREDIBILITAS = BUKTI OPERASIONAL NYATA"',
          dialogue:
            '"AI sudah meniadakan nilai nasihat bisnis yang normatif. Mitra strategis dan investor sekarang cuma mencari satu hal: bukti eksekusi nyata dan kejujuran dalam memecahkan masalah."',
        },
        {
          id: 3,
          timeRange: "[00:30 - 00:48]",
          title: "LANGKAH DEFENSIVE",
          tag: "Kerangka Taktis",
          tagColor: "slate",
          visualCue: "Visual: Tunjukkan sekilas grafik analitik di tablet atau catatan strategis di meja.",
          dialogue:
            '"Tunjukkan angka riil, metodologi internal, dan pembelajaran dari inisiatif yang gagal. Otoritas sejati dibangun dari keberanian membagikan proses nyata."',
        },
        {
          id: 4,
          timeRange: "[00:48 - 00:56]",
          title: "AJAKAN DISKUSI",
          tag: "Relasi Profesional",
          tagColor: "primary",
          visualCue: 'Teks di Layar: BRIEF STRATEGIS DI LINK BIO',
          dialogue:
            '"Unduh ringkasan kerangka narasi kepemimpinan untuk tim Anda lewat tautan di profil."',
        },
      ],
    },
    telemetry: {
      latency: "1.52 dtk",
      confidence: "99.7%",
      tokens: "890 Token",
      semanticDeviation: "0.008%",
      wordCount: 388,
      channelCount: 3,
    },
  },
  deep: {
    tweets: [
      {
        id: 1,
        stage: "1/5 • Pembedahan Masalah",
        charCount: 220,
        content: `Bedah tuntas ekonomi distribusi konten modern: kenapa nilai informasi generik merosot tajam dan bagaimana cara mengatasinya.\n\nStudi ringkas tentang saturasi informasi vs kekuatan diferensiasi mikro 🧵🔬`,
      },
      {
        id: 2,
        stage: "2/5 • Rasio Sinyal vs Derau",
        charCount: 235,
        content: `Ketika biaya bikin konten tertulis mendekati nol karena AI, volume teks di internet meledak—tapi kualitas wawasannya anjlok.\n\nDalam teori informasi, makin mudah suatu teks ditebak atau digenerate, makin kecil nilai riil yang dibawa bagi pembaca.`,
      },
      {
        id: 3,
        stage: "3/5 • Rumus Daya Tawar",
        charCount: 226,
        content: `Rumus daya tawar konten Anda:\n\nNilai = (Konteks Lapangan × Kompleksitas Masalah) ÷ Kemudahan Ditiru AI.\n\nKalau konten Anda bisa dibuat dalam 5 detik lewat prompt sederhana, artinya nilai keunikannya mendekati nol.`,
      },
      {
        id: 4,
        stage: "4/5 • Uji Kekuatan Konten",
        charCount: 218,
        content: `3 cara cek apakah konten Anda punya parit pertahanan:\n\n1. Apakah ada data mentah hasil riset sendiri?\n2. Apakah ada studi kasus kegagalan nyata?\n3. Apakah ada kerangka kerja yang Anda uji coba sendiri di lapangan?`,
      },
      {
        id: 5,
        stage: "5/5 • Kesimpulan & Riset",
        charCount: 172,
        content: `Mau baca ringkasan studi lengkapnya? Tautan riset dan lembar kalkulasi sudah saya sertakan di bawah. Yuk kita diskusikan di kolom komentar!`,
      },
    ],
    linkedin: {
      wordCount: 320,
      readTime: "~1,6 mnt baca",
      headline: "Menghitung Devaluasi Informasi: Mengapa Model Konten Rangkuman Pasif Sudah Kehilangan Relevansi.",
      hook: "Sebuah telaah mendalam tentang kejenuhan arus informasi digital di era model bahasa cerdas:",
      foldNote: '[...baca telaah mendalam selengkapnya...]',
      context: [
        "Dalam teori komunikasi Claude Shannon, batas efektivitas suatu saluran ditentukan oleh perbandingan antara sinyal berharga dan gangguan derau (noise). Ledakan keluaran konten otomatis telah membuat saluran publikasi dibanjiri derau yang seragam.",
        "Akibatnya, audiens yang memiliki daya beli dan kapasitas analitis tinggi mulai menarik diri dari konten permukaan dan mencari wawasan primer yang benar-benar berasal dari dapur praktik.",
      ],
      frameworkTitle: "Tiga parameter untuk membangun aset konten bernilai tinggi:",
      frameworkPoints: [
        {
          bold: "1. Miliki data primer eksklusif:",
          desc: "Bangun argumen Anda di atas data internal atau eksperimen langsung yang tidak mungkin ditemukan di mesin pencari umum.",
        },
        {
          bold: "2. Formulasi metodologi terukur:",
          desc: "Gunakan pendekatan terstruktur dengan indikator keberhasilan yang jelas, bukan sekadar opini subjektif.",
        },
        {
          bold: "3. Kurasi saluran berdensitas tinggi:",
          desc: "Arahkan distribusi Anda ke lingkaran profesional yang memahami kedalaman topik yang Anda bahas secara kritis.",
        },
      ],
      closingQuestion:
        "Bagaimana Anda memastikan wawasan yang Anda publikasikan bebas dari replikasi otomatis model generatif?",
      hashtags: [
        "#DataDriven",
        "#RisetKonten",
        "#TeoriInformasi",
        "#AnalisisBisnis",
        "#StrategiDigital",
      ],
    },
    videoScript: {
      audioGuide: "Rekomendasi Musik: 110 BPM Minimal Glitch Electronica",
      targetDuration: "Durasi Target: ~58 Detik",
      blocks: [
        {
          id: 1,
          timeRange: "[00:00 - 00:07]",
          title: "TESIS AWAL",
          tag: "Fakta Tajam",
          tagColor: "sky",
          visualCue: "Visual: Grafik perbandingan ledakan konten AI vs anjloknya perhatian audiens di layar.",
          dialogue:
            '"Secara hitungan logis, makin sering AI merilis tips produktivitas baru, makin turun harga saran umum yang lo bagikan."',
        },
        {
          id: 2,
          timeRange: "[00:07 - 00:28]",
          title: "LOGIKA INFORMASI",
          tag: "Prinsip Nilai",
          tagColor: "indigo",
          visualCue: 'Teks di Layar: "NILAI = DATA ASLI ÷ KEMUDAHAN DITIRU"',
          dialogue:
            '"Teori komunikasi ngebuktiin: kalau ide lo gampang diprediksi sama mesin, audiens gak bakal nganggep itu penting. Nilai sejati cuma ada di data primer yang belum pernah dipublish siapa pun."',
        },
        {
          id: 3,
          timeRange: "[00:28 - 00:48]",
          title: "BENTENG PERTAHANAN",
          tag: "Bukti Nyata",
          tagColor: "slate",
          visualCue: "Visual: Tampilkan lembar spreadsheet riset atau potongan kode eksperimen.",
          dialogue:
            '"Satu-satunya pertahanan lo adalah dapur kerja sendiri. Ceritain eksperimen lo yang gagal, tunjukin angka aslinya, dan share pola yang beneran jalan. Itu yang bikin lo gak tergantikan."',
        },
        {
          id: 4,
          timeRange: "[00:48 - 00:58]",
          title: "TAUTAN RISET",
          tag: "Unduh Dokumen",
          tagColor: "primary",
          visualCue: 'Teks di Layar: KLIK TAUTAN RISET DI BIO',
          dialogue:
            '"Mau pelajari kalkulasi lengkap dan template analisanya? Akses dokumen risetnya gratis lewat link di bio."',
        },
      ],
    },
    telemetry: {
      latency: "1.65 dtk",
      confidence: "99.8%",
      tokens: "980 Token",
      semanticDeviation: "0.005%",
      wordCount: 420,
      channelCount: 3,
    },
  },
};

export const DEFAULT_RAW_TEXT = `Kenapa era konten serba-bisa (generalis) sudah berakhir dan bagaimana membangun monopoli personal di internet:

Sepuluh tahun lalu, sekadar merangkum buku produktivitas atau membagikan tips marketing umum sudah cukup buat ngumpulin ratusan ribu followers. Anda tinggal kurasi konten orang lain, posting konsisten, lalu biarkan algoritma bekerja.

Sekarang situasinya beda total. Model AI generatif bisa meracik ribuan artikel tips generik dalam hitungan detik. Ketika jawaban umum melimpah ruah dan gratis, konteks lapangan yang spesifik dan pengalaman nyata justru jadi barang langka yang paling dicari.

Pemenang di era sekarang adalah mereka yang membangun 'Monopoli Personal'—yaitu irisan unik dari 2 atau 3 keahlian spesifik di mana Anda adalah orang yang paling kompeten. Contoh sederhananya: daripada menjadi 'pelatih kebugaran umum', jauh lebih menjual menjadi 'spesialis koreksi postur dan sakit pinggang untuk programmer yang duduk 10 jam sehari'.

Tiga aturan utama membangun monopoli personal Anda:
1. Bikin istilah sendiri: Ciptakan istilah orisinal untuk masalah berulang yang sering Anda temui di lapangan.
2. Tunjukkan dapur kerja nyata: Jangan cuma bagikan teori buku teks. Buka data, lembar kerja, dan studi kasus riil Anda.
3. Jangan terbuai angka followers kosong: Memiliki 2.000 audiens spesifik yang loyal jauh lebih menghasilkan dibanding 100.000 pengikut pasif yang cuma numpang lewat.`;
