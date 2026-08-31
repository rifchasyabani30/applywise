"use client";

import React from "react";
import { Link2, Compass, Sliders } from "lucide-react";
import styles from "./system-states.module.css";

export default function PriorityLoading() {
  return (
    <div className={styles.fullscreenContainer}>
      <h1 className={styles.priorityHeadline}>Finding your next best move...</h1>
      <p className={styles.prioritySub}>
        We&apos;re looking beyond the match to understand whether this opportunity is worth your attention[cite: 5].
      </p>

      <div className={styles.nodeCanvas}>
        {/* Connection Dashed Lines */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        >
          <line x1="120" y1="60" x2="290" y2="140" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="470" y1="100" x2="290" y2="140" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="6 6" />
          <line x1="130" y1="240" x2="290" y2="140" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Center Target Bubble */}
        <div className={styles.centerCirclePulse} />
        <span className={styles.calcLabel}>CALCULATING PRIORITY</span>

        {/* Floating Node 1: Match */}
        <div className={`${styles.floatingCardNode} ${styles.nodeMatch}`}>
          <div className={styles.iconCircleBlue}>
            <Link2 size={16} />
          </div>
          <span>Match</span>
        </div>

        {/* Floating Node 2: Role Fit */}
        <div className={`${styles.floatingCardNode} ${styles.nodeRoleFit}`}>
          <div className={styles.iconCircleGray}>
            <Compass size={16} />
          </div>
          <span>Role Fit</span>
        </div>

        {/* Floating Node 3: Career Preferences */}
        <div className={`${styles.floatingCardNode} ${styles.nodePref}`}>
          <div className={styles.iconCircleCyan}>
            <Sliders size={16} />
          </div>
          <span>Career Preferences</span>
        </div>
      </div>
    </div>
  );
}