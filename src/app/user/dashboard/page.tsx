"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  User,
  FileText,
  Target,
  TrendingUp,
  Hourglass,
  Sliders,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Search,
  Send,
  MessageSquare,
  Award,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import styles from "./dashboard.module.css";

interface UserData {
  name: string;
  isProfileComplete: boolean;
  hasUploadedCV: boolean;
  preferencesSetCount: number;
  totalAnalyzedJobs: number;
  totalApplicationsSent: number;
}

export default function DashboardPage() {
  // Default state untuk user baru (belum upload CV & profil belum lengkap -> EMPTY STATE)
  const [userData, setUserData] = useState<UserData>({
    name: "User",
    isProfileComplete: false,
    hasUploadedCV: false,
    preferencesSetCount: 0,
    totalAnalyzedJobs: 0,
    totalApplicationsSent: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Cek apakah ada data user di localStorage (misal setelah registrasi atau login)
    const storedUser = localStorage.getItem("applywise_user_profile");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserData(parsed);
      } catch {
        // Fallback default
      }
    }
  }, []);

  // LOGIK CONDITIONAL RENDERING OTOMATIS SESUAI STATUS USER
  const dashboardState = useMemo<"empty" | "partial" | "populated">(() => {
    // 1. User baru / Belum upload CV / Profil belum lengkap -> EMPTY STATE
    if (!userData.hasUploadedCV || !userData.isProfileComplete) {
      return "empty";
    }

    // 2. Sudah ada CV dan profil tetapi aktivitas analisis masih awal/sedikit -> PARTIAL STATE
    if (userData.totalAnalyzedJobs < 5 || userData.totalApplicationsSent < 3) {
      return "partial";
    }

    // 3. Profil lengkap dan riwayat aktivitas sudah aktif -> POPULATED STATE
    return "populated";
  }, [userData]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.main}>
      {/* =======================================================
          KONDISI 1: EMPTY STATE (BARU REGISTER / BELUM UPLOAD CV)
      ======================================================= */}
      {dashboardState === "empty" && (
        <div>
          <div className={styles.emptyHero}>
            <h1 className={styles.emptyTitle}>Dashboard</h1>
            <h2 className={styles.emptySubtitle}>Perjalanan kariermu baru dimulai.</h2>
            <p className={styles.emptyDesc}>
              Lengkapi profil dan mulai eksplorasi peluang kerja untuk mendapatkan insight yang
              lebih personal dari APPLYWISE[cite: 10].
            </p>
            <div className={styles.emptyActionGroup}>
              <Link href="/user/profile" className={styles.primaryBtn}>
                <span>Mulai Bangun Profil</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/user/cv-analyzer" className={styles.secondaryBtn}>
                <FileText size={16} color="#2563eb" />
                <span>Upload CV</span>
              </Link>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className={styles.stepperCard}>
            <div className={styles.stepperTrack}>
              <div className={styles.stepLine} />

              <div className={styles.stepItem}>
                <div className={styles.stepCircleActive}>
                  <User size={20} />
                </div>
                <span className={styles.stepLabelActive}>Profil Dasar</span>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepCircleDisabled}>
                  <FileText size={20} />
                </div>
                <span className={styles.stepLabelDisabled}>Analisis CV</span>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepCircleDisabled}>
                  <Target size={20} />
                </div>
                <span className={styles.stepLabelDisabled}>Kecocokan Kerja</span>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepCircleDisabled}>
                  <TrendingUp size={20} />
                </div>
                <span className={styles.stepLabelDisabled}>Insight Karier</span>
              </div>
            </div>
          </div>

          {/* Waiting Placeholder Cards */}
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholderCard}>
              <div className={styles.placeholderHeader}>
                <Briefcase size={18} color="#2563eb" />
                <span>Peluang terbaikmu</span>
              </div>
              <div className={styles.placeholderDashedBox}>
                <Hourglass size={20} />
                <span>MENUNGGU DATA PROFIL</span>
              </div>
            </div>

            <div className={styles.placeholderCard}>
              <div className={styles.placeholderHeader}>
                <Target size={18} color="#2563eb" />
                <span>Skill yang perlu diperhatikan</span>
              </div>
              <div className={styles.placeholderDashedBox}>
                <Hourglass size={20} />
                <span>MENUNGGU ANALISIS CV</span>
              </div>
            </div>

            <div className={styles.placeholderCard}>
              <div className={styles.placeholderHeader}>
                <TrendingUp size={18} color="#2563eb" />
                <span>Performa lamaran</span>
              </div>
              <div className={styles.placeholderDashedBox}>
                <Hourglass size={20} />
                <span>MENUNGGU AKTIVITAS</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          KONDISI 2: PARTIAL DATA STATE (BARU SEBAGIAN AKTIVITAS)
      ======================================================= */}
      {dashboardState === "partial" && (
        <div>
          <div className={styles.topIntroRow}>
            <div>
              <h1 className={styles.greetingTitle}>Halo, {userData.name}.</h1>
              <p className={styles.greetingSub}>
                Beberapa pola mulai terlihat dari perjalanan kariermu[cite: 10].
              </p>
            </div>

            {/* Profile Readiness Badge */}
            <div className={styles.readinessCard}>
              <div className={styles.readinessHeader}>
                <span>PROFILE READINESS</span>
                <Sliders size={16} />
              </div>
              <div className={styles.readinessScoreRow}>
                <span className={styles.scoreLarge}>85%</span>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: "85%" }} />
                </div>
              </div>
              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={14} color="#2563eb" />
                  <span>CV Uploaded</span>
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={14} color="#60a5fa" />
                  <span>{userData.preferencesSetCount}/5 Preferences Set</span>
                </div>
              </div>
            </div>
          </div>

          {/* Early Insight Banner */}
          <div className={styles.insightBanner}>
            <div>
              <div className={styles.bannerTag}>
                <Sparkles size={14} />
                <span>EARLY INSIGHT</span>
              </div>
              <h2 className={styles.bannerHeadline}>
                Profilmu mulai menunjukkan arah yang kuat ke posisi{" "}
                <span className={styles.bannerHighlight}>System Analyst.</span>
              </h2>
              <div className={styles.statPillsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{userData.totalAnalyzedJobs}</span>
                  <span className={styles.statLabel}>JOBS ANALYZED</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>84%</span>
                  <span className={styles.statLabel}>AVG. MATCH</span>
                </div>
              </div>
            </div>

            {/* Match Intelligence Glass Box */}
            <div className={styles.glassCardPreview}>
              <div className={styles.glassHeader}>Match Intelligence</div>
              <div className={styles.glassRow}>
                <span>
                  <span className={styles.dotBlueSmall} /> High Match
                </span>
                <strong>2</strong>
              </div>
              <div className={styles.glassRow}>
                <span>
                  <span className={styles.dotCyanSmall} /> Medium Match
                </span>
                <strong>1</strong>
              </div>
              <div className={styles.glassRow}>
                <span>Low Match</span>
                <strong>0</strong>
              </div>
            </div>
          </div>

          {/* 2 Kolom: Recent Opportunities & Skill Signals */}
          <div className={styles.twoColGrid}>
            <div>
              <h3 className={styles.sectionTitle}>Recent Opportunities</h3>
              <div className={styles.opportunityList}>
                <Link href="/user/applications" className={styles.opportunityCard}>
                  <div className={styles.opportunityLeft}>
                    <div className={styles.oppIcon}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className={styles.oppRole}>System Analyst</div>
                      <div className={styles.oppCompany}>TechCorp · Hybrid</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className={styles.badgeMatchPill}>88% Match</span>
                    <ArrowRight size={16} color="#94a3b8" />
                  </div>
                </Link>

                <Link href="/user/applications" className={styles.opportunityCard}>
                  <div className={styles.opportunityLeft}>
                    <div className={styles.oppIcon}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className={styles.oppRole}>Business Analyst</div>
                      <div className={styles.oppCompany}>FinTech Innovations · Remote</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className={styles.badgeMatchPill}>79% Match</span>
                    <ArrowRight size={16} color="#94a3b8" />
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Skill Signals</h3>
              <div className={styles.tagsWrapper}>
                <span className={styles.tagBlue}>Requirement Analysis</span>
                <span className={styles.tagBlue}>Documentation</span>
                <span className={styles.tagRed}>
                  <TrendingUp size={12} /> SQL (Emerging Gap)
                </span>
              </div>
              <p className={styles.skillCaption}>
                Berdasarkan {userData.totalAnalyzedJobs} lowongan yang kamu analisis, <strong>SQL</strong> sering muncul
                namun belum terlihat kuat di profilmu.
              </p>
            </div>
          </div>

          {/* Bottom Funnel Call To Action */}
          <div className={styles.funnelBottomCta}>
            <div className={styles.funnelIconCircle}>
              <Send size={18} />
            </div>
            <div className={styles.funnelSub}>JOURNEY FUNNEL</div>
            <div className={styles.funnelMainCount}>
              {userData.totalApplicationsSent} Application Submitted
            </div>
            <h2 className={styles.funnelHeadline}>
              Analisis lebih banyak lowongan untuk memperkuat insight[cite: 10].
            </h2>
            <Link href="/user/job-analyzer" className={styles.primaryBtn}>
              <Search size={16} />
              <span>Mulai Analisis Baru</span>
            </Link>
          </div>
        </div>
      )}

      {/* =======================================================
          KONDISI 3: POPULATED STATE (DATA LENGKAP & AKTIF)
      ======================================================= */}
      {dashboardState === "populated" && (
        <div>
          <div className={styles.topIntroRow}>
            <div>
              <span className={styles.badgeActiveSearch}>
                <Sparkles size={12} /> Pencarian Aktif
              </span>
              <h1 className={styles.greetingTitle}>Halo, {userData.name}.</h1>
              <p className={styles.greetingSub}>
                Berikut insight yang paling penting dari perjalanan pencarian kerjamu[cite: 10].
              </p>
            </div>
          </div>

          {/* Top Priority Grid */}
          <div className={styles.populatedHeroGrid}>
            <div className={styles.aiPriorityCard}>
              <div className={styles.bannerTag}>
                <Sparkles size={14} />
                <span>AI INSIGHT PRIORITAS</span>
              </div>
              <h2 className={styles.aiPriorityTitle}>
                System Analyst menjadi role dengan kecocokan paling konsisten untukmu.
              </h2>

              <div className={styles.reasonGrid}>
                <div>
                  <div className={styles.reasonTitle}>
                    <Target size={14} color="#2563eb" /> Why
                  </div>
                  <p className={styles.reasonDesc}>
                    Requirement alignment sangat kuat di area Requirement Analysis dan System
                    Design.
                  </p>
                </div>
                <div>
                  <div className={styles.reasonTitle}>
                    <TrendingUp size={14} color="#2563eb" /> Next
                  </div>
                  <p className={styles.reasonDesc}>
                    Prioritize top leads in this category for higher interview conversion.
                  </p>
                </div>
              </div>

              <div className={styles.statsBarRow}>
                <div className={styles.statBoxBlue}>87% Avg Match</div>
                <div className={styles.statBoxGray}>{userData.totalAnalyzedJobs} Analyzed Jobs</div>
                <div className={styles.statBoxSolidBlue}>5 High Priority</div>
              </div>
            </div>

            {/* Dark Top Match Card */}
            <div className={styles.darkMatchCard}>
              <div>
                <div className={styles.darkMatchHeader}>
                  <span className={styles.darkMatchTag}>TOP MATCH</span>
                  <span className={styles.matchBadgeCircle}>★ 91%</span>
                </div>
                <h3 className={styles.darkRoleTitle}>Senior System Analyst</h3>
                <p className={styles.darkRoleCompany}>TechNova Global · Hybrid</p>
                <div className={styles.darkMiniTags}>
                  <span className={styles.darkMiniTag}>SQL</span>
                  <span className={styles.darkMiniTag}>UML</span>
                  <span className={styles.darkMiniTag}>Agile</span>
                </div>
              </div>
              <Link href="/user/applications" className={styles.darkReviewBtn}>
                Review Match
              </Link>
            </div>
          </div>

          {/* 4 Metrics Cards */}
          <div className={styles.fourMetricsGrid}>
            <div className={styles.metricCard}>
              <Search size={22} className={styles.metricIcon} />
              <div className={styles.metricValue}>{userData.totalAnalyzedJobs}</div>
              <div className={styles.metricLabel}>Analyzed Jobs</div>
            </div>
            <div className={styles.metricCard}>
              <Send size={22} className={styles.metricIcon} />
              <div className={styles.metricValue}>{userData.totalApplicationsSent}</div>
              <div className={styles.metricLabel}>Applications Sent</div>
            </div>
            <div className={styles.metricCard}>
              <MessageSquare size={22} className={styles.metricIcon} />
              <div className={styles.metricValue}>3</div>
              <div className={styles.metricLabel}>Interviews</div>
            </div>
            <div className={styles.metricCard}>
              <Award size={22} className={styles.metricIcon} />
              <div className={styles.metricValue}>1</div>
              <div className={styles.metricLabel}>Offer Received</div>
            </div>
          </div>

          {/* Pipeline Conversion & Skill Radar Section */}
          <div className={styles.twoColGrid}>
            <div className={styles.pipelineCard}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <h3 className={styles.sectionTitle} style={{ margin: 0 }}>
                  Pipeline Conversion
                </h3>
                <MoreHorizontal size={18} color="#94a3b8" />
              </div>
              <div className={styles.pipelineList}>
                <div className={styles.pipelineRow}>
                  <span className={styles.pipelineLabel}>Applied</span>
                  <span className={styles.pipelineValue}>
                    <span className={styles.pipelinePercentage}>100%</span> 20
                  </span>
                </div>
                <div className={styles.pipelineRowActive}>
                  <span className={styles.pipelineLabel}>Interview</span>
                  <span className={styles.pipelineValue}>
                    <span className={styles.pipelinePercentage}>25%</span> 5
                  </span>
                </div>
                <div className={styles.pipelineRow}>
                  <span className={styles.pipelineLabel}>Offer</span>
                  <span className={styles.pipelineValue}>
                    <span className={styles.pipelinePercentage}>20% rate</span> 1
                  </span>
                </div>
              </div>
            </div>

            {/* Skill Radar Card */}
            <div className={styles.skillRadarCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <Sliders size={18} color="#2563eb" />
                <h3 className={styles.sectionTitle} style={{ margin: 0 }}>
                  Skill Radar
                </h3>
              </div>

              <div className={styles.radarCategory}>
                <div className={styles.radarCategoryTitle}>• STRONG COVERAGE</div>
                <div className={styles.tagsWrapper}>
                  <span className={styles.tagBlue}>Requirement Analysis</span>
                  <span className={styles.tagBlue}>Documentation</span>
                </div>
              </div>

              <div className={styles.radarCategory}>
                <div className={styles.radarCategoryTitle}>• GROWING VALUE</div>
                <div className={styles.tagsWrapper}>
                  <span className={styles.tagBlue}>SQL Fundamentals</span>
                </div>
              </div>

              <div className={styles.radarCategory}>
                <div className={styles.radarCategoryTitle}>• IDENTIFIED GAP</div>
                <div className={styles.tagsWrapper}>
                  <span className={styles.tagRed}>Advanced SQL (Window Functions)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 2 Widgets: Emerging Pattern & Action Required */}
          <div className={styles.bottomWidgetsGrid}>
            <div className={styles.patternCard}>
              <div className={styles.patternIcon}>
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className={styles.patternTitle}>Emerging Pattern Detected</h4>
                <p className={styles.patternDesc}>
                  <strong>SQL</strong> is increasingly mentioned in recent high-match jobs. While
                  you have basic coverage, upgrading to &apos;Advanced&apos; could unlock 3 more Senior
                  roles[cite: 10].
                </p>
              </div>
            </div>

            <div className={styles.actionRequiredCard}>
              <div className={styles.actionHeader}>
                <span className={styles.actionTag}>
                  <Clock size={14} /> ACTION REQUIRED
                </span>
                <span className={styles.badgeRedNumber}>2</span>
              </div>
              <h4 className={styles.actionTitle}>
                2 lamaran mungkin perlu kamu tindak lanjuti[cite: 10]
              </h4>

              <div className={styles.actionItemList}>
                <div className={styles.actionItem}>
                  <div>
                    <div className={styles.actionCompany}>TechNova</div>
                    <div className={styles.actionDays}>Applied 14 days ago</div>
                  </div>
                  <Clock size={16} color="#94a3b8" />
                </div>
                <div className={styles.actionItem}>
                  <div>
                    <div className={styles.actionCompany}>FinServe</div>
                    <div className={styles.actionDays}>Applied 16 days ago</div>
                  </div>
                  <Clock size={16} color="#94a3b8" />
                </div>
              </div>

              <Link href="/user/applications" className={styles.actionSubmitBtn}>
                <Send size={14} />
                <span>Follow Up lamaran pending</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}