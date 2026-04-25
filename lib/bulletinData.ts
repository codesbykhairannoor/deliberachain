export interface Bulletin {
  id: string;
  title: string;
  content: string;
  author: string;
  jurisdiction: string;
  timestamp: number;
  category: "KEBIJAKAN" | "UPDATE" | "PENGUMUMAN" | "HOT-TOPIC";
}

// Mock initial data
export const initialBulletins: Bulletin[] = [
  {
    id: "1",
    title: "Pembangunan Jalan Tol Sumatera Tahap II Dimulai",
    content: "Pemerintah pusat telah mengalokasikan dana untuk perbaikan dan pembangunan jalan tol lintas Sumatera guna meningkatkan konektivitas ekonomi antar provinsi.",
    author: "Kementerian PUPR",
    jurisdiction: "SUMATERA",
    timestamp: Date.now() - 86400000 * 2,
    category: "KEBIJAKAN"
  },
  {
    id: "2",
    title: "Subsidi Beras untuk Wilayah Jawa Barat",
    content: "Merespon kenaikan harga beras, pemerintah daerah Jawa Barat meluncurkan program subsidi pangan untuk keluarga pra-sejahtera.",
    author: "Pemprov Jabar",
    jurisdiction: "JAWA-BARAT",
    timestamp: Date.now() - 86400000,
    category: "HOT-TOPIC"
  },
  {
    id: "3",
    title: "Penerimaan Beasiswa Pendidikan Khairan 2026",
    content: "Universitas Khairan membuka pendaftaran beasiswa penuh bagi mahasiswa berprestasi di bidang teknologi blockchain.",
    author: "Universitas Khairan",
    jurisdiction: "UNIVERSITAS-KHAIRAN",
    timestamp: Date.now() - 3600000,
    category: "PENGUMUMAN"
  }
];

// Simple in-memory storage for the session (since we don't have a DB yet)
let bulletins: Bulletin[] = [...initialBulletins];

export function getBulletins() {
  return bulletins;
}

export function addBulletin(bulletin: Omit<Bulletin, "id" | "timestamp">) {
  const newBulletin: Bulletin = {
    ...bulletin,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now()
  };
  bulletins = [newBulletin, ...bulletins];
  return newBulletin;
}
