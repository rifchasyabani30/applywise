// src/components/navbar.tsx
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 font-poppins">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          {/* Menggunakan Icon Briefcase sebagai pengganti gambar logo */}
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-blue-900">ApplyWise</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <Link href="/marketing/landingpage" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
          Beranda
        </Link>
        <Link href="#" className="hover:text-blue-600 transition">
          Fitur
        </Link>
        <Link href="/marketing/tentangkami" className="hover:text-blue-600 transition">
          Tentang Kami
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
          Masuk
        </Link>
        <Link href="#" className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition">
          Mulai Sekarang
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;