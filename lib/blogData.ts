export interface BlogPost {
  slug: string;
  title: {
    en: string;
    id: string;
  };
  excerpt: {
    en: string;
    id: string;
  };
  content: {
    en: string;
    id: string;
  };
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "masa-depan-demokrasi-digital",
    title: {
      en: "The Future of Digital Democracy",
      id: "Masa Depan Demokrasi Digital"
    },
    excerpt: {
      en: "How AI and Blockchain are redefining public participation in the 21st century.",
      id: "Bagaimana AI dan Blockchain mendefinisikan ulang partisipasi publik di abad ke-21."
    },
    content: {
      en: `
        <p>Democracy is at a turning point. Traditional systems are struggling to keep up with the speed of digital information, leading to a trust gap between citizens and institutions. Dlibration is here to bridge that gap.</p>
        <h2>The Role of Generative AI</h2>
        <p>AI is not just about automation; it's about understanding. By processing thousands of individual voices, Generative AI can extract the core sentiment and concerns of a community without losing the nuance of individual perspectives.</p>
        <h2>The Blockchain Guarantee</h2>
        <p>Integrity is the foundation of trust. By recording every aspiration on the Base blockchain, we ensure that no voice can be deleted or altered. This is the new standard for public accountability.</p>
        <blockquote>"Technology should not replace the human voice, it should amplify it."</blockquote>
        <p>As we look forward, the integration of these technologies will allow for more responsive, data-driven, and fair governance for everyone.</p>
      `,
      id: `
        <p>Demokrasi sedang berada di titik balik. Sistem tradisional kesulitan mengejar kecepatan informasi digital, yang menyebabkan celah kepercayaan antara warga dan institusi. Dlibration hadir untuk menjembatani celah tersebut.</p>
        <h2>Peran Generative AI</h2>
        <p>AI bukan hanya tentang otomasi; ini tentang pemahaman. Dengan mengolah ribuan suara individu, Generative AI dapat mengekstrak sentimen inti dan kekhawatiran komunitas tanpa kehilangan nuansa perspektif individu.</p>
        <h2>Jaminan Blockchain</h2>
        <p>Integritas adalah fondasi kepercayaan. Dengan mencatat setiap aspirasi di blockchain Base, kami menjamin bahwa tidak ada suara yang bisa dihapus atau diubah. Ini adalah standar baru untuk akuntabilitas publik.</p>
        <blockquote>"Teknologi tidak seharusnya menggantikan suara manusia, melainkan memperkuatnya."</blockquote>
        <p>Saat kita melangkah maju, integrasi teknologi ini akan memungkinkan tata kelola yang lebih responsif, berbasis data, dan adil bagi semua orang.</p>
      `
    },
    date: "2024-04-25",
    author: "Khairan Noor",
    category: "Vision",
    readTime: "5 min read",
    tags: ["Democracy", "AI", "Blockchain"]
  },
  {
    slug: "mengapa-base-blockchain-terbaik",
    title: {
      en: "Why Base Blockchain is the Best for Public Records",
      id: "Mengapa Base Blockchain Terbaik untuk Catatan Publik"
    },
    excerpt: {
      en: "Exploring the scalability and security of Base Layer-2 for large-scale social impact.",
      id: "Menjelajahi skalabilitas dan keamanan Base Layer-2 untuk dampak sosial skala besar."
    },
    content: {
      en: `
        <p>Choosing the right infrastructure for a platform like Dlibration is critical. We needed speed, security, and low cost. Base, incubated by Coinbase, provides the perfect balance.</p>
        <h2>Low Costs, High Security</h2>
        <p>By operating as an Ethereum Layer-2, Base inherits the security of the mainnet while offering transaction costs that are affordable for public institutions and NGOs.</p>
        <h2>Interoperability</h2>
        <p>The open-source nature of Base allows Dlibration to connect with other decentralized protocols, creating a larger ecosystem of verified public data.</p>
        <p>This technical choice ensures that our platform can scale from a single village to an entire nation without compromising performance.</p>
      `,
      id: `
        <p>Memilih infrastruktur yang tepat untuk platform seperti Dlibration sangatlah krusial. Kami membutuhkan kecepatan, keamanan, dan biaya rendah. Base, yang diinkubasi oleh Coinbase, memberikan keseimbangan yang sempurna.</p>
        <h2>Biaya Rendah, Keamanan Tinggi</h2>
        <p>Dengan beroperasi sebagai Ethereum Layer-2, Base mewarisi keamanan mainnet sambil menawarkan biaya transaksi yang terjangkau bagi instansi publik dan NGO.</p>
        <h2>Interoperabilitas</h2>
        <p>Sifat open-source dari Base memungkinkan Dlibration terhubung dengan protokol terdesentralisasi lainnya, menciptakan ekosistem data publik terverifikasi yang lebih besar.</p>
        <p>Pilihan teknis ini menjamin bahwa platform kami dapat berskala dari satu desa hingga seluruh negara tanpa mengorbankan performa.</p>
      `
    },
    date: "2024-04-20",
    author: "Dlibration Team",
    category: "Technology",
    readTime: "4 min read",
    tags: ["Base", "Web3", "Infrastructure"]
  },
  {
    slug: "transparansi-di-kampus-modern",
    title: {
      en: "Transparency in Modern Campus Life",
      id: "Transparansi di Kehidupan Kampus Modern"
    },
    excerpt: {
      en: "How students are using Dlibration to modernize student council elections.",
      id: "Bagaimana mahasiswa menggunakan Dlibration untuk memodernisasi pemilihan ketua BEM."
    },
    content: {
      en: `
        <p>Universities are often the first place where people experience governance. However, student council elections (Pemira) are often plagued by doubts and lack of data.</p>
        <h2>Case Study: Secure Voting</h2>
        <p>Several partner universities have already implemented Dlibration for their elections. The results? 100% auditability and a significant increase in student participation.</p>
        <h2>Beyond Elections</h2>
        <p>It's not just about who wins; it's about the agenda. Students use the AI analysis tool to present a unified list of priorities to the campus administration, from facility improvements to curriculum changes.</p>
        <p>Empowered students become empowered citizens. Dlibration is proud to support the next generation of leaders.</p>
      `,
      id: `
        <p>Universitas seringkali menjadi tempat pertama bagi orang-orang untuk merasakan tata kelola. Namun, pemilihan ketua BEM (Pemira) seringkali dihantui keraguan dan kurangnya data.</p>
        <h2>Studi Kasus: Pemungutan Suara Aman</h2>
        <p>Beberapa universitas mitra telah mengimplementasikan Dlibration untuk pemilihan mereka. Hasilnya? 100% auditabilitas dan peningkatan signifikan dalam partisipasi mahasiswa.</p>
        <h2>Melampaui Pemilihan</h2>
        <p>Ini bukan hanya tentang siapa yang menang; ini tentang agenda. Mahasiswa menggunakan alat analisis AI untuk menyajikan daftar prioritas terpadu kepada administrasi kampus, mulai dari perbaikan fasilitas hingga perubahan kurikulum.</p>
        <p>Mahasiswa yang berdaya menjadi warga negara yang berdaya. Dlibration bangga mendukung generasi pemimpin berikutnya.</p>
      `
    },
    date: "2024-04-15",
    author: "Academic Division",
    category: "Solutions",
    readTime: "6 min read",
    tags: ["Campus", "Education", "Innovation"]
  },
  {
    slug: "keamanan-data-aspirasi-anda",
    title: {
      en: "Security of Your Aspiration Data",
      id: "Keamanan Data Aspirasi Anda"
    },
    excerpt: {
      en: "Deep dive into the encryption and anonymization protocols of Dlibration.",
      id: "Pembahasan mendalam tentang protokol enkripsi dan anonimitas di Dlibration."
    },
    content: {
      en: `
        <p>When you speak up, your safety is our priority. We use a combination of cryptographic signing and data anonymization to protect your identity.</p>
        <h2>End-to-End Encryption</h2>
        <p>Your reports are encrypted the moment you hit 'Send'. Only the authorized analysis engine and the intended recipient can access the detailed content.</p>
        <h2>On-Chain Anonymity</h2>
        <p>While the proof of your aspiration is on the blockchain, your personal identity is never stored in a way that can be linked back to you by unauthorized parties.</p>
        <p>We follow global standards like GDPR and Indonesia's PDP law to ensure your data sovereignty is respected.</p>
      `,
      id: `
        <p>Saat Anda bersuara, keamanan Anda adalah prioritas kami. Kami menggunakan kombinasi penandatanganan kriptografis dan anonimisasi data untuk melindungi identitas Anda.</p>
        <h2>Enkripsi End-to-End</h2>
        <p>Laporan Anda dienkripsi saat Anda menekan tombol 'Kirim'. Hanya mesin analisis resmi dan penerima yang dituju yang dapat mengakses konten terperinci.</p>
        <h2>Anonimitas On-Chain</h2>
        <p>Meskipun bukti aspirasi Anda ada di blockchain, identitas pribadi Anda tidak pernah disimpan dengan cara yang dapat dikaitkan kembali dengan Anda oleh pihak yang tidak berwenang.</p>
        <p>Kami mengikuti standar global seperti GDPR dan UU PDP Indonesia untuk menjamin kedaulatan data Anda dihormati.</p>
      `
    },
    date: "2024-04-10",
    author: "Security Lead",
    category: "Security",
    readTime: "4 min read",
    tags: ["Privacy", "Encryption", "Safety"]
  },
  {
    slug: "peran-ngo-dalam-era-web3",
    title: {
      en: "The Role of NGOs in the Web3 Era",
      id: "Peran NGO dalam Era Web3"
    },
    excerpt: {
      en: "How non-profits can leverage verifiable data to influence policy more effectively.",
      id: "Bagaimana organisasi non-profit dapat memanfaatkan data terverifikasi untuk memengaruhi kebijakan dengan lebih efektif."
    },
    content: {
      en: `
        <p>Non-Governmental Organizations (NGOs) are the watchdogs of democracy. In the Web3 era, their job becomes more powerful through verifiable evidence.</p>
        <h2>Data-Driven Advocacy</h2>
        <p>Instead of relying on small sample surveys, NGOs can now present large-scale, blockchain-verified sentiment data to policymakers.</p>
        <h2>Transparency in Campaigns</h2>
        <p>NGOs can also use Dlibration to show their donors exactly how their advocacy efforts are being received and processed by the government.</p>
        <p>This new era of radical transparency empowers NGOs to be more credible and effective in their mission to serve society.</p>
      `,
      id: `
        <p>Organisasi Non-Pemerintah (NGO) adalah penjaga demokrasi. Di era Web3, pekerjaan mereka menjadi lebih kuat melalui bukti yang dapat diverifikasi.</p>
        <h2>Advokasi Berbasis Data</h2>
        <p>Alih-alih mengandalkan survei sampel kecil, NGO kini dapat menyajikan data sentimen skala besar yang terverifikasi blockchain kepada pembuat kebijakan.</p>
        <h2>Transparansi dalam Kampanye</h2>
        <p>NGO juga dapat menggunakan Dlibration untuk menunjukkan kepada donatur mereka bagaimana tepatnya upaya advokasi mereka diterima dan diproses oleh pemerintah.</p>
        <p>Era baru transparansi radikal ini memberdayakan NGO untuk menjadi lebih kredibel dan efektif dalam misi mereka melayani masyarakat.</p>
      `
    },
    date: "2024-04-05",
    author: "Civil Society Liaison",
    category: "Advocacy",
    readTime: "5 min read",
    tags: ["NGO", "Advocacy", "Social Impact"]
  }
];
