import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={styles.section} id="withdrawal">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Fast & Secure <span>Withdrawals</span>
          </h2>
          <p className={styles.subtitle}>
            Your winnings, your way. We process withdrawals efficiently through trusted payment methods.
          </p>
        </div>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI Options</h3>
            <p>Compatible with GPay, PhonePe, and Paytm. Quick processing directly to your linked bank account.</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer</h3>
            <p>Direct NEFT/IMPS transfers available around the clock for standard bank routing.</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>💬</div>
            <h3>WhatsApp Support</h3>
            <p>Request withdrawals directly through our verified support channel for immediate processing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
