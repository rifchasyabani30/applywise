"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, TrendingUp, User } from "lucide-react";
import styles from "./nextintel.module.css";

export default function NextIntelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Hero Section */}
        <div className={styles.heroGrid}>
          {/* Hero Left Text Content */}
          <div className={styles.heroLeft}>
            <p className={styles.subHeaderTag}>— INTELLIGENCE REPORT</p>
            <span className={styles.bigNumber}>02</span>
            <h1 className={styles.title}>SKILL<br />GAPS</h1>

            <p className={styles.description}>
              Competency focus based on <strong className="text-gray-900">30 analyzed jobs</strong>. The AI has mapped your current profile against high-frequency market demands.
            </p>

            <div className={styles.scrollHint}>
              <ArrowDown size={14} />
              <span>SCROLL TO VIEW MAPPING</span>
            </div>
          </div>

          {/* Hero Right Canvas Map */}
          <div className={styles.nodeCanvas}>
            {/* SVG Connecting Lines */}
            <svg className={styles.svgConnections} viewBox="0 0 450 380">
              <path d="M 180 120 L 250 80" stroke="#e2e8f0" strokeWidth="1.5" />
              <path d="M 180 120 L 230 320" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 280 150 L 230 320" stroke="#bfdbfe" strokeWidth="1.5" />
            </svg>

            {/* Agile Scrum Card */}
            <div className={styles.agileCard}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconBoxMuted}>
                  <TrendingUp size={12} />
                </div>
                <span className={styles.cardCategory}>METHODOLOGY</span>
              </div>
              <h3 className={styles.cardTitle}>Agile Scrum</h3>
              <p className={styles.cardFrequency}>
                <span className={styles.boldStat}>50%</span> frequency
              </p>
            </div>

            {/* Requirement Analysis Card */}
            <div className={styles.reqCard}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconBoxBlue}>!</div>
                <span className={styles.cardCategoryBlue}>PROFESSIONAL</span>
              </div>
              <h3 className={styles.cardTitleBig}>Requirement<br />Analysis</h3>
              <p className={styles.cardFrequency}>
                <span className={styles.boldStat}>73%</span> frequency
              </p>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} />
              </div>
            </div>

            {/* User Center Node */}
            <div className={styles.centerNode}>
              <User size={22} />
            </div>
          </div>
        </div>

        {/* Priority Matrix Section */}
        <div className={styles.matrixSection}>
          <div className={styles.matrixHeaderRow}>
            <h2 className={styles.sectionTitle}>Priority Matrix</h2>
            <span className={styles.sortedPill}>Sorted by Impact</span>
          </div>

          <div className={styles.matrixList}>
            {/* Item 01: Requirement Analysis */}
            <div className={styles.matrixItemCard}>
              <div className={styles.itemLeft}>
                <span className={styles.itemNumber}>01</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={styles.itemCategoryTag}>PROFESSIONAL</span>
                    <span className="text-gray-300">•</span>
                    <span className={styles.badgeHighPriority}>High Priority</span>
                  </div>
                  <h3 className={styles.itemTitle}>Requirement Analysis</h3>
                  <div className={styles.quoteBox}>
                    &quot;Skill ini muncul di sebagian besar lowongan yang kamu analisis namun belum ditemukan di profilmu.&quot;
                  </div>
                </div>
              </div>

              <div className={styles.itemRight}>
                <div>
                  <span className={styles.frequencyStatText}>22</span>
                  <span className={styles.frequencyMutedText}> / 30 jobs</span>
                </div>
                <span className={styles.frequencyLabel}>Detected Frequency</span>
                <div className={styles.barTrackWide}>
                  <div className={styles.barFillBlue} />
                </div>
              </div>
            </div>

            {/* Item 02: Agile Scrum */}
            <div className={styles.matrixItemCard}>
              <div className={styles.itemLeft}>
                <span className={styles.itemNumber}>02</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={styles.itemCategoryTag}>METHODOLOGY</span>
                    <span className="text-gray-300">•</span>
                    <span className={styles.badgeMediumPriority}>Medium Priority</span>
                    <span className={styles.badgeStatus}>Status: Developing</span>
                  </div>
                  <h3 className={styles.itemTitle}>Agile Scrum</h3>
                  <p className={styles.descText}>
                    Identified as a foundational workflow requirement across half of your targeted roles. Consider formalizing this experience.
                  </p>
                </div>
              </div>

              <div className={styles.itemRight}>
                <div>
                  <span className={styles.frequencyStatText}>15</span>
                  <span className={styles.frequencyMutedText}> / 30 jobs</span>
                </div>
                <span className={styles.frequencyLabel}>Detected Frequency</span>
                <div className={styles.barTrackWide}>
                  <div className={styles.barFillGray} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerBrand}>ApplyWise</div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
            <Link href="#" className={styles.footerLink}>Help Center</Link>
            <Link href="#" className={styles.footerLink}>Career Advice</Link>
          </div>
          <div>© 2024 ApplyWise AI. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}