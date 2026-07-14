import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "Champions Trophy Winners List",
  description: "Every ICC Champions Trophy winner from 1998 to India's 2025 triumph in Dubai. Full list with runners-up, hosts, titles by team and what's next in 2029.",
  alternates: {
    canonical: '/champions-trophy-winners-list/',
  },
  openGraph: {
    title: "Champions Trophy Winners List",
    description: "Every ICC Champions Trophy winner from 1998 to India's 2025 triumph in Dubai. Full list with runners-up, hosts, titles by team and what's next in 2029.",
    url: "https://tiger365play.com/champions-trophy-winners-list/",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Champions Trophy Winners List",
    description: "Every ICC Champions Trophy winner from 1998 to India's 2025 triumph in Dubai. Full list with runners-up, hosts, titles by team and what's next in 2029.",
  },
};

export default function ChampionsTrophyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who won the ICC Champions Trophy 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "India, beating New Zealand in the final in Dubai on 9 March 2025 — their second outright title and third overall."
        }
      },
      {
        "@type": "Question",
        "name": "Which team has won the most Champions Trophy titles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "India, with three (the shared 2002 trophy, 2013 and 2025)."
        }
      },
      {
        "@type": "Question",
        "name": "Why did India and Sri Lanka share the 2002 title?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The final was washed out twice in Colombo, and the teams were declared joint winners."
        }
      },
      {
        "@type": "Question",
        "name": "When is the next Champions Trophy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2029, in India, per the ICC's events calendar."
        }
      },
      {
        "@type": "Question",
        "name": "Has Pakistan won the Champions Trophy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — in 2017, beating India by 180 runs in the final at The Oval."
        }
      }
    ]
  };

  return (
    <div className="main-wrapper">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <h1 className={styles.h1}>Champions Trophy Winners List</h1>
              
              <p className={styles.paragraph}>
                {"Cricket's \"mini World Cup\" has led several lives — knockout tournament, biennial event, cancelled, revived — and after an eight-year gap it returned in 2025 with India lifting the trophy in Dubai. Nine editions have now been completed, and no tournament in cricket spreads its titles more evenly: seven different winners, plus one famously shared trophy."}
              </p>

              <div className={styles.subTitle}>Every ICC Champions Trophy winner:</div>
              
              <h2 className={styles.h2}>Champions Trophy Winners (1998–2025)</h2>
              
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Winner</th>
                      <th>Runner-up</th>
                      <th>Host</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1998</td>
                      <td>South Africa</td>
                      <td>West Indies</td>
                      <td>Bangladesh</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>2000</td>
                      <td>New Zealand</td>
                      <td>India</td>
                      <td>Kenya</td>
                    </tr>
                    <tr>
                      <td>2002</td>
                      <td>India & Sri Lanka (shared)</td>
                      <td>—</td>
                      <td>Sri Lanka</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>2004</td>
                      <td>West Indies</td>
                      <td>England</td>
                      <td>England</td>
                    </tr>
                    <tr>
                      <td>2006</td>
                      <td>Australia</td>
                      <td>West Indies</td>
                      <td>India</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>2009</td>
                      <td>Australia</td>
                      <td>New Zealand</td>
                      <td>South Africa</td>
                    </tr>
                    <tr>
                      <td>2013</td>
                      <td>India</td>
                      <td>England</td>
                      <td>England</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>2017</td>
                      <td>Pakistan</td>
                      <td>India</td>
                      <td>England</td>
                    </tr>
                    <tr>
                      <td>2025</td>
                      <td>India</td>
                      <td>New Zealand</td>
                      <td>Pakistan & UAE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.note}>
                The 2002 final in Colombo was washed out twice, leaving India and Sri Lanka to share the trophy — still the only shared title in a major ICC event.
              </p>

              <h2 className={styles.h2}>Most Champions Trophy Titles</h2>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Titles</th>
                      <th>Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>India</td>
                      <td>3 (incl. 1 shared)</td>
                      <td>2002*, 2013, 2025</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>Australia</td>
                      <td>2</td>
                      <td>2006, 2009</td>
                    </tr>
                    <tr>
                      <td>South Africa</td>
                      <td>1</td>
                      <td>1998</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>New Zealand</td>
                      <td>1</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <td>Sri Lanka</td>
                      <td>1 (shared)</td>
                      <td>2002*</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td>West Indies</td>
                      <td>1</td>
                      <td>2004</td>
                    </tr>
                    <tr>
                      <td>Pakistan</td>
                      <td>1</td>
                      <td>2017</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.note}>
                {"Two quirks worth savouring: South Africa's 1998 title remains their only major ICC trophy in men's cricket, and Pakistan's 2017 win came after thrashing India in the final — the last time those two met in an ICC final until 2025's group stages renewed hostilities."}
              </p>

              <h2 className={styles.h2}>The Most Recent Edition: India in Dubai</h2>
              <p className={styles.paragraph}>
                {"The 2025 Champions Trophy was nominally Pakistan's first ICC event as hosts since 1996, though India played all their matches in Dubai under the tournament's hybrid arrangement. It ended with Rohit Sharma's side beating New Zealand in the final on 9 March 2025 — India's second outright title, won without losing a match, and consolation of sorts for the 2023 World Cup final defeat. New Zealand's runner-up finish added another line to the most painful ledger in cricket; our World Cup winners pages tell the rest of that story."}
              </p>

              <h2 className={styles.h2}>The Next Champions Trophy</h2>
              <p className={styles.paragraph}>
                The next edition is scheduled for 2029, hosted by India. Whether the tournament keeps its 50-over format or evolves again is a live question — the ICC has reshaped this event more than any other — but its slot in the 2024–2031 rights cycle is confirmed. Details will be added here as the ICC announces them.
              </p>

              <div className={styles.faqSection}>
                <h2 className={styles.h2}>Champions Trophy FAQs</h2>
                
                <div className={styles.faqItem}>
                  <h3>Who won the ICC Champions Trophy 2025?</h3>
                  <p>India, beating New Zealand in the final in Dubai on 9 March 2025 — their second outright title and third overall.</p>
                </div>

                <div className={styles.faqItem}>
                  <h3>Which team has won the most Champions Trophy titles?</h3>
                  <p>India, with three (the shared 2002 trophy, 2013 and 2025).</p>
                </div>

                <div className={styles.faqItem}>
                  <h3>Why did India and Sri Lanka share the 2002 title?</h3>
                  <p>The final was washed out twice in Colombo, and the teams were declared joint winners.</p>
                </div>

                <div className={styles.faqItem}>
                  <h3>When is the next Champions Trophy?</h3>
                  <p>{"2029, in India, per the ICC's events calendar."}</p>
                </div>

                <div className={styles.faqItem}>
                  <h3>Has Pakistan won the Champions Trophy?</h3>
                  <p>Yes — in 2017, beating India by 180 runs in the final at The Oval.</p>
                </div>
              </div>

              <div className={styles.footnote}>
                Last updated: 10 July 2026. Updated after every edition. Results per ICC records.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}
