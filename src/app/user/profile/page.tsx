"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Globe,
  Camera,
  Edit2,
  ArrowRight,
  Award,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import styles from "./profile.module.css";

// Daftar pilihan jenjang pendidikan dari SD sampai S3
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
  "Non-formal / Certification",
];

interface CertificationItem {
  title: string;
  issuer?: string;
  year?: string;
}

interface UserProfile {
  personalInfo: {
    fullName: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    portfolioUrl?: string;
    linkedinUrl?: string;
    bio: string;
    careerStatus: "Actively Looking" | "Open to Offers" | "Not Looking";
  };
  experiences: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  educations: Array<{
    degree: string;
    major: string;
    institution: string;
    period: string;
  }>;
  skills: {
    methodology: Array<{ name: string; level: string; percent: number }>;
    tools: string[];
  };
  preferences: {
    targetRoles: string[];
    preferredLocations: string[];
    minimumSalary: string;
    workArrangement: string;
    employmentType: string;
  };
  evidenceProjects: Array<{
    title: string;
    type: string;
    description: string;
  }>;
  certifications: CertificationItem[];
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // State untuk input tag baru
  const [newRoleInput, setNewRoleInput] = useState<string>("");
  const [newLocInput, setNewLocInput] = useState<string>("");
  const [newToolInput, setNewToolInput] = useState<string>("");

  // Data profil utama
  const [profileData, setProfileData] = useState<UserProfile>({
    personalInfo: {
      fullName: "Rifcha Sya'bani Fatullah",
      headline: "System Analyst",
      email: "rifcha@example.com",
      phone: "+62 812 3456 7890",
      location: "Malang, Indonesia",
      portfolioUrl: "Portfolio",
      linkedinUrl: "LinkedIn",
      bio: "A forward-thinking System Analyst with a passion for translating complex business requirements into elegant technical solutions. Experienced in Agile methodologies and bridging the gap between stakeholders and development teams to deliver impactful products.",
      careerStatus: "Actively Looking",
    },
    experiences: [
      {
        role: "System Analyst Intern",
        company: "PT LEN INDUSTRI",
        period: "2025 - Present",
        description:
          "Analyzing system requirements, developing PRDs, and coordinating with cross-functional teams to ensure seamless project delivery and alignment with business goals.",
      },
    ],
    educations: [
      {
        degree: "Sarjana (S1)",
        major: "Information Technology",
        institution: "Universitas Brawijaya",
        period: "2023 - 2026",
      },
    ],
    skills: {
      methodology: [
        { name: "Requirement Analysis", level: "Advanced", percent: 85 },
        { name: "Agile Scrum", level: "Intermediate", percent: 65 },
      ],
      tools: ["Jira", "Figma", "Visio"],
    },
    preferences: {
      targetRoles: ["System Analyst", "Business Analyst"],
      preferredLocations: ["Jakarta", "Bandung", "Malang"],
      minimumSalary: "Rp 10.000.000",
      workArrangement: "Hybrid / Remote",
      employmentType: "Full-time, Contract",
    },
    evidenceProjects: [
      {
        title: "Sentry",
        type: "Project",
        description:
          "Disaster Monitoring Platform requiring complex stakeholder coordination and real-time data analysis mapping.",
      },
      {
        title: "Racangkara",
        type: "Project",
        description:
          "Cultural preservation platform built with cross-functional design and development teams.",
      },
    ],
    certifications: [
      {
        title: "BNSP Certified System Analyst",
        issuer: "Badan Nasional Sertifikasi Profesi",
        year: "2025",
      },
      {
        title: "Scrum Master Certification (PSM I)",
        issuer: "Scrum.org",
        year: "2024",
      },
    ],
  });

  // State sementara saat berada di Profile Builder
  const [formData, setFormData] = useState<UserProfile>(profileData);

  const handleOpenBuilder = (stepIndex: number = 1) => {
    setFormData(profileData);
    setCurrentStep(stepIndex);
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSaveProfile();
    }
  };

  const getStepButtonLabel = () => {
    switch (currentStep) {
      case 1:
        return "Next: About";
      case 2:
        return "Next: Preferences";
      case 3:
        return "Next: Experience";
      case 4:
        return "Next: Education";
      case 5:
        return "Next: Skills & Evidence";
      case 6:
        return "Simpan Profil";
      default:
        return "Next";
    }
  };

  // ==========================================
  // DYNAMIC HANDLERS (ADD & DELETE)
  // ==========================================

  // 1. Preferences: Target Roles
  const handleAddRole = () => {
    if (!newRoleInput.trim()) return;
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        targetRoles: [...formData.preferences.targetRoles, newRoleInput.trim()],
      },
    });
    setNewRoleInput("");
  };

  const handleDeleteRole = (index: number) => {
    const updated = formData.preferences.targetRoles.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      preferences: { ...formData.preferences, targetRoles: updated },
    });
  };

  // 2. Preferences: Preferred Locations
  const handleAddLocation = () => {
    if (!newLocInput.trim()) return;
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        preferredLocations: [...formData.preferences.preferredLocations, newLocInput.trim()],
      },
    });
    setNewLocInput("");
  };

  const handleDeleteLocation = (index: number) => {
    const updated = formData.preferences.preferredLocations.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      preferences: { ...formData.preferences, preferredLocations: updated },
    });
  };

  // 3. Experience: Add & Delete
  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { role: "", company: "", period: "", description: "" },
      ],
    });
  };

  const handleDeleteExperience = (index: number) => {
    const updated = formData.experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experiences: updated });
  };

  // 4. Education: Add & Delete
  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        { degree: "Sarjana (S1)", major: "", institution: "", period: "" },
      ],
    });
  };

  const handleDeleteEducation = (index: number) => {
    const updated = formData.educations.filter((_, i) => i !== index);
    setFormData({ ...formData, educations: updated });
  };

  // 5. Skills Methodology: Add & Delete
  const handleAddMethodology = () => {
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        methodology: [
          ...formData.skills.methodology,
          { name: "", level: "Intermediate", percent: 70 },
        ],
      },
    });
  };

  const handleDeleteMethodology = (index: number) => {
    const updated = formData.skills.methodology.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: { ...formData.skills, methodology: updated },
    });
  };

  // 6. Tools: Add & Delete
  const handleAddTool = () => {
    if (!newToolInput.trim()) return;
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        tools: [...formData.skills.tools, newToolInput.trim()],
      },
    });
    setNewToolInput("");
  };

  const handleDeleteTool = (index: number) => {
    const updated = formData.skills.tools.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: { ...formData.skills, tools: updated },
    });
  };

  // 7. Certifications: Add & Delete
  const handleAddCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        { title: "", issuer: "", year: "" },
      ],
    });
  };

  const handleDeleteCertification = (index: number) => {
    const updated = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: updated });
  };

  return (
    <div className={styles.mainWrapper}>
      {/* =======================================================
          KONDISI 1: PROFILE BUILDER (EDIT MODE - PROFILE BUILDER.JPG)
      ======================================================= */}
      {isEditing ? (
        <div>
          {/* Header Top */}
          <div className={styles.builderHero}>
            <div>
              <h1 className={styles.builderTitle}>
                Bangun profil <br />
                <span className={styles.blueHighlight}>kariermu.</span>
              </h1>
              <p className={styles.heroDesc}>
                This is your professional foundation. A precise, intelligent representation of your
                capabilities designed to stand out.
              </p>
            </div>

            {/* Profile Strength Card */}
            <div className={styles.builderStrengthCard}>
              <div className={styles.circleStrengthSmall}>86%</div>
              <div>
                <h4 className={styles.builderStrengthTitle}>Profile Strength</h4>
                <p className={styles.builderStrengthSub}>Advanced Level</p>
              </div>
            </div>
          </div>

          <div className={styles.builderLayout}>
            {/* Navigasi Kiri: Sections List */}
            <aside className={styles.builderNavCol}>
              <div className={styles.builderNavTitle}>SECTIONS</div>
              <nav className={styles.stepNavList}>
                {[
                  { id: 1, label: "01 Identity" },
                  { id: 2, label: "02 About" },
                  { id: 3, label: "03 Preferences" },
                  { id: 4, label: "04 Experience" },
                  { id: 5, label: "05 Education" },
                  { id: 6, label: "06 Skills & Evidence" },
                ].map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setCurrentStep(step.id)}
                    className={`${styles.stepNavItem} ${
                      currentStep === step.id ? styles.stepNavItemActive : ""
                    }`}
                  >
                    <span>{step.label}</span>
                    {currentStep === step.id && <ArrowRight size={13} />}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Form Box Tengah */}
            <main className={styles.formCardBox}>
              <div className={styles.stepCounterBadge}>Step 0{currentStep} of 06</div>

              {/* STEP 1: IDENTITY */}
              {currentStep === 1 && (
                <div>
                  <h2 className={styles.formSectionHeading}>Core Identity</h2>
                  <p className={styles.formSectionSub}>
                    The fundamental details that define who you are professionally.
                  </p>

                  <div className={styles.photoUploadSection}>
                    <div className={styles.uploadPhotoCircle}>
                      <Camera size={22} />
                    </div>
                    <div>
                      <div className={styles.uploadNoteTitle}>Professional Photo</div>
                      <div className={styles.uploadNoteSub}>
                        Square, max 5MB. Clear face visibility recommended.
                      </div>
                      <button type="button" className={styles.uploadLink}>
                        Upload Image
                      </button>
                    </div>
                  </div>

                  <div className={styles.formRowGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Full Name</label>
                      <input
                        type="text"
                        value={formData.personalInfo.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, fullName: e.target.value },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Professional Headline</label>
                      <input
                        type="text"
                        value={formData.personalInfo.headline}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, headline: e.target.value },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formRowGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Email Address</label>
                      <input
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, email: e.target.value },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Phone Number</label>
                      <input
                        type="text"
                        value={formData.personalInfo.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, phone: e.target.value },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Location</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        value={formData.personalInfo.location}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, location: e.target.value },
                          })
                        }
                        className={styles.textInput}
                        style={{ paddingLeft: "2.2rem" }}
                      />
                      <MapPin
                        size={14}
                        color="#94a3b8"
                        style={{ position: "absolute", left: "10px", top: "11px" }}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup} style={{ marginTop: "1rem" }}>
                    <label className={styles.formInputLabel} style={{ marginBottom: "0.5rem" }}>
                      Career Status
                    </label>
                    <div className={styles.careerStatusRow}>
                      {(["Actively Looking", "Open to Offers", "Not Looking"] as const).map(
                        (status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                personalInfo: { ...formData.personalInfo, careerStatus: status },
                              })
                            }
                            className={
                              formData.personalInfo.careerStatus === status
                                ? styles.statusPillActive
                                : styles.statusPillInactive
                            }
                          >
                            {status}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup} style={{ marginTop: "1rem" }}>
                    <label className={styles.formInputLabel}>LinkedIn Profile</label>
                    <input
                      type="text"
                      value={formData.personalInfo.linkedinUrl || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: { ...formData.personalInfo, linkedinUrl: e.target.value },
                        })
                      }
                      className={styles.textInput}
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: ABOUT */}
              {currentStep === 2 && (
                <div>
                  <h2 className={styles.formSectionHeading}>About Me</h2>
                  <p className={styles.formSectionSub}>
                    Ceritakan ringkasan profesional, fokus keahlian, dan value utamamu.
                  </p>
                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Professional Summary / Bio</label>
                    <textarea
                      rows={5}
                      value={formData.personalInfo.bio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: { ...formData.personalInfo, bio: e.target.value },
                        })
                      }
                      className={styles.textareaInput}
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: PREFERENCES (Dynamic Add & Delete) */}
              {currentStep === 3 && (
                <div>
                  <h2 className={styles.formSectionHeading}>Career Preferences</h2>
                  <p className={styles.formSectionSub}>
                    Preferensi pekerjaan digunakan untuk menghitung Priority Score ApplyWise[cite: 5].
                  </p>

                  {/* Target Roles */}
                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Target Roles</label>
                    <div className={styles.tagAddRow}>
                      <input
                        type="text"
                        placeholder="Contoh: Product Analyst, Scrum Master"
                        value={newRoleInput}
                        onChange={(e) => setNewRoleInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddRole();
                          }
                        }}
                        className={styles.textInput}
                      />
                      <button
                        type="button"
                        onClick={handleAddRole}
                        className={styles.nextPrimaryBtn}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}
                      >
                        <Plus size={14} /> Tambah
                      </button>
                    </div>
                    <div className={styles.tagPillsWrapper}>
                      {formData.preferences.targetRoles.map((role, idx) => (
                        <span key={idx} className={styles.builderTagPill}>
                          <span>{role}</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteRole(idx)}
                            className={styles.deleteTagBtn}
                            aria-label="Hapus role"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Locations */}
                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Preferred Locations</label>
                    <div className={styles.tagAddRow}>
                      <input
                        type="text"
                        placeholder="Contoh: Yogyakarta, Remote"
                        value={newLocInput}
                        onChange={(e) => setNewLocInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddLocation();
                          }
                        }}
                        className={styles.textInput}
                      />
                      <button
                        type="button"
                        onClick={handleAddLocation}
                        className={styles.nextPrimaryBtn}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}
                      >
                        <Plus size={14} /> Tambah
                      </button>
                    </div>
                    <div className={styles.tagPillsWrapper}>
                      {formData.preferences.preferredLocations.map((loc, idx) => (
                        <span key={idx} className={styles.builderTagPill}>
                          <span>{loc}</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteLocation(idx)}
                            className={styles.deleteTagBtn}
                            aria-label="Hapus lokasi"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.formRowGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Work Arrangement</label>
                      <input
                        type="text"
                        value={formData.preferences.workArrangement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferences: {
                              ...formData.preferences,
                              workArrangement: e.target.value,
                            },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formInputLabel}>Employment Type</label>
                      <input
                        type="text"
                        value={formData.preferences.employmentType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferences: {
                              ...formData.preferences,
                              employmentType: e.target.value,
                            },
                          })
                        }
                        className={styles.textInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Minimum Salary Expectation</label>
                    <input
                      type="text"
                      value={formData.preferences.minimumSalary}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferences: {
                            ...formData.preferences,
                            minimumSalary: e.target.value,
                          },
                        })
                      }
                      className={styles.textInput}
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: EXPERIENCE (Dynamic Add & Delete) */}
              {currentStep === 4 && (
                <div>
                  <h2 className={styles.formSectionHeading}>Experience</h2>
                  <p className={styles.formSectionSub}>
                    Tambahkan riwayat magang atau pengalaman kerja profesionalmu.
                  </p>

                  {formData.experiences.map((exp, idx) => (
                    <div key={idx} className={styles.dynamicItemBox}>
                      <div className={styles.dynamicItemHeader}>
                        <span className={styles.itemCountBadge}>Pengalaman #{idx + 1}</span>
                        {formData.experiences.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteExperience(idx)}
                            className={styles.deleteItemBtn}
                          >
                            <Trash2 size={13} /> Hapus
                          </button>
                        )}
                      </div>

                      <div className={styles.formRowGrid}>
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Position / Role</label>
                          <input
                            type="text"
                            placeholder="Contoh: System Analyst"
                            value={exp.role}
                            onChange={(e) => {
                              const updated = [...formData.experiences];
                              updated[idx].role = e.target.value;
                              setFormData({ ...formData, experiences: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Company</label>
                          <input
                            type="text"
                            placeholder="Contoh: PT LEN Industri"
                            value={exp.company}
                            onChange={(e) => {
                              const updated = [...formData.experiences];
                              updated[idx].company = e.target.value;
                              setFormData({ ...formData, experiences: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formInputLabel}>Period (e.g. 2025 - Present)</label>
                        <input
                          type="text"
                          value={exp.period}
                          onChange={(e) => {
                            const updated = [...formData.experiences];
                            updated[idx].period = e.target.value;
                            setFormData({ ...formData, experiences: updated });
                          }}
                          className={styles.textInput}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formInputLabel}>Job Description & Responsibilities</label>
                        <textarea
                          rows={3}
                          value={exp.description}
                          onChange={(e) => {
                            const updated = [...formData.experiences];
                            updated[idx].description = e.target.value;
                            setFormData({ ...formData, experiences: updated });
                          }}
                          className={styles.textareaInput}
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddExperience}
                    className={styles.addItemButton}
                  >
                    <Plus size={16} /> Tambah Pengalaman Baru
                  </button>
                </div>
              )}

              {/* STEP 5: EDUCATION (Degree Dropdown SD-S3 + Major Text Input) */}
              {currentStep === 5 && (
                <div>
                  <h2 className={styles.formSectionHeading}>Education</h2>
                  <p className={styles.formSectionSub}>
                    Informasi jenjang pendidikan, program studi, dan institusi pendidikan[cite: 5].
                  </p>

                  {formData.educations.map((edu, idx) => (
                    <div key={idx} className={styles.dynamicItemBox}>
                      <div className={styles.dynamicItemHeader}>
                        <span className={styles.itemCountBadge}>Pendidikan #{idx + 1}</span>
                        {formData.educations.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteEducation(idx)}
                            className={styles.deleteItemBtn}
                          >
                            <Trash2 size={13} /> Hapus
                          </button>
                        )}
                      </div>

                      <div className={styles.formRowGrid}>
                        {/* Dropdown Jenjang Pendidikan (SD sampai S3) */}
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Jenjang Pendidikan (Degree)</label>
                          <select
                            value={edu.degree}
                            onChange={(e) => {
                              const updated = [...formData.educations];
                              updated[idx].degree = e.target.value;
                              setFormData({ ...formData, educations: updated });
                            }}
                            className={styles.selectInput}
                          >
                            {DEGREE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Input Jurusan / Program Studi */}
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Jurusan / Program Studi (Major)</label>
                          <input
                            type="text"
                            placeholder="Contoh: Information Technology"
                            value={edu.major}
                            onChange={(e) => {
                              const updated = [...formData.educations];
                              updated[idx].major = e.target.value;
                              setFormData({ ...formData, educations: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>
                      </div>

                      <div className={styles.formRowGrid}>
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Nama Sekolah / Universitas</label>
                          <input
                            type="text"
                            placeholder="Contoh: Universitas Brawijaya"
                            value={edu.institution}
                            onChange={(e) => {
                              const updated = [...formData.educations];
                              updated[idx].institution = e.target.value;
                              setFormData({ ...formData, educations: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Periode / Tahun Lulus</label>
                          <input
                            type="text"
                            placeholder="Contoh: 2023 - 2026"
                            value={edu.period}
                            onChange={(e) => {
                              const updated = [...formData.educations];
                              updated[idx].period = e.target.value;
                              setFormData({ ...formData, educations: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className={styles.addItemButton}
                  >
                    <Plus size={16} /> Tambah Riwayat Pendidikan
                  </button>
                </div>
              )}

              {/* STEP 6: SKILLS & CERTIFICATIONS */}
              {currentStep === 6 && (
                <div>
                  <h2 className={styles.formSectionHeading}>Skills & Evidence</h2>
                  <p className={styles.formSectionSub}>
                    Kelola keahlian metodologi, tools, dan sertifikasi profesional[cite: 5].
                  </p>

                  {/* Dynamic Tools Tagging */}
                  <div className={styles.formGroup}>
                    <label className={styles.formInputLabel}>Tools & Software</label>
                    <div className={styles.tagAddRow}>
                      <input
                        type="text"
                        placeholder="Contoh: Notion, Trello, Miro"
                        value={newToolInput}
                        onChange={(e) => setNewToolInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddTool();
                          }
                        }}
                        className={styles.textInput}
                      />
                      <button
                        type="button"
                        onClick={handleAddTool}
                        className={styles.nextPrimaryBtn}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}
                      >
                        <Plus size={14} /> Tambah
                      </button>
                    </div>
                    <div className={styles.tagPillsWrapper}>
                      {formData.skills.tools.map((tool, idx) => (
                        <span key={idx} className={styles.builderTagPill}>
                          <span>{tool}</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteTool(idx)}
                            className={styles.deleteTagBtn}
                            aria-label="Hapus tool"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Methodology Items */}
                  <div style={{ marginTop: "1.5rem" }}>
                    <label className={styles.formInputLabel} style={{ marginBottom: "0.75rem", display: "block" }}>
                      Methodology & Business Skills
                    </label>

                    {formData.skills.methodology.map((m, idx) => (
                      <div key={idx} className={styles.dynamicItemBox}>
                        <div className={styles.dynamicItemHeader}>
                          <span className={styles.itemCountBadge}>Skill #{idx + 1}</span>
                          {formData.skills.methodology.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteMethodology(idx)}
                              className={styles.deleteItemBtn}
                            >
                              <Trash2 size={13} /> Hapus
                            </button>
                          )}
                        </div>

                        <div className={styles.formRowGrid}>
                          <div className={styles.formGroup}>
                            <label className={styles.formInputLabel}>Skill Name</label>
                            <input
                              type="text"
                              placeholder="Contoh: Requirement Analysis"
                              value={m.name}
                              onChange={(e) => {
                                const updated = [...formData.skills.methodology];
                                updated[idx].name = e.target.value;
                                setFormData({
                                  ...formData,
                                  skills: { ...formData.skills, methodology: updated },
                                });
                              }}
                              className={styles.textInput}
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formInputLabel}>Proficiency Level</label>
                            <input
                              type="text"
                              placeholder="Advanced / Intermediate / Beginner"
                              value={m.level}
                              onChange={(e) => {
                                const updated = [...formData.skills.methodology];
                                updated[idx].level = e.target.value;
                                setFormData({
                                  ...formData,
                                  skills: { ...formData.skills, methodology: updated },
                                });
                              }}
                              className={styles.textInput}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={handleAddMethodology}
                      className={styles.addItemButton}
                    >
                      <Plus size={16} /> Tambah Methodology Skill
                    </button>
                  </div>

                  {/* Dynamic Certifications Section */}
                  <div style={{ marginTop: "2rem" }}>
                    <label className={styles.formInputLabel} style={{ marginBottom: "0.75rem", display: "block" }}>
                      Sertifikasi Profesional (Bisa Ditambah Lebih Dari Satu)
                    </label>

                    {formData.certifications.map((cert, idx) => (
                      <div key={idx} className={styles.dynamicItemBox}>
                        <div className={styles.dynamicItemHeader}>
                          <span className={styles.itemCountBadge}>Sertifikat #{idx + 1}</span>
                          {formData.certifications.length > 0 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteCertification(idx)}
                              className={styles.deleteItemBtn}
                            >
                              <Trash2 size={13} /> Hapus
                            </button>
                          )}
                        </div>

                        <div className={styles.formGroup}>
                          <label className={styles.formInputLabel}>Nama Sertifikat</label>
                          <input
                            type="text"
                            placeholder="Contoh: BNSP Certified System Analyst"
                            value={cert.title}
                            onChange={(e) => {
                              const updated = [...formData.certifications];
                              updated[idx].title = e.target.value;
                              setFormData({ ...formData, certifications: updated });
                            }}
                            className={styles.textInput}
                          />
                        </div>

                        <div className={styles.formRowGrid}>
                          <div className={styles.formGroup}>
                            <label className={styles.formInputLabel}>Penerbit / Lembaga (Issuer)</label>
                            <input
                              type="text"
                              placeholder="Contoh: BNSP / Scrum.org"
                              value={cert.issuer || ""}
                              onChange={(e) => {
                                const updated = [...formData.certifications];
                                updated[idx].issuer = e.target.value;
                                setFormData({ ...formData, certifications: updated });
                              }}
                              className={styles.textInput}
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.formInputLabel}>Tahun Penerbitan</label>
                            <input
                              type="text"
                              placeholder="Contoh: 2025"
                              value={cert.year || ""}
                              onChange={(e) => {
                                const updated = [...formData.certifications];
                                updated[idx].year = e.target.value;
                                setFormData({ ...formData, certifications: updated });
                              }}
                              className={styles.textInput}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={handleAddCertification}
                      className={styles.addItemButton}
                    >
                      <Plus size={16} /> Tambah Sertifikat Baru
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className={styles.formActionRow}>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className={styles.draftSaveBtn}
                >
                  Batal / Kembali
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className={styles.nextPrimaryBtn}
                >
                  <span>{getStepButtonLabel()}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </main>

            {/* Sidebar Kanan: Live Preview */}
            <aside className={styles.livePreviewCol}>
              <div className={styles.previewGlassCard}>
                <div className={styles.previewBadge}>Live Preview</div>
                <div className={styles.previewInnerCard}>
                  <div className={styles.previewInitialsCircle}>
                    {formData.personalInfo.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className={styles.previewName}>
                    {formData.personalInfo.fullName || "Your Name"}
                  </div>
                  <div className={styles.previewRole}>
                    {formData.personalInfo.headline || "Headline"}
                  </div>
                  <div className={styles.previewLoc}>
                    <MapPin size={11} />
                    <span>{formData.personalInfo.location || "Location"}</span>
                  </div>
                  <div className={styles.previewPillActive}>
                    <span className={styles.openDot} />
                    <span>{formData.personalInfo.careerStatus}</span>
                  </div>

                  <div className={styles.previewSkeletonList}>
                    <div className={styles.skeletonLine} style={{ width: "30%" }} />
                    <div className={styles.skeletonLine} style={{ width: "90%" }} />
                    <div className={styles.skeletonLine} style={{ width: "65%" }} />
                    <div className={styles.skeletonLine} style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        /* =======================================================
            KONDISI 2: PROFILE VIEW (VIEW MODE - SESUAI PROFILE.JPG)
        ======================================================= */
        <div>
          {/* Top Hero Section */}
          <div className={styles.profileHero}>
            <div>
              <div className={styles.careerProfileBadge}>CAREER PROFILE</div>
              <h1 className={styles.heroTitle}>
                Your professional identity, all in one place.
              </h1>
              <p className={styles.heroDesc}>
                ApplyWise menggunakan profil ini untuk memahami pengalaman, kemampuan, preferensi, dan arah kariermu.
              </p>
            </div>

            {/* 86% Strength Badge */}
            <div className={styles.strengthCircleWrapper}>
              <div className={styles.strengthCircle}>
                <span className={styles.strengthScore}>86%</span>
                <span className={styles.strengthLabel}>STRENGTH</span>
              </div>
            </div>
          </div>

          <div className={styles.overviewLayout}>
            {/* Sidebar Kiri: Identitas, Kontak & Preferensi */}
            <aside className={styles.leftIdentityCol}>
              <div>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarPlaceholder}>
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                      alt="Profile Avatar"
                      width={92}
                      height={92}
                      className={styles.avatarImg}
                      unoptimized
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(1)}
                    className={styles.avatarEditBtn}
                    aria-label="Edit Profile"
                  >
                    <Edit2 size={12} />
                  </button>
                </div>

                <h2 className={styles.profileFullName}>{profileData.personalInfo.fullName}</h2>
                <div className={styles.profileRoleSubtitle}>{profileData.personalInfo.headline}</div>

                <div className={styles.openBadge}>
                  <span className={styles.openDot} />
                  <span>Open to opportunities</span>
                </div>

                <div className={styles.contactSectionTitle}>CONTACT INFO</div>
                <div className={styles.contactList}>
                  <div className={styles.contactRow}>
                    <Mail size={14} color="#64748b" />
                    <span>{profileData.personalInfo.email}</span>
                  </div>
                  <div className={styles.contactRow}>
                    <MapPin size={14} color="#64748b" />
                    <span>{profileData.personalInfo.location}</span>
                  </div>
                  {profileData.personalInfo.portfolioUrl && (
                    <div className={styles.contactRow}>
                      <Globe size={14} color="#2563eb" />
                      <a href="#portfolio" className={styles.contactLink}>
                        {profileData.personalInfo.portfolioUrl}
                      </a>
                    </div>
                  )}
                  {profileData.personalInfo.linkedinUrl && (
                    <div className={styles.contactRow}>
                      <Globe size={14} color="#2563eb" />
                      <a href="#linkedin" className={styles.contactLink}>
                        {profileData.personalInfo.linkedinUrl}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Preferences Box */}
              <div className={styles.preferencesCard}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <h3 className={styles.prefHeading} style={{ margin: 0 }}>
                    Preferences
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(3)}
                    className={styles.manageLink}
                  >
                    Edit
                  </button>
                </div>

                <div className={styles.prefSubLabel}>TARGET ROLES</div>
                <div className={styles.tagPillsRow}>
                  {profileData.preferences.targetRoles.map((role, idx) => (
                    <span key={idx} className={styles.roleTagPill}>
                      {role}
                    </span>
                  ))}
                </div>

                <div className={styles.prefSubLabel}>WORK ARRANGEMENT</div>
                <div className={styles.prefValueText}>
                  {profileData.preferences.workArrangement}
                </div>

                <div className={styles.prefSubLabel}>EMPLOYMENT TYPE</div>
                <div className={styles.prefValueText} style={{ marginBottom: 0 }}>
                  {profileData.preferences.employmentType}
                </div>
              </div>
            </aside>

            {/* Kolom Kanan: Detail Informasi */}
            <main className={styles.rightContentCol}>
              {/* About Me */}
              <section>
                <div className={styles.sectionBlockTitle}>
                  <span>About Me</span>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(2)}
                    className={styles.manageLink}
                  >
                    Edit
                  </button>
                </div>
                <p className={styles.aboutParagraph}>{profileData.personalInfo.bio}</p>
              </section>

              {/* Experience & Education */}
              <section>
                <div className={styles.sectionBlockTitle}>
                  <span>Experience & Education</span>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(4)}
                    className={styles.manageLink}
                  >
                    Edit
                  </button>
                </div>
                <div className={styles.timelineList}>
                  {/* Experience Rows */}
                  {profileData.experiences.map((exp, idx) => (
                    <div key={idx} className={styles.timelineRow}>
                      <div className={styles.dotBlueFilled} />
                      <div style={{ flex: 1 }}>
                        <div className={styles.timelineItemHeader}>
                          <span className={styles.timelineRoleTitle}>{exp.role}</span>
                          <span className={styles.timelineDateBadge}>{exp.period}</span>
                        </div>
                        <div className={styles.timelineSubInst}>{exp.company}</div>
                        <p className={styles.timelineDescText}>{exp.description}</p>
                      </div>
                    </div>
                  ))}

                  {/* Education Rows (Combined Degree & Major) */}
                  {profileData.educations.map((edu, idx) => (
                    <div key={idx} className={styles.timelineRow}>
                      <div className={styles.dotGrayHollow} />
                      <div style={{ flex: 1 }}>
                        <div className={styles.timelineItemHeader}>
                          <span className={styles.timelineRoleTitle}>
                            {edu.major ? `${edu.degree} - ${edu.major}` : edu.degree}
                          </span>
                          <span className={styles.timelineDateBadge}>{edu.period}</span>
                        </div>
                        <div className={styles.timelineDescText}>{edu.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skill Ecosystem */}
              <section>
                <div className={styles.sectionBlockTitle}>
                  <span>Skill Ecosystem</span>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(6)}
                    className={styles.manageLink}
                  >
                    Manage Skills
                  </button>
                </div>

                <div className={styles.skillEcoGrid}>
                  {/* Methodology & Business */}
                  <div className={styles.skillCardBox}>
                    <div className={styles.skillCardCategory}>METHODOLOGY & BUSINESS</div>
                    {profileData.skills.methodology.map((skill, idx) => (
                      <div key={idx} className={styles.skillProgressItem}>
                        <div className={styles.skillProgressLabelRow}>
                          <span>{skill.name}</span>
                          <span className={styles.levelTag}>{skill.level}</span>
                        </div>
                        <div className={styles.progressTrack}>
                          <div
                            className={styles.progressFill}
                            style={{ width: `${skill.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className={styles.skillCardBox}>
                    <div className={styles.skillCardCategory}>TOOLS</div>
                    <div className={styles.toolsPillsWrapper}>
                      {profileData.skills.tools.map((tool, idx) => (
                        <span key={idx} className={styles.toolPill}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Evidence */}
              <section>
                <div className={styles.sectionBlockTitle}>
                  <span>Career Evidence</span>
                  <button
                    type="button"
                    onClick={() => handleOpenBuilder(6)}
                    className={styles.manageLink}
                  >
                    Edit Sertifikat
                  </button>
                </div>

                <div className={styles.evidenceGrid}>
                  {profileData.evidenceProjects.map((project, idx) => (
                    <div key={idx} className={styles.evidenceCard}>
                      <div className={styles.evidenceImgPlaceholder}>
                        <span className={styles.evidenceTypeBadge}>{project.type}</span>
                      </div>
                      <h4 className={styles.evidenceTitle}>{project.title}</h4>
                      <p className={styles.evidenceDesc}>{project.description}</p>
                      <a href="#details" className={styles.evidenceLink}>
                        View details
                      </a>
                    </div>
                  ))}
                </div>

                {/* Multiple Certifications Badges List */}
                <div className={styles.certificationsList}>
                  {profileData.certifications.map((cert, idx) => (
                    <div key={idx} className={styles.certificationBanner}>
                      <Award size={16} color="#2563eb" />
                      <span>{cert.title}</span>
                      {cert.issuer && (
                        <span className={styles.certIssuerYear}>
                          • {cert.issuer} {cert.year && `(${cert.year})`}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}