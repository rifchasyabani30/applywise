"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  User,
  Briefcase,
  Target,
  Check,
  ArrowRight,
} from "lucide-react";
import styles from "./cv-success.module.css";

export default function CvSuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.successIconCircle}>
        <Check size={28} strokeWidth={3} />
      </div>

      <h1 className={styles.successTitle}>Career Profile-mu sudah diperbarui.</h1>
      <p className={styles.successSub}>
        Informasi dari CV berhasil disimpan dan sekarang bisa digunakan oleh ApplyWise[cite: 5].
      </p>

      <div className={styles.successCardsGrid}>
        {/* Checklist Data Tersimpan */}
        <div className={styles.savedDataCard}>
          <h3 className={styles.savedCardTitle}>Data Tersimpan</h3>
          <div className={styles.savedCheckList}>
            {["Experience", "Education", "Skills", "Projects", "Certifications"].map(
              (item, idx) => (
                <div key={idx} className={styles.savedCheckItem}>
                  <div className={styles.checkCircleFilled}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Intelligence Flow Visual Tree */}
        <div className={styles.intelligenceFlowCard}>
          <div className={styles.flowCardTag}>INTELLIGENCE FLOW</div>

          <div className={styles.flowTree}>
            <div className={styles.flowNodeDoc}>
              <FileText size={20} color="#2563eb" />
              <span>CV</span>
            </div>

            <div className={styles.flowLineVertical} />

            <div className={styles.flowNodeProfile}>
              <User size={22} />
              <span className={styles.flowProfileLabel}>CAREER PROFILE</span>
            </div>

            <div className={styles.flowBranchLine} />

            <div className={styles.flowBottomNodesRow}>
              <div className={styles.flowNextNode}>
                <Briefcase size={18} color="#2563eb" />
                <span>Job Analyzer</span>
              </div>
              <div className={styles.flowNextNode}>
                <Target size={18} color="#2563eb" />
                <span>Skill Gap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.successActionRow}>
        <Link href="/user/profile" className={styles.toProfileBtn}>
          <span>Lihat Career Profile</span>
          <ArrowRight size={16} />
        </Link>
        <Link href="/user/dashboard" className={styles.toDashboardBtn}>
          Ke Dashboard
        </Link>
      </div>
    </div>
  );
}