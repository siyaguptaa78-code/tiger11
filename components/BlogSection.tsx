import Link from "next/link";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="blogs">
      <div className="container">
        <h2 className="section-title text-center">
          Latest <span>Cricket Blogs</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Stay updated with the latest cricket guides, histories, tournament records, and insights.
        </p>

        <div className={styles.grid}>
          {/* Card: Tiger365Play Complete Guide */}
          <div className={styles.card}>
            <div className={styles.icon}>🏏</div>
            <div className={styles.content}>
              <h3>Tiger365Play: Complete Guide to Sports & Gaming</h3>
              <p className={styles.cardDesc}>
                Explore Tiger365Play: comprehensive coverage of cricket exchange markets, live in-play betting, account ID setup, login security, and payment methods.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/tiger365play-guide/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card 1: Champions Trophy Winners List */}
          <div className={styles.card}>
            <div className={styles.icon}>🏆</div>
            <div className={styles.content}>
              <h3>Champions Trophy Winners List</h3>
              <p className={styles.cardDesc}>
                {"Cricket's \"mini World Cup\" returned in 2025 with India lifting the trophy in Dubai. Discover every Champions Trophy winner from 1998 to 2025, including runners-up, hosts, and team titles."}
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/champions-trophy-winners-list/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
