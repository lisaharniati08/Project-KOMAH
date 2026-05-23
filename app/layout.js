import './globals.css';

export const metadata = {
  title: 'KOMAH - Ojek Kampus Hemat & Aman',
  description: 'Ojek Kampus Hemat & Aman untuk Mahasiswa UIN SUSKA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className="antialiased bg-[#0A0A0A] text-[#F9FAFB] min-h-screen flex flex-col">
        {/* Children di sini akan merender layout yang ada di dalam (public) atau (auth) */}
        {children}
      </body>
    </html>
  );
}
