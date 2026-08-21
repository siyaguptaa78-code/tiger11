import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Features() {
  return (
    <section className={styles.featuresSection} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Platform <span>Features</span>
          </h2>
          <p className={styles.subtitle}>
            Experience a premium sports exchange built for reliability.
          </p>
        </div>

        {/* Highlighted Featured Benefits */}
        <div className={styles.featuredGrid}>
          <div className={`${styles.featuredCard} ${styles.gradientCard}`}>
            <div className={styles.iconLarge}>⚡</div>
            <h3>Instant ID Creation</h3>
            <p>Connect with our verified WhatsApp support to generate your Tiger365 ID and start playing immediately without complicated forms.</p>
          </div>
          <div className={`${styles.featuredCard} ${styles.darkCard}`}>
            <div className={styles.iconLarge}>🎯</div>
            <h3>Multi-Market Betting</h3>
            <p>Access our comprehensive Sportsbook including Cricket, Tennis, and Soccer, alongside premium Live Casino Lobbies.</p>
          </div>
          <div className={`${styles.featuredCard} ${styles.outlineCard}`}>
            <div className={styles.iconLarge}>🔒</div>
            <h3>Secure & Encrypted</h3>
            <p>Your transactions and personal credentials are protected with industry-standard encryption for a safe gaming experience.</p>
          </div>
        </div>

        {/* Compact Secondary Features */}
        <div className={styles.compactGrid}>
          <div className={styles.compactCard}>
            <span className={styles.compactIcon}>📊</span>
            <div className={styles.compactContent}>
              <h4>Real-time Records</h4>
              <p>Live sync of your bet histories and balances.</p>
            </div>
          </div>
          
          <div className={styles.compactCard}>
            <span className={styles.compactIcon}>💬</span>
            <div className={styles.compactContent}>
              <h4>24/7 VIP Helpdesk</h4>
              <p>Round-the-clock WhatsApp customer support.</p>
            </div>
          </div>
          
          <div className={styles.compactCard}>
            <span className={styles.compactIcon}>🤝</span>
            <div className={styles.compactContent}>
              <h4>Official Exchange</h4>
              <p>Transparent, organized, and fair betting.</p>
            </div>
          </div>

          <div className={styles.compactCard}>
            <span className={styles.compactIcon}>🧠</span>
            <div className={styles.compactContent}>
              <h4>Responsible Gaming</h4>
              <p>Tools to ensure a controlled gaming experience.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className="btn-primary">
            GET YOUR OFFICIAL TIGER365 ID
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
