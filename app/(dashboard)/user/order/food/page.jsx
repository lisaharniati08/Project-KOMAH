'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FoodOrderPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Driver sedang menuju kantin/resto pilihanmu!');
      router.push('/user/history');
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-6">
      <div className="mb-6">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors mb-4 group font-body-sm w-fit">
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">arrow_back</span>
          <span className="font-medium text-[14px]">Kembali</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-warning/20">
            <span className="material-symbols-outlined text-3xl text-warning" style={{ fontVariationSettings: "'FILL' 1" }}>lunch_dining</span>
          </div>
          <div>
            <h1 className="font-headline-md text-[24px] md:text-[28px] font-bold text-text-primary">
              Pesan <span className="text-warning">KOMAH Food</span>
            </h1>
            <p className="font-body-sm text-[14px] text-text-secondary">Driver kami siap membelikan makanan kesukaanmu.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <form className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg space-y-5" onSubmit={handleOrder}>
            
            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Nama Kantin / Resto</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-warning text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                <input type="text" required placeholder="Contoh: Kantin Teknik (Mpok Siti)" className="w-full pl-11 pr-4 py-3 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] focus:border-tertiary focus:outline-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Detail Pesanan (Menu & Jumlah)</label>
              <textarea required rows="3" placeholder="Contoh: 1x Nasi Goreng Ayam (Pedas)&#10;1x Es Teh Manis" className="w-full p-4 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] resize-none focus:border-tertiary focus:outline-none"></textarea>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Titik Pengantaran</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-danger text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <input type="text" required placeholder="Contoh: Lobby Fakultas Ekonomi" className="w-full pl-11 pr-4 py-3 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] focus:border-tertiary focus:outline-none" />
              </div>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg flex flex-col h-full">
            <h3 className="font-headline-sm text-[18px] font-bold text-text-primary mb-4 border-b border-outline-variant/30 pb-3">Ongkir Estimasi</h3>
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center text-[14px]"><span className="text-text-secondary font-body-sm">Biaya Antar</span><span className="text-text-primary font-medium">Rp 6.000</span></div>
              <p className="text-[12px] text-text-secondary mt-2 border-t border-outline-variant/30 pt-2">*Harga makanan dibayar terpisah sesuai nota kantin/resto ke driver.</p>
            </div>
            <div className="mt-4">
              <button onClick={handleOrder} disabled={isLoading} className={`w-full py-3.5 bg-warning text-on-tertiary font-bold rounded-xl shadow-lg transition-all duration-300 font-headline-sm text-[16px] flex justify-center items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-95'}`}>
                {isLoading ? <><span className="material-symbols-outlined animate-spin">sync</span>Memproses...</> : 'Pesan Makanan'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}