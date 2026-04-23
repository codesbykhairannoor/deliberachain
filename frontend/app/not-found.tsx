import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h2>
      <p className="text-slate-400 mb-8">Maaf, halaman yang Anda cari tidak ada di protokol Dlibration.</p>
      <Link 
        href="/"
        className="bg-vault-amber text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
