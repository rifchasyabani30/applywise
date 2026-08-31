"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, User } from "lucide-react";
import styles from "./user-layout.module.css";

const navItems = [
  { label: "Dashboard", href: "/user/dashboard" },
  { label: "Profile", href: "/user/profile" },
  { label: "CV Analyzer", href: "/user/cv-analyzer" },
  { label: "Job Analyzer", href: "/user/job-analyzer/form-job" },
  { label: "Applications", href: "/user/applications" },
  { label: "Skill Gap", href: "/user/skillgap/firstskillgap" },
  { label: "Analytics", href: "/user/analytics" },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {/* Top Navbar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/user/dashboard" className={styles.brand}>
            <div className={styles.brandIcon}>
              <Briefcase size={18} color="#ffffff" />
            </div>
            <span className={styles.brandName}>ApplyWise</span>
          </Link>

          <nav className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/user/dashboard" && pathname === "/user") ||
                pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.navActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User Menu - Icon Profile sekarang mengarah ke /user/profile */}
          <div className={styles.userMenu}>
            <Link
              href="/user/profile"
              className={styles.avatarBtn}
              aria-label="User profile"
            >
              <User size={22} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Page Area */}
      <main className={styles.content}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700, color: "#0f172a" }}>ApplyWise</span>
            <span>| © 2024 ApplyWise. Editorial Career Companion.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}