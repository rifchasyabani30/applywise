"use client";

import React, { useEffect, useState } from "react";
import EmptySkillGap from "./empty/page";
import Intelligence2SkillGap from "./intelligence-2/page";
import Intelligence5SkillGap from "./intelligence-5/page";
import styles from "./skill-gap.module.css";

export default function SkillGapPage() {
  const [hasCompletedProfile, setHasCompletedProfile] = useState<boolean>(false);
  const [analyzedJobsCount, setAnalyzedJobsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Membaca status simpanan sementara dari localStorage
    const profileStatus = localStorage.getItem("isProfileCompleted") === "true";
    const jobsCount = parseInt(localStorage.getItem("analyzedJobsCount") || "0", 10);

    setHasCompletedProfile(profileStatus);
    setAnalyzedJobsCount(jobsCount);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
      </div>
    );
  }

  // 1. Belum isi profil & belum ada analisis -> Tampilkan Empty State
  if (!hasCompletedProfile && analyzedJobsCount === 0) {
    return <EmptySkillGap />;
  }

  // 2. Sudah isi profil & analisis <= 2 lowongan -> Tampilkan 02 Skill Gaps
  if (analyzedJobsCount <= 2) {
    return <Intelligence2SkillGap />;
  }

  // 3. Analisis > 2 lowongan -> Tampilkan 05 Skill Gaps
  return <Intelligence5SkillGap />;
}