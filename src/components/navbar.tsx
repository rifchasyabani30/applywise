// src/components/navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<'beranda' | 'fitur'>('beranda');

  useEffect(() => {
    // Hanya jalankan pemantau scroll jika sedang di landing page
    if (pathname !== '/marketing/landingpage') return;

    const handleScroll = () => {
      const fiturElement = document.getElementById('fitur');
      if (fiturElement) {
        const rect = fiturElement.getBoundingClientRect();
        // Jika bagian fitur sudah terlihat mendekati area atas viewport
        if (rect.top <= 200) {
          setActiveSection('fitur');
        } else {
          setActiveSection('beranda');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Jalankan sekali saat komponen di-mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isLandingPage = pathname === '/marketing/landingpage';
  const isBerandaActive = isLandingPage && activeSection === 'beranda';
  const isFiturActive = isLandingPage && activeSection === 'fitur';
  const isTentangKamiActive = pathname === '/marketing/tentangkami';

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 font-poppins">
      <div className="flex items-center gap-2">
        <Link 
          href="/marketing/landingpage" 
          onClick={() => setActiveSection('beranda')}
          className="flex items-center gap-2"
        >
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-blue-900">ApplyWise</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {/* Menu Beranda */}
        <Link 
          href="/marketing/landingpage" 
          onClick={() => setActiveSection('beranda')}
          className={`transition pb-1 ${
            isBerandaActive 
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          Beranda
        </Link>

        {/* Menu Fitur */}
        <Link 
          href="/marketing/landingpage#fitur" 
          onClick={() => setActiveSection('fitur')}
          className={`transition pb-1 ${
            isFiturActive 
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          Fitur
        </Link>

        {/* Menu Tentang Kami */}
        <Link 
          href="/marketing/tentangkami" 
          className={`transition pb-1 ${
            isTentangKamiActive 
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          Tentang Kami
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Tombol Masuk diarahkan ke halaman Sign-In */}
        <Link href="/auth/sign-in" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
          Masuk
        </Link>

        {/* Tombol Mulai Sekarang diarahkan ke halaman Sign-Up */}
        <Link href="/auth/sign-up" className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition">
          Mulai Sekarang
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;