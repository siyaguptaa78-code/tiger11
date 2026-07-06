import styles from "./ComparisonTable.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ComparisonTable() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Tiger365 vs Other Platforms
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          There are many online betting websites in India; however, trust is the most critical factor in choosing a reliable bookmaker. Here are some reasons why we are different from the rest:
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.highlightCol}>{SITE_CONFIG.brand.name}</th>
                <th>Typical Competitors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Years Of Experience</td>
                <td className={styles.highlightCol}>Since 2010 (13+ yrs)</td>
                <td>Mostly under 2 yrs</td>
              </tr>
              <tr>
                <td>ID Activation Speed</td>
                <td className={styles.highlightCol}>60 Seconds</td>
                <td>2-24 Hours</td>
              </tr>
              <tr>
                <td>Minimum Deposit</td>
                <td className={styles.highlightCol}>₹100</td>
                <td>₹500 – ₹1,000</td>
              </tr>
              <tr>
                <td>UPI Withdrawal Speed</td>
                <td className={styles.highlightCol}>Within 30 Mins</td>
                <td>6-48 Hours</td>
              </tr>
              <tr>
                <td>Welcome Bonus</td>
                <td className={styles.highlightCol}>500% Up To ₹50,000</td>
                <td>100-200%</td>
              </tr>
              <tr>
                <td>Daily Cashback</td>
                <td className={styles.highlightCol}>15%</td>
                <td>0%-5%</td>
              </tr>
              <tr>
                <td>Support Availability</td>
                <td className={styles.highlightCol}>24/7 WhatsApp</td>
                <td>Only Business Hours</td>
              </tr>
              <tr>
                <td>User Rating</td>
                <td className={styles.highlightCol}>4.9/5</td>
                <td>3.5-4.2/5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
