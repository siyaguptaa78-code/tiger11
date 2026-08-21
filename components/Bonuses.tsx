import styles from "./Bonuses.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Bonuses() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Platform <span>Offers</span>
          </h2>
          <p className={styles.subtitle}>Discover the benefits of playing on Tiger365.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>🎁</div>
            <h3>Welcome Offers</h3>
            <p>New players can take advantage of introductory offers upon creating their first Tiger365 ID.</p>
            <ul className={styles.list}>
              <li>Check WhatsApp for current promos</li>
              <li>Valid on first deposit</li>
              <li>Terms and conditions apply</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🔄</div>
            <h3>Cashback Rewards</h3>
            <p>We value our regular players. Enjoy cashback rewards on your gameplay to keep the action going.</p>
            <ul className={styles.list}>
              <li>Automatic calculation</li>
              <li>Added directly to wallet</li>
              <li>Subject to activity levels</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3>Referral Program</h3>
            <p>Invite your friends to Tiger365 and receive rewards when they join and start playing.</p>
            <ul className={styles.list}>
              <li>Unlimited referrals</li>
              <li>Share your unique link</li>
              <li>Earn rewards per active friend</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
