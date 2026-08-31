"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  Edit2,
  Plus,
  Trash2,
  X,
  ArrowRight,
  Award,
  FolderGit2,
} from "lucide-react";
import styles from "./cv-review.module.css";

const DEGREE_OPTIONS = [
  "SD / Sederajat",
  "SMP / MTs",
  "SMA / SMK / MA",
  "Diploma 1 (D1)",
  "Diploma 2 (D2)",
  "Diploma 3 (D3)",
  "Diploma 4 / Sarjana Terapan (D4)",
  "Sarjana (S1)",
  "Magister (S2)",
  "Doktor (S3)",
  "Bachelor of Computer Science",
];

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface ProjectItem {
  title: string;
  role: string;
  description: string;
  technologies: string[]; // Keyword array
}

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

interface ExtractedCVData {
  fileName: string;
  fullName: string;
  primaryRole: string;
  email: string;
  location: string;
  summary: string;
  experiences: ExperienceItem[];
  educations: EducationItem[];
  skills: {
    technical: string[];
    analysis: string[];
    soft: string[];
  };
  projects: ProjectItem[];
  certifications: CertificationItem[];
}

export default function CvReviewPage() {
  const router = useRouter();

  // State Data Ekstraksi CV
  const [cvData, setCvData] = useState<ExtractedCVData>({
    fileName: "CV_Rifcha_2026.pdf",
    fullName: "Rifcha Sya'bani Fatullah",
    primaryRole: "System Analyst",
    email: "rifcha.fatullah@example.com",
    location: "Jakarta, Indonesia",
    summary:
      "Dedicated and detail-oriented System Analyst with experience in designing, implementing, and optimizing complex IT systems. Proven track record of bridging the gap between business needs and technical solutions, driving operational efficiency and scalability. Proficient in agile methodologies and cross-functional team leadership.",
    experiences: [
      {
        role: "Lead UX Designer",
        company: "TechCorp Indonesia",
        period: "Jan 2023 - Present",
        description:
          "Leading the design system initiative and improving user retention by 25% through data-driven UX refinements.",
      },
      {
        role: "UX/UI Designer",
        company: "Creative Agency Plus",
        period: "Mar 2020 - Dec 2022",
        description:
          "Designed end-to-end mobile and web experiences for various retail clients.",
      },
    ],
    educations: [
      {
        degree: "Bachelor of Computer Science",
        institution: "Universitas Indonesia",
        period: "2016 - 2020",
      },
    ],
    skills: {
      technical: ["HTML", "CSS", "JavaScript", "React", "Figma", "SQL"],
      analysis: ["Requirement Gathering", "User Research", "Data Analysis", "BPMN"],
      soft: ["Team Leadership", "Problem Solving", "Communication"],
    },
    projects: [
      {
        title: "Sentry - Disaster Monitoring Platform",
        role: "Lead System Analyst",
        description:
          "Disaster Monitoring Platform requiring complex stakeholder coordination and real-time data analysis mapping.",
        technologies: ["Next.js", "Tailwind CSS", "Leaflet", "PostgreSQL"],
      },
      {
        title: "Racangkara - Culture Platform",
        role: "UX/UI Designer & Analyst",
        description:
          "Cultural preservation platform built with cross-functional design and development teams.",
        technologies: ["Figma", "React", "REST APIs"],
      },
    ],
    certifications: [
      {
        title: "BNSP Certified System Analyst",
        issuer: "Badan Nasional Sertifikasi Profesi",
        year: "2025",
      },
      {
        title: "Professional Scrum Master (PSM I)",
        issuer: "Scrum.org",
        year: "2024",
      },
    ],
  });

  // State Modal Pop-up
  const [activeModal, setActiveModal] = useState<
    "identity" | "summary" | "experience" | "education" | "project" | "certification" | null
  >(null);

  // Form Temp States
  const [identityForm, setIdentityForm] = useState({
    fullName: cvData.fullName,
    primaryRole: cvData.primaryRole,
    email: cvData.email,
    location: cvData.location,
  });

  const [summaryForm, setSummaryForm] = useState(cvData.summary);

  const [editExpIndex, setEditExpIndex] = useState<number | null>(null);
  const [expForm, setExpForm] = useState<ExperienceItem>({
    role: "",
    company: "",
    period: "",
    description: "",
  });

  const [editEduIndex, setEditEduIndex] = useState<number | null>(null);
  const [eduForm, setEduForm] = useState<EducationItem>({
    degree: "Sarjana (S1)",
    institution: "",
    period: "",
  });

  const [editProjIndex, setEditProjIndex] = useState<number | null>(null);
  const [projForm, setProjForm] = useState<ProjectItem>({
    title: "",
    role: "",
    description: "",
    technologies: [],
  });
  const [newTechKeyword, setNewTechKeyword] = useState("");

  const [editCertIndex, setEditCertIndex] = useState<number | null>(null);
  const [certForm, setCertForm] = useState<CertificationItem>({
    title: "",
    issuer: "",
    year: "",
  });

  const [newSkillInput, setNewSkillInput] = useState({
    technical: "",
    analysis: "",
    soft: "",
  });

  // ==========================================
  // MODAL ACTIONS
  // ==========================================

  // 1. Identity
  const handleOpenIdentityModal = () => {
    setIdentityForm({
      fullName: cvData.fullName,
      primaryRole: cvData.primaryRole,
      email: cvData.email,
      location: cvData.location,
    });
    setActiveModal("identity");
  };

  const handleSaveIdentity = () => {
    setCvData({
      ...cvData,
      fullName: identityForm.fullName,
      primaryRole: identityForm.primaryRole,
      email: identityForm.email,
      location: identityForm.location,
    });
    setActiveModal(null);
  };

  // 2. Summary
  const handleOpenSummaryModal = () => {
    setSummaryForm(cvData.summary);
    setActiveModal("summary");
  };

  const handleSaveSummary = () => {
    setCvData({
      ...cvData,
      summary: summaryForm,
    });
    setActiveModal(null);
  };

  // 3. Experience
  const handleOpenExpModal = (index?: number) => {
    if (typeof index === "number") {
      setEditExpIndex(index);
      setExpForm(cvData.experiences[index]);
    } else {
      setEditExpIndex(null);
      setExpForm({ role: "", company: "", period: "", description: "" });
    }
    setActiveModal("experience");
  };

  const handleSaveExp = () => {
    if (editExpIndex !== null) {
      const updated = [...cvData.experiences];
      updated[editExpIndex] = expForm;
      setCvData({ ...cvData, experiences: updated });
    } else {
      setCvData({
        ...cvData,
        experiences: [...cvData.experiences, expForm],
      });
    }
    setActiveModal(null);
  };

  const handleDeleteExp = (index: number) => {
    const updated = cvData.experiences.filter((_, i) => i !== index);
    setCvData({ ...cvData, experiences: updated });
  };

  // 4. Education
  const handleOpenEduModal = (index?: number) => {
    if (typeof index === "number") {
      setEditEduIndex(index);
      setEduForm(cvData.educations[index]);
    } else {
      setEditEduIndex(null);
      setEduForm({ degree: "Sarjana (S1)", institution: "", period: "" });
    }
    setActiveModal("education");
  };

  const handleSaveEdu = () => {
    if (editEduIndex !== null) {
      const updated = [...cvData.educations];
      updated[editEduIndex] = eduForm;
      setCvData({ ...cvData, educations: updated });
    } else {
      setCvData({
        ...cvData,
        educations: [...cvData.educations, eduForm],
      });
    }
    setActiveModal(null);
  };

  const handleDeleteEdu = (index: number) => {
    const updated = cvData.educations.filter((_, i) => i !== index);
    setCvData({ ...cvData, educations: updated });
  };

  // 5. Projects
  const handleOpenProjModal = (index?: number) => {
    if (typeof index === "number") {
      setEditProjIndex(index);
      setProjForm(cvData.projects[index]);
    } else {
      setEditProjIndex(null);
      setProjForm({ title: "", role: "", description: "", technologies: [] });
    }
    setNewTechKeyword("");
    setActiveModal("project");
  };

  const handleAddTechKeyword = () => {
    const val = newTechKeyword.trim();
    if (!val) return;
    setProjForm({
      ...projForm,
      technologies: [...projForm.technologies, val],
    });
    setNewTechKeyword("");
  };

  const handleDeleteTechKeyword = (techIndex: number) => {
    const updated = projForm.technologies.filter((_, i) => i !== techIndex);
    setProjForm({
      ...projForm,
      technologies: updated,
    });
  };

  const handleSaveProj = () => {
    if (editProjIndex !== null) {
      const updated = [...cvData.projects];
      updated[editProjIndex] = projForm;
      setCvData({ ...cvData, projects: updated });
    } else {
      setCvData({
        ...cvData,
        projects: [...cvData.projects, projForm],
      });
    }
    setActiveModal(null);
  };

  const handleDeleteProj = (index: number) => {
    const updated = cvData.projects.filter((_, i) => i !== index);
    setCvData({ ...cvData, projects: updated });
  };

  // 6. Certifications
  const handleOpenCertModal = (index?: number) => {
    if (typeof index === "number") {
      setEditCertIndex(index);
      setCertForm(cvData.certifications[index]);
    } else {
      setEditCertIndex(null);
      setCertForm({ title: "", issuer: "", year: "" });
    }
    setActiveModal("certification");
  };

  const handleSaveCert = () => {
    if (editCertIndex !== null) {
      const updated = [...cvData.certifications];
      updated[editCertIndex] = certForm;
      setCvData({ ...cvData, certifications: updated });
    } else {
      setCvData({
        ...cvData,
        certifications: [...cvData.certifications, certForm],
      });
    }
    setActiveModal(null);
  };

  const handleDeleteCert = (index: number) => {
    const updated = cvData.certifications.filter((_, i) => i !== index);
    setCvData({ ...cvData, certifications: updated });
  };

  // 7. Skills Inline
  const handleAddSkill = (category: "technical" | "analysis" | "soft") => {
    const val = newSkillInput[category].trim();
    if (!val) return;
    setCvData({
      ...cvData,
      skills: {
        ...cvData.skills,
        [category]: [...cvData.skills[category], val],
      },
    });
    setNewSkillInput({ ...newSkillInput, [category]: "" });
  };

  const handleDeleteSkill = (
    category: "technical" | "analysis" | "soft",
    index: number
  ) => {
    const updated = cvData.skills[category].filter((_, i) => i !== index);
    setCvData({
      ...cvData,
      skills: {
        ...cvData.skills,
        [category]: updated,
      },
    });
  };

  const handleSaveToProfile = () => {
    router.push("/user/cv-analyzer/success");
  };

  return (
    <div className={styles.container}>
      {/* Top Header */}
      <div className={styles.reviewTopSection}>
        <div>
          <h1 className={styles.reviewTitle}>
            Ini yang kami <br />
            temukan dari CV-mu.
          </h1>
          <p className={styles.reviewDesc}>
            Review and refine the extracted data below[cite: 5]. Your insights train our AI to present you better to potential employers. Make it perfect before saving to your Career Profile[cite: 5].
          </p>
        </div>

        <div className={styles.completenessCard}>
          <div className={styles.pdfInfoTag}>
            <FileText size={15} color="#2563eb" />
            <span>{cvData.fileName}</span>
          </div>
          <div className={styles.completenessCircle}>88%</div>
          <span className={styles.completenessLabel}>Profile Completeness</span>
        </div>
      </div>

      {/* 01 — IDENTITY */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <User size={14} /> 01 — IDENTITY
          </span>
          <button
            type="button"
            onClick={handleOpenIdentityModal}
            className={styles.editInlineBtn}
          >
            <Edit2 size={13} /> Edit Identity
          </button>
        </div>
        <div className={styles.reviewGrid2}>
          <div>
            <div className={styles.reviewFieldTitle}>Full Name</div>
            <div className={styles.reviewFieldValue}>{cvData.fullName}</div>
            <div className={styles.reviewFieldSub}>{cvData.email}</div>
          </div>
          <div>
            <div className={styles.reviewFieldTitle}>Primary Role</div>
            <div className={styles.reviewFieldValue}>{cvData.primaryRole}</div>
            <div className={styles.reviewFieldSub}>{cvData.location}</div>
          </div>
        </div>
      </div>

      {/* 02 — WORK EXPERIENCE */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <Briefcase size={14} /> 02 — WORK EXPERIENCE
          </span>
          <button
            type="button"
            onClick={() => handleOpenExpModal()}
            className={styles.addInlineBtn}
          >
            <Plus size={13} /> Add Experience
          </button>
        </div>

        {cvData.experiences.map((exp, idx) => (
          <div key={idx} className={styles.reviewTimelineCard}>
            <div className={styles.bulletSquare} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.2rem",
                }}
              >
                <span className={styles.reviewRole}>{exp.role}</span>
                <div className={styles.itemActionBtns}>
                  <span style={{ fontSize: "0.725rem", color: "#94a3b8", marginRight: "0.5rem" }}>
                    {exp.period}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenExpModal(idx)}
                    className={styles.iconOnlyBtn}
                    aria-label="Edit Experience"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteExp(idx)}
                    className={styles.iconDeleteBtn}
                    aria-label="Delete Experience"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <div className={styles.reviewCompany}>{exp.company}</div>
              <p className={styles.reviewDescText}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 03 — EDUCATION */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <GraduationCap size={14} /> 03 — EDUCATION
          </span>
          <button
            type="button"
            onClick={() => handleOpenEduModal()}
            className={styles.addInlineBtn}
          >
            <Plus size={13} /> Add Education
          </button>
        </div>

        {cvData.educations.map((edu, idx) => (
          <div key={idx} className={styles.reviewTimelineCard}>
            <div className={styles.bulletSquare} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.2rem",
                }}
              >
                <span className={styles.reviewRole}>{edu.institution}</span>
                <div className={styles.itemActionBtns}>
                  <span style={{ fontSize: "0.725rem", color: "#94a3b8", marginRight: "0.5rem" }}>
                    {edu.period}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenEduModal(idx)}
                    className={styles.iconOnlyBtn}
                    aria-label="Edit Education"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteEdu(idx)}
                    className={styles.iconDeleteBtn}
                    aria-label="Delete Education"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <div className={styles.reviewCompany}>{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 04 — SKILLS & EXPERTISE */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <Sparkles size={14} /> 04 — SKILLS & EXPERTISE
          </span>
        </div>

        <div className={styles.skillsColsGrid}>
          {/* Technical */}
          <div>
            <div className={styles.skillSubCategory}>TECHNICAL</div>
            <div className={styles.skillPillsFlex}>
              {cvData.skills.technical.map((item, idx) => (
                <span key={idx} className={styles.skillTagPill}>
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill("technical", idx)}
                    className={styles.removeSkillBtn}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.75rem" }}>
              <input
                type="text"
                placeholder="+ Add Skill"
                value={newSkillInput.technical}
                onChange={(e) =>
                  setNewSkillInput({ ...newSkillInput, technical: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSkill("technical");
                  }
                }}
                className={styles.inputControl}
                style={{ fontSize: "0.75rem", padding: "0.35rem 0.6rem" }}
              />
              <button
                type="button"
                onClick={() => handleAddSkill("technical")}
                className={styles.addInlineBtn}
                style={{ padding: "0.35rem 0.6rem" }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Analysis */}
          <div>
            <div className={styles.skillSubCategory}>ANALYSIS</div>
            <div className={styles.skillPillsFlex}>
              {cvData.skills.analysis.map((item, idx) => (
                <span key={idx} className={styles.skillTagPill}>
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill("analysis", idx)}
                    className={styles.removeSkillBtn}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.75rem" }}>
              <input
                type="text"
                placeholder="+ Add Analysis"
                value={newSkillInput.analysis}
                onChange={(e) =>
                  setNewSkillInput({ ...newSkillInput, analysis: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSkill("analysis");
                  }
                }}
                className={styles.inputControl}
                style={{ fontSize: "0.75rem", padding: "0.35rem 0.6rem" }}
              />
              <button
                type="button"
                onClick={() => handleAddSkill("analysis")}
                className={styles.addInlineBtn}
                style={{ padding: "0.35rem 0.6rem" }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className={styles.skillSubCategory}>SOFT SKILLS</div>
            <div className={styles.skillPillsFlex}>
              {cvData.skills.soft.map((item, idx) => (
                <span key={idx} className={styles.skillTagPill}>
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill("soft", idx)}
                    className={styles.removeSkillBtn}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.75rem" }}>
              <input
                type="text"
                placeholder="+ Add Soft Skill"
                value={newSkillInput.soft}
                onChange={(e) =>
                  setNewSkillInput({ ...newSkillInput, soft: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSkill("soft");
                  }
                }}
                className={styles.inputControl}
                style={{ fontSize: "0.75rem", padding: "0.35rem 0.6rem" }}
              />
              <button
                type="button"
                onClick={() => handleAddSkill("soft")}
                className={styles.addInlineBtn}
                style={{ padding: "0.35rem 0.6rem" }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 05 — PROJECTS (Keyword per tag) */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <FolderGit2 size={14} /> 05 — PROJECTS
          </span>
          <button
            type="button"
            onClick={() => handleOpenProjModal()}
            className={styles.addInlineBtn}
          >
            <Plus size={13} /> Add Project
          </button>
        </div>

        {cvData.projects.map((proj, idx) => (
          <div key={idx} className={styles.reviewTimelineCard}>
            <div className={styles.bulletSquare} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.2rem",
                }}
              >
                <span className={styles.reviewRole}>{proj.title}</span>
                <div className={styles.itemActionBtns}>
                  <button
                    type="button"
                    onClick={() => handleOpenProjModal(idx)}
                    className={styles.iconOnlyBtn}
                    aria-label="Edit Project"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteProj(idx)}
                    className={styles.iconDeleteBtn}
                    aria-label="Delete Project"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <div className={styles.reviewCompany}>{proj.role}</div>
              <p className={styles.reviewDescText}>{proj.description}</p>
              
              {/* Technologies Keyword Tag Pills */}
              {proj.technologies && proj.technologies.length > 0 && (
                <div className={styles.techChipsRow}>
                  <span className={styles.techChipLabel}>Tech:</span>
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techKeywordPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 06 — CERTIFICATIONS */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>
            <Award size={14} /> 06 — CERTIFICATIONS
          </span>
          <button
            type="button"
            onClick={() => handleOpenCertModal()}
            className={styles.addInlineBtn}
          >
            <Plus size={13} /> Add Certification
          </button>
        </div>

        {cvData.certifications.map((cert, idx) => (
          <div key={idx} className={styles.reviewTimelineCard}>
            <div className={styles.bulletSquare} />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.2rem",
                }}
              >
                <span className={styles.reviewRole}>{cert.title}</span>
                <div className={styles.itemActionBtns}>
                  <span style={{ fontSize: "0.725rem", color: "#94a3b8", marginRight: "0.5rem" }}>
                    {cert.year}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenCertModal(idx)}
                    className={styles.iconOnlyBtn}
                    aria-label="Edit Certification"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteCert(idx)}
                    className={styles.iconDeleteBtn}
                    aria-label="Delete Certification"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
              <div className={styles.reviewCompany}>{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 07 — PROFESSIONAL SUMMARY */}
      <div className={styles.reviewSectionBlock}>
        <div className={styles.sectionHeaderRow}>
          <span className={styles.sectionTagNumber}>07 — PROFESSIONAL SUMMARY</span>
          <button
            type="button"
            onClick={handleOpenSummaryModal}
            className={styles.editInlineBtn}
          >
            <Edit2 size={13} /> Edit Summary
          </button>
        </div>
        <p className={styles.reviewDescText} style={{ lineHeight: 1.65 }}>
          {cvData.summary}
        </p>
      </div>

      {/* Bottom Save CTA */}
      <div className={styles.allSetActionBox}>
        <h3 className={styles.allSetHeading}>All set?</h3>
        <p className={styles.allSetSub}>
          By saving, this data will build your comprehensive Career Profile, allowing our AI to match you with ideal opportunities[cite: 5].
        </p>
        <button
          type="button"
          onClick={handleSaveToProfile}
          className={styles.saveProfileBtn}
        >
          <span>Simpan ke Career Profile</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Floating Bottom Status Bar */}
      <div className={styles.bottomFloatingBar}>
        <span className={styles.changesCountText}>• Data Editable · Ready to Sync</span>
        <button
          type="button"
          onClick={() => router.push("/user/cv-analyzer")}
          className={styles.discardChangesBtn}
        >
          Discard Changes
        </button>
        <button
          type="button"
          onClick={handleSaveToProfile}
          className={styles.saveDraftSmallBtn}
        >
          Save Draft
        </button>
      </div>

      {/* =======================================================
          MODAL POP-UP DIALOGS
      ======================================================= */}

      {/* 1. Modal Identity */}
      {activeModal === "identity" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Edit Identity</h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Full Name</label>
              <input
                type="text"
                value={identityForm.fullName}
                onChange={(e) =>
                  setIdentityForm({ ...identityForm, fullName: e.target.value })
                }
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Primary Role</label>
              <input
                type="text"
                value={identityForm.primaryRole}
                onChange={(e) =>
                  setIdentityForm({ ...identityForm, primaryRole: e.target.value })
                }
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Email Address</label>
              <input
                type="email"
                value={identityForm.email}
                onChange={(e) =>
                  setIdentityForm({ ...identityForm, email: e.target.value })
                }
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Location</label>
              <input
                type="text"
                value={identityForm.location}
                onChange={(e) =>
                  setIdentityForm({ ...identityForm, location: e.target.value })
                }
                className={styles.inputControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveIdentity}
                className={styles.modalSaveBtn}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Summary */}
      {activeModal === "summary" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Edit Professional Summary</h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Summary Bio</label>
              <textarea
                rows={5}
                value={summaryForm}
                onChange={(e) => setSummaryForm(e.target.value)}
                className={styles.textareaControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveSummary}
                className={styles.modalSaveBtn}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal Experience */}
      {activeModal === "experience" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {editExpIndex !== null ? "Edit Experience" : "Add Experience"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Position / Role</label>
              <input
                type="text"
                value={expForm.role}
                onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Company</label>
              <input
                type="text"
                value={expForm.company}
                onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Period (e.g. Jan 2023 - Present)</label>
              <input
                type="text"
                value={expForm.period}
                onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Description</label>
              <textarea
                rows={4}
                value={expForm.description}
                onChange={(e) =>
                  setExpForm({ ...expForm, description: e.target.value })
                }
                className={styles.textareaControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveExp}
                className={styles.modalSaveBtn}
              >
                Save Experience
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Modal Education */}
      {activeModal === "education" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {editEduIndex !== null ? "Edit Education" : "Add Education"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Degree / Major</label>
              <select
                value={eduForm.degree}
                onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                className={styles.selectControl}
              >
                {DEGREE_OPTIONS.map((deg) => (
                  <option key={deg} value={deg}>
                    {deg}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Institution / University</label>
              <input
                type="text"
                value={eduForm.institution}
                onChange={(e) =>
                  setEduForm({ ...eduForm, institution: e.target.value })
                }
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Period</label>
              <input
                type="text"
                value={eduForm.period}
                onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveEdu}
                className={styles.modalSaveBtn}
              >
                Save Education
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Modal Project (Keyword chip per tag) */}
      {activeModal === "project" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {editProjIndex !== null ? "Edit Project" : "Add Project"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Project Title</label>
              <input
                type="text"
                placeholder="Contoh: Sentry Disaster Monitoring Platform"
                value={projForm.title}
                onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Role in Project</label>
              <input
                type="text"
                placeholder="Contoh: Lead System Analyst"
                value={projForm.role}
                onChange={(e) => setProjForm({ ...projForm, role: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            
            {/* Keyword Chip Tags Input */}
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Technologies Used (Keyword Tags)</label>
              <div className={styles.chipInputRow}>
                <input
                  type="text"
                  placeholder="Ketik tech/tools & tekan Enter (contoh: PostgreSQL)"
                  value={newTechKeyword}
                  onChange={(e) => setNewTechKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTechKeyword();
                    }
                  }}
                  className={styles.inputControl}
                />
                <button
                  type="button"
                  onClick={handleAddTechKeyword}
                  className={styles.addInlineBtn}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Plus size={14} /> Add
                </button>
              </div>

              <div className={styles.chipsContainer}>
                {projForm.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className={styles.modalKeywordChip}>
                    <span>{tech}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteTechKeyword(tIdx)}
                      className={styles.removeSkillBtn}
                      aria-label="Remove technology tag"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.inputLabel}>Description</label>
              <textarea
                rows={3}
                value={projForm.description}
                onChange={(e) =>
                  setProjForm({ ...projForm, description: e.target.value })
                }
                className={styles.textareaControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProj}
                className={styles.modalSaveBtn}
              >
                Save Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Modal Certification */}
      {activeModal === "certification" && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {editCertIndex !== null ? "Edit Certification" : "Add Certification"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.iconOnlyBtn}
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Certification Title</label>
              <input
                type="text"
                placeholder="Contoh: BNSP Certified System Analyst"
                value={certForm.title}
                onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Issuer / Institution</label>
              <input
                type="text"
                placeholder="Contoh: Badan Nasional Sertifikasi Profesi"
                value={certForm.issuer}
                onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.inputLabel}>Year</label>
              <input
                type="text"
                placeholder="Contoh: 2025"
                value={certForm.year}
                onChange={(e) => setCertForm({ ...certForm, year: e.target.value })}
                className={styles.inputControl}
              />
            </div>
            <div className={styles.modalActionRow}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCert}
                className={styles.modalSaveBtn}
              >
                Save Certification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}