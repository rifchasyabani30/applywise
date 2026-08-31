"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Briefcase, 
  Laptop, 
  Sparkles, 
  Pencil, 
  SlidersHorizontal, 
  Check, 
  Zap, 
  GraduationCap 
} from "lucide-react";
import styles from "./requirements.module.css";

export default function RequirementsExtractionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Top Overview Banner Card */}
        <div className={styles.bannerCard}>
          <div className={styles.bannerLeft}>
            <div className={styles.companyLogoPlaceholder}>
              {/* Gambar / Logo Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center text-[10px] text-gray-400 font-bold bg-slate-50">
                JOB ANALYZER
              </div>
            </div>
            <div>
              <h1 className={styles.jobTitle}>Senior AI Product Designer</h1>
              <p className={styles.companyName}>TechNova Solutions</p>
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <MapPin size={15} />
                  <span>San Francisco, CA</span>
                </div>
                <div className={styles.metaItem}>
                  <Briefcase size={15} />
                  <span>Full-Time</span>
                </div>
                <div className={styles.metaItem}>
                  <Laptop size={15} />
                  <span>Hybrid</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bannerRight}>
            <Link href="/user/job-analyzer/result" className={styles.matchBtn}>
              <Sparkles size={16} />
              See My Match
            </Link>
            <button type="button" className={styles.editBtn}>
              <Pencil size={13} />
              Edit Job Analysis
            </button>
          </div>
        </div>

        {/* Content Two Columns */}
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.responsibilitiesCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconBox}>
                  <SlidersHorizontal size={18} />
                </div>
                <h2 className={styles.sectionTitle}>Key Responsibilities</h2>
              </div>

              <div className={styles.responsibilityList}>
                <div className={styles.listItem}>
                  <div className={styles.checkCircle}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <p className={styles.itemText}>
                    Lead the end-to-end design process for our core AI-driven analytics dashboard, translating complex data models into intuitive, accessible user interfaces.
                  </p>
                </div>

                <div className={styles.listItem}>
                  <div className={styles.checkCircle}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <p className={styles.itemText}>
                    Collaborate closely with product managers, machine learning engineers, and front-end developers to ensure seamless implementation of design specifications.
                  </p>
                </div>

                <div className={styles.listItem}>
                  <div className={styles.checkCircle}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <p className={styles.itemText}>
                    Conduct generative and evaluative user research to validate design concepts and iterate based on quantitative and qualitative feedback.
                  </p>
                </div>

                <div className={styles.listItem}>
                  <div className={styles.checkCircle}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <p className={styles.itemText}>
                    Contribute to and evolve the overarching design system, establishing patterns specific to AI interaction paradigms (e.g., trust, explainability, feedback loops).
                  </p>
                </div>

                <div className={styles.listItem}>
                  <div className={styles.checkCircle}>
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <p className={styles.itemText}>
                    Mentor junior designers and foster a culture of design excellence and user-centric thinking within the broader product organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className={styles.quoteCard}>
              &quot;We are looking for someone who doesn&apos;t just design interfaces, but who designs the conversation between humans and intelligent systems.&quot;
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className={styles.rightColumn}>
            {/* Skills Matrix Side Card */}
            <div className={styles.sideCard}>
              <div className={styles.sideTitleHeader}>
                <Zap size={18} className={styles.sideIcon} />
                <span>Skills Matrix</span>
              </div>

              <div className={styles.skillsGroup}>
                <p className={styles.subLabel}>REQUIRED</p>
                <div className={styles.pillsRow}>
                  <span className={styles.pillRequired}>Figma</span>
                  <span className={styles.pillRequired}>Prototyping</span>
                  <span className={styles.pillRequired}>Design Systems</span>
                  <span className={styles.pillRequired}>User Research</span>
                  <span className={styles.pillRequired}>Data Visualization</span>
                </div>
              </div>

              <div>
                <p className={styles.subLabel}>PREFERRED</p>
                <div className={styles.pillsRow}>
                  <span className={styles.pillPreferred}>HTML/CSS</span>
                  <span className={styles.pillPreferred}>AI/ML Concepts</span>
                  <span className={styles.pillPreferred}>Framer</span>
                  <span className={styles.pillPreferred}>Agile</span>
                </div>
              </div>
            </div>

            {/* Experience & Education Side Card */}
            <div className={styles.sideCard}>
              <div className={styles.sideTitleHeader}>
                <Briefcase size={18} className={styles.sideIcon} />
                <span>Experience</span>
              </div>
              <p className={styles.bodyText}>
                5+ years in Product Design, with at least 2 years focusing on complex SaaS, data analytics, or AI-driven products.
              </p>

              <div className={styles.cardDivider} />

              <div className={styles.sideTitleHeader}>
                <GraduationCap size={18} className={styles.sideIcon} />
                <span>Education</span>
              </div>
              <p className={styles.bodyText}>
                Bachelor&apos;s degree in HCI, Interaction Design, Graphic Design, or equivalent practical experience. Master&apos;s preferred.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerBrand}>ApplyWise</div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>Terms</Link>
            <Link href="#" className={styles.footerLink}>Privacy</Link>
            <Link href="#" className={styles.footerLink}>Careers</Link>
            <Link href="#" className={styles.footerLink}>Contact</Link>
          </div>
          <div>© 2024 ApplyWise Intelligence. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}