import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Footer() {
  const getWhatsAppLink = (section: string) => {
    const text = encodeURIComponent(`Hi! I want to get details regarding ${section} on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        
        {/* ==========================================
            DISCLAIMER SECTION
            ========================================== */}
        <div className={styles.disclaimerBox}>
          <div className={styles.disclaimerContent}>
            <h4 className={styles.disclaimerTitle}>LICENSE & SECURITY</h4>
            <p className={styles.disclaimerText}>
              Tiger Exchange – India’s fastest-growing exchange brings you the most secured platform to bet on Multiple Sports and Multiple Markets like Cricket, Tennis, Football, 200+ Casinos Games and Many More. Licensed and Regulated by Curacao Authority with company registration number 152377 and holding a license no. 365/JAZ Sub-License GLH- OCCHKTW0707072017.
            </p>
          </div>
          <div className={styles.disclaimerContent}>
            <h4 className={styles.disclaimerTitle}>RESPONSIBLE GAMING</h4>
            <p className={styles.disclaimerText}>
              Tiger365 is an online gaming platform. Fantasy sports and casino games carry financial risk and can be addictive. Please play responsibly and at your own risk. Only users who are 18 years of age or older are permitted to play. Access may be restricted in states where online gaming is prohibited by local regulations, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu.
            </p>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        {/* ==========================================
            MAIN FOOTER CONTENT
            ========================================== */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Logo & Trust details */}
          <div className={styles.footerCol}>
            <div className={styles.logoWrapper}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2022/11/logo-text-1024x179.png"
                alt="Tiger 365 Logo"
                width={190}
                height={33}
                className={styles.logoImg}
              />
            </div>
            <p className={styles.brandSubtitle}>
              Premium secure gaming & sports betting exchange.
            </p>
            
            <div className={styles.badgeGallery}>
              <span className={styles.badgeText}>🔞 18+ Play Responsibly</span>
              <span className={styles.badgeText}>🔒 SSL Secured</span>
              <span className={styles.badgeText}>🛡️ Curacao Certified</span>
            </div>
          </div>

          {/* Column 2: Platform & Info */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Platform</h3>
            <div className={styles.colDivider}></div>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#steps">How to Play</Link></li>
              <li><Link href="#exchange">Live Exchange</Link></li>
            </ul>
          </div>

          {/* Column 3: Sports/Games */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Sports & Games</h3>
            <div className={styles.colDivider}></div>
            <ul className={styles.linksList}>
              <li><a href={getWhatsAppLink("Cricket")}>Cricket Exchange</a></li>
              <li><a href={getWhatsAppLink("Football")}>Football Markets</a></li>
              <li><a href={getWhatsAppLink("Tennis")}>Tennis Markets</a></li>
              <li><a href={getWhatsAppLink("Live Casino")}>Live Casino Lobbies</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Support & Legal</h3>
            <div className={styles.colDivider}></div>
            <ul className={styles.linksList}>
              <li><a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">24/7 WhatsApp Support</a></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><a href={getWhatsAppLink("Terms & Conditions")}>Terms & Conditions</a></li>
              <li><a href={getWhatsAppLink("Privacy Policy")}>Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            Copyright &copy; {new Date().getFullYear()} Tiger365Play.com. All Rights Reserved.
          </p>
          <div className={styles.footerBtnBox}>
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.footerWaBtn}>
              💬 Contact Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
