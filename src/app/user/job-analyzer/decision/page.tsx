"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, Briefcase, TrendingUp, Cpu } from "lucide-react";
import styles from "./decision.module.css";

export default function DecisionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h1 className={styles.title}>Is this job worth pursuing?</h1>
          <p className={styles.subtitle}>
            We&apos;ve analyzed the role against your profile, experience, and career trajectory.
          </p>
        </div>

        {/* Priority Score Circle Hero Card */}
        <div className={styles.scoreCard}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleInner}>
              <div>
                <span className={styles.scoreNumber}>89</span>
                <span className={styles.percentSign}>%</span>
              </div>
              <span className={styles.scoreLabel}>PRIORITY SCORE</span>
            </div>
          </div>

          <Link href="/user/job-analyzer/savejobs" className={styles.applyBtn}>
            APPLY
          </Link>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Profile Match */}
          <div className={styles.metricCard}>
            <div>
              <div className={styles.cardTopRow}>
                <div className={styles.iconBoxBlue}>
                  <UserCheck size={18} />
                </div>
                <span className={styles.badgePill}>High Match</span>
              </div>
              <h2 className={styles.metricTitle}>Profile Match</h2>
              <p className={styles.metricDesc}>
                Your skills tightly align with the core requirements.
              </p>
            </div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFillHigh} />
            </div>
          </div>

          {/* Card 2: Experience Fit */}
          <div className={styles.metricCard}>
            <div>
              <div className={styles.cardTopRow}>
                <div className={styles.iconBoxBlue}>
                  <Briefcase size={18} />
                </div>
                <span className={styles.badgePill}>Excellent</span>
              </div>
              <h2 className={styles.metricTitle}>Experience Fit</h2>
              <p className={styles.metricDesc}>
                Seniority level and domain expertise are a direct hit.
              </p>
            </div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFillMed} />
            </div>
          </div>

          {/* Card 3: Career Preference */}
          <div className={styles.metricCard}>
            <div>
              <div className={styles.cardTopRow}>
                <div className={styles.iconBoxBlue}>
                  <TrendingUp size={18} />
                </div>
                <span className={styles.badgePill}>Perfect</span>
              </div>
              <h2 className={styles.metricTitle}>Career Preference</h2>
              <p className={styles.metricDesc}>
                Matches your desired salary, location, and role type.
              </p>
            </div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFillPerf} />
            </div>
          </div>
        </div>

        {/* Bottom Recommendation Callout */}
        <div className={styles.recommendationCard}>
          <div className={styles.recommendIconBox}>
            <Cpu size={20} />
          </div>
          <div>
            <h2 className={styles.recommendTitle}>Why this recommendation?</h2>
            <p className={styles.recommendText}>
              This role matches your profile well and aligns with your career preferences. The combination of your technical background and requested management trajectory places you in the top 5% of candidates we&apos;ve historically seen succeed at this specific company stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}