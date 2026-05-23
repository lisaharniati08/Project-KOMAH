'use client';

export default function DriverDashboardPage() {
  return (
    <div className="w-full space-y-8">
      {/* Top App Bar - Tanpa Toggle Switch */}
      <header className="flex justify-between items-center bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
        <div>
          <h1 className="font-headline-md text-[22px] text-text-primary">Ringkasan Hari Ini</h1>
          <p className="font-body-sm text-text-secondary">Senin, 24 Oktober 2024</p>
        </div>
        {/* Toggle switch sudah dihapus */}
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pendapatan', val: 'Rp 75.000', icon: 'account_balance_wallet', color: 'text-tertiary' },
          { label: 'Trip Hari Ini', val: '8', icon: 'local_taxi', color: 'text-secondary' },
          { label: 'Order Minggu', val: '42', icon: 'list_alt', color: 'text-secondary' },
          { label: 'Rating', val: '4.9', icon: 'star', color: 'text-tertiary' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container p-5 rounded-xl border border-border-subtle shadow-lg">
            <h3 className="font-label-mono text-xs text-text-secondary">{stat.label}</h3>
            <p className={`font-bold text-xl mt-2 ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Active Order Section */}
      <div className="bg-surface-container p-6 rounded-xl border border-tertiary/30 shadow-xl">
        <h2 className="font-headline-sm text-tertiary mb-4 uppercase tracking-wider font-bold">ORDERAN SAAT INI</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
                <p className="text-sm text-text-secondary">Pemesan: <span className="text-text-primary font-bold">Budi Santoso</span></p>
                <p className="text-sm text-text-secondary mt-1">Jemput: <span className="text-text-primary font-bold">Fakultas Sains dan Teknologi</span></p>
                <p className="text-sm text-text-secondary mt-1">Tujuan: <span className="text-text-primary font-bold">Gedung Rektorat</span></p>
            </div>
            <div className="flex gap-3">
                <button className="px-6 py-2 border border-tertiary text-tertiary rounded-lg hover:bg-tertiary/10">Chat</button>
                <button className="px-6 py-2 bg-tertiary text-on-tertiary rounded-lg font-bold">Selesaikan</button>
            </div>
        </div>
      </div>
    </div>
  );
}