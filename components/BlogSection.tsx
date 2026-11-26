import Link from "next/link";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="blogs">
      <div className="container">
        <h2 className="section-title text-center">
          Latest <span>Sports & Gaming Blogs</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Stay updated with Premier League rules, tennis scoring, basketball guides, football tactics, kabaddi rules, and match insights.
        </p>

        <div className={styles.grid}>
          {/* Card: Premier League Points & Tie-Breakers */}
          <div className={styles.card}>
            <div className={styles.icon}>🦁</div>
            <div className={styles.content}>
              <h3>Premier League Points & Tie-Breakers</h3>
              <p className={styles.cardDesc}>
                How Premier League standings work: 3-point system, goal difference tiebreakers, neutral-venue play-offs, relegation, and European qualification permutations.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/how-premier-league-points-relegation-tie-breakers-work/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Tennis Scoring System Explained */}
          <div className={styles.card}>
            <div className={styles.icon}>🎾</div>
            <div className={styles.content}>
              <h3>Tennis Scoring System Explained</h3>
              <p className={styles.cardDesc}>
                Understand the 3-tier hierarchy of points (Love, 15, 30, 40), Deuce and Advantage, winning sets (6–4, 7–5), and 7-point vs. 10-point tiebreaks under ITF rules.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/tennis-scoring-system-explained-points-games-sets-tiebreak/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Basketball Rules & NBA Format */}
          <div className={styles.card}>
            <div className={styles.icon}>🏀</div>
            <div className={styles.content}>
              <h3>Basketball Rules & NBA Format Explained</h3>
              <p className={styles.cardDesc}>
                A complete beginner&apos;s guide to basketball: court dimensions, scoring, 24-second shot clock, fouls vs. violations, NBA vs. FIBA rules, and the road to the NBA Finals.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/basketball-rules-for-beginners-nba-format-explained/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Football Transfer Windows */}
          <div className={styles.card}>
            <div className={styles.icon}>💼</div>
            <div className={styles.content}>
              <h3>Football Transfer Windows Explained</h3>
              <p className={styles.cardDesc}>
                The complete guide to FIFA RSTP rules, three-party agreements, fee amortization, FIFA TMS validation, and Deadline Day in Indian Standard Time (IST).
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/how-football-transfer-windows-work-fifa-rules-guide/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Kabaddi Rules Explained */}
          <div className={styles.card}>
            <div className={styles.icon}>🤼</div>
            <div className={styles.content}>
              <h3>Kabaddi Rules Explained: Raids, Tackles & Scoring</h3>
              <p className={styles.cardDesc}>
                Complete guide to professional kabaddi: court geometry, 30-second raid mechanics, tackle techniques, bonus line trailing foot rules, and super tackles.
              </p>
              <div className={styles.btnWrapper}>
                <Link href="/kabaddi-rules-explained-raid-tackle-bonus-super-tackle/" className={styles.moreBtn}>
                  Show More
                </Link>
              </div>
            </div>
          </div>

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
