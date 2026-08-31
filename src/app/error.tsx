"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCw, LayoutGrid } from "lucide-react";
import styles from "@/components/system/system-states.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.fullscreenContainer}>
      {/* 3D Glass Hook Illustration */}
      <div className={styles.errorIllustrationBox}>
        <svg viewBox="0 0 200 100" fill="none" style={{ width: "80%", height: "80%" }}>
          <path
            d="M 20 80 Q 110 50 130 25 A 15 15 0 1 1 125 45"
            stroke="#60a5fa"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      <h1 className={styles.notFoundTitle}>Oops, we hit a little bump.</h1>
      <p className={styles.notFoundSubtitle}>
        Something didn&apos;t go as planned. Let&apos;s try that again.
      </p>

      <div className={styles.actionsRow}>
        <button type="button" onClick={() => reset()} className={styles.btnPrimary}>
          <RotateCw size={15} />
          <span>Try Again</span>
        </button>
        <Link href="/user/dashboard" className={styles.btnSecondaryBlue}>
          <LayoutGrid size={15} />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}