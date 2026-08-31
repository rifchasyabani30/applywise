"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Zap,
  Lock,
  Check,
  Sparkles,
} from "lucide-react";
import styles from "./cv-upload.module.css";

export default function CvUploadPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(1);

  const handleFileUpload = () => {
    setIsProcessing(true);
    setProcessingProgress(1);

    setTimeout(() => setProcessingProgress(2), 800);
    setTimeout(() => setProcessingProgress(3), 1600);
    setTimeout(() => setProcessingProgress(4), 2400);
    setTimeout(() => setProcessingProgress(5), 3200);
    setTimeout(() => {
      router.push("/user/cv-analyzer/review");
    }, 4000);
  };

  return (
    <div className={styles.container}>
      {!isProcessing ? (
        <div className={styles.uploadHeroLayout}>
          {/* Kolom Kiri: Headline */}
          <div>
            <div className={styles.uploadBadge}>CV ANALYZER</div>
            <h1 className={styles.heroTitle}>
              Mulai dari <br />
              <span className={styles.blueHighlight}>CV-mu.</span>
            </h1>
            <p className={styles.heroDesc}>
              Upload CV terbaru dan biarkan ApplyWise membantu menyusun informasi kariermu ke dalam Career Profile.
            </p>

            <div className={styles.securityNoteRow}>
              <div className={styles.securityIcons}>
                <ShieldCheck size={18} />
                <Zap size={16} />
                <Lock size={16} />
              </div>
              <span>Secure & Private AI Analysis</span>
            </div>
          </div>

          {/* Kolom Kanan: Dropzone Card */}
          <div className={styles.dropzoneWrapper}>
            <div className={`${styles.floatingPill} ${styles.pillExperience}`}>
              <span className={styles.pillDot} />
              <span>EXPERIENCE</span>
            </div>
            <div className={`${styles.floatingPill} ${styles.pillEducation}`}>
              <span className={styles.pillDot} />
              <span>EDUCATION</span>
            </div>
            <div className={`${styles.floatingPill} ${styles.pillCertifications}`}>
              <span className={styles.pillDot} />
              <span>CERTIFICATIONS</span>
            </div>
            <div className={`${styles.floatingPill} ${styles.pillSkills}`}>
              <span className={styles.pillDot} />
              <span>SKILLS</span>
            </div>
            <div className={`${styles.floatingPill} ${styles.pillProjects}`}>
              <span className={styles.pillDot} />
              <span>PROJECTS</span>
            </div>

            <div className={styles.dropzoneCard} onClick={handleFileUpload}>
              <div className={styles.docIllustration}>
                <div className={styles.docLineHeader} />
                <div className={styles.docLineLong} />
                <div className={styles.docLineMedium} />
                <div className={styles.docLineShort} />
                <div className={styles.docBoxBottom} />
              </div>

              <button type="button" className={styles.uploadActionBtn}>
                Upload CV
              </button>
              <span className={styles.dragDropHint}>Drag & drop PDF di sini</span>
            </div>
          </div>
        </div>
      ) : (
        /* Processing Animation */
        <div className={styles.processingWrapper}>
          <h1 className={styles.processingHeadline}>Sedang memahami CV-mu...</h1>
          <p className={styles.processingSub}>
            ApplyWise sedang membaca perjalanan kariermu dan menyusun informasi yang relevan.
          </p>

          <div className={styles.processingGrid}>
            <div className={styles.scanningDocContainer}>
              <div className={styles.scanTopGlow} />
              <div className={styles.scanBadgeDoc}>N DOE</div>
              <div className={styles.scanPlaceholderLine} style={{ width: "80%" }} />
              <div className={styles.scanPlaceholderLine} style={{ width: "60%" }} />
              <div
                className={styles.scanBadgeDoc}
                style={{ alignSelf: "flex-end", backgroundColor: "#3b82f6" }}
              >
                EXPERIENCE
              </div>
              <div className={styles.scanPlaceholderLine} style={{ width: "95%" }} />
              <div className={styles.scanPlaceholderLine} style={{ width: "70%" }} />
              <div className={styles.scanBadgeDoc} style={{ marginTop: "auto" }}>
                SKILLS
              </div>
            </div>

            <div className={styles.processingStepsCol}>
              <div className={styles.aiStatusBox}>
                <Sparkles size={16} />
                <span>Membaca struktur CV...</span>
              </div>

              {[
                { id: 1, label: "01 Membaca CV" },
                { id: 2, label: "02 Menemukan informasi pengalaman" },
                { id: 3, label: "03 Mengidentifikasi pendidikan" },
                { id: 4, label: "04 Menyusun skills" },
                { id: 5, label: "05 Menyiapkan Career Profile" },
              ].map((st) => (
                <div
                  key={st.id}
                  className={`${styles.stepItemRow} ${
                    processingProgress === st.id ? styles.stepItemActive : ""
                  }`}
                >
                  {processingProgress > st.id ? (
                    <div className={styles.stepIconDone}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                  ) : processingProgress === st.id ? (
                    <div className={styles.stepIconActive}>
                      <div className={styles.stepDotInner} />
                    </div>
                  ) : (
                    <div className={styles.stepIconPending}>0{st.id}</div>
                  )}
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}