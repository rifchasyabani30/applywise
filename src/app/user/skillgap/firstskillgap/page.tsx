"use client";

import React from "react";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import styles from "./firstskillgap.module.css";

export default function FirstSkillGapsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          {/* Left Text & Actions */}
          <div className={styles.leftContent}>
            <div className={styles.pillCount}>
              <Info size={14} className={styles.infoIcon} />
              <span>0 analyzed jobs</span>
            </div>

            <h1 className={styles.title}>
              Skill gap kamu,
              <span className={styles.titleHighlight}>terlihat lebih jelas</span>
              sekarang.
            </h1>

            <p className={styles.description}>
              Insight ini berdasarkan lowongan yang telah kamu analisis. Mulai analisis beberapa lowongan untuk menemukan pola skill yang lebih akurat dan relevan dengan karirmu.
            </p>

            <div className={styles.actionGroup}>
              <Link href="/user/job-analyzer/formjob" className={styles.btnPrimary}>
                Analisis Lowongan
                <ArrowRight size={16} />
              </Link>
              <Link href="/user/profile" className={styles.btnSecondary}>
                Lengkapi Career Profile
              </Link>
            </div>

            <p className={styles.footnote}>
              Semakin banyak lowongan yang kamu analisis, semakin akurat pola skill yang kami temukan.
            </p>
          </div>

          {/* Right Floating Nodes Visual */}
          <div className={styles.graphicContainer}>
            <div className={styles.ambientBlurCircle} />

            {/* SVG Connecting Lines */}
            <svg className={styles.svgLines} viewBox="0 0 400 350">
              <line x1="210" y1="180" x2="160" y2="150" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="210" y1="180" x2="270" y2="135" stroke="#93c5fd" strokeWidth="1.5" />
              <line x1="210" y1="180" x2="250" y2="230" stroke="#bfdbfe" strokeWidth="1" />
            </svg>

            {/* Node 1: TypeScript (Top Left) */}
            <div className={styles.skillNode} style={{ top: "18%", left: "12%" }}>
              <span className={styles.nodeLabelLight}>TypeScript</span>
              <div className={styles.nodeDotSmall} />
            </div>

            {/* Node 2: React (Mid Left) */}
            <div className={styles.skillNode} style={{ top: "38%", left: "32%" }}>
              <span className={styles.nodeLabelMuted}>React</span>
              <div className={styles.nodeDotSecondary} />
            </div>

            {/* Node 3: Data Analysis (Center - Main) */}
            <div className={styles.skillNode} style={{ top: "50%", left: "55%" }}>
              <div className={styles.nodeDotPrimary} />
              <span className={styles.nodeLabelPrimary}>Data Analysis</span>
            </div>

            {/* Node 4: Python (Top Right) */}
            <div className={styles.skillNode} style={{ top: "28%", left: "75%" }}>
              <div className={styles.nodeDotPrimary} />
              <span className={styles.nodeLabelMuted}>Python</span>
            </div>

            {/* Node 5: SQL (Bottom Right) */}
            <div className={styles.skillNode} style={{ top: "70%", left: "70%" }}>
              <div className={styles.nodeDotMuted} />
              <span className={styles.nodeLabelLight}>SQL</span>
            </div>

            {/* Node 6: AWS (Bottom Left) */}
            <div className={styles.skillNode} style={{ top: "82%", left: "20%" }}>
              <div className={styles.nodeDotSmall} />
              <span className={styles.nodeLabelLight}>AWS</span>
            </div>

            {/* Node 7: Figma (Far Right Top) */}
            <div className={styles.skillNode} style={{ top: "12%", left: "85%" }}>
              <div className={styles.nodeDotSmall} />
              <span className={styles.nodeLabelLight}>Figma</span>
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