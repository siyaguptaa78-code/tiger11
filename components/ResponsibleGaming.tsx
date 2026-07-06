import styles from "./ResponsibleGaming.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ResponsibleGaming() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.warningHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Responsible Gaming At Tiger365</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              By playing on Tiger365, users can enjoy online gambling without risking their well-being due to responsible gaming. This feature promotes a sensible approach to gaming. By encouraging responsible gaming, Tiger365 wants its players to engage in controlled and safe gambling. In fact, responsible gaming provides gamblers with essential tools for managing their time and money wisely. In addition, this feature reminds users that gambling should not be seen as a means of solving their financial problems but as a form of entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
