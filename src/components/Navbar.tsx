"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo-link">
          <div className="logo-container">
            <Image
              src="/assets/19140_0.jpg"
              alt="QuickPay TopUp Logo"
              width={64}
              height={64}
              className="logo-image-zoom"
              priority
            />
          </div>
          <span>
            QuickPay <span style={{ color: "var(--accent-gold)" }}>TopUp</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link active">
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link href="/#topup-widget" className="nav-link">
              เติมเงินเกม
            </Link>
          </li>
          <li>
            <Link href="/agent" className="nav-link">
              สำหรับตัวแทน
            </Link>
          </li>
          <li>
            <Link href="/#contact-section" className="nav-link">
              ติดต่อเรา
            </Link>
          </li>
          <li>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              title="เปลี่ยนโหมดสี"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <i className="fa-solid fa-sun" style={{ color: "var(--accent-gold)" }}></i>
              ) : (
                <i className="fa-solid fa-moon" style={{ color: "var(--primary-blue)" }}></i>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
