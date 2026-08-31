"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Wallet, Briefcase, MapPin } from "lucide-react";
import styles from "./form-job.module.css";

export default function FormJobPage() {
  const [activeTab, setActiveTab] = useState<"text" | "pdf" | "screenshot">("text");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Header Section with Floating Pills */}
        <div className={styles.headerSection}>
          <p className={styles.subTitle}>JOB ANALYZER</p>
          <h1 className={styles.title}>
            Apakah peluang ini<br />
            layak kamu kejar?
          </h1>
          <p className={styles.description}>
            Masukkan lowongan yang sedang kamu pertimbangkan. APPLYWISE akan membantu membaca requirement dan mencocokkannya dengan profilmu.
          </p>

          {/* Floating Feature Indicators */}
          <div className={styles.floatingPillMatch}>
            <span className={styles.dotBlue}></span> MATCH
          </div>
          <div className={styles.floatingPillSkills}>
            <span className={styles.dotBlue}></span> SKILLS
          </div>
          <div className={styles.floatingPillInsight}>
            <span className={styles.dotBlue}></span> INSIGHT
          </div>
        </div>

        {/* Main Form + History Grid */}
        <div className={styles.mainGrid}>
          {/* Left Form Section */}
          <div className={styles.formSection}>
            <input
              type="text"
              placeholder="Contoh: System Analyst"
              className={styles.jobTitleInput}
            />

            {/* Optional Metadata Row */}
            <div className={styles.jobMetaRow}>
              <div className={styles.metaInputBox}>
                <Wallet size={14} color="#94a3b8" />
                <input type="text" placeholder="IDR 10M - 15M" className={styles.metaInput} />
              </div>
              <div className={styles.metaInputBox}>
                <Briefcase size={14} color="#94a3b8" />
                <input type="text" placeholder="Job Type" className={styles.metaInput} />
              </div>
              <div className={styles.metaInputBox}>
                <MapPin size={14} color="#94a3b8" />
                <input type="text" placeholder="Location" className={styles.metaInput} />
              </div>
            </div>

            {/* Input Card Container */}
            <div className={styles.inputCard}>
              <div className={styles.tabGroup}>
                <button
                  type="button"
                  onClick={() => setActiveTab("text")}
                  className={`${styles.tabBtn} ${activeTab === "text" ? styles.tabActive : ""}`}
                >
                  PASTE TEXT
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("pdf")}
                  className={`${styles.tabBtn} ${activeTab === "pdf" ? styles.tabActive : ""}`}
                >
                  PDF
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("screenshot")}
                  className={`${styles.tabBtn} ${activeTab === "screenshot" ? styles.tabActive : ""}`}
                >
                  SCREENSHOT
                </button>
              </div>

              <textarea
                className={styles.textarea}
                placeholder="Paste deskripsi lowongan pekerjaan di sini..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={20000}
              />

              <div className={styles.charCount}>
                {description.length.toLocaleString()} / 20,000
              </div>
            </div>

            {/* Profile Check & Submit Action */}
            <div className={styles.actionRow}>
              <div className={styles.profileStatus}>
                <span className={styles.statusBold}>YOUR PROFILE:</span> Career Profile
                <CheckCircle2 size={15} className={styles.checkIcon} />
                CV
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span className="ml-1 text-gray-400">| Siap dibandingkan</span>
              </div>

              <button type="button" className={styles.submitBtn}>
                Analisis Lowongan
                <ArrowRight size={16} />
              </button>
            </div>

            <p className={styles.bottomHint}>Bandingkan dengan profilmu</p>
          </div>

          {/* Right Sidebar: Recent Opportunities */}
          <div className={styles.historySection}>
            <h2 className={styles.historyTitle}>Peluang yang baru kamu analisis</h2>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>Product Designer</h3>
                <p className={styles.historyCompany}>TechCorp Indonesia • Jakarta</p>
              </div>
              <span className={styles.badgeMatchHigh}>92% Match</span>
            </div>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>UX Researcher</h3>
                <p className={styles.historyCompany}>Fintech Startup • Remote</p>
              </div>
              <span className={styles.badgeMatchMedium}>85% Match</span>
            </div>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>UI Designer</h3>
                <p className={styles.historyCompany}>Creative Agency • Bali</p>
              </div>
              <span className={styles.badgeDraft}>Draft</span>
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