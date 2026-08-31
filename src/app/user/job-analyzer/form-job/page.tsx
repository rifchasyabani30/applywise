"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Wallet, 
  Briefcase, 
  MapPin, 
  FileUp, 
  Image as ImageIcon 
} from "lucide-react";
import styles from "./form-job.module.css";

export default function FormJobPage() {
  const [activeTab, setActiveTab] = useState<"text" | "pdf" | "screenshot">("text");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <p className={styles.subTitle}>JOB ANALYZER</p>
          <h1 className={styles.title}>
            Apakah peluang ini<br />
            layak kamu kejar?
          </h1>
          <p className={styles.description}>
            Masukkan lowongan yang sedang kamu pertimbangkan. APPLYWISE akan membantu membaca requirement dan mencocokkannya dengan profilmu.
          </p>

          <div className={styles.floatingPillMatch}>
            <span className={styles.dotBlue}></span> MATCH
          </div>
          <div className={styles.floatingPillSkills}>
            <span className={styles.dotBlue}></span> SKILLS
          </div>
          <div className={styles.floatingPillInsight}>
            <span className={styles.dotBlue}></span> INSIGHT
          </div>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Left Form Section */}
          <div className={styles.formSection}>
            <input
              type="text"
              placeholder="Contoh: System Analyst"
              className={styles.jobTitleInput}
            />

            {/* Optional Metadata Row */}
            <div className={styles.jobMetaRow}>
              <div className={styles.metaInputBox}>
                <Wallet size={14} color="#94a3b8" />
                <input type="text" placeholder="IDR 10M - 15M" className={styles.metaInput} />
              </div>
              <div className={styles.metaInputBox}>
                <Briefcase size={14} color="#94a3b8" />
                <input type="text" placeholder="Job Type" className={styles.metaInput} />
              </div>
              <div className={styles.metaInputBox}>
                <MapPin size={14} color="#94a3b8" />
                <input type="text" placeholder="Location" className={styles.metaInput} />
              </div>
            </div>

            {/* Input Card Container */}
            <div className={styles.inputCard}>
              <div className={styles.tabGroup}>
                <button
                  type="button"
                  onClick={() => { setActiveTab("text"); setSelectedFile(null); }}
                  className={`${styles.tabBtn} ${activeTab === "text" ? styles.tabActive : ""}`}
                >
                  PASTE TEXT
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("pdf"); setSelectedFile(null); }}
                  className={`${styles.tabBtn} ${activeTab === "pdf" ? styles.tabActive : ""}`}
                >
                  PDF
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("screenshot"); setSelectedFile(null); }}
                  className={`${styles.tabBtn} ${activeTab === "screenshot" ? styles.tabActive : ""}`}
                >
                  SCREENSHOT
                </button>
              </div>

              {/* DYNAMIC CONTENT BERDASARKAN TAB */}
              {activeTab === "text" && (
                <>
                  <textarea
                    className={styles.textarea}
                    placeholder="Paste deskripsi lowongan pekerjaan di sini..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={20000}
                  />
                  <div className={styles.charCount}>
                    {description.length.toLocaleString()} / 20,000
                  </div>
                </>
              )}

              {activeTab === "pdf" && (
                <div className={styles.uploadArea}>
                  <input
                    type="file"
                    accept=".pdf"
                    id="pdf-upload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="pdf-upload" className={styles.uploadLabel}>
                    <FileUp size={36} className={styles.uploadIcon} />
                    <p className={styles.uploadText}>
                      {selectedFile ? selectedFile.name : "Klik atau seret file PDF lowongan ke sini"}
                    </p>
                    <span className={styles.uploadHint}>Mendukung format .pdf (Maks. 10MB)</span>
                  </label>
                </div>
              )}

              {activeTab === "screenshot" && (
                <div className={styles.uploadArea}>
                  <input
                    type="file"
                    accept="image/*"
                    id="img-upload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="img-upload" className={styles.uploadLabel}>
                    <ImageIcon size={36} className={styles.uploadIcon} />
                    <p className={styles.uploadText}>
                      {selectedFile ? selectedFile.name : "Klik atau seret screenshot lowongan ke sini"}
                    </p>
                    <span className={styles.uploadHint}>Mendukung format PNG, JPG, JPEG (Maks. 5MB)</span>
                  </label>
                </div>
              )}
            </div>

            {/* Profile Check & Submit Action */}
            <div className={styles.actionRow}>
              <div className={styles.profileStatus}>
                <span className={styles.statusBold}>YOUR PROFILE:</span> Career Profile
                <CheckCircle2 size={15} className={styles.checkIcon} />
                CV
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span className="ml-1 text-gray-400">| Siap dibandingkan</span>
              </div>

              <Link href="/user/job-analyzer/processing" className={styles.submitBtn}>
                Analisis Lowongan
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className={styles.bottomHint}>Bandingkan dengan profilmu</p>
          </div>

          {/* Right Sidebar: Recent Opportunities */}
          <div className={styles.historySection}>
            <h2 className={styles.historyTitle}>Peluang yang baru kamu analisis</h2>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>Product Designer</h3>
                <p className={styles.historyCompany}>TechCorp Indonesia • Jakarta</p>
              </div>
              <span className={styles.badgeMatchHigh}>92% Match</span>
            </div>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>UX Researcher</h3>
                <p className={styles.historyCompany}>Fintech Startup • Remote</p>
              </div>
              <span className={styles.badgeMatchMedium}>85% Match</span>
            </div>

            <div className={styles.historyCard}>
              <div>
                <h3 className={styles.historyJob}>UI Designer</h3>
                <p className={styles.historyCompany}>Creative Agency • Bali</p>
              </div>
              <span className={styles.badgeDraft}>Draft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}