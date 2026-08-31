"use client";

import React from "react";
import Link from "next/link";
import { Target, Sparkles } from "lucide-react";
import styles from "./intelligence-5.module.css";

export default function Intelligence5SkillGap() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <div>
              <p className={styles.subHeaderTag}>— INTELLIGENCE REPORT</p>
              <h1 className={styles.title}>05 Skill Gaps</h1>
              <p className={styles.description}>
                Your professional trajectory mapped against market demands. Identifying the vectors that require immediate focus to align with your target roles.
              </p>
            </div>

            <div className={styles.priorityCard}>
              <div className={styles.priorityCardBgShape} />
              <Target size={18} className={styles.targetIcon} />

              <span className={styles.badgePriority}>Top Priority</span>
              <h2 className={styles.skillNameTitle}>
                Requirement<br />
                Analysis
              </h2>
              <p className={styles.skillCategoryLabel}>PROFESSIONAL SKILL</p>

              <div className={styles.cardDivider} />

              <div className={styles.statRow}>
                <span className={styles.statBigNumber}>22</span>
                <span className={styles.statText}>out of 30 analyzed jobs</span>
              </div>
            </div>

            <div className={styles.aiPatternCard}>
              <div className={styles.aiIconBox}>
                <Sparkles size={18} />
              </div>
              <div>
                <p className={styles.aiTitle}>AI Detection Pattern</p>
                <p className={styles.aiText}>
                  &quot;Pola terdeteksi: Role yang kamu incar sangat menekankan pada metodologi Agile dan kemampuan dokumentasi teknis (PRD).&quot;
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.bubbleCanvas}>
              <div className={styles.bubbleRequirement}>
                Requirement<br />Analysis
              </div>
              <div className={styles.bubblePRD}>
                PRD
              </div>
              <div className={styles.bubbleAgile}>
                Agile<br />Scrum
              </div>
              <div className={styles.bubbleSQL}>
                SQL
              </div>
              <div className={styles.bubbleComm}>
                Comm
              </div>
            </div>

            <div className={styles.frequencySection}>
              <p className={styles.frequencyIndexHeader}>GAP FREQUENCY INDEX</p>

              <div className={styles.frequencyList}>
                <div className={styles.frequencyItem}>
                  <div className={styles.freqLeft}>
                    <span className={styles.itemNum}>01</span>
                    <div>
                      <h3 className={styles.itemName}>Requirement Analysis</h3>
                      <p className={styles.itemSub}>Professional / Technical</p>
                    </div>
                  </div>
                  <div className={styles.freqRight}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFillHigh} />
                    </div>
                    <span className={styles.levelLabel}>High</span>
                  </div>
                </div>

                <div className={styles.frequencyItem}>
                  <div className={styles.freqLeft}>
                    <span className={styles.itemNum}>02</span>
                    <div>
                      <h3 className={styles.itemName}>PRD (Product Req. Doc)</h3>
                      <p className={styles.itemSub}>Technical</p>
                    </div>
                  </div>
                  <div className={styles.freqRight}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFillHigh} />
                    </div>
                    <span className={styles.levelLabel}>High</span>
                  </div>
                </div>

                <div className={styles.frequencyItem}>
                  <div className={styles.freqLeft}>
                    <span className={styles.itemNum}>03</span>
                    <div>
                      <h3 className={styles.itemName}>Agile Scrum</h3>
                      <p className={styles.itemSub}>Methodology</p>
                    </div>
                  </div>
                  <div className={styles.freqRight}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFillMed} />
                    </div>
                    <span className={styles.levelLabel}>Med</span>
                  </div>
                </div>

                <div className={styles.frequencyItem}>
                  <div className={styles.freqLeft}>
                    <span className={styles.itemNum}>04</span>
                    <div>
                      <h3 className={styles.itemName}>SQL</h3>
                      <p className={styles.itemSub}>Tool / Technical</p>
                    </div>
                  </div>
                  <div className={styles.freqRight}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFillMed} />
                    </div>
                    <span className={styles.levelLabel}>Med</span>
                  </div>
                </div>

                <div className={styles.frequencyItem}>
                  <div className={styles.freqLeft}>
                    <span className={styles.itemNum}>05</span>
                    <div>
                      <h3 className={styles.itemName}>Communication</h3>
                      <p className={styles.itemSub}>Soft Skill</p>
                    </div>
                  </div>
                  <div className={styles.freqRight}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFillLow} />
                    </div>
                    <span className={styles.levelLabel}>Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerBrand}>ApplyWise</div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
            <Link href="#" className={styles.footerLink}>Help Center</Link>
            <Link href="#" className={styles.footerLink}>Career Advice</Link>
          </div>
          <div>© 2024 ApplyWise AI. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}