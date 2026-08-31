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
import styles from './landingpage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.heroTitle}>
            Know which jobs<br />
            to pursue, not just<br />
            which jobs
          </h1>
          <div className={styles.heroBadge}>
            You can apply to
          </div>
          <p className={styles.heroDesc}>
            Stop buang waktu untuk lamaran tanpa hasil. ApplyWise mencocokkan profilmu dengan kriteria pasar untuk memilih peluang dengan peluang sukses tertinggi.
          </p>
          <div className={styles.heroActions}>
            <Link href="#" className={styles.btnPrimary}>
              Mulai Analisis CV
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#" className={styles.btnSecondary}>
              Lihat Cara Kerja
            </Link>
          </div>
        </div>

        {/* Header Image (Gambar Koper + Card Melayang) */}
        <div className={styles.imageContainer}>
          <img src="/briefcase.png" alt="Briefcase" className={styles.heroImage} />
          
          {/* Floating Card 1: Priority Level */}
          <div className={styles.cardPriority}>
             <div className={styles.iconBlue}>
                <Zap className="w-5 h-5 fill-blue-600" />
             </div>
             <div>
                <p className={styles.cardLabel}>Priority Level</p>
                <p className={styles.cardValueBlue}>High</p>
             </div>
          </div>
          
          {/* Floating Card 2: Match Score */}
          <div className={styles.cardMatch}>
             <div className={styles.iconEmerald}>
                <CheckCircle2 className="w-5 h-5" />
             </div>
             <div>
                <p className={styles.cardLabel}>Match Score</p>
                <p className={styles.cardValueEmerald}>92%</p>
             </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Bar Hitam) */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statIconBox}>
              <FileSearch className="w-5 h-5" />
            </div>
            <div>
              <p className={styles.statLabel}>CV DIANALISIS</p>
              <p className={styles.statNumber}>24,591</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statIconBox}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className={styles.statLabel}>LOWONGAN DIANALISIS</p>
              <p className={styles.statNumber}>42,830</p>
            </div>
          </div>

          <div className={styles.pillContainer}>
            <span className={styles.pillEmerald}>
              <span className={styles.dotEmerald}></span> Profile Ready
            </span>
            <span className={styles.pillAmber}>
              <span className={styles.dotAmber}></span> Skill Gap Detected
            </span>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={styles.workflowSection}>
        <h2 className={styles.sectionTitle}>
          Stop <span className={styles.highlightBlue}>tebak-tebakan</span>. Saatnya tentukan prioritas.
        </h2>
        <p className={styles.sectionSubtitle}>
          Sebuah metodologi teruji untuk menyaring distraksi dan memfokuskan energi Anda pada hal yang paling penting.
        </p>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          {/* Analyze */}
          <div className={styles.stepBox}>
            <div className={styles.stepIconInactive}>
              <Search className="w-6 h-6" />
            </div>
            <span className={styles.stepTextInactive}>Analyze</span>
          </div>

          <ArrowRight className={styles.arrowIcon} />

          {/* Prioritize */}
          <div className={styles.stepBox}>
            <div className={styles.stepIconActive}>
              <ListFilter className="w-6 h-6" />
            </div>
            <span className={styles.stepTextActive}>Prioritize</span>
          </div>

          <ArrowRight className={styles.arrowIcon} />

          {/* Apply */}
          <div className={styles.stepBox}>
            <div className={styles.stepIconInactive}>
              <Send className="w-6 h-6" />
            </div>
            <span className={styles.stepTextInactive}>Apply</span>
          </div>

          <ArrowRight className={styles.arrowIcon} />

          {/* Track */}
          <div className={styles.stepBox}>
            <div className={styles.stepIconInactive}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className={styles.stepTextInactive}>Track</span>
          </div>

          <ArrowRight className={styles.arrowIcon} />

          {/* Learn */}
          <div className={styles.stepBox}>
            <div className={styles.stepIconInactive}>
              <Lightbulb className="w-6 h-6" />
            </div>
            <span className={styles.stepTextInactive}>Learn</span>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="fitur" className={styles.featuresSection}>
        <div className="max-w-7xl mx-auto">
          <h2 className={styles.sectionTitle}>
            Fitur <span className={styles.highlightBlue}>Unggulan</span> Kami
          </h2>
          <p className={styles.sectionSubtitle}>
            Solusi terbaik untuk mengelola strategi karier Anda, memberikan Anda keuntungan tak ternilai di pasar kerja yang kompetitif.
          </p>

          <div className={styles.featuresGrid}>
            {/* Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconBlue}>
                <FileSearch className="w-7 h-7" />
              </div>
              <h3 className={styles.cardTitle}>CV Analyzer</h3>
              <p className={styles.cardDesc}>
                Analisis mendalam terhadap resume Anda untuk mengidentifikasi kekuatan dan area perbaikan.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconEmerald}>
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className={styles.cardTitle}>Profile Builder</h3>
              <p className={styles.cardDesc}>
                Bangun profil profesional yang menarik perhatian rekruter dengan saran otomatis.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconAmber}>
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className={styles.cardTitle}>Job Analyzer</h3>
              <p className={styles.cardDesc}>
                Pahami deskripsi pekerjaan secara instan untuk mencocokkan keterampilan yang dibutuhkan.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconPurple}>
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className={styles.cardTitle}>Match & Priority</h3>
              <p className={styles.cardDesc}>
                Dapatkan skor kecocokan akurat untuk memprioritaskan lamaran yang paling menjanjikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerBrand}>
              <div className={styles.brandIcon}>
                <Briefcase className="w-4 h-4" />
              </div>
              <span className={styles.brandName}>ApplyWise</span>
            </div>
            <p className={styles.footerCopy}>
              &copy; 2024 ApplyWise. Know which jobs to pursue, not just which jobs you can apply to.
            </p>
          </div>

          <div>
            <h4 className={styles.footerHeading}>PRODUK</h4>
            <ul className={styles.footerList}>
              <li><Link href="#" className={styles.footerLink}>Fitur</Link></li>
              <li><Link href="#" className={styles.footerLink}>Career Match</Link></li>
              <li><Link href="#" className={styles.footerLink}>Priority Scoring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>PERUSAHAAN</h4>
            <ul className={styles.footerList}>
              <li><Link href="/marketing/tentangkami" className={styles.footerLink}>Tentang Kami</Link></li>
              <li><Link href="#" className={styles.footerLink}>Insight</Link></li>
              <li><Link href="#" className={styles.footerLink}>Kontak</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;