"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppLink = (menuItem: string) => {
    const text = encodeURIComponent(`Hi! I want to get details regarding ${menuItem} on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  const whatsappIcon = (
    <svg viewBox="0 0 24 24" className={styles.waIconNav} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.333 5L2 22l5.23-1.373c1.474.803 3.125 1.226 4.782 1.226 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.05 14.223c-.247.696-1.442 1.282-1.996 1.37-.506.082-1.168.147-3.32-.74-2.754-1.137-4.523-3.93-4.66-4.114-.138-.184-1.12-1.493-1.12-2.85 0-1.355.708-2.02.962-2.296.255-.275.556-.343.742-.343h.53c.17 0 .397-.064.62.464.226.544.773 1.884.84 2.02.067.137.112.3.022.482-.09.183-.135.298-.27.458-.135.16-.284.358-.405.48-.135.138-.277.288-.12.56.157.27.7 1.15 1.5 1.86.8.71 1.477.93 1.687 1.02.21.09.337.076.464-.067.128-.143.557-.648.708-.87.15-.224.3-.185.507-.11.206.074 1.31.618 1.536.732.226.113.376.17.433.267.056.096.056.554-.19 1.25z" />
    </svg>
  );

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="https://tiger-exchange247.com/wp-content/uploads/2022/11/logo-text-1024x179.png"
              alt="Tiger365 Logo"
              width={185}
              height={32}
              priority
              className={styles.logoImg}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="/">Home</Link>
          <Link href="#about">Tiger365</Link>
          <a href={getWhatsAppLink("Tiger Exchange Cricket")} target="_blank" rel="noopener noreferrer">
            Tiger Exchange Cricket
          </a>
          <Link href="/#blogs">
            Blog
          </Link>
        </nav>

        <div className={styles.navActions}>
          <a 
            href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20want%20to%20get%20Tiger%20Exchange%20ID%20instantly.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.waIconWrapper}
            aria-label="WhatsApp Us"
          >
            {whatsappIcon}
          </a>

          <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>
            PLAY NOW
          </WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>Tiger365</Link>
          <a href={getWhatsAppLink("Tiger Exchange Cricket")} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
            Tiger Exchange Cricket
          </a>
          <Link href="/#blogs" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <div className={styles.mobileActions}>
            <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>
              PLAY NOW
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
