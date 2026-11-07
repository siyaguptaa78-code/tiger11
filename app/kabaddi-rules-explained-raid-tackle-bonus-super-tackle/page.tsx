import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "Kabaddi Rules Explained: Raids, Tackles, Bonus Points & Super Tackles",
  description: "Complete guide to professional Kabaddi rules: court geometry, 30-second raid mechanics, tackle techniques, bonus line trailing foot rules, and super tackles.",
  alternates: {
    canonical: "/kabaddi-rules-explained-raid-tackle-bonus-super-tackle/",
  },
  openGraph: {
    title: "Kabaddi Rules Explained: Raids, Tackles, Bonus Points & Super Tackles",
    description: "Complete guide to professional Kabaddi rules: court geometry, 30-second raid mechanics, tackle techniques, bonus line trailing foot rules, and super tackles.",
    url: "https://tiger365play.com/kabaddi-rules-explained-raid-tackle-bonus-super-tackle/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabaddi Rules Explained: Raids, Tackles, Bonus Points & Super Tackles",
    description: "Complete guide to professional Kabaddi rules: court geometry, 30-second raid mechanics, tackle techniques, bonus line trailing foot rules, and super tackles.",
  },
};

const faqs = [
  {
    q: "What will happen to the raider who enters the lobbies without touching any defender?",
    a: "The raider will be out of play immediately, and the defending team will get 1 point. The lobbies will not become part of the active court until there is legal contact between the raider and a defender.",
  },
  {
    q: "Does Super Tackle help in bringing back two players due to the points earned by it?",
    a: "No. Even though a Super Tackle awards 2 points on the scoreboard for the defending team, it only revives one eliminated player on the mat.",
  },
  {
    q: "Can the raider earn both the bonus points and touch points in one raid?",
    a: "Yes. If the raider crosses the bonus line legally with 6 or 7 defenders on the mat and touches one or more defenders afterwards before crossing the midline, then all points are awarded (e.g., 1 bonus + 2 touch points = 3 points). This multi-point achievement is known as a Super Raid.",
  },
  {
    q: "What happens when the continuous chant breaks?",
    a: "In traditional and non-whistle matches, if the referee determines that the raider breaks the continuous cant of 'kabaddi' during their chant in one breath, the raid is stopped, the raider is declared out, and the defending team earns 1 point.",
  },
  {
    q: "What happens when the 30-second raid clock runs out?",
    a: "The clock starts as soon as the raider crosses the midline into the opposing court. A raider who fails to cross back over the midline within the 30-second limit is declared out, irrespective of how many touches were made.",
  },
];

export default function KabaddiRulesGuidePage() {
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
    headline: "Kabaddi Rules Explained: The Mechanics of Raids, Tackles, Bonus Points, and Super Tackles",
    description: "Comprehensive guide explaining the rules of professional Kabaddi under IKF and PKL regulations, including court dimensions, raids, tackles, bonus lines, and super tackles.",
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
      "@id": "https://tiger365play.com/kabaddi-rules-explained-raid-tackle-bonus-super-tackle/",
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
                Kabaddi Rules Explained: The Mechanics of Raids, Tackles, Bonus Points, and Super Tackles
              </h1>

              <p className={styles.paragraph}>
                A small error of half a second from any player in their timing of the ankle hold can shift the entire momentum of the game that goes with seven-point raids in the current way of playing kabaddi. While once known to be the traditional sport with the use of muddy courts in rural areas in India, kabaddi has evolved into a very calculated and fast-paced sport where timing and millimeter accuracy in the boundaries are important.
              </p>

              <p className={styles.paragraph}>
                Being able to understand how top players play within those parameters is the difference between watching and understanding the game tactically. From watching the momentum of a game for an analysis of the game to following fantasy matches and studying the performance of the lines through the <Link href="/" className={styles.inlineLink}>Tiger 365 id online</Link>, understanding the scoring rules of kabaddi—raid, tackle, bonus line, and super tackle—is key.
              </p>

              {/* Visual Infographic */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/kabaddi-rules-infographic.jpg"
                  alt="Kabaddi Rules Explained: The Mechanics of Raids, Tackles, Bonus Points, and Super Tackles"
                  width={1024}
                  height={683}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  Visual Overview: Court Geometry, Raid Dynamics, Tackle Techniques, Bonus Requirements, and Super Tackles.
                </figcaption>
              </figure>

              <h2 className={styles.h2}>1. Court Geometry: Lines that Determine the Strategy of the Game</h2>
              <p className={styles.paragraph}>
                To fully understand the current state of kabaddi refereeing, it is essential to consider court geometry. The size of the court in the professional mat kabaddi version according to the rules set by the International Kabaddi Federation, and used by the Pro Kabaddi League, is 13m x 10m, divided by the midline into two halves of 6.5m x 10m each.
              </p>

              <figure className={styles.sectionImageContainer}>
                <Image
                  src="/images/kabaddi-court-geometry.jpg"
                  alt="Kabaddi Court Geometry: 13m x 10m mat divided by midline"
                  width={371}
                  height={269}
                  className={styles.sectionImage}
                />
                <figcaption className={styles.imageCaption}>
                  Standard Kabaddi Court Dimensions & Boundary Lines (13m x 10m)
                </figcaption>
              </figure>

              <p className={styles.paragraph}>
                Three lines determine the boundaries of the legal game in any half of the court:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>The Baulk Line:</strong> It is situated at 3.75 meters distance from the midline. Raiders should touch this line with one or several of their feet but not touch the ground between the midline and the baulk line. Crossing of the baulk line without touching it is defined as a null raid.
                </li>
                <li>
                  <strong>The Bonus Line:</strong> 1 meter from the baulk line or 4.75 meters from the midline. Bonus line allows raiders to earn bonus even if there is no contact with the defenders.
                </li>
                <li>
                  <strong>The Lobbies:</strong> It involves strips that are one meter wide located on either side of the playing mat. In the beginning, during the raid period, they are regarded as off-the-limit zones.
                </li>
              </ul>

              <div className={styles.calloutCard}>
                <strong>Key Point:</strong> The lobby is included in the play if and only if there is contact between the raider and the defender. If any player goes inside the lobby zone without a prior touch, that player is automatically &quot;out.&quot;
              </div>

              <h2 className={styles.h2}>2. The Raid: An Offensive Action Lasting for 30 Seconds</h2>
              <p className={styles.paragraph}>
                Each action of raiding in kabaddi is referred to as a raid, wherein the raider enters into the opposing side while chanting &quot;kabaddi&quot; repeatedly for 30 seconds.
              </p>

              <figure className={styles.sectionImageContainer}>
                <Image
                  src="/images/kabaddi-the-raid.jpg"
                  alt="The Kabaddi Raid: 30 seconds clock and offensive action"
                  width={283}
                  height={269}
                  className={styles.sectionImage}
                />
                <figcaption className={styles.imageCaption}>
                  The Raid: Offense in the opposing territory within the 30-second shot clock
                </figcaption>
              </figure>

              <div className={styles.courtDiagram}>
{`+----------------------------------------------------+
|                   DEFENDING HALF                   |
|                    [ End Line ]                    |
| ----------- Bonus Line (4.75m from midline) ------- |
| ------------ Baulk Line (3.75m from midline) ------ |
|                                                    |
|==================== MIDLINE =======================|
|                   ATTACKING HALF                   |
+----------------------------------------------------+`}
              </div>

              <h3 className={styles.h3}>Requirements for Legal Raids</h3>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Baulk Line Crossing:</strong> In order for a raid to be considered legal (avoiding deliberate stalling), the raider must cross the baulk line if there is no touch involved. In case the raider touches an opponent, crossing the baulk line is not compulsory.
                </li>
                <li>
                  <strong>Touch Point Scoring:</strong> The raider gets 1 point for every defender tagged, provided the raider crosses back over the midline with any part of their body within 30 seconds.
                </li>
                <li>
                  <strong>Revive Process:</strong> For every touch point scored by the raider against the defenders, an eliminated teammate is revived back on the mat in the sequence in which they were eliminated.
                </li>
                <li>
                  <strong>Do-or-Die Raid:</strong> If a team completes two successive empty raids without scoring any points, then the third raid is automatically a Do-or-Die raid. The raider must score either a touch point or a bonus point, or else the raider is eliminated, and the opposing side earns 1 point.
                </li>
              </ul>

              <h2 className={styles.h2}>3. Tackle: Defensive Formation and Techniques</h2>
              <p className={styles.paragraph}>
                Defenders form formations of a maximum of seven players. Unlike the single attacker who scores from touching the opponents, defenders prevent, restrict, pin, or take the raider out before they can cross the midline.
              </p>

              <figure className={styles.sectionImageContainer}>
                <Image
                  src="/images/kabaddi-tackle-techniques.jpg"
                  alt="Kabaddi Defensive Tackles: Ankle Hold, Thigh Hold, Chain Tackle, and Dash"
                  width={334}
                  height={269}
                  className={styles.sectionImage}
                />
                <figcaption className={styles.imageCaption}>
                  Defensive Formations: Ankle holds, thigh blocks, chain tackles, and dashes
                </figcaption>
              </figure>

              <p className={styles.paragraph}>
                A successful tackle awards the defending team 1 point and revives one eliminated player.
              </p>

              <h3 className={styles.h3}>Types of Defensive Tackles</h3>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Ankle Hold:</strong> Common with corner defenders. The defender grabs the raider&apos;s trailing ankle with both hands with explosive timing as the raider steps back.
                </li>
                <li>
                  <strong>Thigh Hold / Block:</strong> Executed by cover defenders. As the raider turns or attempts to return to the midline, the defender steps into their path and locks around their thighs, lifting or halting their momentum.
                </li>
                <li>
                  <strong>Chain Tackle:</strong> Involves two or more defenders linking hands to form a swinging barrier, closing down escape angles and surrounding the raider.
                </li>
                <li>
                  <strong>Dash:</strong> Involves a defender sprinting with full momentum towards the raider to shove them completely off the playing mat over the side line or end line.
                </li>
              </ul>

              <h2 className={styles.h2}>4. The Bonus Point: Offense and Risk of Precision</h2>
              <p className={styles.paragraph}>
                A bonus point is a special offensive scoring method that enables an intelligent raider to earn a point without having to initiate physical contact with the defense.
              </p>

              <figure className={styles.sectionImageContainer}>
                <Image
                  src="/images/kabaddi-bonus-point.jpg"
                  alt="Kabaddi Bonus Point: Reaching the bonus line with trailing foot in the air"
                  width={291}
                  height={240}
                  className={styles.sectionImage}
                />
                <figcaption className={styles.imageCaption}>
                  The Bonus Point: Lead foot across the 4.75m line with airborne trailing foot
                </figcaption>
              </figure>

              <h3 className={styles.h3}>The Requirements for a Valid Bonus</h3>
              <p className={styles.paragraph}>
                A bonus point is awarded only when:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Defender Count:</strong> At least 6 or 7 defenders must be active on the mat. If the defending team has 5 or fewer players left, the bonus line is deactivated.
                </li>
                <li>
                  <strong>Physical Execution (&quot;Trailing Foot&quot; Rule):</strong> The raider must place their lead foot completely over the bonus line without touching it, while the trailing foot is simultaneously airborne (completely off the floor).
                </li>
              </ul>

              <div className={styles.bonusBox}>
{`Airborne Trailing Foot (Off the floor)
       \\
        \\  [Raider's Body]
         \\ |
          \\ [Lead Foot Flat on Mat across Bonus Line]
------------------------------------------------- [Bonus Line]`}
              </div>

              <p className={styles.paragraph}>
                A bonus point awards 1 point for the raider&apos;s team. However, a bonus point alone does not revive an eliminated teammate unless a touch point is also secured in the same raid.
              </p>

              <h2 className={styles.h2}>5. The Super Tackle: Defense Advantage in Hard Times</h2>
              <p className={styles.paragraph}>
                When a defending team is reduced to 3, 2, or 1 player on the mat, the numerical advantage heavily favors the attacker. To reward defense in high-pressure moments, the rules introduce the Super Tackle.
              </p>

              <figure className={styles.sectionImageContainer}>
                <Image
                  src="/images/kabaddi-super-tackle.jpg"
                  alt="Kabaddi Super Tackle: Awarded when 3 or fewer defenders trap the raider"
                  width={283}
                  height={240}
                  className={styles.sectionImage}
                />
                <figcaption className={styles.imageCaption}>
                  Super Tackle: 2 points awarded when 3 or fewer defenders pin down the raider
                </figcaption>
              </figure>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Standard Tackle</th>
                      <th>Super Tackle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Defenders on Mat</strong></td>
                      <td>4, 5, 6, or 7 Players</td>
                      <td>1, 2, or 3 Players</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Points Awarded</strong></td>
                      <td>1 Point</td>
                      <td>2 Points</td>
                    </tr>
                    <tr>
                      <td><strong>Teammates Revived</strong></td>
                      <td>1 Player</td>
                      <td>1 Player (Not 2)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Primary Tactical Risk</strong></td>
                      <td>Moderate (Full defensive cover)</td>
                      <td>Extreme (Immediate All-Out danger)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.paragraph}>
                If the defending side successfully captures the raider with 3 or fewer players on the mat, 2 points are awarded instead of the usual 1 point.
              </p>
              <p className={styles.paragraph}>
                The Super Tackle completely alters defensive strategy. Sports analysts and <Link href="/" className={styles.inlineLink}>Betting ID</Link> users tracking real-time match dynamics pay close attention to such moments: raiders hesitate to attack aggressively for fear of conceding two easy points, while defenders tighten containment lines.
              </p>

              <h2 className={styles.h2}>Primary Actions Score Comparison</h2>
              <p className={styles.paragraph}>
                To visualize how primary actions compare under regulatory professional play:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Points Scored</th>
                      <th>Players Revived</th>
                      <th>Minimum Player Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Touch Point</strong></td>
                      <td>1 per defender touched</td>
                      <td>1 per point</td>
                      <td>None</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Tackle Point</strong></td>
                      <td>1 Point</td>
                      <td>1 Player</td>
                      <td>4 to 7 defenders on mat</td>
                    </tr>
                    <tr>
                      <td><strong>Super Tackle</strong></td>
                      <td>2 Points</td>
                      <td>1 Player</td>
                      <td>1 to 3 defenders on mat</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Bonus Point</strong></td>
                      <td>1 Point</td>
                      <td>0 Players</td>
                      <td>6 to 7 defenders on mat</td>
                    </tr>
                    <tr>
                      <td><strong>All-Out (Lona)</strong></td>
                      <td>2 Additional Points</td>
                      <td>Entire team resets</td>
                      <td>All 7 opponents eliminated</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={styles.h2}>Frequently Asked Questions (FAQs)</h2>
              <div className={styles.faqSection} style={{ marginTop: '1rem', borderTop: 'none', paddingTop: 0 }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h3>{idx + 1}. {faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              <h2 className={styles.h2}>Tactical Precision on the Mat</h2>
              <p className={styles.paragraph}>
                It is kabaddi&apos;s strict economy of movement and time which makes it so thrilling. From the baulk line where athletes must remain accountable to the bonus line where they take calculated risks, every outcome hinges on split-second decisions. Understanding the conditions of the super tackle and foot placement for bonus points provides genuine insight into India&apos;s fastest-growing contact sport.
              </p>

              <div className={styles.footnote}>
                Official Kabaddi rules referenced from the International Kabaddi Federation (IKF) and Pro Kabaddi League (PKL) rulebook. Tactical analysis compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
