"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, Check, Loader2 } from "lucide-react";
import styles from "./processing.module.css";

const steps = [
  "Extracting job title",
  "Extracting company",
  "Extracting location",
  "Understanding requirements",
  "Identifying skills",
  "Normalizing skills",
  "Preparing your analysis",
];

export default function ProcessingAnalysisPage() {
  const router = useRouter(); // Perbaikan: menggunakan useRouter()
  const [currentStepIndex, setCurrentStepIndex] = useState(4); // default di step "Identifying skills"

  useEffect(() => {
    // Simulasi progress otomatis berpindah step
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // router.push("/user/job-analyzer/result"); // Un-comment jika rute hasil sudah siap
          return prev;
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Glowing Top Icon */}
        <div className={styles.iconWrapper}>
          <div className={styles.outerRing}>
            <div className={styles.innerCircle}>
              <Sparkles size={32} />
            </div>
          </div>
        </div>

        {/* Header Title */}
        <h1 className={styles.title}>
          Reading the job<br />
          description...
        </h1>

        {/* Steps Card List */}
        <div className={styles.statusList}>
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isPending = index > currentStepIndex;

            if (isCompleted) {
              return (
                <div key={step} className={styles.statusCard}>
                  <div className={styles.checkIcon}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className={styles.statusTextDone}>{step}</span>
                </div>
              );
            }

            if (isCurrent) {
              return (
                <div key={step} className={styles.statusCardActive}>
                  <Loader2 size={20} className={styles.spinnerIcon} />
                  <span className={styles.statusTextActive}>{step}</span>
                </div>
              );
            }

            if (isPending) {
              return (
                <div key={step} className={styles.statusCardPending}>
                  <div className={styles.pendingIcon} />
                  <span className={styles.statusTextPending}>{step}</span>
                </div>
              );
            }

            return null;
          })}
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
  );
}