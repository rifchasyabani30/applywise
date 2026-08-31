"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  SlidersHorizontal,
  X,
  Briefcase,
  ArrowRight,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import styles from "./applications.module.css";

interface ApplicationRecord {
  id: string;
  role: string;
  company: string;
  dateBadge: string;
  status: "applied" | "interview" | "rejected";
  matchScore: number;
  badgeType?: "followup" | "techscreen";
  badgeLabel?: string;
  badgeDate?: string;
}

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const applications: ApplicationRecord[] = [
    {
      id: "pt-len-system-analyst",
      role: "System Analyst",
      company: "PT LEN Industri",
      dateBadge: "APPLIED • 12 AUG",
      status: "applied",
      matchScore: 91,
      badgeType: "followup",
      badgeLabel: "Follow up",
      badgeDate: "03 Sep",
    },
    {
      id: "fintech-ux-researcher",
      role: "UX Researcher",
      company: "Fintech Startup",
      dateBadge: "INTERVIEW",
      status: "interview",
      matchScore: 85,
      badgeType: "techscreen",
      badgeLabel: "Tech Screen",
      badgeDate: "Today, 2PM",
    },
    {
      id: "techcorp-product-designer",
      role: "Product Designer",
      company: "TechCorp Indonesia",
      dateBadge: "REJECTED • 05 AUG",
      status: "rejected",
      matchScore: 78,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Top Header */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Jaga setiap <br />
          <span className={styles.blueHighlight}>peluang</span> yang kamu kejar.
        </h1>
        <p className={styles.heroSubtitle}>
          Lacak, kelola, dan tingkatkan peluang suksesmu dengan wawasan berbasis data untuk setiap lamaran yang sedang berjalan[cite: 5].
        </p>
      </div>

      {/* 3 Stats Banner */}
      <div className={styles.statsBanner}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>24</div>
          <div className={styles.statLabel}>Applications</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <div className={styles.statNumber}>6</div>
          <div className={styles.statLabel}>Interviews</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <div className={styles.statNumber}>2</div>
          <div className={styles.statLabel}>Offers</div>
        </div>
      </div>

      {/* Main 2 Column Section */}
      <div className={styles.trackerLayout}>
        {/* Left Column */}
        <div>
          <div className={styles.controlsRow}>
            {/* Tombol Tambah Lamaran membuka form baru kosong */}
            <Link href="/user/applications/new" className={styles.primaryActionBtn}>
              <Plus size={15} />
              <span>Tambah Lamaran</span>
            </Link>
            <div className={styles.searchBoxContainer}>
              <Search size={15} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <button type="button" className={styles.filterBtn} aria-label="Filter options">
              <SlidersHorizontal size={15} />
            </button>
          </div>

          {/* Active Tag Filters */}
          <div className={styles.activeFiltersRow}>
            <div className={styles.filterTag}>
              <span>Status: Active</span>
              <button type="button" className={styles.removeFilterBtn} aria-label="Remove filter">
                <X size={12} />
              </button>
            </div>
            <div className={styles.filterTag}>
              <span>Role: Tech</span>
              <button type="button" className={styles.removeFilterBtn} aria-label="Remove filter">
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Cards List */}
          <div className={styles.applicationsList}>
            {applications.map((app) => (
              <Link
                key={app.id}
                href={`/user/applications/${app.id}`}
                className={styles.appCard}
              >
                <div className={styles.appCardLeft}>
                  <div className={styles.appStatusHeader}>
                    <span className={styles.statusDot} />
                    <span>{app.dateBadge}</span>
                  </div>
                  <h3
                    className={
                      app.status === "rejected"
                        ? styles.appRoleTitleRejected
                        : styles.appRoleTitle
                    }
                  >
                    {app.role}
                  </h3>
                  <div className={styles.appCompany}>
                    <Briefcase size={13} color="#94a3b8" />
                    <span>{app.company}</span>
                  </div>
                </div>

                <div className={styles.appCardRight}>
                  {app.matchScore && (
                    <div className={styles.matchBadgeGroup}>
                      <div className={styles.matchScoreValue}>{app.matchScore}%</div>
                      <div className={styles.matchScoreLabel}>MATCH</div>
                    </div>
                  )}

                  {app.badgeType === "followup" && (
                    <div className={styles.followUpPill}>
                      <span style={{ fontSize: "0.6rem" }}>Follow up</span>
                      <span className={styles.followUpDate}>{app.badgeDate}</span>
                    </div>
                  )}

                  {app.badgeType === "techscreen" && (
                    <div className={styles.techScreenPill}>
                      <span style={{ fontSize: "0.6rem" }}>Tech Screen</span>
                      <span style={{ fontSize: "0.65rem", fontWeight: 800 }}>{app.badgeDate}</span>
                    </div>
                  )}

                  {app.status !== "rejected" ? (
                    <div className={styles.cardCircleBtn}>
                      <ArrowRight size={15} />
                    </div>
                  ) : (
                    <div className={styles.cardCircleBtn}>
                      <MoreHorizontal size={15} />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebarCol}>
          <h3 className={styles.sidebarTitle}>Yang perlu diperhatikan</h3>

          <div className={styles.aiInsightBox}>
            <div className={styles.aiInsightTag}>
              <Sparkles size={13} />
              <span>AI INSIGHT</span>
            </div>

            <div className={styles.insightList}>
              <div className={styles.insightItem}>
                <div className={styles.insightDotRed} />
                <div>
                  <div className={styles.insightItemTitle}>Follow up with PT LEN Industri</div>
                  <div>It&apos;s been 3 weeks since you applied. A polite follow-up is recommended today.</div>
                </div>
              </div>

              <div className={styles.insightItem}>
                <div className={styles.insightDotBlue} />
                <div>
                  <div className={styles.insightItemTitle}>Prepare for UX Researcher Tech Screen</div>
                  <div>Review your portfolio case studies focusing on user testing methodologies.</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statMetricsBox}>
            <div className={styles.metricRow}>
              <span className={styles.metricRowLabel}>Response Rate</span>
              <span className={styles.metricRowValue}>33%</span>
            </div>
            <div className={styles.metricRow}>
              <span className={styles.metricRowLabel}>Avg. Time to Interview</span>
              <span className={styles.metricRowValue}>14d</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}