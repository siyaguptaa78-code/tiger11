import styles from "./Testimonials.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          What Our Members Say About <span>{SITE_CONFIG.brand.name}</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I have been a Tiger365 user for three IPL seasons now, and I must say that the withdrawals are incredibly fast. I never had to wait more than 20 minutes for a UPI withdrawal. I recommended Tiger365 to four of my friends, and they all had a pleasant experience with the bookmaker."
            </p>
            <div className={styles.author}>
              <h4>Vikram Mehta</h4>
              <span>Hyderabad</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I was really reluctant to make any deposits on a betting website because one Telegram operator scammed me earlier. However, one friend recommended Tiger365, and I decided to try this bookmaker. I deposited ₹100, made a few bets on CSK matches, and won ₹3,400, which I got in my Paytm wallet within 15 minutes."
            </p>
            <div className={styles.author}>
              <h4>Sneha Iyer</h4>
              <span>Chennai</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "The minimum deposit of ₹100 was ideal for me because I did not want to risk ₹1,000 on a website I did not know well. Now, three months later, I am a regular user and have withdrawn more than ₹40,000 from my account. I believe the live betting markets during the IPL matches are absolutely fantastic."
            </p>
            <div className={styles.author}>
              <h4>Arjun Kapoor</h4>
              <span>Jaipur</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I had several questions about the live login registration, and the support team responded to me right away on WhatsApp. They helped me create my ID in less than a minute. Honestly, the process was seamless, and I have to admit other bookmakers looked ridiculous after I used Tiger365."
            </p>
            <div className={styles.author}>
              <h4>Ravi Verma</h4>
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
