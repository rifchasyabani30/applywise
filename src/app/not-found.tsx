import React from "react";
import Link from "next/link";
import { LayoutGrid, Home } from "lucide-react";
import styles from "@/components/system/system-states.module.css";

export default function NotFound() {
  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.code404}>404</div>

      {/* SVG Wave Line Path */}
      <div className={styles.waveSvgContainer}>
        <svg viewBox="0 0 300 70" fill="none" style={{ width: "100%", height: "100%" }}>
          <path
            d="M 10 50 Q 110 50 150 30 T 290 10"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="90" cy="48" r="5" fill="#ffffff" stroke="#0d57d5" strokeWidth="3" />
          <circle cx="150" cy="30" r="5.5" fill="#ffffff" stroke="#0d57d5" strokeWidth="3" />
          <circle cx="210" cy="18" r="4.5" fill="#ffffff" stroke="#0d57d5" strokeWidth="3" />
          <circle cx="180" cy="50" r="4" fill="#64748b" />
        </svg>
      </div>

      <h1 className={styles.notFoundTitle}>Looks like this path doesn&apos;t exist.</h1>
      <p className={styles.notFoundSubtitle}>
        The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
      </p>

      <div className={styles.actionsRow}>
        <Link href="/user/dashboard" className={styles.btnPrimary}>
          <LayoutGrid size={16} />
          <span>Back to Dashboard</span>
        </Link>
        <Link href="/" className={styles.btnGhost}>
          <Home size={16} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}