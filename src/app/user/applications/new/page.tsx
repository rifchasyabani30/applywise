"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Info,
  Clock,
  ExternalLink,
  Sparkles,
  Plus,
  Briefcase,
  Hourglass,
  User,
} from "lucide-react";
import styles from "../[id]/edit/app-update.module.css";

export default function NewApplicationPage() {
  const router = useRouter();

  // State Form Kosong untuk Input Lamaran Baru
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    jobType: "Full Time",
    location: "",
    salaryExpectation: "",
    source: "",
    jobLink: "",
    status: "Applied",
    jobDescription: "",
    personalNotes: "",
    contactName: "",
    contactRole: "",
    contactEmail: "",
    contactPhone: "",
    contactLinkedin: "",
  });

  const statusOptions = ["Applied", "Screening", "Interview", "Assessment", "Offer", "Rejected"];

  const handleSave = () => {
    router.push("/user/applications");
  };

  return (
    <div className={styles.container}>
      {/* Tombol Back */}
      <Link href="/user/applications" className={styles.backLink}>
        <ArrowLeft size={14} />
        <span>Back to Applications</span>
      </Link>

      {/* Header Top */}
      <div className={styles.topUpdateHeader}>
        <div>
          <div className={styles.updateBadge}>NEW APPLICATION</div>
          <h1 className={styles.pageTitle}>
            Tambah <br />
            lamaran <br />
            <span className={styles.blueHighlight}>pekerjaan baru.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Catat peluang karier baru dan pantau setiap langkah proses lamaranmu secara terstruktur[cite: 5].
          </p>
        </div>

        {/* Top Right Preview Card Kosong */}
        <div className={styles.topSummaryCard}>
          <h3 className={styles.miniRoleTitle}>
            {formData.position || "Nama Posisi / Role"}
          </h3>
          <div className={styles.miniCompany}>
            {formData.company || "Nama Perusahaan"}
          </div>

          <div className={styles.miniLocTypeRow}>
            <span>{formData.location || "Lokasi (Belum diisi)"}</span>
            <span>• {formData.jobType}</span>
          </div>

          <div className={styles.miniBadgeGroup}>
            <span className={styles.statusPillSmall}>{formData.status.toUpperCase()}</span>
            <div style={{ textAlign: "right" }}>
              <span className={styles.miniMatchScore} style={{ color: "#94a3b8" }}>—</span>
              <span style={{ fontSize: "0.55rem", color: "#94a3b8", display: "block" }}>MATCH SCORE</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2-Column Form Layout */}
      <div className={styles.editFormLayout}>
        {/* Left Column Form */}
        <div>
          {/* Opportunity Details */}
          <div className={styles.formBlock}>
            <h3 className={styles.blockTitle}>
              <Info size={16} color="#2563eb" />
              <span>Opportunity Details</span>
            </h3>

            <div className={styles.formGrid2}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Company *</label>
                <input
                  type="text"
                  placeholder="Contoh: PT LEN Industri"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Position *</label>
                <input
                  type="text"
                  placeholder="Contoh: System Analyst"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className={styles.textInput}
                />
              </div>
            </div>

            <div className={styles.formGrid2}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Job Type</label>
                <input
                  type="text"
                  placeholder="Full Time / Contract / Internship"
                  value={formData.jobType}
                  onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Location</label>
                <input
                  type="text"
                  placeholder="Contoh: Jakarta (Hybrid)"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={styles.textInput}
                />
              </div>
            </div>

            <div className={styles.formGrid2}>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Salary Expectation</label>
                <input
                  type="text"
                  placeholder="Contoh: Rp 15.000.000"
                  value={formData.salaryExpectation}
                  onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Source</label>
                <input
                  type="text"
                  placeholder="LinkedIn / JobStreet / Referral"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className={styles.textInput}
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Job Link</label>
              <div className={styles.linkWithBtnRow}>
                <input
                  type="text"
                  placeholder="https://..."
                  value={formData.jobLink}
                  onChange={(e) => setFormData({ ...formData, jobLink: e.target.value })}
                  className={styles.textInput}
                />
                {formData.jobLink && (
                  <a href={formData.jobLink} target="_blank" rel="noreferrer" className={styles.openLinkBtn}>
                    <span>Buka</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Application Status */}
          <div className={styles.formBlock}>
            <h3 className={styles.blockTitle}>
              <Clock size={16} color="#2563eb" />
              <span>Application Status</span>
            </h3>

            <div className={styles.statusPillsRow}>
              {statusOptions.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setFormData({ ...formData, status: st })}
                  className={
                    formData.status.toLowerCase() === st.toLowerCase()
                      ? styles.statusChoiceActive
                      : styles.statusChoiceBtn
                  }
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className={styles.formBlock}>
            <h3 className={styles.blockTitle}>
              <Briefcase size={16} color="#2563eb" />
              <span>Job Description</span>
            </h3>
            <textarea
              rows={5}
              placeholder="Tempelkan ringkasan deskripsi pekerjaan atau requirement..."
              value={formData.jobDescription}
              onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
              className={styles.textareaField}
            />
          </div>

          {/* Catatan Pribadi */}
          <div className={styles.formBlock}>
            <h3 className={styles.blockTitle}>
              <span>Catatan Pribadi</span>
            </h3>
            <textarea
              rows={3}
              placeholder="Tulis catatan, strategi interview, atau kontak tim..."
              value={formData.personalNotes}
              onChange={(e) => setFormData({ ...formData, personalNotes: e.target.value })}
              className={styles.textareaField}
            />
          </div>
        </div>

        {/* Right Sidebar: Placeholder Menunggu Data */}
        <aside className={styles.rightSidebar}>
          {/* Match Analysis Empty State */}
          <div style={{ background: "#ffffff", border: "1px dashed #cbd5e1", borderRadius: "18px", padding: "1.75rem", textAlign: "center" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
              <Sparkles size={20} />
            </div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0b1536", margin: "0 0 0.35rem" }}>
              Match Analysis
            </h4>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              Kecocokan profil dan requirement pekerjaan akan otomatis dihitung setelah data disimpan atau dianalisis melalui Job Analyzer[cite: 5].
            </p>
          </div>

          {/* Journey Empty State */}
          <div style={{ background: "#ffffff", border: "1px dashed #cbd5e1", borderRadius: "18px", padding: "1.75rem", textAlign: "center" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#f8fafc", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
              <Hourglass size={20} />
            </div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0b1536", margin: "0 0 0.35rem" }}>
              Application Journey
            </h4>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              Riwayat tahapan seleksi akan otomatis tercatat saat status lamaran diperbarui[cite: 5].
            </p>
          </div>

          {/* Key Contact Form */}
          <div>
            <h3 className={styles.blockTitle}>
              <User size={16} color="#2563eb" />
              <span>Key Contact (Opsional)</span>
            </h3>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Recruiter / Contact Name</label>
              <input
                type="text"
                placeholder="Contoh: Budi Santoso"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Role / Jabatan</label>
              <input
                type="text"
                placeholder="Contoh: HR Talent Acquisition"
                value={formData.contactRole}
                onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Email Contact</label>
              <input
                type="email"
                placeholder="recruiter@company.com"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className={styles.textInput}
              />
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Actions */}
      <div className={styles.bottomActionContainer}>
        <div className={styles.mainActionBtnsRow}>
          <Link href="/user/applications" className={styles.cancelBtn}>
            Batal
          </Link>
          <button type="button" onClick={handleSave} className={styles.saveChangesBtn}>
            Simpan Lamaran
          </button>
        </div>
      </div>
    </div>
  );
}