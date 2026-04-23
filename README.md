# 🏛️ Dlibration (V2.0)
### Future-Proof Digital Democracy Infrastructure

**Dlibration** adalah platform deliberasi publik berbasis **AI + Blockchain** yang mengubah partisipasi publik dari sekadar pengaduan menjadi proses demokrasi yang transparan, inklusif, dan aman dari manipulasi.

---

## 🌟 Highlights
- **AI-Powered Deliberation**: Ringkasan otomatis dan pengelompokan aspirasi menggunakan Gemini AI 1.5 Flash.
- **Blockchain Transparency**: Catatan aspirasi dan voting on-chain yang immutable (Base Sepolia).
- **Auto Policy Brief**: Ringkasan kebijakan instan untuk pemerintah dalam hitungan detik.
- **Gasless Participation**: Masyarakat bisa berpartisipasi tanpa harus membayar Gas Fee (Sponsored by Protocol).

---

## 📖 Dokumentasi Lengkap
Untuk penjelasan mendalam mengenai latar belakang, arsitektur teknis, dan alur kerja masing-masing role (Citizen, Admin, Government), silakan baca:
👉 **[DOCUMENTATION.md](./DOCUMENTATION.md)**

---

## 🚀 Fitur Berdasarkan Role

| Role | Fitur Utama |
|---------|--------------|
| **👤 Public (Warga)** | Kirim Aspirasi, Upvote Aspirasi Lain, Gasless Transaction, Pelacakan Status Real-time. |
| **🏛️ Government** | Analitik Isu, AI Policy Brief Generator, Verifikasi Tindak Lanjut (Resolved). |
| **👑 Admin** | Moderasi Global, Takedown Konten Melanggar, Manajemen Keamanan Platform. |

---

## 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **AI Engine**: Google Gemini 1.5 Flash
- **Blockchain**: Base Sepolia via Thirdweb SDK (Account Abstraction)
- **Storage**: IPFS (Decentralized Storage)
- **Styling**: Vanilla CSS + Tailwind (Custom Premium Aesthetic)

---

## 📂 Struktur Project
- `frontend/`: Aplikasi web utama (Next.js).
- `smart-contract/`: Smart contract Solidity dan skrip deployment Hardhat.

---

## 🧪 Cara Menjalankan
1. `cd frontend`
2. `npm install`
3. Masukkan API Key di `.env.local`
4. `npm run dev`

---
Built with ❤️ for the future of governance.
