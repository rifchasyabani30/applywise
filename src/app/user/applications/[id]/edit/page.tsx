"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Info,
  Clock,
  ExternalLink,
  Sparkles,
  Plus,
  RotateCcw,
  Trash2,
  MapPin,
  Briefcase,
  Edit2,
  X,
} from "lucide-react";
import PriorityLoading from "@/components/system/PriorityLoading";
import styles from "./app-update.module.css";

// Pilihan tahapan seleksi sesuai PRD ApplyWise
const JOURNEY_STATUS_OPTIONS = [
  "Saved",
  "Applied",
  "HR Screening",
  "Psychology Test",
  "Technical Test",
  "Technical Interview",
  "User Interview",
  "Assessment",
  "Offer",
  "Rejected",
];

interface JourneyStepItem {
  id: string;
  date: string;
  stage: string;
  notes: string;
}

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default function UpdateApplicationPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const applicationId = resolvedParams.id;

  const [isReanalyzing, setIsReanalyzing] = useState(false);

  // Form Data Utama
  const [formData, setFormData] = useState({
    company: "PT LEN INDUSTRI",
    position: "System Analyst",
    jobType: "Full Time",
    location: "Jakarta, Indonesia (Hybrid)",
    salaryExpectation: "IDR 15,000,000 - 20,000,000",
    source: "LinkedIn",
    jobLink: "https://linkedin.com/jobs/view/pt-len-industri-system-analyst-12345",
    status: "Interview",
    jobDescription:
      "- Menganalisis kebutuhan sistem dan mengusulkan solusi arsitektur TI yang relevan.\n- Bekerja sama dengan tim developer untuk memastikan implementasi sesuai dengan spesifikasi.\n- Melakukan troubleshooting dan optimasi sistem yang berjalan.\n- Menyusun dokumentasi teknis yang jelas dan komprehensif.",
    personalNotes: "",
    contactName: "Budi Santoso",
    contactRole: "Technical Recruiter",
    contactEmail: "budi.s@len.co.id",
    contactPhone: "+62 812-3456-7890",
    contactLinkedin: "linkedin.com/in/budi-santoso",
  });

  // State Daftar Perjalanan Lamaran (Journey)
  const [journeySteps, setJourneySteps] = useState<JourneyStepItem[]>([
    {
      id: "j-1",
      date: "22 AUG 2026",
      stage: "Technical Interview",
      notes: "Scheduled with Lead Engineer via Google Meet",
    },
    {
      id: "j-2",
      date: "15 AUG 2026",
      stage: "HR Screening",
      notes: "Completed phone screening with Recruiter.",
    },
    {
      id: "j-3",
      date: "12 AUG 2026",
      stage: "Applied",
      notes: "Applied via LinkedIn Easy Apply.",
    },
  ]);

  // Modal Pop-up Journey State
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [editingJourneyIndex, setEditingJourneyIndex] = useState<number | null>(null);
  const [journeyForm, setJourneyForm] = useState({
    date: "",
    stage: "Technical Interview",
    notes: "",
  });

  const statusOptions = ["Applied", "Screening", "Interview", "Assessment", "Offer", "Rejected"];

  // Handle Analisis Ulang (Loading Screen)
  const handleReanalyze = () => {
    setIsReanalyzing(true);
    setTimeout(() => {
      setIsReanalyzing(false);
      router.push(`/user/applications/${applicationId}`);
    }, 3000);
  };

  const handleSave = () => {
    router.push(`/user/applications/${applicationId}`);
  };

  // ==========================================
  // JOURNEY MODAL HANDLERS
  // ==========================================
  const handleOpenJourneyModal = (index?: number) => {
    if (typeof index === "number") {
      setEditingJourneyIndex(index);
      setJourneyForm({
        date: journeySteps[index].date,
        stage: journeySteps[index].stage,
        notes: journeySteps[index].notes,
      });
    } else {
      setEditingJourneyIndex(null);
      // Format tanggal hari ini (e.g., 31 AUG 2026)
      const now = new Date();
      const dateFormatted = `${now.getDate()} ${now.toLocaleString("en-US", { month: "short" }).toUpperCase()} ${now.getFullYear()}`;
      setJourneyForm({
        date: dateFormatted,
        stage: "User Interview",
        notes: "",
      });
    }
    setIsJourneyModalOpen(true);
  };

  const handleSaveJourney = () => {
    if (editingJourneyIndex !== null) {
      const updated = [...journeySteps];
      updated[editingJourneyIndex] = {
        ...updated[editingJourneyIndex],
        date: journeyForm.date,
        stage: journeyForm.stage,
        notes: journeyForm.notes,
      };
      setJourneySteps(updated);
    } else {
      const newItem: JourneyStepItem = {
        id: `j-${Date.now()}`,
        date: journeyForm.date,
        stage: journeyForm.stage,
        notes: journeyForm.notes,
      };
      setJourneySteps([newItem, ...journeySteps]);
    }
    setIsJourneyModalOpen(false);
  };

  const handleDeleteJourney = (index: number) => {
    setJourneySteps(journeySteps.filter((_, i) => i !== index));
  };

  // Tampilkan Priority Loading saat re-analyzing
  if (isReanalyzing) {
    return <PriorityLoading />;
  }

  return (
    <div className={styles.container}>
      {/* Tombol Back */}
      <Link href={`/user/applications/${applicationId}`} className={styles.backLink}>
        <ArrowLeft size={14} />
        <span>Back to Application Detail</span>
      </Link>

      {/* Header Top */}
      <div className={styles.topUpdateHeader}>
        <div>
          <div className={styles.updateBadge}>UPDATE APPLICATION</div>
          <h1 className={styles.pageTitle}>
            Perbarui <br />
            perjalanan <br />
            <span className={styles.blueHighlight}>lamaranmu.</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Selaraskan progres, evaluasi kecocokan, dan catat setiap interaksi untuk posisi ini[cite: 5].
          </p>
        </div>

        {/* Top Right Mini Summary Card */}
        <div className={styles.topSummaryCard}>
          <h3 className={styles.miniRoleTitle}>{formData.position || "Position Name"}</h3>
          <div className={styles.miniCompany}>{formData.company || "Company Name"}</div>

          <div className={styles.miniLocTypeRow}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <MapPin size={12} color="#2563eb" /> Jakarta
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <Briefcase size={12} color="#2563eb" /> Full Time
            </span>
          </div>

          <div className={styles.miniBadgeGroup}>
            <span className={styles.statusPillSmall}>{formData.status.toUpperCase()}</span>
            <div style={{ textAlign: "right" }}>
              <span className={styles.miniMatchScore}>91%</span>
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
                <label className={styles.fieldLabel}>Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Position</label>
                <input
                  type="text"
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
                  value={formData.jobType}
                  onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Location</label>
                <input
                  type="text"
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
                  value={formData.salaryExpectation}
                  onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.fieldLabel}>Source</label>
                <input
                  type="text"
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
                  value={formData.jobLink}
                  onChange={(e) => setFormData({ ...formData, jobLink: e.target.value })}
                  className={styles.textInput}
                />
                <a href={formData.jobLink} target="_blank" rel="noreferrer" className={styles.openLinkBtn}>
                  <span>Buka</span>
                  <ExternalLink size={13} />
                </a>
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
              rows={6}
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
              rows={4}
              placeholder="Tulis catatanmu di sini..."
              value={formData.personalNotes}
              onChange={(e) => setFormData({ ...formData, personalNotes: e.target.value })}
              className={styles.textareaField}
            />
          </div>
        </div>

        {/* Right Column: Match Analysis, Journey & Contact */}
        <aside className={styles.rightSidebar}>
          {/* Match Analysis */}
          <div>
            <h3 className={styles.blockTitle}>
              <Sparkles size={16} color="#2563eb" />
              <span>Match Analysis</span>
            </h3>

            <div className={styles.matchProgressList}>
              <div>
                <div className={styles.matchLabelRow}>
                  <span>Skills Alignment</span>
                  <strong>95%</strong>
                </div>
                <div className={styles.matchBarBg}>
                  <div className={styles.matchBarFill} style={{ width: "95%" }} />
                </div>
              </div>

              <div>
                <div className={styles.matchLabelRow}>
                  <span>Experience Level</span>
                  <strong>88%</strong>
                </div>
                <div className={styles.matchBarBg}>
                  <div className={styles.matchBarFill} style={{ width: "88%" }} />
                </div>
              </div>

              <div>
                <div className={styles.matchLabelRow}>
                  <span>Requirements</span>
                  <strong>92%</strong>
                </div>
                <div className={styles.matchBarBg}>
                  <div className={styles.matchBarFill} style={{ width: "92%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Journey (Pop-up Trigger on Click "+ Tambah") */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 className={styles.blockTitle} style={{ margin: 0 }}>
                <span>Journey</span>
              </h3>
              <button
                type="button"
                onClick={() => handleOpenJourneyModal()}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2563eb",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                <Plus size={13} /> Tambah
              </button>
            </div>

            <div className={styles.journeyStepper}>
              {journeySteps.map((step, idx) => (
                <div key={step.id} className={styles.stepNode}>
                  <div className={styles.stepHeaderRow}>
                    <div className={styles.stepDate}>{step.date}</div>
                    <div className={styles.stepActionBtnGroup}>
                      <button
                        type="button"
                        onClick={() => handleOpenJourneyModal(idx)}
                        className={styles.stepIconBtn}
                        aria-label="Edit Journey Step"
                      >
                        <Edit2 size={12} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteJourney(idx)}
                        className={styles.stepDeleteBtn}
                        aria-label="Delete Journey Step"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.stepTitle}>{step.stage}</div>
                  <div className={styles.stepSub}>{step.notes}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Contact */}
          <div>
            <h3 className={styles.blockTitle}>
              <span>Key Contact</span>
            </h3>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Name</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Role</label>
              <input
                type="text"
                value={formData.contactRole}
                onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                type="text"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField} style={{ marginBottom: "0.75rem" }}>
              <label className={styles.fieldLabel}>Phone / WA</label>
              <input
                type="text"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>LinkedIn</label>
              <input
                type="text"
                value={formData.contactLinkedin}
                onChange={(e) => setFormData({ ...formData, contactLinkedin: e.target.value })}
                className={styles.textInput}
              />
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Actions */}
      <div className={styles.bottomActionContainer}>
        <div className={styles.mainActionBtnsRow}>
          <Link href={`/user/applications/${applicationId}`} className={styles.cancelBtn}>
            Batal
          </Link>
          <button type="button" onClick={handleSave} className={styles.saveChangesBtn}>
            Simpan Perubahan
          </button>
        </div>

        <div className={styles.subLinksRow}>
          <button
            type="button"
            onClick={handleReanalyze}
            className={styles.reanalyzeLink}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            <RotateCcw size={13} />
            <span>Analisis Ulang</span>
          </button>
          <button type="button" className={styles.deleteAppBtn}>
            <Trash2 size={13} />
            <span>Hapus Lamaran</span>
          </button>
        </div>
      </div>

      {/* =======================================================
          MODAL POP-UP TAMBAH / EDIT JOURNEY
      ======================================================= */}
      {isJourneyModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {editingJourneyIndex !== null ? "Edit Tahapan Seleksi" : "Tambah Tahapan Seleksi"}
              </h3>
              <button
                type="button"
                onClick={() => setIsJourneyModalOpen(false)}
                className={styles.stepIconBtn}
              >
                <X size={18} />
              </button>
            </div>

            {/* Input Tanggal */}
            <div className={styles.formField}>
              <label className={styles.modalInputLabel}>Tanggal Tahapan</label>
              <input
                type="text"
                placeholder="Contoh: 25 AUG 2026"
                value={journeyForm.date}
                onChange={(e) => setJourneyForm({ ...journeyForm, date: e.target.value })}
                className={styles.textInput}
              />
            </div>

            {/* Dropdown Status Tahapan Seleksi */}
            <div className={styles.formField}>
              <label className={styles.modalInputLabel}>Status / Tahapan Seleksi</label>
              <select
                value={journeyForm.stage}
                onChange={(e) => setJourneyForm({ ...journeyForm, stage: e.target.value })}
                className={styles.modalSelect}
              >
                {JOURNEY_STATUS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Catatan / Deskripsi Interaksi */}
            <div className={styles.formField}>
              <label className={styles.modalInputLabel}>Catatan & Interaksi</label>
              <textarea
                rows={3}
                placeholder="Contoh: Wawancara dengan HR via Google Meet..."
                value={journeyForm.notes}
                onChange={(e) => setJourneyForm({ ...journeyForm, notes: e.target.value })}
                className={styles.textareaField}
              />
            </div>

            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setIsJourneyModalOpen(false)}
                className={styles.modalCancelBtn}
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSaveJourney}
                className={styles.modalSaveBtn}
              >
                Simpan Tahapan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}