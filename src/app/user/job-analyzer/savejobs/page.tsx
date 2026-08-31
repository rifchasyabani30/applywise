"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import styles from "./savejobs.module.css";

export default function SaveJobsPage() {
  const [formData, setFormData] = useState({
    company: "PT LEN INDUSTRI",
    position: "System Analyst",
    jobType: "Full Time",
    location: "Jakarta",
    salary: "Rp8.000.000 - Rp12.000.000",
    applicationDate: "2024-05-20",
    status: "Applied",
    nextFollowUp: "",
    contactName: "",
    contactRole: "",
    phoneNumber: "",
    linkedIn: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Back Button Link */}
        <Link href="/user/job-analyzer/decision" className={styles.backLink}>
          <ArrowLeft size={16} />
          Kembali ke Job Analysis
        </Link>

        {/* Page Title & Subtitle */}
        <h1 className={styles.title}>
          Jangan biarkan<br />
          peluang ini hilang<br />
          begitu saja.
        </h1>
        <p className={styles.subtitle}>
          Simpan lowongan ini ke Application Tracker dan pantau prosesnya sampai selesai.
        </p>

        {/* Two Column Layout */}
        <div className={styles.contentGrid}>
          {/* Left Column: Form Sections */}
          <div className={styles.formSection}>
            {/* Section 01: Opportunity */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <div className={styles.sectionHeader}>
                  <div className={styles.radioCircleActive} />
                  <h2 className={styles.sectionHeadingText}>
                    Section 01: Opportunity
                  </h2>
                </div>
                <div className={styles.importedBadge}>
                  <Check size={14} strokeWidth={3} />
                  Imported from Job Analyzer
                </div>
              </div>

              <div className={styles.inputGridTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGridTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Job Type</label>
                  <input
                    type="text"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Salary (Optional)</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Section 02: Application Journey */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionHeader}>
                <div className={styles.radioCircleInactive} />
                <h2 className={styles.sectionHeadingText}>
                  Section 02: Application Journey
                </h2>
              </div>

              <div className={styles.inputGridTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Application Date</label>
                  <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 03: Follow-up & Contact */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionHeader}>
                <div className={styles.radioCircleInactive} />
                <h2 className={styles.sectionHeadingText}>
                  Section 03: Follow-up &amp; Contact
                </h2>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Next Follow-up Date (Optional)</label>
                <input
                  type="date"
                  name="nextFollowUp"
                  value={formData.nextFollowUp}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGridTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Contact Role</label>
                  <input
                    type="text"
                    name="contactRole"
                    value={formData.contactRole}
                    onChange={handleChange}
                    placeholder="e.g. HR Manager"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGridTwo}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +62..."
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>LinkedIn Profile</label>
                  <input
                    type="text"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/..."
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            {/* Section 05: Notes */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionHeader}>
                <div className={styles.radioCircleInactive} />
                <h2 className={styles.sectionHeadingText}>
                  Section 05: Notes
                </h2>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Private Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Jot down important details about the application process, interview prep, or company culture..."
                  className={styles.textarea}
                />
              </div>
            </div>

            {/* Submit & Cancel Actions */}
            <div className={styles.actionRow}>
              <button type="button" className={styles.saveBtn}>
                Simpan Lamaran
                <ArrowRight size={16} />
              </button>
              <button type="button" className={styles.cancelBtn}>
                Batal
              </button>
            </div>
          </div>

          {/* Right Column: Analysis Context Sidebar Card */}
          <div className={styles.rightSidebar}>
            <div className={styles.contextCard}>
              <div className={styles.cardTopHeader}>
                <span className={styles.matchTag}>MATCH CONNECTION</span>
                <Sparkles size={18} className={styles.sparkleIcon} />
              </div>
              <h3 className={styles.cardMainTitle}>Analysis Context</h3>

              <div className={styles.scoreRow}>
                <div className={styles.scoreCircle}>
                  <div className={styles.scoreInner}>91%</div>
                </div>
                <div>
                  <p className={styles.scoreText}>
                    <strong>Strong alignment</strong> with your profile based on Job Analyzer review.
                  </p>
                  <p className={styles.smallLabel}>
                    <CheckCircle2 size={12} className="text-blue-600" />
                    Analyzed with ApplyWise AI
                  </p>
                </div>
              </div>

              <p className={styles.highlightsLabel}>Key Match Highlights</p>
              <div className={styles.highlightList}>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIconBlue} />
                  <span>
                    Skills perfectly match core requirements (System Analysis, UML, Agile).
                  </span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIconBlue} />
                  <span>
                    Experience level aligns with expected seniority.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerBrand}>ApplyWise</div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
            <Link href="#" className={styles.footerLink}>Support</Link>
            <Link href="#" className={styles.footerLink}>Contact</Link>
          </div>
          <div>© 2024 ApplyWise AI. Human-centric career intelligence.</div>
        </footer>
      </div>
    </div>
  );
}