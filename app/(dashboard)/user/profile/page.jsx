'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto pb-10">
      
      {/* Header Profil */}
      <div className="mb-8 pt-2 md:pt-0">
        <h1 className="font-headline-md text-[24px] md:text-[28px] font-bold text-text-primary">
          Profil Saya
        </h1>
        <p className="font-body-sm text-[14px] text-text-secondary mt-1">
          Kelola informasi akun Anda agar tetap up-to-date.
        </p>
      </div>

      {/* Card Profil Utama */}
      <div className="bg-surface-container border border-outline-variant/30 rounded-2xl p-6 md:p-8 shadow-lg">
        
        {/* Foto Profil & Nama */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-surface-container-high border-4 border-tertiary/20 flex items-center justify-center mb-4 relative">
             <span className="material-symbols-outlined text-5xl text-on-surface-variant">person</span>
             <button className="absolute bottom-0 right-0 p-2 bg-tertiary rounded-full text-on-tertiary shadow-lg">
                <span className="material-symbols-outlined text-[16px]">edit</span>
             </button>
          </div>
          <h2 className="font-headline-md text-[20px] font-bold text-text-primary">Budi Santoso</h2>
          <p className="font-label-mono text-[14px] text-text-secondary">budi.santoso@student.uin-suska.ac.id</p>
        </div>

        {/* Form Data Diri */}
        <div className="space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama */}
            <div className="space-y-1.5">
              <label className="font-label-mono text-[13px] text-on-surface-variant">Nama Lengkap</label>
              <input 
                type="text" 
                defaultValue="Budi Santoso" 
                disabled={!isEditing}
                className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-xl text-text-primary font-body-md text-[14px] disabled:opacity-70 focus:border-tertiary focus:outline-none"
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5">
              <label className="font-label-mono text-[13px] text-on-surface-variant">Nomor WhatsApp</label>
              <input 
                type="tel" 
                defaultValue="081234567890" 
                disabled={!isEditing}
                className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-xl text-text-primary font-body-md text-[14px] disabled:opacity-70 focus:border-tertiary focus:outline-none"
              />
            </div>
          </div>

          {/* Email (Read-only karena PK) */}
          <div className="space-y-1.5">
            <label className="font-label-mono text-[13px] text-on-surface-variant">Email Students (Username)</label>
            <input 
              type="email" 
              value="budi.santoso@student.uin-suska.ac.id" 
              disabled 
              className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/30 rounded-xl text-text-secondary font-body-md text-[14px] cursor-not-allowed"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="pt-4 flex gap-3">
            {isEditing ? (
              <>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-3 bg-danger/10 text-danger font-bold rounded-xl hover:bg-danger/20 transition-all font-label-mono text-[14px]"
                >
                  Batal
                </button>
                <button 
                  onClick={() => { setIsEditing(false); alert("Profil berhasil diperbarui!"); }}
                  className="flex-1 py-3 bg-tertiary text-on-tertiary font-bold rounded-xl shadow-lg hover:shadow-tertiary/20 transition-all font-label-mono text-[14px]"
                >
                  Simpan Perubahan
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold rounded-xl hover:bg-opacity-80 transition-all font-label-mono text-[14px]"
              >
                Edit Profil
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Keamanan & Akun */}
      <div className="mt-8 space-y-4">
        <h3 className="font-headline-sm text-[18px] font-bold text-text-primary">Keamanan</h3>
        <button className="w-full flex items-center justify-between bg-surface-container p-4 rounded-xl border border-outline-variant/30 hover:border-tertiary/50 transition-all group">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-text-secondary group-hover:text-tertiary">lock</span>
                <span className="font-body-md text-[14px]">Ubah Password</span>
            </div>
            <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
        </button>
      </div>

    </div>
  );
}