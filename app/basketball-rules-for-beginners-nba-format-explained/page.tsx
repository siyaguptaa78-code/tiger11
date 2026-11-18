import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "Basketball Rules for Beginners & NBA Format Explained: Complete Guide",
  description: "Beginner's guide to basketball rules and NBA format: scoring, shot clock, violations vs fouls, NBA vs FIBA differences, Play-In tournament, and Indian viewing times.",
  alternates: {
    canonical: "/basketball-rules-for-beginners-nba-format-explained/",
  },
  openGraph: {
    title: "Basketball Rules for Beginners & NBA Format Explained: Complete Guide",
    description: "Beginner's guide to basketball rules and NBA format: scoring, shot clock, violations vs fouls, NBA vs FIBA differences, Play-In tournament, and Indian viewing times.",
    url: "https://tiger365play.com/basketball-rules-for-beginners-nba-format-explained/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basketball Rules for Beginners & NBA Format Explained: Complete Guide",
    description: "Beginner's guide to basketball rules and NBA format: scoring, shot clock, violations vs fouls, NBA vs FIBA differences, Play-In tournament, and Indian viewing times.",
  },
};

const faqs = [
  {
    q: "How many players are on a basketball court at once?",
    a: "Ten players are on the court simultaneously—five per side. There is no limit on in-game substitutions from an NBA team's 15-man active roster (plus three two-way contract players).",
  },
  {
    q: "What time do NBA games begin in India?",
    a: "Due to time zone differences between North America and India, the majority of NBA games air between 5:30 AM and 9:00 AM IST. Weekend afternoon matchups in the United States broadcast at convenient evening slots such as 11:00 PM or 1:00 AM IST.",
  },
  {
    q: "What happens when there's a tie in an NBA game after four quarters?",
    a: "Basketball games cannot end in a draw. If scores are tied after regulation (four quarters), a 5-minute overtime period is played. Successive 5-minute overtimes continue until a winner is determined.",
  },
  {
    q: "Why is the NBA three-point line closer to the basket from the corners?",
    a: "A regulation basketball court is 50 feet wide. Maintaining a uniform 23-foot 9-inch radius to the sidelines would leave virtually no room for a player's feet. Drawing straight lines parallel to the sidelines at 22 feet ensures shooters have 3 feet of space in the corners.",
  },
  {
    q: "How can fans in India track NBA statistics and game analysis?",
    a: "Fans in India can watch live broadcasts via NBA League Pass and authorized broadcast partners, alongside live box scores on NBA.com. Comprehensive multi-sport match coverage and market statistics can also be explored on platforms like Tiger365Play.",
  },
];

export default function BasketballRulesGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Basketball Rules for Beginners and NBA Format Explained: A Complete Guide for Indian Fans",
    description: "Comprehensive guide to basketball fundamentals and NBA season format: scoring, time rules, violations vs fouls, NBA vs FIBA rule comparisons, and the road to the NBA Finals.",
    author: {
      "@type": "Organization",
      name: "Tiger365 Play Sports Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Tiger365 Play",
      logo: {
        "@type": "ImageObject",
        url: "https://tiger-exchange247.com/wp-content/uploads/2022/11/logo-text-1024x179.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://tiger365play.com/basketball-rules-for-beginners-nba-format-explained/",
    },
  };

  return (
    <div className="main-wrapper">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />
      <WhatsAppFloat />

      <div className="layout-body-wrapper">
        <SportsSidebar />
        <div className="layout-content-area">
          {/* Moving Marquee live ticker */}
          <div className="live-ticker-banner">
            <div className="ticker-text">
              🔥 WELCOME TO TIGER365, PLAY HERE ALL YOUR FAVORITE SPORTS BACK & LAY EXCHANGE MARKETS AND INTERNATIONAL CASINO GAMES (24*7), THANK YOU. GET YOUR INSTANT WHATSAPP ID NOW! 🔥
            </div>
          </div>

          <article className={styles.articleWrapper}>
            <div className={styles.articleBody}>
              <h1 className={styles.h1}>
                Basketball Rules for Beginners and NBA Format Explained: A Complete Guide for Indian Fans
              </h1>

              <p className={styles.paragraph}>
                Basketball matches consist of five players per side competing to score points by putting the ball through a hoop elevated 10 feet (3.05 metres) above the court. While this basic concept is readily understood within seconds, watching live morning telecasts of the NBA in India can quickly become overwhelming when officials blow whistles for infractions like a &quot;backcourt violation,&quot; &quot;defensive three seconds,&quot; or a &quot;flagrant foul.&quot;
              </p>

              <p className={styles.paragraph}>
                Understanding basketball requires separating the universal fundamentals of the sport from the specific tournament regulations employed by the National Basketball Association (NBA). International fixtures—such as the Olympics, the FIBA World Cup, and domestic Indian tournaments governed by the Basketball Federation of India (BFI)—follow FIBA rules. The NBA operates under its own distinct regulatory rulebook, featuring differences in game clock duration, court spacing, and foul limits.
              </p>

              <h2 className={styles.h2}>Basic Rules of Basketball Every Beginner Player Must Learn</h2>
              <p className={styles.paragraph}>
                A standard basketball match is played on a hardwood court split into two identical halves by a mid-court division line. Each squad defends its own basket while attacking the opponent&apos;s hoop, with teams switching court ends at the start of the second half.
              </p>

              {/* Court Diagram Image */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/basketball-court-dimensions-guide.jpg"
                  alt="Standard Basketball Court Dimensions and Layout Diagram"
                  width={945}
                  height={615}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  Court Blueprint: Baseline, 15 ft free-throw line, free-throw lane (the paint), 10 ft rim height, and division line.
                </figcaption>
              </figure>

              <h3 className={styles.h3}>1. Understanding How Scoring Happens in Basketball</h3>
              <p className={styles.paragraph}>
                Unlike football or hockey where every goal has uniform value, basketball awards different point tallies depending on the distance and circumstances of the attempt:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>2-Point Field Goal:</strong> Any successful basket scored from inside the three-point arc during normal live play, including layups, mid-range jump shots, and slam dunks.
                </li>
                <li>
                  <strong>3-Point Field Goal:</strong> Any successful basket launched from behind the three-point arc curve line. The shooter&apos;s feet must both be established completely behind the line before the release of the ball.
                </li>
                <li>
                  <strong>Free Throw (1 Point):</strong> An uncontested single-point shot awarded from the free-throw line (15 feet away from the backboard) following personal fouls or technical penalties.
                </li>
              </ul>

              <h3 className={styles.h3}>2. Ball Movement and Time Clocks</h3>
              <p className={styles.paragraph}>
                Players advance the basketball across the floor by passing to a teammate or by dribbling (continuously bouncing the ball against the floor with one hand while moving). Once a player terminates their dribble and gathers the ball with both hands, they cannot dribble again—they must either execute a pass or attempt a shot.
              </p>
              <p className={styles.paragraph}>
                To ensure high-octane tempo and prevent defensive or offensive stalling, modern basketball enforces strict temporal clocks:
              </p>

              <div className={styles.ruleBox}>
                <div className={styles.ruleBoxTitle}>24-Second Shot Clock</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  The offensive team must attempt a field goal that at least contacts the rim within 24 seconds of gaining possession. Failure to hit the rim results in an immediate turnover.
                </p>
              </div>

              <div className={styles.ruleBox}>
                <div className={styles.ruleBoxTitle}>8-Second Backcourt Rule</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  Upon securing defensive control in their own half (the backcourt), the offensive team has 8 seconds to advance the ball past the mid-court division line into the frontcourt.
                </p>
              </div>

              <div className={styles.ruleBox}>
                <div className={styles.ruleBoxTitle}>3-Second Lane Violation</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  An offensive player cannot remain stationary inside the painted rectangular area beneath the opposing basket (&quot;the paint&quot; or &quot;the key&quot;) for more than 3 consecutive seconds without attempting a shot.
                </p>
              </div>

              <h2 className={styles.h2}>Common Violations and Fouls</h2>
              <p className={styles.paragraph}>
                New spectators often confuse violations with fouls, but the rules treat them with distinctly different penalties:
              </p>

              <h3 className={styles.h3}>Violations (Ball-Handling Infractions Without Physical Contact)</h3>
              <p className={styles.paragraph}>
                Violations result in a simple turnover, awarding the opposing squad an out-of-bounds throw-in:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Traveling:</strong> Taking more than two steps without dribbling the ball, or sliding/hopping on the pivot foot.
                </li>
                <li>
                  <strong>Double Dribble:</strong> Dribbling with both hands simultaneously, or resuming a dribble after previously coming to a complete stop and holding the ball.
                </li>
                <li>
                  <strong>Backcourt Violation:</strong> Once an offensive team establishes possession across the mid-court line into the frontcourt, they cannot pass or dribble the ball backwards across the center line.
                </li>
                <li>
                  <strong>Goaltending &amp; Basket Interference:</strong> Touching the ball while it is on its downward trajectory toward the hoop or above the cylinder. In this event, the basket is automatically counted for the shooter.
                </li>
              </ul>

              <h3 className={styles.h3}>Fouls (Illegal Physical Contact)</h3>
              <p className={styles.paragraph}>
                Fouls involve unlawful physical engagement that disrupts an opponent&apos;s freedom of movement:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Personal Fouls:</strong> Pushing, holding, tripping, or slapping an opponent&apos;s arms. If committed against a player in the act of shooting, two or three free throws are awarded depending on shot distance. If the basket is made despite the foul, the points count and the shooter receives one bonus free throw (&quot;and-one&quot;).
                </li>
                <li>
                  <strong>Team Fouls &amp; Bonus:</strong> Each personal foul is added to a team quarterly tally. Once a team reaches four fouls in a quarter under FIBA (five in the NBA), every subsequent non-shooting foul awards two free throws to the opposing team.
                </li>
                <li>
                  <strong>Foul Out:</strong> A player is permanently ejected from the contest after picking up six personal fouls in the NBA (five under FIBA).
                </li>
              </ul>

              <h2 className={styles.h2}>Key Differences Between NBA and FIBA Rules</h2>
              <p className={styles.paragraph}>
                Indian basketball supporters following domestic college circuits, national BFI games, and morning NBA telecasts will notice important structural contrasts:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Rule Category</th>
                      <th>NBA Rules</th>
                      <th>FIBA (International &amp; India) Rules</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Game Duration</strong></td>
                      <td>4 quarters of 12 minutes (48 mins total)</td>
                      <td>4 quarters of 10 minutes (40 mins total)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Overtime Period</strong></td>
                      <td>5 minutes</td>
                      <td>5 minutes</td>
                    </tr>
                    <tr>
                      <td><strong>Three-Point Distance</strong></td>
                      <td>23 ft 9 in (7.24 m) at top; 22 ft (6.7 m) in corners</td>
                      <td>22 ft 1.75 in (6.75 m) at top; 21 ft 8 in (6.6 m) in corners</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Personal Foul Limit</strong></td>
                      <td>6 fouls before disqualification</td>
                      <td>5 fouls before disqualification</td>
                    </tr>
                    <tr>
                      <td><strong>Defensive Three-Second Rule</strong></td>
                      <td>Strictly enforced (defenders cannot camp in paint without active guarding)</td>
                      <td>Not enforced (teams can play pure zone defenses with a center camped in paint)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Timeouts</strong></td>
                      <td>7 team timeouts per game (called by coach or player on court)</td>
                      <td>5 team timeouts per game (called exclusively by coach during dead balls)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.paragraph}>
                One of the most consequential tactical differences is the NBA&apos;s <strong>defensive three-second rule</strong>. By barring rim protectors from simply camping permanently under the basket, the NBA opens wide driving lanes for explosive dunks and individual perimeter scoring, whereas FIBA rules allow for denser, more suffocating interior zone defenses.
              </p>

              <h2 className={styles.h2}>NBA Format Explained: How Does the Season Work?</h2>
              <p className={styles.paragraph}>
                The NBA comprises 30 franchises: 29 located in the United States and one in Canada (the Toronto Raptors). The league is split into two conferences of 15 teams each—the <strong>Eastern Conference</strong> and the <strong>Western Conference</strong>—each containing three geographic divisions of five teams.
              </p>

              <h3 className={styles.h3}>1. The Regular Season (October – April)</h3>
              <p className={styles.paragraph}>
                Every franchise competes in an arduous 82-game regular season running from October through April. Teams face division opponents four times, conference rivals three to four times, and non-conference opponents twice (home and away). Standings are ranked strictly by win-loss percentage.
              </p>
              <p className={styles.paragraph}>
                It is throughout this high-volume period that sports analysts, fans of online sports entertainment, and users accessing portals like <Link href="/" className={styles.inlineLink}>Tiger365Play</Link> looking for an <Link href="/" className={styles.inlineLink}>Online Betting ID</Link> track daily roster rotations, injury reports, and pace statistics.
              </p>

              <h3 className={styles.h3}>2. The NBA Cup (In-Season Tournament)</h3>
              <p className={styles.paragraph}>
                Inaugurated in the 2023–24 season, the NBA Cup takes place across November and December. All 30 teams play tournament group matches on custom-designed courts that concurrently count towards regular season standings. Eight teams advance to a single-elimination knockout bracket, concluding with the Championship Game in Las Vegas (the only match that does not count towards the 82-game regular season record).
              </p>

              <h3 className={styles.h3}>3. SoFi NBA Play-In Tournament</h3>
              <p className={styles.paragraph}>
                At the conclusion of the 82-game slate, the top six seeds in each conference secure direct playoff berths. Teams ranked 7th through 10th enter the intense Play-In Tournament to battle for the final two seeds (7th and 8th):
              </p>
              <ul className={styles.ruleList}>
                <li><strong>Game 1 (7th vs. 8th Seed):</strong> The winner clinches the 7th playoff seed.</li>
                <li><strong>Game 2 (9th vs. 10th Seed):</strong> The loser is immediately eliminated; the winner moves to Game 3.</li>
                <li><strong>Game 3 (Loser of 7/8 vs. Winner of 9/10):</strong> The winner secures the 8th and final playoff berth, while the loser is eliminated.</li>
              </ul>

              <h3 className={styles.h3}>4. NBA Playoffs &amp; NBA Finals (April – June)</h3>
              <p className={styles.paragraph}>
                Sixteen teams (eight from each conference) enter the NBA Playoffs. Every series is a grueling best-of-seven format where the first team to win four games advances. The higher seed enjoys home-court advantage in a 2-2-1-1-1 schedule format.
              </p>
              <ul className={styles.ruleList}>
                <li>First Round (1 vs. 8, 2 vs. 7, 3 vs. 6, 4 vs. 5)</li>
                <li>Conference Semifinals</li>
                <li>Conference Finals</li>
              </ul>
              <p className={styles.paragraph}>
                Finally, the Eastern Conference Champions and Western Conference Champions collide on the global stage in the <strong>NBA Finals</strong> to compete for the prestigious Larry O&apos;Brien Championship Trophy.
              </p>

              <h2 className={styles.h2}>Frequently Asked Questions (FAQs)</h2>
              <div className={styles.faqSection} style={{ marginTop: '1rem', borderTop: 'none', paddingTop: 0 }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h3>{idx + 1}. {faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              <h2 className={styles.h2}>Conclusion: Enjoying the Global Game from India</h2>
              <p className={styles.paragraph}>
                Basketball is one of the most dynamic team sports in the world once you understand the balance between the 24-second shot clock, court dimensions, and the crucial distinction between non-contact violations and physical fouls. In the NBA, these core rules govern an 82-game marathon before narrowing into high-stakes playoff drama.
              </p>

              <div className={styles.footnote}>
                Official Basketball rules referenced from the NBA Official Rulebook and the International Basketball Federation (FIBA). Match analysis and tournament guide compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
