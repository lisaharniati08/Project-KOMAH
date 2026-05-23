'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RideOrderPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Driver Antar/Jemput sedang dicarikan!');
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
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-tertiary/20">
            <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>two_wheeler</span>
          </div>
          <div>
            <h1 className="font-headline-md text-[24px] md:text-[28px] font-bold text-text-primary">
              Buat Pesanan <span className="text-tertiary">Antar/Jemput</span>
            </h1>
            <p className="font-body-sm text-[14px] text-text-secondary">Pesan ojek kampus dengan mudah dan cepat.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <form className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg space-y-5" onSubmit={handleOrder}>
            
            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Titik Penjemputan</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                <input type="text" required placeholder="Contoh: Kosan Gang Mawar" className="w-full pl-11 pr-4 py-3 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] focus:border-tertiary focus:outline-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Titik Tujuan</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-danger text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <input type="text" required placeholder="Contoh: Fakultas Tarbiyah" className="w-full pl-11 pr-4 py-3 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] focus:border-tertiary focus:outline-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Catatan Tambahan (Opsional)</label>
              <textarea rows="2" placeholder="Contoh: Saya pakai jaket hitam, tunggu di depan pagar." className="w-full p-4 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] resize-none focus:border-tertiary focus:outline-none"></textarea>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg flex flex-col h-full">
            <h3 className="font-headline-sm text-[18px] font-bold text-text-primary mb-4 border-b border-outline-variant/30 pb-3">Ringkasan Pesanan</h3>
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center text-[14px]"><span className="text-text-secondary font-body-sm">Jarak Estimasi</span><span className="text-text-primary font-medium">1.5 km</span></div>
              <div className="flex justify-between items-center text-[14px]"><span className="text-text-secondary font-body-sm">Pembayaran</span><span className="text-tertiary font-label-mono bg-tertiary/10 px-2 py-0.5 rounded text-[12px]">Tunai (Cash)</span></div>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/30">
              <div className="flex justify-between items-end mb-4">
                <span className="text-text-primary font-headline-sm text-[16px]">Estimasi Harga</span>
                <span className="text-[24px] font-bold text-tertiary font-label-mono">Rp 5.000</span>
              </div>
              <button onClick={handleOrder} disabled={isLoading} className={`w-full py-3.5 bg-tertiary text-on-tertiary font-bold rounded-xl shadow-lg transition-all duration-300 font-headline-sm text-[16px] flex justify-center items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(240,192,82,0.4)] active:scale-95'}`}>
                {isLoading ? <><span className="material-symbols-outlined animate-spin">sync</span>Mencari Driver...</> : 'Pesan Sekarang'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}