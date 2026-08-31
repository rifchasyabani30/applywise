"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Briefcase } from "lucide-react";
import styles from "./signin.module.css";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Submitted:", { email, password, rememberMe });
  };

  const handleGoogleClick = () => {
    console.log("Lanjutkan dengan Google diklik");
  };

  const handleAppleClick = () => {
    console.log("Lanjutkan dengan Apple diklik");
  };

  return (
    <div className={styles.container}>
      {/* Kolom Kiri / Visual Hero */}
      <div className={styles.heroSection}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <Briefcase size={20} color="#ffffff" />
          </div>
          <span className={styles.brandName}>ApplyWise</span>
        </div>

        <div className={styles.graphicWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.mainCard}>
              <div className={styles.skeletonHeader} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLineShort} />
              <div className={styles.cardDots}>
                <div className={styles.dotBlue} />
                <div className={styles.dotLightBlue} />
              </div>
            </div>

            {/* Badges */}
            <div className={styles.badgeMatch}>
              <span className={styles.badgePillGreen}>92%</span>
              <span className={styles.badgeLabel}>MATCH</span>
            </div>

            <div className={styles.badgePriority}>
              <span className={styles.badgePillBlue}>88</span>
              <span className={styles.badgeLabel}>PRIORITY</span>
            </div>

            <div className={styles.badgeProfile}>
              <span className={styles.badgePillPurple}>87%</span>
              <span className={styles.badgeLabel}>PROFILE</span>
            </div>
          </div>
        </div>

        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>Jangan asal melamar.</h2>
          <p className={styles.heroSubtitle}>
            Kenali peluang yang benar-benar layak kamu kejar. ApplyWise menganalisis kesesuaian kariermu dengan presisi tinggi.
          </p>
        </div>
      </div>

      {/* Kolom Kanan / Form */}
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>Selamat datang kembali.</h1>
            <p className={styles.subtitle}>Lanjutkan perjalanan kariermu.</p>
          </div>

          <div className={styles.socialGroup}>
            <button type="button" onClick={handleGoogleClick} className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Lanjutkan dengan Google
            </button>
            <button type="button" onClick={handleAppleClick} className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.63 1.34-.56.65-1.05 1.72-.92 2.74 1.01.08 2.01-.48 2.63-1.23z" />
              </svg>
              Lanjutkan dengan Apple
            </button>
          </div>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>ATAU</span>
            <div className={styles.dividerLine} />
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.inputField}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.toggleEyeBtn}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.rememberRow}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={styles.checkboxInput}
                />
                Ingat saya
              </label>
              <Link href="/auth/forgot-password" className={styles.forgotLink}>
                Lupa password?
              </Link>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Masuk
            </button>
          </form>

          <p className={styles.footerNote}>
            Belum punya akun?{" "}
            <Link href="/auth/sign-up" className={styles.footerLink}>
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}