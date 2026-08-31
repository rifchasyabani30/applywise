import React from "react";

export const metadata = {
  title: "CV Analyzer | ApplyWise",
  description: "Ekstrak dan analisis CV secara otomatis untuk membangun Career Profile.",
};

export default function CvAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section style={{ width: "100%" }}>{children}</section>;
}