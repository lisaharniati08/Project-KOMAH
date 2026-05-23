'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HelperOrderPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Helper sedang dicari untuk membantu Anda!');
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
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-success/20">
            <span className="material-symbols-outlined text-3xl text-success" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          </div>
          <div>
            <h1 className="font-headline-md text-[24px] md:text-[28px] font-bold text-text-primary">
              Jasa <span className="text-success">Helper</span>
            </h1>
            <p className="font-body-sm text-[14px] text-text-secondary">Bantuan tenaga cepat di sekitar area kampus.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <form className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg space-y-5" onSubmit={handleOrder}>
            
            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Lokasi Pengerjaan</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 material-symbols-outlined text-success text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                <input type="text" required placeholder="Contoh: Gedung PKM Lantai 2" className="w-full pl-11 pr-4 py-3 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] focus:border-tertiary focus:outline-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-mono text-[13px] text-on-surface-variant ml-1">Deskripsi Bantuan yang Dibutuhkan</label>
              <textarea required rows="4" placeholder="Contoh: Butuh 1 orang untuk bantu angkat 2 kotak buku dari lantai 1 ke lantai 3. Waktu pengerjaan sekitar 15 menit." className="w-full p-4 bg-surface-container-high border border-outline-variant/50 rounded-xl text-on-surface placeholder:text-outline/50 font-body-md text-[14px] resize-none focus:border-tertiary focus:outline-none"></textarea>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container rounded-2xl p-5 md:p-6 border border-outline-variant/30 shadow-lg flex flex-col h-full">
            <h3 className="font-headline-sm text-[18px] font-bold text-text-primary mb-4 border-b border-outline-variant/30 pb-3">Ringkasan Helper</h3>
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center text-[14px]"><span className="text-text-secondary font-body-sm">Pembayaran</span><span className="text-tertiary font-label-mono bg-tertiary/10 px-2 py-0.5 rounded text-[12px]">Tunai (Cash)</span></div>
              <p className="text-[12px] text-text-secondary mt-2 border-t border-outline-variant/30 pt-2">*Harga akhir dapat dinegosiasikan langsung dengan Helper tergantung tingkat kesulitan.</p>
            </div>
            <div className="mt-4">
              <button onClick={handleOrder} disabled={isLoading} className={`w-full py-3.5 bg-success text-on-primary font-bold rounded-xl shadow-lg transition-all duration-300 font-headline-sm text-[16px] flex justify-center items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95'}`}>
                {isLoading ? <><span className="material-symbols-outlined animate-spin">sync</span>Mencari Helper...</> : 'Pesan Helper'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}