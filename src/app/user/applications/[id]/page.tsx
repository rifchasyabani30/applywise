"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Calendar,
  DollarSign,
  Edit2,
  ExternalLink,
  Check,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Bell,
  Mail,
  Globe,
} from "lucide-react";
import styles from "./app-detail.module.css";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default function ApplicationDetailPage({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const applicationId = resolvedParams.id;

  return (
    <div className={styles.container}>
      {/* Tombol Back */}
      <Link href="/user/applications" className={styles.backLink}>
        <ArrowLeft size={14} />
        <span>Back to Applications</span>
      </Link>

      {/* Header Dossier */}
      <div className={styles.dossierHeader}>
        <div>
          <h1 className={styles.roleTitle}>SYSTEM ANALYST</h1>
          <div className={styles.companyName}>PT LEN INDUSTRI</div>

          <div className={styles.metaInfoRow}>
            <div className={styles.metaItem}>
              <Clock size={14} color="#2563eb" />
              <span>Full Time</span>
            </div>
            <div className={styles.metaItem}>
              <MapPin size={14} color="#2563eb" />
              <span>Jakarta</span>
            </div>
            <div className={styles.metaItem}>
              <Calendar size={14} color="#2563eb" />
              <span>Applied 12 Aug 2026</span>
            </div>
            <div className={styles.metaItem}>
              <DollarSign size={14} color="#2563eb" />
              <span>Rp15.000.000 - 20.000.000 / bulan</span>
            </div>
          </div>

          <div className={styles.quickActionBtns}>
            <Link
              href={`/user/applications/${applicationId}/edit`}
              className={styles.secondaryBtn}
            >
              <Edit2 size={13} />
              <span>Edit Application</span>
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >
              <span>Buka Lowongan</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className={styles.headerRightGroup}>
          <div className={styles.statusIndicatorTag}>
            <span className={styles.statusDotBlue} />
            <span>INTERVIEW · Updated: 22 Aug 2026</span>
          </div>
          <Link
            href={`/user/applications/${applicationId}/edit`}
            className={styles.updateStatusBtn}
          >
            <span>Update Status</span>
            <Edit2 size={13} />
          </Link>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className={styles.dossierGrid}>
        {/* Left Column */}
        <div>
          <h3 className={styles.sectionBlockTitle}>Perjalanan lamaranmu</h3>
          <div className={styles.journeyList}>
            <div className={styles.journeyCard}>
              <div className={styles.checkCircleDone}>
                <Check size={12} strokeWidth={3} />
              </div>
              <div>
                <div className={styles.journeyTagTitle}>12 AUG: APPLIED</div>
                <div className={styles.journeyDesc}>Lamaran dikirim</div>
              </div>
            </div>

            <div className={styles.journeyCard}>
              <div className={styles.checkCircleDone}>
                <Check size={12} strokeWidth={3} />
              </div>
              <div>
                <div className={styles.journeyTagTitle}>15 AUG: SCREENING</div>
                <div className={styles.journeyDesc}>CV berhasil masuk tahap screening</div>
              </div>
            </div>

            <div className={styles.journeyCardCurrent}>
              <div className={styles.circleCurrent}>
                <div className={styles.circleDotInner} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div className={styles.journeyTagTitle}>22 AUG: INTERVIEW</div>
                  <span className={styles.currentPillBadge}>Current</span>
                </div>
                <div className={styles.journeyDesc}>Interview pertama</div>
                <div className={styles.journeySubDesc}>
                  Sedang dalam proses interview. Prepare your behavioral answers.
                </div>
              </div>
            </div>

            <div className={styles.journeyCard}>
              <div className={styles.circlePending} />
              <div>
                <div className={styles.journeyTagTitle} style={{ color: "#94a3b8" }}>
                  25 AUG: ASSESSMENT
                </div>
                <div className={styles.journeyDesc} style={{ color: "#94a3b8" }}>
                  Technical assessment
                </div>
              </div>
            </div>
          </div>

          {/* Collapsible Job Description */}
          <div className={styles.jobDescCard}>
            <div className={styles.accordionHeader}>
              <h3 className={styles.sectionBlockTitle} style={{ margin: 0 }}>
                Job Description
              </h3>
              <ChevronUp size={18} color="#94a3b8" />
            </div>
            <p className={styles.descParagraph}>
              We are seeking a highly analytical and detail-oriented System Analyst to join our dynamic IT team at PT Len Industri. The ideal candidate will be responsible for evaluating our current IT systems, identifying areas for improvement, and implementing new solutions to enhance operational efficiency.
            </p>
            <a href="#full" className={styles.readFullLink}>
              Read full description
            </a>
          </div>

          {/* Notes Section */}
          <div className={styles.notesCard}>
            <div className={styles.notesHeaderRow}>
              <h3 className={styles.notesTitle}>
                <Edit2 size={15} color="#2563eb" />
                <span>Catatanmu</span>
              </h3>
              <Link
                href={`/user/applications/${applicationId}/edit`}
                className={styles.editNotesBtn}
                style={{ textDecoration: "none" }}
              >
                Edit Notes
              </Link>
            </div>
            <p className={styles.notesContentText}>
              Interviewer seemed very interested in my past experience with legacy system migration. Need to brush up on specific SQL optimization techniques for the technical assessment next week. Also, remember to ask about team structure during the final round.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside>
          <div className={styles.intelligenceCard}>
            <div className={styles.intelligenceTag}>
              <Sparkles size={13} />
              <span>APPLYWISE INTELLIGENCE</span>
            </div>

            <div className={styles.bigScoreRow}>
              <span className={styles.bigScoreNumber}>91%</span>
              <span className={styles.strongMatchText}>Strong Match</span>
            </div>

            <div className={styles.progressItemsList}>
              <div>
                <div className={styles.progressLabelRow}>
                  <span>Skill Match</span>
                  <strong>88%</strong>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: "88%" }} />
                </div>
              </div>

              <div>
                <div className={styles.progressLabelRow}>
                  <span>Experience Match</span>
                  <strong>82%</strong>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: "82%" }} />
                </div>
              </div>

              <div>
                <div className={styles.progressLabelRow}>
                  <span>Requirement Match</span>
                  <strong>91%</strong>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: "91%" }} />
                </div>
              </div>

              <div>
                <div className={styles.progressLabelRow}>
                  <span>Career Alignment</span>
                  <strong>79%</strong>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: "79%" }} />
                </div>
              </div>
            </div>

            <Link href="/user/job-analyzer" className={styles.seeJobAnalysisLink}>
              <span>Lihat Job Analysis</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Next Steps & Contacts */}
          <div className={styles.nextStepsCard}>
            <div className={styles.nextStepsTag}>
              <Calendar size={15} color="#2563eb" />
              <span>Next Steps</span>
            </div>

            <div className={styles.followUpAlertBox}>
              <Bell size={16} color="#e11d48" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div className={styles.alertTitle}>NEXT FOLLOW-UP: 03 Sep 2026</div>
                <div className={styles.alertSub}>Prepare for technical assessment</div>
              </div>
            </div>

            <div className={styles.contactHeader}>CONTACT</div>
            <div className={styles.recruiterRow}>
              <div className={styles.recruiterAvatar} />
              <div>
                <div className={styles.recruiterName}>Sarah Adisti</div>
                <div className={styles.recruiterRole}>HR Talent Acquisition</div>
              </div>
            </div>

            <div className={styles.contactBtnsRow}>
              <a href="mailto:sarah@len.co.id" className={styles.contactPillBtn}>
                <Mail size={13} />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={styles.contactPillBtn}
              >
                <Globe size={13} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}