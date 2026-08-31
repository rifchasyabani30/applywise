import Link from 'next/link';
import { 
  User, 
  Briefcase, 
  Layers, 
  ListOrdered, 
  Send, 
  HelpCircle, 
  Compass, 
  Lightbulb, 
  GraduationCap, 
  Folder, 
  Search, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import styles from './tentangkami.module.css';

const TentangKamiPage = () => {
  return (
    <div className={styles.container}>
      {/* Utility Top Bar */}
      <div className={styles.topNav}>
        <div className={styles.topNavContainer}>
          <div>
            <span className="font-bold text-blue-900">ApplyWise</span>
            <span className="ml-2 text-gray-400">© 2024 ApplyWise. Intelligent Career Concierge.</span>
          </div>
          <div className={styles.topNavLinks}>
            <Link href="#" className={styles.topNavLink}>Privacy Policy</Link>
            <Link href="#" className={styles.topNavLink}>Terms of Service</Link>
            <Link href="#" className={styles.topNavLink}>Contact Us</Link>
            <Link href="#" className={styles.topNavLink}>Careers</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <span className={styles.pillBadge}>Tentang Kami</span>
        <h1 className={styles.heroTitle}>
          Karena mencari<br />
          kerja bukan hanya soal<br />
          <span className={styles.underlineBlue}>melamar.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          APPLYWISE membantu kamu memahami kecocokan, melihat prioritas, dan mengambil keputusan yang lebih tepat dalam perjalanan mencari kerja.
        </p>
        <div className={styles.actionGroup}>
          <Link href="/auth/sign-up" className={styles.btnPrimary}>
            Mulai Sekarang
          </Link>
          <Link href="/marketing/landingpage#fitur" className={styles.btnSecondary}>
            Lihat Cara Kerja
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemCard}>
        <h2 className={styles.sectionHeading}>Masalahnya bukan kurangnya lowongan.</h2>
        <p className={styles.problemDesc}>
          Sering kali, tantangan sebenarnya adalah mengetahui pekerjaan mana yang sesuai dengan kemampuan, pengalaman, dan tujuan kita di tengah lautan informasi yang membingungkan.
        </p>
        <div className={styles.problemGraphic}>
          <div className={styles.circleGraphic}>
            <div className={styles.centerIcon}>
              <HelpCircle className="w-8 h-8" />
            </div>
          </div>
          <div className={styles.highlightBadge}>
            <Compass className={`w-6 h-6 mx-auto ${styles.highlightIcon}`} />
            <p className="text-xs text-gray-400 font-medium mb-1">Di sinilah APPLYWISE hadir</p>
            <p className={styles.highlightTitle}>Jalur Terarah</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2 className={styles.timelineHeading}>
          Kami percaya, keputusan karier seharusnya lebih terarah.
        </h2>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>

          {/* Item 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContentLeft}>
              <h3 className={styles.itemTitle}>KENALI DIRI</h3>
              <p className={styles.itemDesc}>Petakan keahlian dan pengalamanmu secara utuh.</p>
            </div>
            <div className={styles.timelineNode}>
              <User className="w-5 h-5" />
            </div>
            <div></div>
          </div>

          {/* Item 2 */}
          <div className={styles.timelineItem}>
            <div></div>
            <div className={styles.timelineNode}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div className={styles.timelineContentRight}>
              <h3 className={styles.itemTitle}>PAHAMI PEKERJAAN</h3>
              <p className={styles.itemDesc}>Analisis kebutuhan industri dan ekspektasi peran.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContentLeft}>
              <h3 className={styles.itemTitle}>LIHAT KECOCOKAN</h3>
              <p className={styles.itemDesc}>Temukan irisan antara profilmu dan syarat pekerjaan.</p>
            </div>
            <div className={styles.timelineNode}>
              <Layers className="w-5 h-5" />
            </div>
            <div></div>
          </div>

          {/* Item 4 */}
          <div className={styles.timelineItem}>
            <div></div>
            <div className={styles.timelineNode}>
              <ListOrdered className="w-5 h-5" />
            </div>
            <div className={styles.timelineContentRight}>
              <h3 className={styles.itemTitle}>TENTUKAN PRIORITAS</h3>
              <p className={styles.itemDesc}>Fokuskan energi pada peluang dengan potensi terbaik.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContentLeft}>
              <h3 className={styles.itemTitle}>AMBIL LANGKAH</h3>
              <p className={styles.itemDesc}>Melamar dengan percaya diri dan strategi yang jelas.</p>
            </div>
            <div className={styles.timelineNode}>
              <Send className="w-5 h-5" />
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* About ApplyWise Card */}
      <section className={styles.aboutCard}>
        <div>
          <h2 className={styles.aboutTitle}>APPLYWISE itu apa?</h2>
          <p className={styles.aboutText}>
            Kami adalah platform cerdas yang memetakan potensi kariermu. Mengubah data profil yang statis menjadi wawasan dinamis untuk keputusan yang lebih baik.
          </p>
          <p className={styles.aboutText}>
            Pusat dari pengalaman ini adalah <strong className="text-gray-900">Profil Karier</strong> Anda yang komprehensif, dikelilingi oleh elemen-elemen kunci yang mendefinisikan profesionalisme Anda.
          </p>
        </div>

        <div className={styles.diagramContainer}>
          <div className={styles.orbitRing}></div>
          <div className={styles.centerCircle}>
            <User className="w-6 h-6 mb-1" />
            <span>Inti Profil</span>
          </div>

          {/* Satellite Orbit Nodes */}
          <div className={styles.orbitNode} style={{ top: '5%', left: '20%' }}>
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" /> Pendidikan
          </div>
          <div className={styles.orbitNode} style={{ top: '15%', right: '10%' }}>
            <Lightbulb className="w-3.5 h-3.5 text-blue-600" /> Keahlian
          </div>
          <div className={styles.orbitNode} style={{ bottom: '20%', right: '5%' }}>
            <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Pengalaman
          </div>
          <div className={styles.orbitNode} style={{ bottom: '10%', left: '15%' }}>
            <Folder className="w-3.5 h-3.5 text-blue-600" /> Proyek
          </div>
        </div>
      </section>

      {/* 4 Cards Features Grid */}
      <section className={styles.gridFeatures}>
        <div className={styles.gridCardWhite}>
          <span className={`${styles.cardNumberBig} text-gray-900`}>01</span>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-6">
            <Search className="w-5 h-5" />
          </div>
          <h3 className={styles.gridCardTitle}>Kenali Profilmu</h3>
          <p className={styles.gridCardDesc}>
            Kumpulkan data pendidikan, pengalaman, dan skill dalam satu tempat terstruktur yang mudah dipahami oleh sistem ATS modern.
          </p>
        </div>

        <div className={styles.gridCardWhite}>
          <span className={`${styles.cardNumberBig} text-gray-900`}>02</span>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-6">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className={styles.gridCardTitle}>Pahami Pekerjaan</h3>
          <p className={styles.gridCardDesc}>
            Urai deskripsi pekerjaan rumit menjadi poin-poin yang mudah dicerna dan dibandingkan.
          </p>
        </div>

        <div className={styles.gridCardBlue}>
          <span className={`${styles.cardNumberBig} text-white`}>03</span>
          <h3 className={styles.gridCardTitle}>Ukur Kecocokan</h3>
          <p className={styles.gridCardDesc}>
            Dapatkan visualisasi persentase kecocokan antara profilmu dengan posisi yang diincar secara transparan.
          </p>
        </div>

        <div className={styles.gridCardLightBlue}>
          <span className={`${styles.cardNumberBig} text-blue-900`}>04</span>
          <h3 className={`${styles.gridCardTitle} text-blue-950`}>Tentukan Prioritas</h3>
          <p className={`${styles.gridCardDesc} text-blue-900`}>
            Tidak semua lowongan berharga sama. Fokuskan usaha pada peluang yang memberikan kemungkinan sukses terbesar berdasarkan datamu.
          </p>
        </div>
      </section>

      {/* Dark Statement Section */}
      <section className={styles.darkBanner}>
        <h2 className={styles.darkBannerTitle}>Bukan sekadar job tracker.</h2>
        <p className={styles.darkBannerSubtitle}>
          Kami merancang pengalaman yang berpusat pada manusia, diberdayakan oleh teknologi.
        </p>

        <div className={styles.darkGrid}>
          <div>
            <p className={styles.darkCardNumber}>01</p>
            <h3 className={styles.darkCardTitle}>LEBIH TERARAH</h3>
            <p className={styles.darkCardDesc}>
              Navigasi karier dengan peta jalan yang jelas, bukan tebak-tebakan.
            </p>
          </div>
          <div>
            <p className={styles.darkCardNumber}>02</p>
            <h3 className={styles.darkCardTitle}>LEBIH PERSONAL</h3>
            <p className={styles.darkCardDesc}>
              Wawasan yang disesuaikan spesifik dengan perjalanan unikmu.
            </p>
          </div>
          <div>
            <p className={styles.darkCardNumber}>03</p>
            <h3 className={styles.darkCardTitle}>LEBIH BERMAKNA</h3>
            <p className={styles.darkCardDesc}>
              Fokus pada kualitas kecocokan, bukan kuantitas lamaran.
            </p>
          </div>
        </div>

        <h3 className={styles.bigSlogan}>
          Melamar <span className={styles.sloganHighlight}>lebih sedikit</span>,<br />
          memilih <span className={styles.sloganHighlight}>lebih baik</span>.
        </h3>
      </section>

      {/* Audience Section */}
      <section className={styles.audienceSection}>
        <span className={styles.pillBadge}>Untuk Siapa</span>
        <div className={styles.audienceContainer}>
          <div className={styles.audiencePill}>
            <GraduationCap className="w-4 h-4 text-blue-600" /> Fresh Graduate
          </div>
          <div className={styles.audiencePill}>
            <Briefcase className="w-4 h-4 text-blue-600" /> Job Seeker Aktif
          </div>
          <div className={styles.audiencePill}>
            <Sparkles className="w-4 h-4 text-blue-600" /> Career Explorer
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaBanner}>
        <h2 className={styles.ctaTitle}>
          Siap membuat langkah berikutnya lebih terarah?
        </h2>
        <div className={styles.actionGroup}>
          <Link href="/auth/sign-up" className={styles.btnPrimary}>
            Mulai Sekarang
          </Link>
          <Link href="/marketing/landingpage#fitur" className={styles.btnSecondary}>
            Lihat Cara Kerja
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TentangKamiPage;