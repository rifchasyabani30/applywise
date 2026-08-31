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
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Dimulai dari step pertama

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Berpindah ke halaman requirements setelah jeda singkat
          setTimeout(() => {
            router.push("/user/job-analyzer/requirements");
          }, 800);
          return prev;
        }
      });
    }, 1500); // Kecepatan berpindah per step (1.5 detik)

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
    </div>
  );
}