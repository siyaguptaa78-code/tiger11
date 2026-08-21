import styles from "./Testimonials.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Users Choose <span>{SITE_CONFIG.brand.name}</span>
          </h2>
          <p className={styles.subtitle}>
            A platform built for security, speed, and a premium gaming experience.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconArea}>⚡</div>
            <h3>Fast Transactions</h3>
            <p>
              We prioritize processing speed for all deposits and withdrawals, minimizing wait times so you can focus on the action.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconArea}>🔒</div>
            <h3>Secure Platform</h3>
            <p>
              Your data and privacy are protected. We implement industry-standard security measures to ensure a safe gaming environment.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconArea}>🎯</div>
            <h3>Extensive Markets</h3>
            <p>
              From major international cricket tournaments to local football leagues and live casino games, our coverage is comprehensive.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconArea}>📱</div>
            <h3>24/7 Support</h3>
            <p>
              Our dedicated support team is available around the clock via WhatsApp to assist with ID creation and platform navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
