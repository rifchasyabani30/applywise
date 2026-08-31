"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Info, ArrowRight } from "lucide-react";
import styles from "./empty.module.css";

export default function EmptySkillGap() {
  const router = useRouter();

  const handleCompleteProfile = () => {
    localStorage.setItem("isProfileCompleted", "true");
    localStorage.setItem("analyzedJobsCount", "2"); // Set simulasi 2 jobs agar siap menampilkan tampilan 02 Skill Gaps
    router.push("/user/profile");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.mainGrid}>
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
              <Link href="/user/job-analyzer/form-job" className={styles.btnPrimary}>
                Analisis Lowongan
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={handleCompleteProfile}
                className={styles.btnSecondary}
              >
                Lengkapi Career Profile
              </button>
            </div>

            <p className={styles.footnote}>
              Semakin banyak lowongan yang kamu analisis, semakin akurat pola skill yang kami temukan.
            </p>
          </div>

          <div className={styles.graphicContainer}>
            <div className={styles.ambientBlurCircle} />
            <svg className={styles.svgLines} viewBox="0 0 400 350">
              <line x1="210" y1="180" x2="160" y2="150" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="210" y1="180" x2="270" y2="135" stroke="#93c5fd" strokeWidth="1.5" />
              <line x1="210" y1="180" x2="250" y2="230" stroke="#bfdbfe" strokeWidth="1" />
            </svg>

            <div className={styles.skillNode} style={{ top: "18%", left: "12%" }}>
              <span className={styles.nodeLabelLight}>TypeScript</span>
              <div className={styles.nodeDotSmall} />
            </div>
            <div className={styles.skillNode} style={{ top: "38%", left: "32%" }}>
              <span className={styles.nodeLabelMuted}>React</span>
              <div className={styles.nodeDotSecondary} />
            </div>
            <div className={styles.skillNode} style={{ top: "50%", left: "55%" }}>
              <div className={styles.nodeDotPrimary} />
              <span className={styles.nodeLabelPrimary}>Data Analysis</span>
            </div>
            <div className={styles.skillNode} style={{ top: "28%", left: "75%" }}>
              <div className={styles.nodeDotPrimary} />
              <span className={styles.nodeLabelMuted}>Python</span>
            </div>
            <div className={styles.skillNode} style={{ top: "70%", left: "70%" }}>
              <div className={styles.nodeDotMuted} />
              <span className={styles.nodeLabelLight}>SQL</span>
            </div>
            <div className={styles.skillNode} style={{ top: "82%", left: "20%" }}>
              <div className={styles.nodeDotSmall} />
              <span className={styles.nodeLabelLight}>AWS</span>
            </div>
            <div className={styles.skillNode} style={{ top: "12%", left: "85%" }}>
              <div className={styles.nodeDotSmall} />
              <span className={styles.nodeLabelLight}>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}