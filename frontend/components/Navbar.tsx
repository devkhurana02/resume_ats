"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => ({
    fontSize: "14px",
    color: pathname === path ? "#4F46E5" : "#6B7280",
    textDecoration: "none",
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: "8px",
    background: pathname === path ? "#EEF2FF" : "transparent",
    transition: "all 0.2s ease"
  });

  return (
    <nav style={{
      position: "sticky", 
      top: 0, 
      zIndex: 50,
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #F0F0F0",
      height: "56px",
      display: "flex", 
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{
            background: "#4F46E5",
            color: "white",
            borderRadius: "6px",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.5px"
          }}>ATS</span>
          <span style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#0A0A0A"
          }}>Scanner</span>
        </span>
      </Link>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Link href="/" style={linkStyle("/")}>
          Scan Resume
        </Link>
        <Link href="/rank" style={linkStyle("/rank")}>
          Compare Resumes
        </Link>
      </div>
    </nav>
  );
}
