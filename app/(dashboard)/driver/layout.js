'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DriverDashboardLayout({ children }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div className="flex h-[100dvh] w-full bg-background text-text-primary font-body-md antialiased overflow-hidden">
      
      {/* SIDEBAR DRIVER */}
      <nav className="hidden md:flex flex-col h-screen p-4 border-r border-outline-variant bg-surface-container w-64 fixed left-0 top-0 z-40">
        <div className="mb-8 p-2">
          <span className="font-headline-md text-[24px] font-bold text-tertiary">KOMAH Driver</span>
        </div>

        {/* Profil Driver */}
        <div className="flex flex-col items-center mb-8 pb-8 border-b border-outline-variant w-full">
          <div className="w-16 h-16 rounded-full bg-secondary-container mb-3 border-2 border-tertiary/30 shadow-lg overflow-hidden">
             <div className="w-full h-full bg-surface-variant flex items-center justify-center">
                 <span className="material-symbols-outlined text-3xl">person</span>
             </div>
          </div>
          <h3 className="font-headline-sm text-[18px] text-text-primary">Budi Santoso</h3>
          {/* Status Online dihapus */}
        </div>

        {/* Menu Driver */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {[
            { name: 'Dashboard', path: '/driver', icon: 'dashboard' },
            { name: 'Pesanan', path: '/driver/orders', icon: 'local_taxi' },
            { name: 'Riwayat', path: '/driver/history', icon: 'history' },
            { name: 'Pendapatan', path: '/driver/earnings', icon: 'payments' },
            { name: 'Profil', path: '/driver/profile', icon: 'person' },
          ].map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive(item.path) ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-high'}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive(item.path) ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                <span className="font-label-mono text-[15px]">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="mt-auto py-3 text-danger flex items-center gap-3 px-4 hover:bg-danger/10 rounded-lg">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-mono text-[15px]">Keluar</span>
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-0 md:ml-64 p-4 md:p-6 overflow-y-auto bg-surface-dim">
        {children}
      </main>
    </div>
  );
}