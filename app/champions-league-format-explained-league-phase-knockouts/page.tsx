import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "Champions League Format Explained: 36-Team League Phase & Knockouts",
  description: "Complete guide to the UEFA Champions League 36-team format: four-pot draw, single league table, Article 18 tiebreakers, seeded knockout bracket, and Indian broadcast timings.",
  alternates: {
    canonical: "/champions-league-format-explained-league-phase-knockouts/",
  },
  openGraph: {
    title: "Champions League Format Explained: 36-Team League Phase & Knockouts",
    description: "Complete guide to the UEFA Champions League 36-team format: four-pot draw, single league table, Article 18 tiebreakers, seeded knockout bracket, and Indian broadcast timings.",
    url: "https://tiger365play.com/champions-league-format-explained-league-phase-knockouts/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Champions League Format Explained: 36-Team League Phase & Knockouts",
    description: "Complete guide to the UEFA Champions League 36-team format: four-pot draw, single league table, Article 18 tiebreakers, seeded knockout bracket, and Indian broadcast timings.",
  },
};

const faqs = [
  {
    q: "How many matches are played by each team in the Champions League league stage?",
    a: "Each team plays eight matches against eight different opponents—four at home and four away. There are no reverse home-and-away fixtures against the same club during the league phase.",
  },
  {
    q: "How many points are required for teams to place among the top 8 or top 24?",
    a: "While exact thresholds vary depending on season dynamics, analytical projections indicate that roughly 16 to 17 points virtually guarantees a top-8 finish, while 10 to 11 points with a positive goal difference is typically sufficient to secure a top-24 knockout play-off spot.",
  },
  {
    q: "Is it possible for teams of the same country to play against each other in the knockout phase play-offs?",
    a: "Yes. Country protection rules are completely lifted once the league phase concludes. From the knockout phase play-offs through the Final, clubs from the same domestic league can be drawn against one another.",
  },
  {
    q: "Is the away goals rule applicable in the knockout phase of the Champions League?",
    a: "No. UEFA completely abolished the away goals rule across all European club competitions in 2021. If teams remain level on aggregate goals after 180 minutes across two legs, the tie proceeds to 30 minutes of extra time followed by a penalty shootout if necessary.",
  },
  {
    q: "What is the fate of teams ranking 25th to 36th in the league phase?",
    a: "Clubs finishing 25th to 36th are entirely eliminated from European football for the remainder of the season. There is no parachute mechanism into the UEFA Europa League.",
  },
  {
    q: "Why are 1st and 2nd ranked teams on opposite sides of the knockout draw?",
    a: "UEFA's seeded tennis-style bracket places the 1st and 2nd seeds in opposing halves (alongside pairs 3rd/4th, 5th/6th, and 7th/8th) to reward regular-phase excellence and ensure that the two highest-ranked league clubs cannot meet before the Champions League Final.",
  },
];

export default function ChampionsLeagueFormatGuidePage() {
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
    headline: "Champions League Format Explained: How the 36-Team League Phase and Seeded Knockouts Work",
    description: "In-depth tactical guide to the UEFA Champions League 36-team single league format, four-pot draw mechanics, Article 18 tiebreakers, seeded knockout brackets, and fantasy analysis for Indian viewers.",
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
      "@id": "https://tiger365play.com/champions-league-format-explained-league-phase-knockouts/",
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
                Champions League Format Explained: How the 36-Team League Phase and Seeded Knockouts Work
              </h1>

              <p className={styles.paragraph}>
                Over the past two decades, European club football followed an identical formula during autumn months—32 clubs were divided into eight groups of four that played six home-and-away matches against three clubs per group before Christmas, completing one chapter of the story. This format ceased to exist with the introduction of the UEFA competition for 36 clubs in a single league table. It made night-time matches at 1:30 AM IST mid-week battles where one goal scored in January could affect a club&apos;s entire season come spring.
              </p>

              <p className={styles.paragraph}>
                Be it following European nights on <Link href="/" className={styles.inlineLink}>Tiger 365 ID Online</Link>, preparing fantasy line-ups, or simply figuring out why powerhouses play against each other in September—the knowledge of how this league phase works and what is behind the tennis-like knockout bracket will make each matchday much clearer.
              </p>

              {/* Featured Stadium Night Graphic */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/champions-league-stadium-night.jpg"
                  alt="UEFA Champions League Stadium European Night"
                  width={1018}
                  height={699}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  The 36-Team UEFA Champions League: One single table, 8 matches per club, and high-stakes European nights.
                </figcaption>
              </figure>

              <h2 className={styles.h2}>Why Did UEFA Abolish the 32-Teams Group Stage?</h2>
              <p className={styles.paragraph}>
                With the previous system, elite clubs would often qualify in four matches, turning Matchdays 5 and 6 into meaningless dead-rubbers. On top of that, top-seeded clubs never faced each other until February.
              </p>
              <p className={styles.paragraph}>
                Both problems are overcome in the current system, where there are no longer any isolated four-team groups. All 36 participating teams are instead ranked together in one unified table. Each team plays eight games against eight teams—four at home and four away. Since clubs no longer play the same three opponents twice, each game has immense standalone value, and Pot 1 giants face off starting right from Matchday 1.
              </p>

              <h2 className={styles.h2}>How the Four-Pot Draw Decides Your Eight Games</h2>
              <p className={styles.paragraph}>
                Prior to the kickoff of the season in September, the 36 qualifiers are divided into four seeding pots of nine teams each, based on their five-year UEFA club coefficient. The reigning Champions League titleholder is automatically positioned in Pot 1.
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Two Opponents Per Pot:</strong> Automated digital draw software assigns each club two opponents from Pot 1, two from Pot 2, two from Pot 3, and two from Pot 4.
                </li>
                <li>
                  <strong>Balanced Home and Away Venues:</strong> In each pot pairing, each club plays one match at home and one match away. Placing a club in Pot 1 no longer shields them from heavyweight encounters.
                </li>
                <li>
                  <strong>Country Protection Regulations:</strong> Clubs from the same domestic association (e.g., two English Premier League or Spanish La Liga teams) cannot play against one another during the league stage, and a club can face a maximum of two opponents from any single foreign nation.
                </li>
              </ul>

              <h2 className={styles.h2}>In the 36-Team League Stage: Qualification and Elimination</h2>
              <p className={styles.paragraph}>
                Following the completion of the eight matchdays at the end of January, the 36-club table divides teams into three decisive tiers:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Final League Phase Rank</th>
                      <th>Qualification Outcome</th>
                      <th>February Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1st to 8th Place</strong></td>
                      <td>Automatic qualification to the Round of 16 (Seeded)</td>
                      <td>Free midweeks (rest &amp; domestic league focus)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>9th to 16th Place</strong></td>
                      <td>Enter Knockout Phase Play-offs (Seeded)</td>
                      <td>Two-legged play-off; 2nd leg hosted at home</td>
                    </tr>
                    <tr>
                      <td><strong>17th to 24th Place</strong></td>
                      <td>Enter Knockout Phase Play-offs (Unseeded)</td>
                      <td>Two-legged play-off; 1st leg hosted at home</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>25th to 36th Place</strong></td>
                      <td>Eliminated from European football completely</td>
                      <td>European campaign terminates in January</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.calloutCard}>
                <div className={styles.calloutTitle}>No More Europa League Safety Net</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  One of the most consequential structural shifts is the abolition of the third-place parachute. In the old era, finishing third in a four-team group granted automatic entry into the UEFA Europa League play-offs. In the current format, all three UEFA club competitions are closed systems once the league phase kicks off. Finishing 25th or lower means immediate exit from European football.
                </p>
              </div>

              <h2 className={styles.h2}>Tie-Breaker Rules (Article 18)</h2>
              <p className={styles.paragraph}>
                With 36 clubs competing for just eight direct spots and sixteen play-off berths, ties on points are inevitable. Under Article 18 of the UEFA Champions League Regulations, tied clubs at the end of Matchday 8 are separated in strict descending order:
              </p>
              <ol className={styles.ruleList}>
                <li>Superior goal difference across all eight league phase matches.</li>
                <li>Higher number of total goals scored.</li>
                <li>Higher number of away goals scored.</li>
                <li>Higher number of total wins.</li>
                <li>Higher number of away wins.</li>
                <li>Strength of schedule: Higher collective points gained by all eight league phase opponents.</li>
                <li>Superior collective goal difference of all eight opponents.</li>
                <li>Higher collective goals scored by all eight opponents.</li>
                <li>Lower disciplinary points total (yellow card = 1 point; direct red card or two yellow cards = 3 points).</li>
                <li>Higher five-year UEFA club coefficient.</li>
              </ol>
              <p className={styles.paragraph}>
                Because overall goal difference is the primary separator, managers of elite clubs no longer sit on a 2–0 cushion. Pushing for a third or fourth goal in November can directly decide whether a team finishes 8th (earning a February bye) or 9th.
              </p>

              <h2 className={styles.h2}>How the Seeded Knockout Bracket Works</h2>
              <p className={styles.paragraph}>
                There are no open Round of 16 draws where group winners could randomly draw a tournament co-favorite. Instead, the knockout phase resembles a seeded Grand Slam tennis bracket under Articles 19 and 20 of the official competition rules.
              </p>

              <h3 className={styles.h3}>Stage 1: Knockout Phase Play-Offs (February)</h3>
              <p className={styles.paragraph}>
                Sixteen clubs placed 9th through 24th battle for eight Round of 16 tickets across two-legged ties. Teams are paired based on ranking brackets:
              </p>
              <ul className={styles.ruleList}>
                <li>9th or 10th (Seeded) vs. 23rd or 24th (Unseeded)</li>
                <li>11th or 12th (Seeded) vs. 21st or 22nd (Unseeded)</li>
                <li>13th or 14th (Seeded) vs. 19th or 20th (Unseeded)</li>
                <li>15th or 16th (Seeded) vs. 17th or 18th (Unseeded)</li>
              </ul>
              <p className={styles.paragraph}>
                Seeded sides (9th–16th) earn the tactical advantage of hosting the second leg at home. Country protection is completely removed—clubs from the same nation can face each other immediately.
              </p>

              <h3 className={styles.h3}>Stage 2: Round of 16 to the Final</h3>
              <p className={styles.paragraph}>
                The eight play-off winners advance into a fixed tournament bracket against the top eight league-phase clubs:
              </p>
              <div className={styles.bracketTree}>
{`1st / 2nd Place  -------> vs. Winner of (15th/16th vs. 17th/18th)
3rd / 4th Place  -------> vs. Winner of (13th/14th vs. 19th/20th)
5th / 6th Place  -------> vs. Winner of (11th/12th vs. 21st/22nd)
7th / 8th Place  -------> vs. Winner of (9th/10th  vs. 23rd/24th)`}
              </div>
              <p className={styles.paragraph}>
                Because the 1st and 2nd seeds are permanently anchored in opposite halves of the bracket tree, the two best-performing teams cannot meet before the Champions League Final, provided they both continue winning. The top eight clubs also host the second leg of their Round of 16 ties.
              </p>
              <p className={styles.paragraph}>
                Quarter-finals and Semi-finals continue as two-legged fixtures leading to the single-match Final at a neutral European venue. The away goals rule remains obsolete—level aggregate scores after 180 minutes proceed directly to 30 minutes of extra time and penalty kicks.
              </p>

              <h2 className={styles.h2}>Importance of This Format for Indian Football Fans and Analysts</h2>
              <p className={styles.paragraph}>
                For Indian football fans following midweek action at 1:30 AM IST (or 11:15 PM IST for early kickoffs), the 36-team format brings key analytical advantages:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Synchronized Matchday 8 Climax:</strong> On Matchday 8, all 18 fixtures kick off simultaneously. Live table permutations and goal difference shift with every ball hitting the net across Europe, providing unmatched excitement when reviewing fantasy squads or following markets with your <Link href="/" className={styles.inlineLink}>Online ID Betting</Link>.
                </li>
                <li>
                  <strong>Fixture Congestion vs. Top-8 Rest:</strong> Clubs placed 9th–24th face two extra high-stakes European matches in mid-February, right when domestic title races and cup competitions peak. Spotting teams that earned top-eight rest provides clear insight into player fatigue and squad rotations.
                </li>
                <li>
                  <strong>Quarter-Final Yellow Card Amnesty:</strong> Individual yellow card counts are expunged only following the completion of the Quarter-finals, ensuring key players do not miss the Champions League Final due to accumulated cautions.
                </li>
              </ul>

              <h2 className={styles.h2}>Frequently Asked Questions (FAQs)</h2>
              <div className={styles.faqSection} style={{ marginTop: '1rem', borderTop: 'none', paddingTop: 0 }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h3>{idx + 1}. {faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              <h2 className={styles.h2}>The Bigger Picture for European Nights</h2>
              <p className={styles.paragraph}>
                By dismantling isolated groups of four in favor of a single 36-club table and a seeded tennis-style knockout tree, UEFA removed the traditional comfort zones that allowed European heavyweights to cruise through the autumn. Goal difference in November dictates February flight plans, and securing a top-eight finish has become one of the most coveted strategic triumphs in modern club football.
              </p>

              <div className={styles.footnote}>
                Official competition regulations referenced from the UEFA Champions League Regulations (Articles 18, 19, 20) and UEFA Club Competition Committee statutes. Format guide compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
