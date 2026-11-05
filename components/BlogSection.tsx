import Link from "next/link";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="blogs">
      <div className="container">
        <h2 className="section-title text-center">
          Latest <span>Sports & Cricket Blogs</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Stay updated with the latest football guides, officiating technology, cricket histories, and match insights.
        </p>

        <div className={styles.grid}>
          {/* Card: VAR in Football */}
          <div className={styles.card}>
            <div className={styles.icon}>📺</div>
            <div className={styles.content}>
              <h3>VAR in Football: Technology & Controversies</h3>
              <p className={styles.cardDesc}>
                How video officiating works, the &quot;clear and obvious&quot; standard, the 4 review categories, major controversies, and the Indian horizon with FIFA&apos;s FVS system.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/var-in-football-how-it-works-controversies/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Football Offside Rule */}
          <div className={styles.card}>
            <div className={styles.icon}>⚽</div>
            <div className={styles.content}>
              <h3>Football Offside Rule Explained Simply</h3>
              <p className={styles.cardDesc}>
                Real match examples, IFAB Law 11 checkpoints, the second-last opponent rule, VAR flag delays, active interference, and why goals get ruled out.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/offside-rule-explained-simple-examples/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: IPL 2027 Auction Guide */}
          <div className={styles.card}>
            <div className={styles.icon}>🏏</div>
            <div className={styles.content}>
              <h3>IPL 2027 Auction: Expected Date, Players List, Purse & Rules</h3>
              <p className={styles.cardDesc}>
                Everything confirmed so far about the IPL 2027 auction — retention and RTM rules, the ₹157 crore salary cap, overseas player rules, the Impact Player regulation, and what&apos;s still unannounced.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/ipl-2027-auction-guide/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

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

          {/* Card: Champions Trophy Winners List */}
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
