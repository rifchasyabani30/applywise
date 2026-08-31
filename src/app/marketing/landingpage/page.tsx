// src/app/marketing/landingpage/page.tsx
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  ListFilter, 
  Send, 
  TrendingUp, 
  Lightbulb, 
  FileSearch, 
  UserCheck, 
  Briefcase, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="font-poppins bg-[#F9FAFB] text-gray-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Know which jobs<br />
            to pursue, not just<br />
            which jobs
          </h1>
          <div className="bg-blue-600 text-white inline-block text-3xl md:text-5xl font-extrabold px-4 py-1.5 mt-3 mb-6 rounded-md">
            You can apply to
          </div>
          <p className="text-gray-600 mb-8 max-w-lg text-sm md:text-base leading-relaxed">
            Stop buang waktu untuk lamaran tanpa hasil. ApplyWise mencocokkan profilmu dengan kriteria pasar untuk memilih peluang dengan peluang sukses tertinggi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="bg-blue-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Mulai Analisis CV
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-blue-600 font-semibold text-sm md:text-base hover:underline px-4 py-3">
              Lihat Cara Kerja
            </Link>
          </div>
        </div>

        {/* Header Image (Gambar Koper + Card Melayang) */}
        <div className="relative flex justify-center items-center">
          <img src="/briefcase.png" alt="Briefcase" className="w-full max-w-md h-auto object-contain" />
          
          {/* Floating Card 1: Priority Level */}
          <div className="absolute top-6 -right-2 md:right-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Zap className="w-5 h-5 fill-blue-600" />
             </div>
             <div>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium">Priority Level</p>
                <p className="font-bold text-sm md:text-base text-blue-950">High</p>
             </div>
          </div>
          
          {/* Floating Card 2: Match Score */}
          <div className="absolute -bottom-4 -left-2 md:left-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
             <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
             </div>
             <div>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium">Match Score</p>
                <p className="font-bold text-sm md:text-base text-emerald-600">92%</p>
             </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Bar Hitam) */}
      <section className="bg-[#0f172a] text-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-blue-400">
              <FileSearch className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">CV DIANALISIS</p>
              <p className="text-3xl font-extrabold">24,591</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-blue-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">LOWONGAN DIANALISIS</p>
              <p className="text-3xl font-extrabold">42,830</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-gray-800/80 border border-gray-700/60 px-4 py-2 rounded-full text-xs text-emerald-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Profile Ready
            </span>
            <span className="bg-gray-800/80 border border-gray-700/60 px-4 py-2 rounded-full text-xs text-amber-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span> Skill Gap Detected
            </span>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 md:px-12 text-center bg-white">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Stop <span className="text-blue-600">tebak-tebakan</span>. Saatnya tentukan prioritas.
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-16 text-sm md:text-base">
          Sebuah metodologi teruji untuk menyaring distraksi dan memfokuskan energi Anda pada hal yang paling penting.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {/* Analyze */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-blue-600">
              <Search className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Analyze</span>
          </div>

          <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />

          {/* Prioritize */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <ListFilter className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-600">Prioritize</span>
          </div>

          <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />

          {/* Apply */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-blue-600">
              <Send className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Apply</span>
          </div>

          <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />

          {/* Track */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Track</span>
          </div>

          <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />

          {/* Learn */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-blue-600">
              <Lightbulb className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Learn</span>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
            Fitur <span className="text-blue-600">Unggulan</span> Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-16 text-center text-sm md:text-base">
            Solusi terbaik untuk mengelola strategi karier Anda, memberikan Anda keuntungan tak ternilai di pasar kerja yang kompetitif.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileSearch className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">CV Analyzer</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Analisis mendalam terhadap resume Anda untuk mengidentifikasi kekuatan dan area perbaikan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Profile Builder</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Bangun profil profesional yang menarik perhatian rekruter dengan saran otomatis.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Job Analyzer</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pahami deskripsi pekerjaan secara instan untuk mencocokkan keterampilan yang dibutuhkan.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Match & Priority</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dapatkan skor kecocokan akurat untuk memprioritaskan lamaran yang paling menjanjikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Bar Hitam) */}
      <footer className="bg-[#0f172a] text-gray-400 py-16 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-md text-white">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white">ApplyWise</span>
            </div>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              &copy; 2024 ApplyWise. Know which jobs to pursue, not just which jobs you can apply to.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs tracking-wider mb-4">PRODUK</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="#" className="hover:text-blue-400 transition">Fitur</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Career Match</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Priority Scoring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs tracking-wider mb-4">PERUSAHAAN</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/marketing/tentangkami" className="hover:text-blue-400 transition">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Insight</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Kontak</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;