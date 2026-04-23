# 🏛️ Dlibration: Digital Democracy Infrastructure

**Dlibration** adalah platform deliberasi publik masa depan yang menggabungkan kekuatan **Blockchain L2** dan **Generative AI** untuk menciptakan jembatan kepercayaan yang transparan dan inklusif antara warga negara dan pemerintah.

---

## 📜 1. Latar Belakang (The Why)
Dalam sistem birokrasi tradisional, suara rakyat seringkali:
- **Hilang atau Tercecer:** Aspirasi yang dikirim melalui form biasa mudah diabaikan.
- **Dimanipulasi:** Data laporan bisa diubah atau dihapus oleh pihak yang memiliki akses database pusat.
- **Lambat direspon:** Pemerintah sering kewalahan meringkas ribuan aspirasi yang masuk.

**Dlibration** hadir untuk memastikan bahwa setiap suara yang valid:
1. **Abadi:** Disimpan di blockchain yang tidak bisa diubah (Immutable).
2. **Terfilter:** AI memastikan platform bersih dari spam dan hoaks.
3. **Actionable:** AI meringkas data mentah menjadi laporan kebijakan yang siap dieksekusi pemerintah.

---

## ⚙️ 2. Cara Kerja (Technical Architecture)

Dlibration menggunakan "The Holy Trinity" of Tech Stack:
1.  **Base Sepolia (Blockchain L2):** Digunakan untuk menyimpan "sidik jari" (hash) dari setiap aspirasi. Ini menjamin transparansi 100% dan bukti audit yang tidak bisa dibantah.
2.  **Gemini 1.5 Flash (AI Engine):** Bertindak sebagai "Gatekeeper" dan "Analyst". AI memvalidasi konten sebelum masuk ke blockchain dan meringkas tren aspirasi untuk pemerintah.
3.  **IPFS (Decentralized Storage):** Dokumen atau gambar pendukung disimpan secara terdesentralisasi, memastikan data tetap tersedia tanpa bergantung pada satu server pusat.

---

## 🔄 3. Alur Pengguna (Role-Based Flows)

### 👤 A. Citizen (Warga Negara)
*Alur: Suarakan -> Validasi AI -> Rekam Blockchain*
1.  **Login:** Menggunakan wallet (Metamask/Thirdweb) dengan biaya gas 0 (Sponsored).
2.  **Submit:** Mengisi judul dan detail aspirasi (bisa mode publik atau *Secret Report*).
3.  **AI Check:** AI mendeteksi secara real-time. Jika mengandung SARA/Spam, postingan ditolak sebelum transaksi blockchain dimulai.
4.  **Confirm:** User menandatangani transaksi (gratis).
5.  **Engage:** Warga lain bisa memberikan **Upvote** sebagai bentuk dukungan.

### 🛡️ B. Admin (Moderator)
*Alur: Monitor -> Takedown Legal -> Integrity Audit*
1.  **Oversight:** Melihat semua aspirasi yang masuk ke blockchain secara real-time.
2.  **Moderasi:** Jika ditemukan konten yang lolos filter AI tapi melanggar hukum (misal: fitnah spesifik), Admin bisa mengklik **Takedown**.
3.  **Status Update:** Kontrak pintar mengubah status menjadi `Hidden`. Postingan hilang dari feed publik, tapi bukti transaksinya tetap ada di blockchain (untuk audit hukum).

### 🏛️ C. Government (Pemerintah/Instansi)
*Alur: Analytics -> Policy Brief -> Resolution*
1.  **Dashboard Gov:** Melihat visualisasi data (statistik) berdasarkan kategori (Infrastruktur, Pendidikan, dll).
2.  **Generate Brief:** Menggunakan AI untuk merangkum ribuan aspirasi menjadi satu dokumen strategi kebijakan (Policy Brief) dalam hitungan detik.
3.  **Resolve:** Menandai aspirasi yang sudah ditindaklanjuti sebagai `Resolved`.

---

## 🔐 4. Keamanan & Privasi
- **Zero-Knowledge Concept:** Kami tidak menyimpan data pribadi secara mentah. Identitas diwakili oleh alamat wallet.
- **End-to-End Encryption:** Laporan rahasia dienkripsi dengan standar AES-256 sebelum diupload ke IPFS.
- **Gasless Transaction:** Berkat teknologi *Account Abstraction*, warga tidak perlu memiliki saldo crypto untuk berpartisipasi.

---

## 🚀 5. Roadmap Singkat
- [x] **V1:** NFT-based simple upload.
- [x] **V2:** AI Moderation, Global Feed, Admin Controls, Rebranding to Dlibration.
- [ ] **V3:** ZK-Proof identity verification, On-chain Governance (DAO).

---
*Dlibration - Karena Suara Anda Layak Menjadi Sejarah.*
