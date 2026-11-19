import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "Tennis Scoring System Explained: Points, Games, Sets & Tiebreak Rules",
  description: "Learn how tennis scoring works: points (Love, 15, 30, 40), Deuce and Advantage, winning sets (6-4, 7-5), 7-point vs 10-point tiebreaks, and Grand Slam rules.",
  alternates: {
    canonical: "/tennis-scoring-system-explained-points-games-sets-tiebreak/",
  },
  openGraph: {
    title: "Tennis Scoring System Explained: Points, Games, Sets & Tiebreak Rules",
    description: "Learn how tennis scoring works: points (Love, 15, 30, 40), Deuce and Advantage, winning sets (6-4, 7-5), 7-point vs 10-point tiebreaks, and Grand Slam rules.",
    url: "https://tiger365play.com/tennis-scoring-system-explained-points-games-sets-tiebreak/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tennis Scoring System Explained: Points, Games, Sets & Tiebreak Rules",
    description: "Learn how tennis scoring works: points (Love, 15, 30, 40), Deuce and Advantage, winning sets (6-4, 7-5), 7-point vs 10-point tiebreaks, and Grand Slam rules.",
  },
};

const faqs = [
  {
    q: "How can a tennis player get more total points in the match but still end up losing?",
    a: "Because tennis resets the scoreboard at the conclusion of every individual game and set. A player who wins dominant service games (e.g., winning a set 6–0 collects 24 points to zero) can accumulate a massive surplus, but losing two close tiebreak sets (6–7, 6–7) results in match defeat despite winning significantly more points overall.",
  },
  {
    q: "What does the number within parentheses on a tennis scoreboard mean?",
    a: "A score like 7–6 (4) denotes that the set was settled in a tiebreak at 6–6, with the losing player securing 4 points (the winner taking it 7–4). If a tiebreak extends beyond regulation (e.g., 10–8), it is recorded on scoreboards as 7–6 (8).",
  },
  {
    q: "Which player serves first in the set after the tiebreak?",
    a: "The player who received serve on the very first point of the tiebreak serves first in the opening game of the subsequent set. For service-rotation purposes under ITF rules, the entire tiebreak is counted as an odd 13th game.",
  },
  {
    q: "What is a Golden Set in tennis?",
    a: "A Golden Set refers to winning a full set 6–0 (winning 24 consecutive points) without dropping a single point. It remains one of the rarest feats in sporting history, achieved only once in modern Grand Slam main-draw singles by Yaroslava Shvedova against Sara Errani at Wimbledon in 2012.",
  },
  {
    q: "What happens when the serve strikes the net cord and lands inside the service box?",
    a: "The chair umpire announces a 'Let'. The serve is replayed without penalty, and the server receives another attempt with their first or second serve intact, regardless of how many consecutive lets occur.",
  },
  {
    q: "Why do women play best-of-three sets during Grand Slams instead of best-of-five sets like men?",
    a: "This tradition originated in the late 19th-century lawn tennis era when Victorian tournament organizers felt best-of-five contests were physically excessive for women. While women contested best-of-five finals at the US National Championships until 1901 and at the WTA Tour Championships from 1984 to 1998, all four Grand Slams have standardized women's singles to best-of-three sets.",
  },
];

export default function TennisScoringGuidePage() {
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
    headline: "Tennis Scoring System Explained: Points, Games, Sets, and Tiebreak Rules",
    description: "Complete guide to the three-tier tennis scoring system under ITF rules: points (Love, 15, 30, 40), games, sets, Deuce/Advantage, 7-point vs. 10-point tiebreaks, and Grand Slam formats.",
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
      "@id": "https://tiger365play.com/tennis-scoring-system-explained-points-games-sets-tiebreak/",
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
                Tennis Scoring System Explained: Points, Games, Sets, and Tiebreak Rules
              </h1>

              <p className={styles.paragraph}>
                In every prominent sport in India—cricket, football, kabaddi, or badminton—scores add up incrementally in simple one-unit measures. Tennis goes against all logic here. Rather than measuring cumulative scores throughout the match, tennis follows a hierarchical structure of three layers in which points aggregate to form games, games aggregate to form sets, and sets determine who wins. For this reason, it is perfectly possible for a player to score fewer points throughout three hours of play and still emerge victorious, just as Roger Federer did not come out of the 2019 Wimbledon Final with victory against Novak Djokovic despite winning 14 more total points (218 compared to 204).
              </p>

              <p className={styles.paragraph}>
                For Indian spectators following late-night Grand Slam broadcasts or tracking real-time point-by-point action through their <Link href="/" className={styles.inlineLink}>Tiger365 ID</Link>, knowledge of how these three levels interconnect makes immediate sense of the scoreboard. According to the official ITF Rules of Tennis, every match follows strict scoring progressions.
              </p>

              <h2 className={styles.h2}>The Three-Tier Scoring Hierarchy at a Glance</h2>
              <p className={styles.paragraph}>
                Before examining individual point calls, it helps to see how the three levels of a tennis scoreboard stack together:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Scoring Level</th>
                      <th>Target to Win</th>
                      <th>Minimum Margin Required</th>
                      <th>Tiebreaker Mechanism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Point &rarr; Game</strong></td>
                      <td>4 points (15, 30, 40, Game)</td>
                      <td>2 points</td>
                      <td>Deuce and Advantage (unless No-Ad applies)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Game &rarr; Set</strong></td>
                      <td>6 games</td>
                      <td>2 games (6–4, 7–5)</td>
                      <td>7-point Tiebreak played at 6–6</td>
                    </tr>
                    <tr>
                      <td><strong>Set &rarr; Match</strong></td>
                      <td>2 sets (Best-of-3) or 3 sets (Best-of-5)</td>
                      <td>1 set</td>
                      <td>10-point Final-Set Tiebreak at 6–6 in Grand Slams</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tennis Court Diagram */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/tennis-court-dimensions-guide.jpg"
                  alt="Official ITF Tennis Court Dimensions: 23.77m x 10.97m"
                  width={978}
                  height={517}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  Official ITF Tennis Court Blueprint: 23.77m length, 8.23m singles width, 10.97m doubles width, and 6.40m service boxes.
                </figcaption>
              </figure>

              <h2 className={styles.h2}>1. Points Within a Single Game</h2>
              <p className={styles.paragraph}>
                A typical game involves scoring four points with a margin of at least two points. Rather than saying 0, 1, 2, 3, the chair umpire calls points according to traditional tennis terms:
              </p>
              <ul className={styles.ruleList}>
                <li><strong>0 points = Love</strong></li>
                <li><strong>1st point = 15</strong></li>
                <li><strong>2nd point = 30</strong></li>
                <li><strong>3rd point = 40</strong></li>
                <li><strong>4th point = Game</strong> (provided the opponent has 30 or fewer points)</li>
              </ul>
              <p className={styles.paragraph}>
                The score of the server is always called first. If the server wins the opening point, the score is called as 15–Love. If the receiver captures the subsequent rally, the score levels at 15–All (or 15–15).
              </p>

              <div className={styles.calloutCard}>
                <div className={styles.calloutTitle}>Why Does Tennis Have Scores of 15, 30, and 40?</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  The origin dates back to medieval French <em>jeu de paume</em> (an ancestor of tennis), where clock faces on courtyard walls were used as markers. Moving the clock hand by a quarter-turn produced 15, 30, and 45. In English pronunciation, 45 was shortened to 40, leaving room for two additional movements (Advantage and Game) before reaching 60. Meanwhile, &quot;Love&quot; derives from the French <em>l&apos;&oelig;uf</em> (&quot;the egg&quot;), symbolizing a score of zero shaped like an egg.
                </p>
              </div>

              <h3 className={styles.h3}>Deuce and Advantage Explained</h3>
              <p className={styles.paragraph}>
                When both competitors win three points each, the score reaches 40–40, announced by the umpire as <strong>Deuce</strong>. From Deuce, a two-point margin is required to secure the game:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Advantage (Ad):</strong> The player winning the immediate rally after Deuce earns Advantage. If the server wins it, the call is <em>Advantage In (Ad-In)</em>; if the receiver wins it, the call is <em>Advantage Out (Ad-Out)</em>.
                </li>
                <li>
                  <strong>Winning from Advantage:</strong> If the player holding Advantage wins the subsequent point, they clinch the game.
                </li>
                <li>
                  <strong>Returning to Deuce:</strong> If the trailing player wins the point, the score resets to Deuce. A game can cycle through multiple Deuces indefinitely until one competitor captures two consecutive rallies.
                </li>
              </ul>

              <h2 className={styles.h2}>2. Building up Sets From Games</h2>
              <p className={styles.paragraph}>
                When a player wins a game, they register 1 game on the set scoreboard, and the service alternates to the opponent. Under Rule 6 of the ITF Rules of Tennis, the first player to win six games takes the set, provided there is a two-game cushion:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Standard Set Finishes:</strong> Set scores such as 6–0, 6–1, 6–2, 6–3, and 6–4 conclude the set, meeting the threshold of at least six games and a two-game advantage.
                </li>
                <li>
                  <strong>Sets Tied at 5–5:</strong> If a set reaches 5–5, winning game six to reach 6–5 does not suffice. The leader must win a seventh game for a 7–5 set victory. If the opponent holds serve to equalize at 6–6, the set proceeds to a tiebreak.
                </li>
              </ul>

              <h3 className={styles.h3}>Holding Serve vs. Breaking Serve</h3>
              <p className={styles.paragraph}>
                Because the server dictates the trajectory and pace of the first shot, holding serve is statistically anticipated in elite tennis. To establish a decisive two-game lead, a player must achieve a <strong>break of serve</strong> (winning a game while receiving). A single service break is frequently all that separates players in a 6–4 set.
              </p>

              <h2 className={styles.h2}>3. Tiebreak Rules: 7-Point vs. 10-Point Formats</h2>
              <p className={styles.paragraph}>
                Prior to the invention of the tiebreak by James Van Alen in the 1960s, sets reaching 6–6 continued indefinitely until someone built a two-game lead. Today, professional tennis operates two distinct tiebreak mechanisms:
              </p>

              <h3 className={styles.h3}>The Standard 7-Point Set Tiebreak</h3>
              <p className={styles.paragraph}>
                Employed whenever an intermediate set reaches a 6–6 stalemate:
              </p>
              <ul className={styles.ruleList}>
                <li><strong>Numerical Scoring:</strong> Points are counted in standard numbers (0, 1, 2, 3...) rather than 15–30–40.</li>
                <li><strong>Target:</strong> The first competitor to reach 7 points with a margin of 2 points wins the tiebreak and claims the set 7–6. If scores reach 6–6 in the tiebreak, play continues until a two-point separation is achieved (8–6, 9–7, 10–8).</li>
                <li><strong>Service Rotation:</strong> The player due to serve in game 13 serves Point 1 from the Deuce (right) side. The opponent then serves Points 2 and 3 (commencing from the Ad/left side), after which serve alternates every two points.</li>
                <li><strong>Changing Ends:</strong> Competitors switch sides of the court after every 6 points scored (3–3, 4–2, 6–6) to eliminate environmental advantages from sun or wind.</li>
              </ul>

              <h3 className={styles.h3}>The 10-Point Final-Set Match Tiebreak</h3>
              <p className={styles.paragraph}>
                For decades, the four Grand Slams enforced conflicting rules for deciding sets, highlighted by the historic 2010 Wimbledon marathon where John Isner defeated Nicolas Mahut 70–68 in the fifth set across 11 hours and 5 minutes.
              </p>
              <p className={styles.paragraph}>
                In March 2022, the Grand Slam Board unified regulations across the Australian Open, Roland-Garros, Wimbledon, and the US Open: when the final set (fifth set for men, third set for women) reaches 6–6, the match is decided by a <strong>10-point tiebreak</strong>. The first player to reach 10 points by a 2-point margin wins the contest 7–6 (10–X).
              </p>

              <h2 className={styles.h2}>4. Variation in Set Format During Singles and Doubles Matches</h2>
              <p className={styles.paragraph}>
                Tournament scheduling and fatigue considerations create variations in format across professional tours:
              </p>
              <ul className={styles.ruleList}>
                <li><strong>Grand Slam Men&apos;s Singles:</strong> Best-of-five sets (first to win three sets).</li>
                <li><strong>Grand Slam Women&apos;s Singles &amp; ATP/WTA Tour:</strong> Best-of-three sets (first to win two sets).</li>
                <li>
                  <strong>ATP &amp; WTA Doubles (No-Ad &amp; Match Tiebreak):</strong> In doubles competitions where Indian icons like Rohan Bopanna and Yuki Bhambri compete, two unique pace-of-play rules apply. First, <strong>No-Ad scoring</strong> operates at 40–40: a sudden-death single point decides the game, with the receiving team selecting the court side. Second, a <strong>10-point match tiebreak</strong> is played in place of a full third set if sets are split 1–1.
                </li>
              </ul>

              <h2 className={styles.h2}>The Importance of Points-Based Scoring on Live Markets</h2>
              <p className={styles.paragraph}>
                Unlike timer-based sporting events, tennis scoring resets at each tier. A competitor trailing 0–6, 0–5 is never out of the contest because points and games do not carry over between sets. Conversely, high-leverage points—such as facing break point at 30–40 in the ninth game—carry vastly greater statistical weight than an opening 15–Love rally.
              </p>
              <p className={styles.paragraph}>
                Supporters with an <Link href="/" className={styles.inlineLink}>Online Betting ID</Link> watching live tennis broadcasts recognize how quickly in-play dynamics swing during clutch moments like double break points (15–40) or 6–6 tiebreaks. You can follow live tennis markets and tournament coverage through your Tiger365 ID on <Link href="/" className={styles.inlineLink}>Tiger365Play</Link>.
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

              <h2 className={styles.h2}>Bringing the Scoreboard Together</h2>
              <p className={styles.paragraph}>
                Once you break down the tennis scoreboard into its foundational layers—four points to win a game, six games to win a set, and two or three sets to claim the match—every call from the umpire&apos;s chair becomes intuitive. The next time a Grand Slam final set reaches 6–6 and enters a 10-point championship tiebreak, you will understand how every serve rotation, changeover, and two-point margin dictates the champion.
              </p>

              <div className={styles.footnote}>
                Official tennis regulations referenced from the International Tennis Federation (ITF) Rules of Tennis, ATP Tour Rulebook, and Grand Slam Board statutes. Match analytics compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
