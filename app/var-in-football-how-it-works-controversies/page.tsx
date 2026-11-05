import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "VAR in Football: How Officiating Technology Works, Major Controversies & Indian Horizon",
  description: "Comprehensive guide to VAR in football: how video officiating works, the clear and obvious error standard, four review categories, controversies, and FIFA's FVS system in India.",
  alternates: {
    canonical: "/var-in-football-how-it-works-controversies/",
  },
  openGraph: {
    title: "VAR in Football: How Officiating Technology Works, Major Controversies & Indian Horizon",
    description: "Comprehensive guide to VAR in football: how video officiating works, the clear and obvious error standard, four review categories, controversies, and FIFA's FVS system in India.",
    url: "https://tiger365play.com/var-in-football-how-it-works-controversies/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAR in Football: How Officiating Technology Works, Major Controversies & Indian Horizon",
    description: "Comprehensive guide to VAR in football: how video officiating works, the clear and obvious error standard, four review categories, controversies, and FIFA's FVS system in India.",
  },
};

const faqs = [
  {
    q: "What does the acronym VAR mean in football?",
    a: "The term VAR is the abbreviation of Video Assistant Referee. It means a certified match official who watches the broadcast video footage to help the referee make decisions.",
  },
  {
    q: "Can a team manager or a captain approach the referee for VAR?",
    a: "No, according to IFAB VAR protocol, no player or coach can question or demand a review of any call. In fact, players or coaching staff who persistently request for a review and/or imitate the rectangle screen gesture can receive a yellow card caution. On the other hand, in FIFA's experimental Football Video Assistance (FVS) system, coaches are allowed some challenge quotas.",
  },
  {
    q: "Why is it so long for VAR to make the offside decision?",
    a: "Without SAOT, in the absence of such technology, the replay operators have to manually calculate the exact video frame at which the pass was made. Once that is done, then they need to draw the perspective lines through the defender's and attacker's respective scoring body parts.",
  },
  {
    q: "Why can’t the VAR be used for the yellow card fouls?",
    a: "The rules put forward by the IFAB do not allow for any intervention from VAR for direct red card actions, goals, penalties, or mistaken identity. Any review of routine yellow cards or standard fouls that occur in the middle of the playing field will cause too many interruptions in play, ruining the flow that association football is known for.",
  },
  {
    q: "Is the VAR technology automated or manned by humans?",
    a: "VAR is entirely human operated. Unlike goal-line technology and semi-automated offside, where computer algorithms and automated sensors have been used, human licensed officials decide the calls made with respect to fouls, handballs, and mistakes.",
  },
];

export default function VarGuidePage() {
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
    headline: "VAR in Football: How Officiating Technology Works, Major Controversies, and the Indian Horizon",
    description: "In-depth guide to the Video Assistant Referee (VAR) system, the clear and obvious standard, review categories, controversies, and FIFA's FVS framework for Indian football.",
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
      "@id": "https://tiger365play.com/var-in-football-how-it-works-controversies/",
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
                VAR in Football: How Officiating Technology Works, Major Controversies, and the Indian Horizon
              </h1>

              <p className={styles.paragraph}>
                Offside calls based on millimeter measurements of the shoulder of the defending player, lengthy pauses for analysis of monitor replays, and denied goals that lead to heated discussions in the stadiums have totally altered the way football is viewed worldwide. While formulating the Video Assistant Referee (VAR) protocol under the Laws of the Game, the intention of the International Football Association Board (IFAB) was clear and straightforward; it was &quot;minimum interference, maximum benefit&quot;. However, in the Premier League, the UEFA Champions League, as well as in all national tournaments around the world, video reviews are one of the most controversial innovations in the history of sports.
              </p>

              <p className={styles.paragraph}>
                Indian fans of football, used to the precise ball-tracking technology and snickometer system of the Decision Review System in cricket, will need to familiarize themselves with the technology used in the officiating of football matches and find out what exactly goes on behind closed doors of the video operation room.
              </p>

              <h2 className={styles.h2}>The Core Function: &quot;Clear and Obvious&quot; Standard</h2>
              <p className={styles.paragraph}>
                One misconception fans often hold regarding the VAR process is that it involves re-refereeing all incidents from scratch. According to IFAB rules, the final decision is made by the on-field referee. The VAR—the certified match official located in the video operations room, having direct access to the synchronized broadcasts—is only a consultant in this process.
              </p>
              <p className={styles.paragraph}>
                The video team views the footage during the game without any sounds. They can only interfere in case of a &quot;clear and obvious error&quot; or a &quot;serious missed incident&quot;. In other words, they can only communicate with the referee in case of verbal recommendation for an on-field review (OFR) or factual correction. In the event of a penalty awarded as a result of slight contact in the box, which is confirmed by replays to be true, the VAR will not be able to overturn the referee&apos;s decision just because he would not have awarded the penalty himself.
              </p>

              {/* Image 1: Inside the VAR room */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/var-room-officials.jpg"
                  alt="Inside the VAR room: Multiple camera angles help officials make the right call"
                  width={736}
                  height={268}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  Inside the VAR room: Multiple camera angles help officials make the right call
                </figcaption>
              </figure>

              <h2 className={styles.h2}>The Four Match-Changing Categories VAR is Allowed to Recheck</h2>
              <p className={styles.paragraph}>
                As per the IFAB protocol, VAR cannot interfere with regular throw-ins, corner kicks, or ordinary midfield fouls resulting in yellow cards. Review of decisions is limited only to four key categories:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Scope of Review</th>
                      <th>Typical VAR Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1. Goal / No Goal</strong></td>
                      <td>Attacking fouls, handballs in the build-up phase (Attacking Possession Phase), offside positions, or whether the ball crossed the touchline/goal line.</td>
                      <td>Factual decision or on-field monitor review for subjective contact.</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>2. Penalty / No Penalty</strong></td>
                      <td>Whether a foul occurred inside or outside the penalty box, simulation, or an attacking foul in the buildup leading to the spot-kick.</td>
                      <td>On-field review recommended if the referee missed a foul or wrongly awarded a penalty.</td>
                    </tr>
                    <tr>
                      <td><strong>3. Direct Red Cards</strong></td>
                      <td>Violent conduct, spitting, serious foul play, or denying an obvious goal-scoring opportunity (DOGSO). (Does not apply to regular second yellow cards).</td>
                      <td>On-field review recommended for dangerous or malicious fouls.</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>4. Mistaken Identity</strong></td>
                      <td>When the on-field official cautions or sends off the incorrect player from an offending squad.</td>
                      <td>Purely factual correction communicated directly to the referee via headset.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={styles.h2}>What Makes Controversies Possible? Accuracy of the Fact vs. Subjective Law</h2>
              <p className={styles.paragraph}>
                In spite of the coverage of high-profile stadiums from up to 40 different camera positions, controversies have not gone away with VAR but focused on the following key operational issues:
              </p>

              <h3 className={styles.h3}>1. Subjective Decisions (Handball and Forcefulness of the Fouls)</h3>
              <p className={styles.paragraph}>
                Subjectivity is embedded into football rules. For instance, the rule of handball includes assessment whether an arm position was &quot;unnatural&quot; or reasonable based on the movements of the athlete&apos;s body. Slow motion replays tend to make every touching of an arm or ankle look purposeful and forceful. Referees checking the monitors are frequently accused of ignoring the match timing and making decisions that do not fit the rhythm of play.
              </p>

              <h3 className={styles.h3}>2. Geometry of Offside Lines</h3>
              <p className={styles.paragraph}>
                In contrast to goal-line technology where a microchip and high-speed sensors help give an instant, automated answer, traditional offside assessments by VAR are done by video analysts who plot two-dimensional lines on the player&apos;s body parts manually. The fans are regularly frustrated by how many painful minutes it takes to determine if a player&apos;s knee or toe was offside by just five millimeters. Although semi-automated offside technology (SAOT) which uses multi-tracking cameras has made such determination much faster in FIFA competitions and UEFA Champions League, the fractions still keep dividing fans.
              </p>

              {/* Image 2: Millimetres matter */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/var-offside-lines.jpg"
                  alt="Millimetres matter: How VAR decides an offside"
                  width={734}
                  height={259}
                  className={styles.articleImage}
                />
                <figcaption className={styles.imageCaption}>
                  Millimetres matter: How VAR decides an offside
                </figcaption>
              </figure>

              <h3 className={styles.h3}>3. Miscommunication between Humans</h3>
              <p className={styles.paragraph}>
                Technology cannot be more effective than the people operating the audio channel. The case of an excluded goal for Tottenham Hotspur against Liverpool in September 2023 because of a miscommunication between VAR and the referee on the field is one example of the fact that technical perfection does not automatically equal the procedure.
              </p>

              <p className={styles.paragraph}>
                For digitally oriented Indian sports fans looking into match analysis, reviewing referee tendencies, or obtaining a legit <Link href="/" className={styles.inlineLink}>Tiger365 ID</Link> through operators such as <Link href="/" className={styles.inlineLink}>Reddy Anna</Link>, the importance of knowing how the variance of refereeing impacts match outcomes has become a fundamental part of sports intelligence. Knowing whether a league uses stricter or lenient review processes is critical for assessing how defensive structures, fouling tendencies, and match rhythms are evaluated.
              </p>

              <h2 className={styles.h2}>The Officiating Shift in Indian Football</h2>
              <p className={styles.paragraph}>
                The Indian Super League (ISL) and its cup tournaments have seen the refereeing process receive plenty of criticism from coaches, players, and spectators over the years. Decisions related to penalties and marginal offsides had previously impacted title pursuits without any protection against erroneous calls provided by video replay technology.
              </p>
              <p className={styles.paragraph}>
                The deployment of the entire system of the Premier League&apos;s VAR infrastructure entails considerable costs: numerous special cameras, trained VAR specialists, high-speed fiber optic links, and high matchday expenses.
              </p>
              <p className={styles.paragraph}>
                In order to bridge this gap effectively, the AIFF along with other domestic league parties is considering evaluation of the FVS (Football Video Support) system of FIFA. Contrary to the VAR, which involves a roomful of officials looking at all angles of each game, FVS works on principles similar to those used in field hockey or cricket:
              </p>
              <ul className={styles.ruleList}>
                <li>It utilizes four to eight regular broadcast cameras.</li>
                <li>It does not involve any dedicated video assistant referees working off-site.</li>
                <li>The head coaches of teams can use a fixed number of challenges per game (typically two) to get the referee to view an obvious mistake on the sideline monitor.</li>
              </ul>
              <p className={styles.paragraph}>
                Thus, this is a realistic middle-ground that ensures sportsmanship while being compatible with the practical needs of the domestic stadiums in India.
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

              <h2 className={styles.h2}>Conclusion: Striking the Right Balance Between Technology and Match Flow</h2>
              <p className={styles.paragraph}>
                The introduction of video technology has not been intended to bring an end to all subjective arguments in football; it was meant to take out those fatal mistakes that change seasons in the sport. Even though the challenges that come with millimeter offside decisions, lengthy reviews, and differing opinions regarding handball calls are putting a strain on the patience of fans, the system is slowly but surely eradicating all blatant mistakes made by officials. As Football Video Support begins its implementation in Indian domestic football, this is becoming clearer than ever before.
              </p>

              <div className={styles.footnote}>
                Official Laws of the Game referenced from IFAB VAR Protocol and FIFA FVS framework. Match technology guide compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}

