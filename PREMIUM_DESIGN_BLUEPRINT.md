# 🌌 OneForMind: Hyper-Detailed Design Blueprint

Dokumen ini adalah panduan teknis "Pixel-Perfect" untuk mereplikasi estetika premium, futuristik, dan editorial yang digunakan dalam OneForMind. Gunakan blueprint ini sebagai standar untuk membangun halaman baru atau memigrasikan gaya ini ke project lain.

---

## 1. Typography Engineering (The "Feel" Math) ✍️

Rahasia tampilan premium di sini bukan hanya pada jenis font, tapi pada **interaksi antar properti CSS**.

### 1.1 The "Monumental" Headline (H1)
Digunakan untuk Hero atau judul utama yang ingin menonjol.
- **Classes**: `text-5xl md:text-8xl font-[900] tracking-[-0.03em] leading-[1.05] text-slate-900`
- **Logic**:
  - `font-[900]`: Memberikan densitas visual yang berat.
  - `tracking-[-0.03em]`: Menarik huruf lebih rapat untuk kesan editorial/modern.
  - `leading-[1.05]`: Menghilangkan jarak baris yang berlebih agar judul terasa menyatu.

### 1.2 The "Semantic" Sub-headline
- **Classes**: `text-lg md:text-xl text-slate-500 font-medium leading-relaxed opacity-80`
- **Logic**: Menggunakan warna `slate-500` dengan `opacity-80` menciptakan kontras hirarki yang jelas dengan H1 yang hitam pekat.

### 1.3 The "Micro-Badge" System
Badge kecil yang diletakkan di atas judul untuk konteks extra.
- **Blueprint**:
```html
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-bold text-[10px] tracking-[0.2em] uppercase shadow-sm">
    <span class="flex h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
    {{ __('badge_text') }}
</div>
```

---

## 2. Layout & Sectioning Architecture 🏗️

### 2.1 Standard Spacing
Jangan menghemat *white space*. Gunakan skala ini:
- **Hero Vertical**: `pt-24 pb-40 lg:pt-32 lg:pb-56`
- **Standard Section**: `py-32` atau `py-40`
- **Footer/Bottom**: `pb-20` atau `py-48`

### 2.2 Container Rules
Selalu bungkus konten dalam:
```html
<section class="relative py-40 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Content Here -->
    </div>
</section>
```

---

## 3. Component Deep Dive 💎

### 3.1 The "Premium Hero" Blueprint (Layered Depth)
Logika layering untuk Hero dengan elemen mengambang:
```html
<header class="relative pt-24 pb-40 lg:pt-32 lg:pb-56 overflow-hidden bg-white">
    <!-- 1. Ambient Glow (Negative Z-Index) -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-full bg-indigo-50/40 rounded-full blur-3xl -z-10"></div>
    
    <!-- 2. Floating Objects (Absolute Positioning) -->
    <div class="absolute top-32 left-[5%] w-16 h-16 bg-white/60 backdrop-blur-md rounded-[1.5rem] shadow-xl flex items-center justify-center text-2xl animate-float hidden xl:flex border border-white/80 z-20 hover:scale-110 transition-transform rotate-6">
        🚀
    </div>

    <!-- 3. Core Content (Standard Grid/Flex) -->
    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <!-- Badge + H1 + Sub + CTA -->
    </div>
</header>
```

### 3.2 Premium Card Pattern (5 Pillars Style)
Card dengan sudut sangat bulat dan shadow yang halus.
```html
<div class="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
    <!-- Icon Box -->
    <div class="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition">
        🌱
    </div>
    <h3 class="text-2xl font-bold text-slate-900 mb-4">{{ __('title') }}</h3>
    <p class="text-slate-500 font-medium leading-relaxed">{{ __('description') }}</p>
</div>
```

---

## 4. Advanced Visual Effects 🌌

### 4.1 Visual Textures
Gunakan elemen ini untuk mengisi kekosongan:
- **Grid Pattern**: `class="bg-pattern-grid"` (Gunakan background SVG grid 40x40px transparan).
- **Diagonal Pattern**: `class="bg-pattern-diagonal"`.
- **Blurred Orbs**: Gunakan `bg-indigo-500/10 rounded-full blur-3xl` di belakang elemen penting.

### 4.2 Custom Shadows (Shadow Mapping)
Jangan gunakan `shadow-md` standar. Gunakan custom:
- **Soft Glow**: `shadow-[0_10px_40px_rgba(79,70,229,0.15)]`
- **Deep Elevation**: `shadow-[0_20px_50px_rgba(0,0,0,0.05)]`
- **Inner Glow (Dark Mode)**: `shadow-[0_0_30px_rgba(255,255,255,0.05)]`

---

## 5. Animation Catalog & Interactions ⚡

### 5.1 CSS Keyframes
Tambahkan ini di file CSS global Anda:

```css
@keyframes float {
    0%, 100% { transform: translateY(0) rotate(6deg); }
    50% { transform: translateY(10px) rotate(6deg); }
}

@keyframes bounce-slow {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-15px) rotate(-3deg); }
}

@keyframes skel-loading {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
```

### 5.2 Interactions (Alpine.js & HTMX)
- **Smooth Switch**: Gunakan `@click="expanded = !expanded"` dengan `x-collapse` pada Alpine.js untuk transisi halus.
- **Instant Nav**: Gunakan `hx-boost="true"` pada link untuk navigasi tanpa refresh halaman (SPA experience).

---

## 6. Implementation Checklist 📋

- [ ] Font `Plus Jakarta Sans` harus terinstall dengan bobot 400, 600, 700, dan 900.
- [ ] Tailwind Config harus diatur untuk `rounded-[2.5rem]` dan custom colors.
- [ ] Pastikan `backdrop-blur-md` aktif untuk elemen nav/overlay.
- [ ] Gunakan `selection:bg-indigo-100 selection:text-indigo-700` pada body agar highlight teks selaras dengan brand.

---

> [!IMPORTANT]
> **Kunci keindahan desain ini adalah KEKONSISTENAN.** Jika Anda memilih `rounded-[2.5rem]` untuk satu card, pastikan SEMUA card di halaman tersebut menggunakan nilai yang sama. Begitu pula dengan `tracking-[-0.03em]` pada semua Heading 1 & 2.
