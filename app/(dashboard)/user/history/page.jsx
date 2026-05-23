'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- DATA DUMMY UNTUK SIMULASI ---
const dummyOrders = [
  {
    id: 'ORD-001',
    type: 'ride',
    title: 'Antar/Jemput',
    date: '22 Mei 2026 • 14:30 WIB',
    pickup: 'Fakultas Sains dan Teknologi',
    destination: 'Gedung Rektorat UIN',
    price: 'Rp 5.000',
    status: 'aktif',
    statusText: 'Driver Menuju Lokasi',
    icon: 'two_wheeler',
    iconColor: 'text-tertiary',
    bgIcon: 'bg-tertiary/20'
  },
  {
    id: 'ORD-002',
    type: 'food',
    title: 'KOMAH Food',
    date: '21 Mei 2026 • 12:15 WIB',
    pickup: 'Kantin Teknik (Mpok Siti)',
    destination: 'Lobby Fakultas Ekonomi',
    price: 'Rp 18.000',
    status: 'selesai',
    statusText: 'Selesai',
    icon: 'lunch_dining',
    iconColor: 'text-warning',
    bgIcon: 'bg-warning/20'
  },
  {
    id: 'ORD-003',
    type: 'delivery',
    title: 'Delivery Barang',
    date: '20 Mei 2026 • 09:00 WIB',
    pickup: 'Perpustakaan Universitas',
    destination: 'Kosan Mawar Baru',
    price: 'Rp 8.000',
    status: 'selesai',
    statusText: 'Selesai',
    icon: 'local_shipping',
    iconColor: 'text-secondary',
    bgIcon: 'bg-secondary/20'
  },
  {
    id: 'ORD-004',
    type: 'helper',
    title: 'Jasa Helper',
    date: '18 Mei 2026 • 16:45 WIB',
    pickup: 'Gedung PKM Lantai 2',
    destination: '-',
    price: 'Rp 15.000',
    status: 'batal',
    statusText: 'Dibatalkan',
    icon: 'volunteer_activism',
    iconColor: 'text-success',
    bgIcon: 'bg-success/20'
  }
];

export default function HistoryPage() {
  // State untuk Tab Aktif (Default: Semua)
  const [activeTab, setActiveTab] = useState('semua');

  // Filter data berdasarkan tab yang dipilih
  const filteredOrders = dummyOrders.filter(order => {
    if (activeTab === 'semua') return true;
    if (activeTab === 'aktif') return order.status === 'aktif';
    if (activeTab === 'selesai') return order.status === 'selesai' || order.status === 'batal';
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto pb-6">
      
      {/* Header Halaman */}
      <div className="mb-6 pt-2 md:pt-0">
        <h1 className="font-headline-md text-[24px] md:text-[28px] font-bold text-text-primary">
          Riwayat Pesanan
        </h1>
        <p className="font-body-sm text-[14px] text-text-secondary mt-1">
          Pantau aktivitas dan riwayat transaksi layanan KOMAH Anda.
        </p>
      </div>

      {/* Tabs Filter */}
      <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/30 pb-4 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('semua')}
          className={`px-5 py-2 rounded-full font-label-mono text-[14px] whitespace-nowrap transition-all ${
            activeTab === 'semua' 
              ? 'bg-tertiary text-on-tertiary font-bold shadow-md' 
              : 'bg-surface-container border border-outline-variant/50 text-text-secondary hover:text-tertiary hover:border-tertiary/50'
          }`}
        >
          Semua Riwayat
        </button>
        <button 
          onClick={() => setActiveTab('aktif')}
          className={`px-5 py-2 rounded-full font-label-mono text-[14px] whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'aktif' 
              ? 'bg-tertiary text-on-tertiary font-bold shadow-md' 
              : 'bg-surface-container border border-outline-variant/50 text-text-secondary hover:text-tertiary hover:border-tertiary/50'
          }`}
        >
          {/* Tambahkan indikator titik jika ada pesanan aktif */}
          <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
          Sedang Aktif
        </button>
        <button 
          onClick={() => setActiveTab('selesai')}
          className={`px-5 py-2 rounded-full font-label-mono text-[14px] whitespace-nowrap transition-all ${
            activeTab === 'selesai' 
              ? 'bg-tertiary text-on-tertiary font-bold shadow-md' 
              : 'bg-surface-container border border-outline-variant/50 text-text-secondary hover:text-tertiary hover:border-tertiary/50'
          }`}
        >
          Selesai / Batal
        </button>
      </div>

      {/* Daftar Pesanan */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 md:p-5 hover:border-tertiary/40 transition-colors shadow-sm">
            
              {/* Header Card (Ikon, Judul, Tanggal & Status) */}
              <div className="flex justify-between items-start mb-4 border-b border-outline-variant/20 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${order.bgIcon}`}>
                    <span className={`material-symbols-outlined text-[20px] ${order.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {order.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[16px] font-bold text-text-primary">
                      {order.title}
                    </h3>
                    <p className="font-body-sm text-[12px] text-text-secondary">
                      {order.date}
                    </p>
                  </div>
                </div>

                {/* Badge Status */}
                <div className={`px-3 py-1 rounded-md font-label-mono text-[11px] font-bold flex items-center gap-1.5 ${
                  order.status === 'aktif' ? 'bg-tertiary/20 text-tertiary animate-pulse' :
                  order.status === 'selesai' ? 'bg-success/20 text-success' :
                  'bg-danger/20 text-danger'
                }`}>
                  {order.status === 'aktif' && <span className="material-symbols-outlined text-[14px]">sync</span>}
                  {order.status === 'selesai' && <span className="material-symbols-outlined text-[14px]">check_circle</span>}
                  {order.status === 'batal' && <span className="material-symbols-outlined text-[14px]">cancel</span>}
                  {order.statusText}
                </div>
              </div>

              {/* Body Card (Lokasi & Harga) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Info Rute */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                    <div>
                      <p className="font-label-mono text-[11px] text-text-secondary mb-0.5">Titik Awal</p>
                      <p className="font-body-sm text-[13px] text-text-primary leading-snug">{order.pickup}</p>
                    </div>
                  </div>
                  
                  {/* Hanya tampilkan tujuan jika layanannya bukan helper yang tidak pindah tempat */}
                  {order.destination !== '-' && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-danger text-[18px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                      <div>
                        <p className="font-label-mono text-[11px] text-text-secondary mb-0.5">Titik Tujuan</p>
                        <p className="font-body-sm text-[13px] text-text-primary leading-snug">{order.destination}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Harga & ID */}
                <div className="flex flex-row md:flex-col items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-outline-variant/30 pt-3 md:pt-0 md:pl-4 min-w-[120px]">
                  <p className="font-label-mono text-[11px] text-text-secondary">Total Biaya</p>
                  <p className="font-headline-sm text-[18px] font-bold text-text-primary">{order.price}</p>
                  <p className="font-label-mono text-[10px] text-outline mt-1 hidden md:block">{order.id}</p>
                </div>
              </div>
              
              {/* Tombol Aksi (Khusus untuk pesanan aktif) */}
              {order.status === 'aktif' && (
                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex gap-3">
                  <button className="flex-1 py-2 bg-surface-container-high text-text-primary font-label-mono text-[13px] rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-colors">
                    Hubungi Driver
                  </button>
                  <button className="flex-1 py-2 bg-surface-container-high text-danger font-label-mono text-[13px] rounded-lg hover:bg-danger/20 transition-colors">
                    Batalkan Pesanan
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          
         /* Kondisi Jika Kosong (Gunakan kurung kurawal untuk menutup elemen JSX) */
          <div className="bg-surface-container border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center mt-8">
            <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl text-outline-variant">receipt_long</span>
            </div>
            <h3 className="font-headline-sm text-[18px] font-bold text-text-primary mb-2">Belum Ada Riwayat</h3>
            <p className="font-body-sm text-[14px] text-text-secondary max-w-sm mb-6">
              Anda belum memiliki pesanan. Yuk cobain layanan KOMAH sekarang!
            </p>
            <Link 
              href="/user" 
              className="px-6 py-2.5 bg-tertiary text-on-tertiary font-bold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-tertiary/20 transition-all font-label-mono text-[14px]"
            >
              Pesan Layanan
            </Link>
          </div>
        )} 
      </div>

    </div>
  );
}