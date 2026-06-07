import styles from "./ResponsibleGaming.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ResponsibleGaming() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.warningHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Responsible Gaming at Tiger365</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Users can enjoy online gaming without taking any risks because of responsible gaming. It encourages controlled and safe gaming. Tiger365 offers tools for efficient time and money management and encourages players to play within their boundaries. Gaming should never be seen as a source of stress, but rather as a kind of leisure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
