import React from "react";
import { User, Link2, Sparkles, Rocket } from "lucide-react";
import styles from "./system-states.module.css";

export default function GlobalLoading() {
  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.brandGlobal}>ApplyWise</div>

      {/* S-Curve Path Stepper */}
      <div style={{ position: "relative", width: "100%", maxWidth: "620px", margin: "0 auto 2.5rem" }}>
        <svg viewBox="0 0 600 60" fill="none" style={{ width: "100%", height: "60px" }}>
          <path
            d="M 10 30 Q 150 0 300 30 T 590 30"
            stroke="#dbeafe"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <div className={styles.iconCircleBlue}><User size={14} /></div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>Profile</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <div className={styles.iconCircleCyan}><Link2 size={14} /></div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>Match</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <div className={styles.iconCircleBlue}><Sparkles size={14} /></div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>Priority</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <div className={styles.iconCircleCyan}><Rocket size={14} /></div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>Next Move</span>
          </div>
        </div>
      </div>

      <div className={styles.pulsingDotCenter} />
      <h1 className={styles.globalHeadline}>Getting things <br />ready...</h1>
      <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
        Preparing your next move.
      </p>
    </div>
  );
}