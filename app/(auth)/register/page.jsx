'use client';

import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function RoleSelectionPage() {
  const [activeRole, setActiveRole] = useState(null);

  return (
    <main className="bg-background text-on-background min-h-[100dvh] flex items-center justify-center font-body-md p-4 selection:bg-tertiary selection:text-on-tertiary relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-tertiary opacity-[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary opacity-[0.03] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative w-full max-w-2xl z-10">
        
        {/* Main Shell Card */}
        <div className="backdrop-blur-md bg-[#1f1f21]/70 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl p-6 md:p-8">
          
          {/* Top Navigation */}
          {/* PERUBAHAN 1: mb-4 diubah jadi mb-1 agar elemen di bawahnya bisa naik */}
          <div className="flex items-center justify-between mb-2 relative">

            {/* TOMBOL KEMBALI */}
              <Link 
                href="/login" 
                className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors group font-body-sm mr-auto w-fit"
              >
                <Image 
                  src="/icons/back.png" 
                  alt="kembali" 
                  width={20} 
                  height={20} 
                  className="transition-all duration-200 group-hover:-translate-x-1 opacity-70 group-hover:opacity-100" 
                />
                <span className="font-medium text-sm">Kembali</span>
              </Link>

            {/* Logo KOMAH di Pojok Kiri Atas */}
                <div className="absolute top-0 right-0  md:right-2">
                    <Image
                      src="/icons/logo.png"
                      alt="Logo KOMAH"
                      width={80} 
                      height={80}
                    />
                </div>
          </div>

          {/* Header Content */}
          {/* PERUBAHAN 2: Ditambahkan -mt-2 agar judul tertarik sedikit lebih ke atas */}
          <div className="text-center mb-6 space-y-2">
            <h1 className="font-headline-md text-2xl md:text-3xl text-text-primary">Pilih Jenis Akun</h1>
            <p className="font-body-sm text-[13px] text-text-secondary max-w-md mx-auto leading-relaxed">
              Silakan pilih peran Anda untuk memulai perjalanan dengan KOMAH.
            </p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Customer Role Card */}
            <div 
              onClick={() => setActiveRole('customer')}
              className={`group cursor-pointer backdrop-blur-md bg-[#1f1f21]/70 p-5 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:-translate-y-1.5 hover:shadow-[0_15px_20px_-5px_rgba(0,0,0,0.4),0_8px_8px_-5px_rgba(240,192,82,0.1)] active:scale-[0.98] ${
                activeRole === 'customer' ? 'border-tertiary bg-tertiary/5' : 'border-outline-variant hover:border-tertiary'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors bg-tertiary/10 group-hover:bg-tertiary/20">
                <Image 
                  src="/icons/user.png" 
                  alt="user" 
                  width={40} 
                  height={40} 
                />
              </div>
              <div className="space-y-1 flex-1 flex flex-col justify-center">
                <h2 className="font-headline-sm text-[17px] text-tertiary font-bold">Pengguna</h2>
                <p className="font-body-sm text-[12px] text-text-secondary leading-relaxed px-1">
                  Pesan transportasi dan layanan lainnya dengan mudah untuk kebutuhan harian Anda.
                </p>
              </div>
              
              {/* PERUBAHAN: Mengganti <button> menjadi <Link> untuk pindah halaman */}
              <Link 
                href="/register/pengguna" /* <--- Sesuaikan dengan rute folder halaman pendaftaran penggunamu */
                onClick={(e) => e.stopPropagation()} /* Mencegah bentrok dengan klik pada card */
                className={`block text-center w-full py-2.5 px-4 rounded-xl font-bold text-[14px] transition-all duration-300 mt-auto hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(240,192,82,0.4)] active:scale-95 ${
                  activeRole === 'customer' 
                    ? 'bg-tertiary text-[#0a0a0a]' 
                    : 'bg-tertiary/80 text-[#0a0a0a] hover:bg-tertiary hover:text-[#0a0a0a]'
                }`}
              >
                Daftar Pengguna
              </Link>
            </div>

            {/* Driver Role Card */}
            <div 
              onClick={() => setActiveRole('driver')}
              className={`group cursor-pointer backdrop-blur-md bg-[#1f1f21]/70 p-5 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:-translate-y-1.5 hover:shadow-[0_15px_20px_-5px_rgba(0,0,0,0.4),0_8px_8px_-5px_rgba(240,192,82,0.1)] active:scale-[0.98] ${
                activeRole === 'driver' ? 'border-tertiary bg-tertiary/5' : 'border-outline-variant hover:border-tertiary'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors bg-tertiary/10 group-hover:bg-tertiary/20">
                <Image 
                  src="/icons/motor.png" 
                  alt="motor" 
                  width={40} 
                  height={40} 
                />
              </div>
              <div className="space-y-1 flex-1 flex flex-col justify-center">
                <h2 className="font-headline-sm text-[17px] text-tertiary font-bold">Driver</h2>
                <p className="font-body-sm text-[12px] text-text-secondary leading-relaxed px-1">
                  Mulai hasilkan pendapatan dengan menjadi mitra driver mahasiswa di lingkungan kampus.
                </p>
              </div>
              
              {/* PERUBAHAN: Mengganti <button> menjadi <Link> untuk pindah halaman */}
              <Link 
                href="/register/driver" /* <--- Sesuaikan dengan rute folder halaman pendaftaran drivermu */
                onClick={(e) => e.stopPropagation()} /* Mencegah bentrok dengan klik pada card */
                className={`block text-center w-full py-2.5 px-4 rounded-xl font-bold text-[14px] transition-all duration-300 mt-auto hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(240,192,82,0.4)] active:scale-95 ${
                  activeRole === 'driver' 
                    ? 'bg-tertiary text-[#0a0a0a]' 
                    : 'bg-tertiary/80 text-[#0a0a0a] hover:bg-tertiary hover:text-[#0a0a0a]'
                }`}
              >
                Daftar Driver
              </Link>
            </div>

          </div>

          {/* Footer Info */}
          <div className="mt-6 pt-5 border-t border-outline-variant text-center z-20 relative">
            <p className="font-body-sm text-[12px] text-on-surface-variant italic">
              Ingin tahu lebih banyak?{' '}
              <Link href="/kebijakan" className="text-tertiary hover:underline font-medium">
                Pelajari kebijakan layanan
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}