"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import styles from "./analytics.module.css";

// Interface Data Analitik sesuai PRD M-07 Job Search Analytics
interface AnalyticsData {
  totalApplications: number;
  activeApplications: number;
  uniqueRolesCount: number;
  targetCompaniesCount: number;
  interviewsSecured: number;
  offersReceived: number;
  interviewRate: number; // percentage
  funnel: {
    applications: number;
    screening: number;
    screeningRate: string;
    interview: number;
    interviewRate: string;
    assessment: number;
    assessmentRate: string;
    offer: number;
    offerRate: string;
  };
  roleConversion: Array<{
    role: string;
    percentage: number;
  }>;
  highestMomentumRole: {
    role: string;
    interviewRate: string;
    advice: string;
  };
  reviewStrategyRole: {
    role: string;
    interviewRate: string;
    advice: string;
  };
  aiInsight: {
    strongRole: string;
    message: string;
  };
  companySignals: Array<{
    name: string;
    initial: string;
    engagement: string;
    responseRate: number;
  }>;
}

export default function AnalyticsPage() {
  // Filter state
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedCompany, setSelectedCompany] = useState("All Companies");
  const [selectedPeriod, setSelectedPeriod] = useState("Last 90 Days");

  // Contoh Data Analitik Populated (Bisa diisi 0/kosong untuk menguji Empty State)
  const analyticsData: AnalyticsData = {
    totalApplications: 42,
    activeApplications: 42,
    uniqueRolesCount: 6,
    targetCompaniesCount: 12,
    interviewsSecured: 8,
    offersReceived: 2,
    interviewRate: 19,
    funnel: {
      applications: 42,
      screening: 19,
      screeningRate: "45% moved forward",
      interview: 8,
      interviewRate: "42% moved forward",
      assessment: 5,
      assessmentRate: "62% moved forward",
      offer: 2,
      offerRate: "40% moved forward",
    },
    roleConversion: [
      { role: "System Analyst", percentage: 29 },
      { role: "Business Analyst", percentage: 20 },
      { role: "Technical Writer", percentage: 13 },
    ],
    highestMomentumRole: {
      role: "SYSTEM ANALYST",
      interviewRate: "29%",
      advice: "Leading with a 29% Interview Rate. Focus your energy here.",
    },
    reviewStrategyRole: {
      role: "TECHNICAL WRITER",
      interviewRate: "13%",
      advice:
        "Currently at 13%. Consider refining your portfolio before next applications.",
    },
    aiInsight: {
      strongRole: "System Analyst",
      message:
        "Most of your active applications are currently in Screening; follow up on aging applications next week.",
    },
    companySignals: [
      {
        name: "PT LEN INDUSTRI",
        initial: "L",
        engagement: "High Engagement",
        responseRate: 67,
      },
      {
        name: "PT ABC",
        initial: "A",
        engagement: "Moderate engagement",
        responseRate: 40,
      },
    ],
  };

  // LOGIC PENENTUAN KONDISI (EMPTY STATE VS POPULATED)
  const isPopulated = useMemo(() => {
    return analyticsData && analyticsData.totalApplications > 0;
  }, [analyticsData]);

  return (
    <div className={styles.container}>
      {/* =======================================================
          KONDISI 1: EMPTY STATE (BELUM ADA DATA LAMARAN)
      ======================================================= */}
      {!isPopulated && (
        <div className={styles.emptyHeroLayout}>
          <div>
            <div className={styles.categoryTag}>JOB SEARCH ANALYTICS</div>
            <h1 className={styles.emptyTitle}>
              Your job search <br />
              story starts here.
            </h1>
            <p className={styles.emptyDesc}>
              Data translates effort into strategy. Currently, there are no
              applications tracked. As you begin adding roles, analyzing fit,
              and recording progress, this space will transform into a
              comprehensive intelligence hub guiding your career moves[cite: 5].
            </p>

            <div className={styles.emptyCountRow}>
              <span className={styles.zeroLarge}>0</span>
              <span className={styles.zeroLabel}>Applications Tracked</span>
            </div>
          </div>

          <div className={styles.emptyIllustrationCard}>
            <div className={styles.emptyDotSmall} />
            <div className={styles.emptyDotFaint1} />
            <div className={styles.emptyDotFaint2} />
          </div>
        </div>
      )}

      {/* =======================================================
          KONDISI 2: POPULATED STATE (SUDAH MEMILIKI DATA)
      ======================================================= */}
      {isPopulated && (
        <div>
          {/* Top Hero Section */}
          <div className={styles.populatedHeroGrid}>
            <div>
              <div className={styles.categoryTag}>CAREER INTELLIGENCE</div>
              <h1 className={styles.heroTitlePopulated}>
                Your job search, <br />
                <span className={styles.blueHighlight}>decoded.</span>
              </h1>
              <p className={styles.heroDescPopulated}>
                See how your applications are performing, which roles convert best,
                and where your opportunities are moving[cite: 5].
              </p>

              <div className={styles.heroStatsRow}>
                <div className={styles.heroStatItem}>
                  <span className={styles.statLargeNum}>
                    {analyticsData.activeApplications}
                  </span>
                  <span className={styles.statMiniLabel}>
                    Applications <br />
                    Active
                  </span>
                </div>
                <div className={styles.heroStatItem}>
                  <span className={styles.statLargeNum}>
                    {analyticsData.uniqueRolesCount}
                  </span>
                  <span className={styles.statMiniLabel}>
                    Unique <br />
                    Roles
                  </span>
                </div>
                <div className={styles.heroStatItem}>
                  <span className={styles.statLargeNum}>
                    {analyticsData.targetCompaniesCount}
                  </span>
                  <span className={styles.statMiniLabel}>
                    Target <br />
                    Companies
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image Workspace Banner */}
            <div className={styles.heroImageCard}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                alt="Career Intelligence Dashboard"
                width={600}
                height={300}
                className={styles.heroImg}
                unoptimized
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterPillsBar}>
            <span className={styles.filterShowingLabel}>SHOWING</span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className={styles.filterDropdownSelect}
            >
              <option value="All Roles">All Roles</option>
              <option value="System Analyst">System Analyst</option>
              <option value="Business Analyst">Business Analyst</option>
              <option value="Technical Writer">Technical Writer</option>
            </select>

            <span className={styles.filterShowingLabel}>at</span>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className={styles.filterDropdownSelect}
            >
              <option value="All Companies">All Companies</option>
              <option value="PT LEN Industri">PT LEN Industri</option>
              <option value="PT ABC">PT ABC</option>
            </select>

            <span className={styles.filterShowingLabel}>during</span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className={styles.filterDropdownSelect}
            >
              <option value="Last 90 Days">Last 90 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="All Time">All Time</option>
            </select>
          </div>

          {/* Section 1: Here's what happened */}
          <div>
            <h2 className={styles.sectionTitleBlock}>Here&apos;s what happened.</h2>

            <div className={styles.happenedGrid}>
              <div className={styles.statListCol}>
                <div className={styles.statRowGroup}>
                  <span className={`${styles.statNumBig} ${styles.statNumDark}`}>
                    {analyticsData.totalApplications}
                  </span>
                  <span className={styles.statTitleLabel}>Total Applications</span>
                </div>

                <div className={styles.statRowGroup}>
                  <span className={`${styles.statNumBig} ${styles.statNumDark}`}>
                    {analyticsData.interviewsSecured}
                  </span>
                  <span className={styles.statTitleLabel}>Interviews Secured</span>
                </div>

                <div className={styles.statRowGroup}>
                  <span className={`${styles.statNumBig} ${styles.statNumBlue}`}>
                    {analyticsData.offersReceived}
                  </span>
                  <span className={styles.statTitleLabel}>Offers Received</span>
                </div>
              </div>

              {/* The Hero Metric Card */}
              <div className={styles.heroMetricCard}>
                <div className={styles.heroMetricTag}>THE HERO METRIC</div>
                <div className={styles.heroMetricScore}>
                  {analyticsData.interviewRate}
                  <span className={styles.heroMetricScoreSub}>%</span>
                </div>
                <div className={styles.metricBarHorizontal} />
                <h3 className={styles.heroMetricTitle}>Interview Rate</h3>
                <p className={styles.heroMetricDesc}>
                  You are converting applications to interviews at a rate higher
                  than the platform average of 12%[cite: 5].
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: From application to opportunity (Funnel Flow) */}
          <div>
            <h2 className={styles.sectionTitleBlock}>
              From application to opportunity.
            </h2>

            <div className={styles.funnelCardBox}>
              <div className={styles.funnelTrackWrapper}>
                <div className={styles.funnelLine} />

                {/* Step 1: Applications */}
                <div className={styles.funnelNodeItem}>
                  <div style={{ height: "20px" }} />
                  <div className={styles.funnelCircleSolid}>
                    {analyticsData.funnel.applications}
                  </div>
                  <span className={styles.funnelStepLabel}>Applications</span>
                </div>

                {/* Step 2: Screening */}
                <div className={styles.funnelNodeItem}>
                  <span className={styles.funnelConversionBadge}>
                    {analyticsData.funnel.screeningRate}
                  </span>
                  <div className={styles.funnelCircleSolid}>
                    {analyticsData.funnel.screening}
                  </div>
                  <span className={styles.funnelStepLabel}>Screening</span>
                </div>

                {/* Step 3: Interview */}
                <div className={styles.funnelNodeItem}>
                  <span className={styles.funnelConversionBadge}>
                    {analyticsData.funnel.interviewRate}
                  </span>
                  <div className={styles.funnelCircleSolid}>
                    {analyticsData.funnel.interview}
                  </div>
                  <span className={styles.funnelStepLabel}>Interview</span>
                </div>

                {/* Step 4: Assessment */}
                <div className={styles.funnelNodeItem}>
                  <span className={styles.funnelConversionBadge}>
                    {analyticsData.funnel.assessmentRate}
                  </span>
                  <div className={styles.funnelCircleSolid}>
                    {analyticsData.funnel.assessment}
                  </div>
                  <span className={styles.funnelStepLabel}>Assessment</span>
                </div>

                {/* Step 5: Offer */}
                <div className={styles.funnelNodeItem}>
                  <span className={styles.funnelConversionBadge}>
                    {analyticsData.funnel.offerRate}
                  </span>
                  <div className={styles.funnelCircleHollow}>
                    {analyticsData.funnel.offer}
                  </div>
                  <span className={styles.funnelStepLabel}>Offer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Which roles respond to you? */}
          <div className={styles.roleResponseGrid}>
            <div>
              <h2 className={styles.sectionTitleBlock} style={{ marginBottom: "0.25rem" }}>
                Which roles respond to you?
              </h2>
              <p className={styles.subSectionSub}>
                Conversion rates mapped across your primary target roles[cite: 5].
              </p>

              <div className={styles.roleProgressList}>
                {analyticsData.roleConversion.map((rc, idx) => (
                  <div key={idx} className={styles.roleProgressItem}>
                    <div className={styles.roleLabelRow}>
                      <span>{rc.role}</span>
                      <span>{rc.percentage}%</span>
                    </div>
                    <div className={styles.roleBarBg}>
                      <div
                        className={styles.roleBarFill}
                        style={{ width: `${rc.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Momentum & Review Strategy Stack */}
            <div className={styles.roleInsightStack}>
              <div className={styles.momentumCard}>
                <div className={styles.cardTagUpper}>
                  <TrendingUp size={12} />
                  <span>HIGHEST MOMENTUM</span>
                </div>
                <h3 className={styles.cardTitle}>
                  {analyticsData.highestMomentumRole.role}
                </h3>
                <p className={styles.cardDesc}>
                  {analyticsData.highestMomentumRole.advice}
                </p>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.cardTagUpper} style={{ color: "#64748b" }}>
                  <RotateCcw size={12} />
                  <span>REVIEW STRATEGY</span>
                </div>
                <h3 className={styles.cardTitle}>
                  {analyticsData.reviewStrategyRole.role}
                </h3>
                <p className={styles.cardDesc}>
                  {analyticsData.reviewStrategyRole.advice}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Company Signals & ApplyWise Insight */}
          <div>
            <h2 className={styles.sectionTitleBlock}>Company Signals</h2>

            <div className={styles.companySignalsGrid}>
              {/* ApplyWise Insight Card */}
              <div className={styles.applyWiseInsightCard}>
                <Sparkles size={24} className={styles.sparkleDecorator} />
                <div className={styles.insightCardTag}>APPLYWISE INSIGHT</div>
                <h3 className={styles.insightCardTitle}>
                  Your {analyticsData.aiInsight.strongRole} applications are
                  currently converting better than your other tracked roles[cite: 5].
                </h3>
                <p className={styles.insightCardBody}>
                  {analyticsData.aiInsight.message}
                </p>
              </div>

              {/* Company Response Signals */}
              <div className={styles.companySignalsCard}>
                <div className={styles.companySignalList}>
                  {analyticsData.companySignals.map((cs, idx) => (
                    <div key={idx} className={styles.companySignalItem}>
                      <div className={styles.companyLeftGroup}>
                        <div className={styles.companyAvatarBox}>
                          {cs.initial}
                        </div>
                        <div>
                          <h4 className={styles.companyNameTitle}>{cs.name}</h4>
                          <span className={styles.companyEngagement}>
                            {cs.engagement}
                          </span>
                        </div>
                      </div>

                      <div className={styles.companyRightScore}>
                        <div className={styles.responseScoreNum}>
                          {cs.responseRate}%
                        </div>
                        <span className={styles.responseScoreSub}>RESPONSE</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={styles.keepExploringCta}>
            <h2 className={styles.ctaHeadline}>Keep exploring.</h2>
            <Link href="/user/job-analyzer" className={styles.openJobAnalyzerBtn}>
              <span>Open Job Analyzer</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}