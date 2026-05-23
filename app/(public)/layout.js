"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicLayout({ children }) {
  // State untuk melacak menu mobile terbuka/tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State BARU: melacak menu mana yang sedang aktif (default: 'tentang')
  const [activeMenu, setActiveMenu] = useState('beranda');


  // --- FITUR BARU: SCROLLSPY (Deteksi Visual Akurat) ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda','tentang', 'layanan', 'keunggulan', 'tarif'];
      let currentSection = 'beranda'; // Default awal jika di paling atas

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Jika bagian atas (top) section sudah merangkak naik melewati batas 150px dari atas layar,
          // maka section tersebut otomatis dianggap sedang aktif dibaca oleh user.
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      });

      setActiveMenu(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Jalankan sekali saat pertama kali halaman dimuat
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // --------------------------------------------------------

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi BARU: Mengubah menu aktif sekaligus menutup menu mobile jika sedang terbuka
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-surface-container-low shadow-md flex justify-between items-center px-container-margin h-16 w-full z-50 sticky top-0">
        
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-[24px] font-bold text-tertiary flex items-center gap-2">
            <Image 
              src="/icons/logo.png" 
              alt="Logo KOMAH" 
              width={120} 
              height={120} 
            />
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 items-center">
        <Link 
            href="#beranda" 
            onClick={() => handleMenuClick('beranda')}
            className={`font-headline-sm text-[20px] pb-1 transition-all duration-200 border-b-2 ${activeMenu === 'beranda' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
          >
            Beranda
        </Link>
          <Link 
            href="#tentang" 
            onClick={() => handleMenuClick('tentang')}
            className={`font-headline-sm text-[20px] pb-1 transition-all duration-200 border-b-2 ${activeMenu === 'tentang' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
          >
            Tentang
          </Link>
          <Link 
            href="#layanan" 
            onClick={() => handleMenuClick('layanan')}
            className={`font-headline-sm text-[20px] pb-1 transition-all duration-200 border-b-2 ${activeMenu === 'layanan' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
          >
            Layanan
          </Link>
          <Link 
            href="#keunggulan" 
            onClick={() => handleMenuClick('keunggulan')}
            className={`font-headline-sm text-[20px] pb-1 transition-all duration-200 border-b-2 ${activeMenu === 'keunggulan' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
          >
            Keunggulan
          </Link>
          <Link 
            href="#tarif" 
            onClick={() => handleMenuClick('tarif')}
            className={`font-headline-sm text-[20px] pb-1 transition-all duration-200 border-b-2 ${activeMenu === 'tarif' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
          >
            Tarif
          </Link>
        </div>

        {/* Tombol Login Desktop */}
        <div className="hidden md:block">
          <Link 
            href="/login" 
            // PERUBAHAN: Ditambahkan hover:-translate-y-1, hover:shadow-lg, active:scale-95, dan duration-300
            className="flex items-center gap-2 bg-secondary-container text-primary px-4 py-2 rounded-full font-label-mono text-[16px] transition-all duration-300 shadow-md hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-container/30 active:scale-95"
          >
            {/* Gambar Ikon Login */}
            <Image 
              src="/icons/login.png" 
              alt="login" 
              width={20} 
              height={20} 
            />
            <span>Login</span>
          </Link>
        </div>

        {/* Tombol Hamburger (Mobile) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center relative w-8 h-8"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
        {/* Gambar Hamburger (Hilang saat menu terbuka) */}
            <Image
                src="/icons/hamburger.png"
                alt="hamburger"
                width={32}
                height={32}
                className={`absolute transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
            />
    
        {/* Gambar Close / X (Muncul saat menu terbuka) */}
            <Image
                src="/icons/close.png"
                alt="close"
                width={25}
                height={25}
                className={`absolute transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
            />
            </button>

        {/* Dropdown Menu Mobile */}
        <div 
            className={`absolute top-16 left-0 w-full bg-surface-container-low shadow-2xl flex flex-col items-start px-6 py-8 gap-6 md:hidden border-t border-outline-variant z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-5 invisible'
         }`}
        >
            <Link 
              href="#beranda" 
              onClick={() => handleMenuClick('beranda')}
              className={`w-fit inline-block font-headline-sm text-[20px] pb-1 border-b-2 ${activeMenu === 'beranda' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
            >
              Beranda
            </Link>
            <Link 
              href="#tentang" 
              onClick={() => handleMenuClick('tentang')}
              className={`w-fit inline-block font-headline-sm text-[20px] pb-1 border-b-2 ${activeMenu === 'tentang' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
            >
              Tentang
            </Link>
            <Link 
              href="#layanan" 
              onClick={() => handleMenuClick('layanan')}
              className={`w-fit inline-block font-headline-sm text-[20px] pb-1 border-b-2 ${activeMenu === 'layanan' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
            >
              Layanan
            </Link>
            <Link 
              href="#keunggulan" 
              onClick={() => handleMenuClick('keunggulan')}
              className={`w-fit inline-block font-headline-sm text-[20px] pb-1 border-b-2 ${activeMenu === 'keunggulan' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
            >
              Keunggulan
            </Link>
            <Link 
              href="#tarif" 
              onClick={() => handleMenuClick('tarif')}
              className={`w-fit inline-block font-headline-sm text-[20px] pb-1 border-b-2 ${activeMenu === 'tarif' ? 'text-tertiary border-tertiary' : 'text-gray-300 border-transparent hover:text-tertiary'}`}
            >
              Tarif
            </Link>
            {/* Tombol Login Mobile */}
            <Link 
              href="/login" 
              onClick={toggleMenu} 
              // PERUBAHAN: Ditambahkan hover:-translate-y-1, hover:shadow-lg, active:scale-[0.98], dan duration-300
              className="flex items-center justify-start gap-3 w-full bg-secondary-container text-primary px-6 py-3.5 mt-2 rounded-xl font-label-mono text-[16px] transition-all duration-300 shadow-md hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-container/30 active:scale-[0.98]"
            >
              {/* Gambar Ikon Login */}
              <Image 
                src="/icons/login.png" 
                alt="login" 
                width={22} 
                height={22} 
              />
              <span>Login ke Dashboard</span>
            </Link>
          </div>
      </nav>

      <div className="flex-grow">
        {children}
      </div>




      {/* Footer khusus untuk halaman publik */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
          
          {/* Container Utama: Berjejer ke bawah di mobile (gap-12), berjejer ke samping di desktop (md:flex-row) */}
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-start"> 
            
            {/* 1. Brand / Logo + tagline */}
            {/* PERUBAHAN: Menghapus items-center dan text-center agar rata kiri */}
            <div className="flex flex-col items-start text-left md:max-w-xs">
              <Image
                src="/icons/logo.png"
                alt="Logo KOMAH"
                width={200}
                height={200}
                className="-ml-4" // Sedikit margin negatif kiri agar logo presisi sejajar dengan teks
              />
              <p className="font-body-sm text-[14px] text-text-secondary mt-3">
                Solusi transportasi roda dua yang kece & terpercaya untuk seluruh
                civitas UIN SUSKA RIAU.
              </p>
            </div>

            {/* 2. Navigasi */}
            {/* PERUBAHAN: Menghapus items-center agar rata kiri */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="font-headline-sm text-[18px] font-bold text-tertiary mb-2">Navigasi</h3>
              <Link href="#beranda" className="font-label-mono text-[14px] text-text-secondary hover:text-tertiary transition-colors">Beranda</Link>
              <Link href="#tentang" className="font-label-mono text-[14px] text-text-secondary hover:text-tertiary transition-colors">Tentang</Link>
              <Link href="#layanan" className="font-label-mono text-[14px] text-text-secondary hover:text-tertiary transition-colors">Layanan</Link>
              <Link href="#keunggulan" className="font-label-mono text-[14px] text-text-secondary hover:text-tertiary transition-colors">Keunggulan</Link>
              <Link href="#tarif" className="font-label-mono text-[14px] text-text-secondary hover:text-tertiary transition-colors">Tarif</Link>
            </div>

            {/* 3. Kontak & Info (Desain Baru) */}
            {/* PERUBAHAN: Menghapus items-center agar keseluruhan blok rata kiri */}
            <div className="flex flex-col items-start gap-6 md:max-w-xs w-full">
              
              {/* Judul dengan garis pemanis */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-headline-sm text-[18px] font-bold text-tertiary">Kontak & Info</h3>
              </div>

              {/* Item 1: Email */}
              {/* PERUBAHAN: Menghapus justify-center agar kotak rata kiri penuh */}
              <a 
                href="mailto:komah@uin-suska.ac.id" 
                className="flex items-center gap-4 group text-left w-full justify-start"
              >
                {/* Kotak Ikon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low group-hover:bg-white/5 transition-colors">
                  <Image 
                    src="/icons/email.png" 
                    alt="email" 
                    width={30} 
                    height={30} 
                  />
                </div>
                {/* Teks */}
                <div className="flex flex-col">
                  <span className="font-body-sm text-[13px] text-text-secondary">Email</span>
                  <span className="font-label-mono text-[14px] text-gray-200 group-hover:text-tertiary transition-colors">
                    komah@uin-suska.ac.id
                  </span>
                </div>
              </a>

              {/* Item 2: WhatsApp */}
              {/* PERUBAHAN: Menghapus justify-center */}
              <a 
                href="https://wa.me/6287893540328" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group text-left w-full justify-start"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low group-hover:bg-white/5 transition-colors">
                  <Image 
                    src="/icons/whatsapp.png" 
                    alt="WhatsApp" 
                    width={30} 
                    height={30} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-body-sm text-[13px] text-text-secondary">WhatsApp</span>
                  <span className="font-label-mono text-[14px] text-gray-200 group-hover:text-tertiary transition-colors">
                    +62 878-9354-0328
                  </span>
                </div>
              </a>

              {/* Item 3: Lokasi */}
              {/* PERUBAHAN: Menghapus justify-center */}
              <div className="flex items-start gap-4 text-left w-full justify-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low">
                  <Image 
                    src="/icons/lokasi2.png" 
                    alt="Lokasi" 
                    width={30} 
                    height={30} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-body-sm text-[13px] text-text-secondary">Lokasi</span>
                  <span className="font-label-mono text-[14px] text-gray-200 leading-snug">
                    Jl. HR. Soebrantas No.155 KM 15, Simpang Baru, Kec. Tampan, Pekanbaru, Riau 28293
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Garis pemisah + copyright */}
          {/* Copyright dibiarkan text-center (tengah) agar lebih estetik, atau jika ingin rata kiri juga, ubah 'text-center' menjadi 'text-left' */}
          <div className="mt-12 pt-6 border-t border-outline-variant/40 text-center md:text-left">
            <p className="font-body-sm text-[14px] text-text-secondary">
              © 2026 KOMAH UIN SUSKA RIAU. Kece & Terpercaya.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}