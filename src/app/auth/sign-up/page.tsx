"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
import styles from "./signup.module.css";

export default function SignUpPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Submitted:", { firstName, lastName, email, password });

    // Redirect langsung ke dashboard pengguna (empty state)
    router.push("/user/dashboard");
  };

  const handleGoogleClick = () => {
    console.log("Daftar dengan Google diklik");
    // Redirect langsung ke dashboard pengguna
    router.push("/user/dashboard");
  };

  const handleAppleClick = () => {
    console.log("Daftar dengan Apple diklik");
    // Redirect langsung ke dashboard pengguna
    router.push("/user/dashboard");
  };

  return (
    <div className={styles.container}>
      {/* Kolom Kiri / Form */}
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
                <path d="M15 6v5c0 1.5.55 3.03 2 4.5 1.63 1.62 2.5 5 2.5 5" />
              </svg>
            </div>
            <span className={styles.brandName}>ApplyWise</span>
          </div>

          <div className={styles.formHeader}>
            <h1 className={styles.title}>Bangun strategi kariermu.</h1>
            <p className={styles.subtitle}>
              Mulai dari CV, pahami peluang, dan buat keputusan yang lebih cerdas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.rowInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Nama Depan</label>
                <div className={styles.inputWithIcon}>
                  <User size={16} className={styles.fieldIcon} />
                  <input
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Nama Belakang</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputWithIcon}>
                <Mail size={16} className={styles.fieldIcon} />
                <input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWithIcon}>
                <Lock size={16} className={styles.fieldIcon} />
                <input
                  type="password"
                  placeholder="Minimal 8 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  className={styles.inputField}
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Buat Akun</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>ATAU DAFTAR DENGAN</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialGrid}>
            <button type="button" onClick={handleGoogleClick} className={styles.socialBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Google
            </button>
            <button type="button" onClick={handleAppleClick} className={styles.socialBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.63 1.34-.56.65-1.05 1.72-.92 2.74 1.01.08 2.01-.48 2.63-1.23z" />
              </svg>
              Apple
            </button>
          </div>

          <p className={styles.footerNote}>
            Sudah punya akun?{" "}
            <Link href="/auth/sign-in" className={styles.footerLink}>
              Masuk
            </Link>
          </p>
        </div>
      </div>

      {/* Kolom Kanan / Radar */}
      <div className={styles.visualSection}>
        <div className={styles.badgeTopRight}>
          <div className={styles.skillMatchBadge}>
            <div className={styles.sparkleIconWrapper}>
              <Sparkles size={16} />
            </div>
            <div className={styles.skillMatchText}>
              <span className={styles.skillMatchTitle}>Skill Match</span>
              <span className={styles.skillMatchFit}>98% Fit</span>
            </div>
          </div>
        </div>

        <div className={styles.radarWrapper}>
          <svg className={styles.radarSvg} viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
            
            <polygon points="100,25 168,62 168,138 100,175 32,138 32,62" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="25" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="168" y2="62" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="168" y2="138" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="100" y2="175" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="32" y2="138" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="100" x2="32" y2="62" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" />

            <circle cx="100" cy="25" r="5" fill="#3b82f6" />
            <circle cx="168" cy="62" r="4.5" fill="#bae6fd" />
            <circle cx="168" cy="138" r="3" fill="#93c5fd" />
            <circle cx="100" cy="175" r="5.5" fill="#2563eb" />
            <circle cx="32" cy="138" r="3.5" fill="#bfdbfe" />
            <circle cx="32" cy="62" r="4.5" fill="#e2e8f0" />
            <circle cx="100" cy="100" r="6" fill="#ffffff" />
          </svg>
        </div>

        <div className={styles.visualText}>
          <h2 className={styles.visualTitle}>Peta Potensi</h2>
          <p className={styles.visualSubtitle}>
            Visualisasikan lintasan karier Anda. AI kami memetakan keterampilan Anda terhadap tren industri terkini.
          </p>
        </div>
      </div>
    </div>
  );
}