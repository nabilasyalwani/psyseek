export const DISCLAIMER =
  "Website ini untuk membantu kamu memahami pengalaman dan pilihan dukungan, bukan untuk mendiagnosis kondisi psikologis.";

export const SITE_NAME = "PsySeek";

export const TAGLINE = "A space to understand, a step toward seeking help.";

export const SITE_DESC =
  "Tempat kamu mengenali stres akademik, memahami apa yang kadang bikin ragu mencari bantuan, dan menemukan dukungan yang bisa kamu pertimbangkan.";

export type Tone = "lavender" | "mint" | "pink" | "butter" | "periwinkle";

export const chapters: {
  no: string;
  href: string;
  nav: string;
  title: string;
  desc: string;
  tone: Tone;
}[] = [
  {
    no: "01",
    href: "/stres-akademik",
    nav: "Stres Akademik",
    title: "Mengenali Stres Akademik",
    desc: "Kenali apa saja yang bisa bikin kuliah terasa berat, apa dampaknya kalau terus menumpuk, lalu coba refleksi singkat.",
    tone: "lavender",
  },
  {
    no: "02",
    href: "/dukungan",
    nav: "Dukungan",
    title: "Dukungan dari Orang Sekitar",
    desc: "Kadang kita cuma butuh didengarkan. Begini cara orang terdekat bisa hadir.",
    tone: "butter",
  },
  {
    no: "03",
    href: "/mencari-bantuan",
    nav: "Mencari Bantuan",
    title: "Mengapa Mencari Bantuan Itu Penting?",
    desc: "Kenalan dengan tenaga profesional, manfaatnya, dan coba kuis mitos atau fakta.",
    tone: "mint",
  },
  {
    no: "04",
    href: "/hambatan",
    nav: "Hambatan",
    title: "Apa yang Membuat Ragu Mencari Bantuan?",
    desc: "Ikuti obrolan Salsa dan Dian tentang hal-hal yang sering bikin ragu.",
    tone: "pink",
  },
  {
    no: "05",
    href: "/langkah-layanan",
    nav: "Langkah & Layanan",
    title: "Mencari Bantuan Itu Bisa Dilakukan",
    desc: "Tujuh langkah sederhana dan delapan layanan psikologi yang bisa kamu hubungi.",
    tone: "periwinkle",
  },
];

export const footerLinks = [
  { href: "/stres-akademik", label: "Mengenali Stres Akademik" },
  { href: "/dukungan", label: "Dukungan dari Orang Sekitar" },
  { href: "/mencari-bantuan", label: "Mengapa Mencari Bantuan" },
  { href: "/hambatan", label: "Hambatan Mencari Bantuan" },
  { href: "/langkah-layanan", label: "Langkah & Layanan" },
];

export type ChatLine = { who: "Salsa" | "Dian"; text: string };

/* ---------- Part 01 · Stres Akademik ---------- */

export const causes: {
  key: string;
  label: string;
  tone: Tone;
  items: string[];
}[] = [
  {
    key: "A",
    label: "Tuntutan Kuliah",
    tone: "lavender",
    items: [
      "Beban tugas yang banyak",
      "Ujian dan tenggat waktu yang berdekatan",
      "Tuntutan nilai yang tinggi",
      "Kesulitan mengikuti metode pembelajaran",
    ],
  },
  {
    key: "B",
    label: "Pribadi",
    tone: "pink",
    items: [
      "Perfeksionisme",
      "Kesulitan mengatur waktu",
      "Kurangnya kepercayaan diri",
      "Kesulitan mengelola emosi",
      "Kebiasaan menunda pekerjaan",
    ],
  },
  {
    key: "C",
    label: "Lingkungan Sosial",
    tone: "mint",
    items: [
      "Tekanan dari keluarga",
      "Perbandingan dengan teman",
      "Konflik dengan teman atau kelompok",
      "Kurangnya dukungan sosial",
      "Kekhawatiran terhadap penilaian orang lain",
    ],
  },
  {
    key: "D",
    label: "Kondisi di Luar Kuliah",
    tone: "butter",
    items: [
      "Masalah keuangan",
      "Masalah keluarga",
      "Kondisi tempat tinggal yang kurang nyaman",
      "Akses terhadap fasilitas atau layanan bantuan yang terbatas",
    ],
  },
];

export const impacts: { title: string; content: string[] }[] = [
  {
    title: "Pada kegiatan belajar",
    content: [
      "Sulit konsentrasi dan belajar",
      "Motivasi belajar berkurang",
      "Produktivitas menurun",
      "Prestasi akademik dapat terganggu",
    ],
  },
  {
    title: "Pada tubuh",
    content: ["Kelelahan", "Gangguan tidur"],
  },
  {
    title: "Pada emosi & hubungan sosial",
    content: [
      "Menarik diri dari lingkungan sosial",
      "Lebih mudah mengalami konflik",
      "Risiko gangguan kesehatan mental",
    ],
  },
];

export const reflections = [
  "Sulit berkonsentrasi saat belajar atau kuliah",
  "Merasa kewalahan dengan tugas yang ada",
  "Sulit tidur atau sering terbangun malam",
  "Mudah marah atau mudah merasa sedih",
  "Kehilangan motivasi untuk kuliah",
  "Menghindari aktivitas perkuliahan",
  "Merasa lelah terus-menerus",
  "Menarik diri dari teman atau kegiatan sosial",
  "Sering sakit kepala atau keluhan fisik lainnya",
  "Merasa cemas tentang nilai atau masa depan",
];

export const burdens = [
  "Beban tugas",
  "Tenggat waktu",
  "Tuntutan nilai",
  "Ujian beruntun",
  "Perfeksionisme",
  "Menunda pekerjaan",
  "Kurang percaya diri",
  "Sulit atur waktu",
  "Tekanan keluarga",
  "Dibandingkan teman",
  "Takut dinilai",
  "Konflik kelompok",
  "Masalah keuangan",
  "Sulit tidur",
  "Kelelahan",
  "Sulit konsentrasi",
  "Cemas masa depan",
  "Hilang motivasi",
  "Mudah marah",
  "Menarik diri",
  "Kewalahan",
];

/* ---------- Part 03 · Mencari Bantuan ---------- */

export const professionals = [
  {
    no: "01",
    title: "Psikolog",
    desc: "Membantumu memahami pikiran, emosi, dan perilaku lewat asesmen dan konseling/intervensi psikologis.",
    tag: "Tidak meresepkan obat",
    tagIcon: "x" as const,
    tone: "lavender" as Tone,
    icon: "chat" as const,
  },
  {
    no: "02",
    title: "Konselor",
    desc: "Memberi bimbingan dan dukungan untuk masalah personal, akademik, atau karier.",
    tag: "Personal · Akademik · Karier",
    tagIcon: null,
    tone: "butter" as Tone,
    icon: "compass" as const,
  },
  {
    no: "03",
    title: "Psikiater",
    desc: "Dokter spesialis kesehatan jiwa yang dapat memberikan resep obat bila diperlukan.",
    tag: "Dapat meresepkan obat",
    tagIcon: "check" as const,
    tone: "periwinkle" as Tone,
    icon: "stetho" as const,
  },
];

export const benefits = [
  {
    title: "Ruang yang aman untuk bercerita",
    desc: "Kamu bisa membicarakan masalah, perasaan, dan pengalaman tanpa harus merasa dihakimi.",
  },
  {
    title: "Memahami masalah dengan lebih jelas",
    desc: "Profesional bisa bantu kamu melihat hubungan antara pikiran, emosi, perilaku, dan situasi yang sedang kamu hadapi.",
  },
  {
    title: "Strategi menghadapi masalah",
    desc: "Kamu bisa belajar cara mengelola stres, mengatur waktu, menghadapi pikiran negatif, berkomunikasi, dan mengambil keputusan.",
  },
  {
    title: "Dukungan yang sesuai",
    desc: "Bantuan disesuaikan dengan kebutuhan dan kondisimu. Tiap orang bisa butuh bentuk bantuan yang berbeda.",
  },
  {
    title: "Mencegah masalah makin berat",
    desc: "Mencari bantuan sejak awal bisa mengurangi beban sebelum masalahnya makin mengganggu keseharianmu.",
  },
  {
    title: "Membantu mengambil keputusan",
    desc: "Profesional bisa menemanimu menimbang pilihan dan menentukan langkah yang lebih aman dan realistis.",
  },
];

export const quiz: {
  statement: string;
  options: { text: string; fact: boolean }[];
  explain: string;
}[] = [
  {
    statement: "Mencari bantuan berarti lemah",
    options: [
      {
        text: "Mencari bantuan adalah bentuk tanggung jawab dan keberanian untuk merawat diri sendiri.",
        fact: true,
      },
      {
        text: "Mencari bantuan berarti kamu tidak kuat menghadapi masalah.",
        fact: false,
      },
    ],
    explain:
      "Mencari bantuan itu bentuk keberanian dan kepedulian pada diri sendiri. Jadi, anggapan “Kalau mencari bantuan berarti saya lemah” itu mitos.",
  },
  {
    statement: "Harus menunggu masalah menjadi berat",
    options: [
      {
        text: "Saya harus mengalami masalah yang sangat berat terlebih dahulu sebelum mencari bantuan.",
        fact: false,
      },
      {
        text: "Saya dapat mencari bantuan ketika mulai merasa kesulitan atau ingin memahami diri sendiri.",
        fact: true,
      },
    ],
    explain:
      "Kamu tidak harus menunggu masalah menjadi berat untuk mencari bantuan. Kamu bisa mencari bantuan sejak mulai merasa kesulitan, atau saat ingin lebih memahami diri sendiri.",
  },
  {
    statement: "Psikolog hanya untuk gangguan mental",
    options: [
      {
        text: "Psikolog hanya membantu orang yang mengalami gangguan mental.",
        fact: false,
      },
      {
        text: "Psikolog dapat membantu menghadapi stres, masalah akademik, kesulitan relasi, adaptasi, dan tantangan kehidupan.",
        fact: true,
      },
    ],
    explain:
      "Psikolog tidak hanya membantu orang yang mengalami gangguan mental. Psikolog juga bisa membantumu menghadapi berbagai masalah dan tantangan sehari-hari.",
  },
  {
    statement: "Bercerita kepada teman sama dengan konsultasi profesional",
    options: [
      {
        text: "Bercerita kepada teman sudah pasti sama dengan berkonsultasi kepada profesional.",
        fact: false,
      },
      {
        text: "Teman dapat memberikan dukungan, tetapi profesional memiliki pengetahuan dan keterampilan khusus untuk memberikan bantuan psikologis.",
        fact: true,
      },
    ],
    explain:
      "Bercerita ke teman bisa memberi dukungan emosional. Tapi, profesional punya pengetahuan dan keterampilan khusus untuk memberikan bantuan psikologis.",
  },
  {
    statement: "Mencari bantuan membuat orang lain menganggap kita bermasalah",
    options: [
      {
        text: "Mencari bantuan berarti orang lain akan menganggap saya bermasalah.",
        fact: false,
      },
      {
        text: "Memerlukan bantuan merupakan hal yang manusiawi dan tidak menentukan nilai diri seseorang.",
        fact: true,
      },
    ],
    explain:
      "Siapa pun bisa butuh bantuan di waktu tertentu. Penilaian orang lain nggak menentukan nilai dirimu.",
  },
  {
    statement: "Harus tahu masalah sebelum menemui psikolog",
    options: [
      {
        text: "Saya harus mengetahui masalah saya terlebih dahulu sebelum menemui psikolog.",
        fact: false,
      },
      {
        text: "Saya dapat datang ketika masih bingung karena memahami masalah merupakan bagian dari proses konsultasi.",
        fact: true,
      },
    ],
    explain:
      "Kamu nggak harus sudah paham betul masalahmu sebelum menemui psikolog. Mencari tahu apa yang sedang kamu alami justru bagian dari proses konsultasi.",
  },
];

/* ---------- Part 04 · Hambatan ---------- */

export const barriers: {
  title: string;
  felt: string;
  chat: [ChatLine, ChatLine];
  tone: Tone;
}[] = [
  {
    title: "Takut dianggap lemah",
    felt: "Merasa harus menyelesaikan semua masalah sendiri.",
    chat: [
      {
        who: "Salsa",
        text: "Aku lagi banyak banget pikiran soal kuliah. Tapi aku merasa harus bisa menyelesaikan semuanya sendiri. Masa begini aja aku tidak sanggup?",
      },
      {
        who: "Dian",
        text: "Kamu nggak harus menghadapi semuanya sendirian, Sal. Mencari bantuan bukan berarti kamu lemah, kok. Justru, itu bisa jadi langkah untuk menghadapi masalah yang sedang kamu alami.",
      },
    ],
    tone: "pink",
  },
  {
    title: "Takut dinilai orang lain",
    felt: "Khawatir dianggap berlebihan atau tidak mampu.",
    chat: [
      {
        who: "Salsa",
        text: "Aku mau konsultasi ke psikolog, tapi takut dianggap berlebihan. Gimana kalau orang lain berpikir aku tidak mampu mengatasi masalah sendiri?",
      },
      {
        who: "Dian",
        text: "Aku paham kamu khawatir. Tapi, tenaga profesional memang bertugas membantu, bukan menghakimi kamu. Kamu berhak mencari bantuan tanpa harus takut dianggap nggak mampu.",
      },
    ],
    tone: "mint",
  },
  {
    title: "Malu bercerita",
    felt: "Merasa tidak nyaman membicarakan masalah pribadi.",
    chat: [
      {
        who: "Salsa",
        text: "Aku sebenarnya mau cerita, tapi bingung harus mulai dari mana. Rasanya malu kalau harus menceritakan masalah pribadi ke orang yang belum aku kenal.",
      },
      {
        who: "Dian",
        text: "Tidak apa-apa kalau kamu belum tahu harus mulai dari mana. Kamu bisa cerita sedikit demi sedikit, dari hal yang paling nyaman buat kamu sampaikan. Tidak harus semuanya langsung diceritakan.",
      },
    ],
    tone: "lavender",
  },
  {
    title: "Stigma",
    felt: "Anggapan negatif terhadap orang yang mencari bantuan.",
    chat: [
      {
        who: "Salsa",
        text: "Menurutku, orang yang mencari bantuan psikologis itu pasti punya masalah besar. Aku takut kalau orang tahu aku konsultasi, mereka jadi punya pandangan negatif tentang aku.",
      },
      {
        who: "Dian",
        text: "Sebenarnya, siapa pun bisa mengalami masa sulit dan membutuhkan dukungan. Mencari bantuan itu hal yang wajar, Salsa. Kamu tidak perlu merasa malu hanya karena ingin menjaga kesehatan mentalmu.",
      },
    ],
    tone: "butter",
  },
  {
    title: "Khawatir masalah tidak cukup serius",
    felt: "Merasa masalahnya belum pantas dibicarakan.",
    chat: [
      {
        who: "Salsa",
        text: "Akhir-akhir ini aku sering kepikiran tugas sampai susah tidur. Tapi, kayaknya masalahku belum cukup serius untuk dibawa ke psikolog, deh.",
      },
      {
        who: "Dian",
        text: "Kalau hal itu sudah mengganggu tidur dan keseharianmu, kamu boleh mencari bantuan, kok. Kamu tidak harus menunggu sampai masalahnya makin berat untuk mulai bercerita.",
      },
    ],
    tone: "pink",
  },
  {
    title: "Tidak tahu harus menghubungi siapa",
    felt: "Kurangnya informasi tentang layanan.",
    chat: [
      {
        who: "Salsa",
        text: "Aku mulai merasa kewalahan dengan kuliah dan mau cari bantuan. Tapi, harus menghubungi siapa, ya? Aku juga tidak tahu layanan psikologi apa saja yang tersedia.",
      },
      {
        who: "Dian",
        text: "Kamu bisa mulai dengan mencari tahu layanan yang tersedia dan mana yang sesuai dengan kebutuhanmu. Di website ini juga ada informasi beberapa layanan yang bisa kamu cek.",
      },
    ],
    tone: "periwinkle",
  },
];

/* ---------- Part 02 · Dukungan ---------- */

export const supportSources: { label: string; dot: string; dark?: boolean }[] =
  [
    { label: "Teman", dot: "var(--color-pink-deep)" },
    { label: "Keluarga", dot: "var(--color-orange)" },
    { label: "Dosen pembimbing", dot: "var(--color-indigo-soft)" },
    { label: "Komunitas", dot: "var(--color-mint-deep)" },
    { label: "Konselor", dot: "var(--color-lavender)", dark: true },
    { label: "Psikolog", dot: "var(--color-mint)", dark: true },
    {
      label: "Tenaga kesehatan lainnya",
      dot: "var(--color-butter)",
      dark: true,
    },
  ];

export const supportRoles: {
  title: string;
  desc: string;
  tone: Tone;
  icon: "chat" | "sun" | "search" | "users";
}[] = [
  {
    title: "Mendengarkan",
    desc: "Memberi ruang untuk bercerita, tanpa menghakimi atau buru-buru kasih solusi.",
    tone: "pink",
    icon: "chat",
  },
  {
    title: "Memberikan Semangat",
    desc: "Mendukung keputusanmu mencari bantuan dan mengingatkan bahwa itu langkah yang baik.",
    tone: "butter",
    icon: "sun",
  },
  {
    title: "Memberikan Informasi",
    desc: "Bantu cari tahu layanan atau sumber bantuan yang bisa dihubungi.",
    tone: "periwinkle",
    icon: "search",
  },
  {
    title: "Menemani",
    desc: "Siap menemani saat kamu ingin pergi ke layanan kesehatan mental.",
    tone: "mint",
    icon: "users",
  },
];

export const friendDos = [
  "Dengarkan dulu tanpa buru-buru memberi solusi.",
  "Validasi perasaannya, namun tidak harus selalu setuju.",
  "Berikan ruang untuk bercerita sesuai keinginannya.",
  "Tawarkan bantuan mencari informasi layanan jika ia tertarik.",
  "Tunjukkan bahwa kamu peduli tanpa membuatnya merasa terbebani.",
];

export const friendDont =
  "Jangan memaksa teman bercerita atau mencari bantuan.";

export const supportChat: ChatLine[] = [
  {
    who: "Salsa",
    text: "Aku ngerasa capek banget akhir-akhir ini. Tapi aku juga bingung mau cerita ke siapa.",
  },
  {
    who: "Dian",
    text: "Makasih ya udah cerita. Kamu mau aku dengerin dulu, atau kamu mau kita pikirkan sama-sama langkah yang bisa kamu ambil?",
  },
  { who: "Salsa", text: "Dengerin dulu aja boleh?" },
  { who: "Dian", text: "Boleh. Cerita pelan-pelan aja." },
];

export const supportNote =
  "Jadi teman yang mendukung bukan berarti kamu harus menyelesaikan semua masalahnya sendirian. Kalau temanmu butuh bantuan lebih lanjut, kamu bisa ajak dia cari dukungan profesional bareng.";

/* ---------- Part 05 · Langkah & Layanan ---------- */

export const steps = [
  "Mengenali bahwa saya membutuhkan bantuan",
  "Menentukan orang atau layanan yang dapat dihubungi",
  "Mencari informasi layanan",
  "Menghubungi layanan",
  "Menjelaskan kondisi yang sedang dialami",
  "Mengikuti proses konsultasi",
  "Menentukan langkah berikutnya bersama tenaga profesional",
];

export type Service = {
  initials: string;
  name: string;
  address: string;
  phone: string;
  instagram: string;
  badge: string;
  tone: Tone;
  image?: string;
};

export const services: Service[] = [
  {
    initials: "PS",
    name: "Pusat Pembelajaran Keluarga (Puspaga) Provinsi Sulawesi Selatan",
    address:
      "Jl. Letjen Hertasning, Pandang, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0838-2200-7680",
    instagram: "puspagasulsel",
    badge: "Biaya: Gratis",
    tone: "lavender",
    image: "illustrations/puspaga.webp",
  },
  {
    initials: "UH",
    name: "Pusat Layanan Psikologi Universitas Hasanuddin",
    address:
      "Lantai 1 Perpustakaan Pusat Universitas Hasanuddin, samping Pojok Statistika",
    phone: "0882-4246-1585",
    instagram: "pusatlayananpsikologiunhas",
    badge: "Layanan kampus",
    tone: "mint",
    image: "illustrations/pusat-layanan-psikologi-unhas.webp",
  },
  {
    initials: "BP",
    name: "Bermakna Psychological Center",
    address:
      "Jl. Delta Mas II Blok A4, Batua, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90233",
    phone: "0895-1069-6112",
    instagram: "bermakna.center",
    badge: "Manggala",
    tone: "butter",
    image: "illustrations/bermakna.webp",
  },
  {
    initials: "PM",
    name: "Psikomorfosa",
    address:
      "Jalan Kompleks Agraria Blok Q2 A, Karunrung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0822-9231-8587",
    instagram: "psikomorfosa",
    badge: "Rappocini",
    tone: "pink",
    image: "illustrations/psikomorfosa.webp",
  },
  {
    initials: "DP",
    name: "Daya Potensia",
    address:
      "Permata Hijau Permai No.39 Blok J, Kassi-Kassi, Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0811-430-253",
    instagram: "dayapotensiaind",
    badge: "Rappocini",
    tone: "periwinkle",
    image: "illustrations/daya-potensia-indonesia.webp",
  },
  {
    initials: "MP",
    name: "Master Psikologi",
    address:
      "Jl. Perumahan Dosen Unhas, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245",
    phone: "0853-9987-0973",
    instagram: "master_psikologi",
    badge: "Tamalanrea",
    tone: "mint",
    image: "illustrations/mastery.webp",
  },
  {
    initials: "IN",
    name: "Intelektualita",
    address: "Jl. Rsi Faisal IV No.11, Makassar 90222",
    phone: "0858-2400-2343",
    instagram: "intelektualitamakassar",
    badge: "Makassar",
    tone: "lavender",
    image: "illustrations/intelektualita.webp",
  },
  {
    initials: "HJ",
    name: "Halo Jiwa Indonesia",
    address: "Layanan online, bisa diakses dari mana saja",
    phone: "0823-4569-4746",
    instagram: "halojiwaindonesia",
    badge: "Layanan online",
    tone: "butter",
    image: "illustrations/halo-jiwa.webp",
  },
];
