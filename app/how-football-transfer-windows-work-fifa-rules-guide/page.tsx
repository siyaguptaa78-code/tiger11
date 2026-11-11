import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "How Football Transfer Windows Work: FIFA Rules, Fees & Deadline Day",
  description: "Comprehensive guide to football transfer windows: FIFA RSTP registration periods, three-party transfer contracts, amortization, FIFA TMS, deadline day in IST, and AIFF rules.",
  alternates: {
    canonical: "/how-football-transfer-windows-work-fifa-rules-guide/",
  },
  openGraph: {
    title: "How Football Transfer Windows Work: FIFA Rules, Fees & Deadline Day",
    description: "Comprehensive guide to football transfer windows: FIFA RSTP registration periods, three-party transfer contracts, amortization, FIFA TMS, deadline day in IST, and AIFF rules.",
    url: "https://tiger365play.com/how-football-transfer-windows-work-fifa-rules-guide/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Football Transfer Windows Work: FIFA Rules, Fees & Deadline Day",
    description: "Comprehensive guide to football transfer windows: FIFA RSTP registration periods, three-party transfer contracts, amortization, FIFA TMS, deadline day in IST, and AIFF rules.",
  },
};

const faqs = [
  {
    q: "What happens when the club submits the form just a minute after the deadline?",
    a: "If the official deadline passes without an authorized extension procedure (such as a Premier League Deal Sheet) being formally approved before the cutoff, the transfer application will not be entertained. The player remains registered with their current club until the next registration window opens.",
  },
  {
    q: "Is there any possibility of playing for three teams in one year?",
    a: "According to Article 5 of FIFA RSTP, a player may be registered with a maximum of three clubs during one season. However, during this period, the player is eligible to play official matches for only two clubs, with exceptions made only for overlapping cross-season domestic leagues.",
  },
  {
    q: "Is it possible to make any offers to the players before the transfer window?",
    a: "Clubs are strictly prohibited from approaching contracted players without the prior written consent of their current club. However, under the Bosman ruling recognized by FIFA, a player entering the final six months of their contract is legally entitled to negotiate and sign a pre-contract agreement with an overseas club for a free transfer.",
  },
  {
    q: "What effect does the FIFA Clearing House have on transfer fees?",
    a: "The FIFA Clearing House acts as a centralized financial intermediary to automate and ensure the timely distribution of training compensation and solidarity contributions (up to 5% of the total transfer fee) to the grassroots and developmental clubs that nurtured the player between ages 12 and 23.",
  },
];

export default function TransferWindowsGuidePage() {
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
    headline: "How Football Transfer Windows Work: The Complete Guide to Rules, Fees, and Deadline Day",
    description: "Comprehensive guide explaining the mechanics of football transfer windows under FIFA RSTP, covering registration periods, contract structures, amortization, FIFA TMS, and Deadline Day timings in IST.",
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
      "@id": "https://tiger365play.com/how-football-transfer-windows-work-fifa-rules-guide/",
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
                How Football Transfer Windows Work: The Complete Guide to Rules, Fees, and Deadline Day
              </h1>

              <p className={styles.paragraph}>
                Each year, when summer and winter seasons come, there is an explosion of transfer rumors, tickers, and incredible prices for each single player in the football industry worldwide. However, behind all this fuss, there is a well-regulated process of administration and lawmaking controlled by the global governing body of football – FIFA. Besides being a deal, the transfer process is very well-regulated and includes international clearing houses, contract termination, getting of work permits, and electronic transfer windows.
              </p>

              <p className={styles.paragraph}>
                The understanding of these windows will help you understand why some transfers fail to go through, what impact the regulations of financial fair play have on spending, and why the national leagues, such as the Indian Super League (ISL), align their schedules with the international one.
              </p>

              {/* Featured Infographic */}
              <figure className={styles.imageContainer}>
                <Image
                  src="/images/football-transfer-windows-guide.jpg"
                  alt="How Football Transfer Windows Work: The Complete Guide to Rules, Fees, and Deadline Day"
                  width={1024}
                  height={576}
                  className={styles.articleImage}
                  priority
                />
                <figcaption className={styles.imageCaption}>
                  Visual Overview: Summer vs. Winter registration windows, contract workflows, FIFA TMS, fees, and Deadline Day mechanics.
                </figcaption>
              </figure>

              <h2 className={styles.h2}>1. What Is a Football Transfer Window?</h2>
              <p className={styles.paragraph}>
                In fact, the term &apos;football transfer window&apos; is never used in FIFA regulations. According to Article 6 of the FIFA Regulations on the Status and Transfer of Players (RSTP), these periods are formally referred to as <strong>Registration Periods</strong>.
              </p>
              <p className={styles.paragraph}>
                It denotes the specific timeframe established by each national football association during which clubs are officially permitted to register new players to participate in official competitions.
              </p>
              <p className={styles.paragraph}>
                The terms of negotiation, physical medical tests, and financial arrangements can technically be agreed upon between clubs at any time of the year. However, a player cannot represent their newly affiliated club in official matches unless the national football association completes their registration during an active registration period.
              </p>

              <h3 className={styles.h3}>Two Annual Transfer Windows</h3>
              <p className={styles.paragraph}>
                According to FIFA statutes, each member association must operate two distinct registration periods per annual sports calendar:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>The Primary (Pre-Season) Window:</strong> The primary window lasts up to a maximum duration of 12 weeks (84 calendar days). In major European leagues, this occurs during the summer off-season between June and late August / early September.
                </li>
                <li>
                  <strong>The Secondary (Mid-Season) Window:</strong> The secondary window occurs at the midpoint of the season and cannot exceed 4 weeks (28 calendar days). In Europe, this window traditionally spans the month of January.
                </li>
              </ul>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Window Type</th>
                      <th>Regulatory Constraints (FIFA RSTP Article 6)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary (Summer/Pre-Season)</strong></td>
                      <td>Up to 12 weeks (maximum 84 days)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Secondary (Winter/Mid-Season)</strong></td>
                      <td>Up to 4 weeks (maximum 28 days)</td>
                    </tr>
                    <tr>
                      <td><strong>Free Agents</strong></td>
                      <td>May be registered outside open windows under specific league squad quota rules</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={styles.h2}>2. The Key to a Transfer Procedure of a Player</h2>
              <p className={styles.paragraph}>
                A successful professional player transfer requires three separate and interdependent legal agreements:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Transfer Agreement:</strong> A binding contract between the selling club and the purchasing club specifying the agreed transfer valuation, installment structure, contingent add-ons, and sell-on clauses.
                </li>
                <li>
                  <strong>Contract Termination:</strong> A mutual termination agreement between the player and the selling club ending their existing employment relationship.
                </li>
                <li>
                  <strong>New Employment Contract:</strong> A newly negotiated employment contract between the purchasing club and the player defining wages, length of stay, bonuses, and image rights.
                </li>
              </ul>
              <p className={styles.paragraph}>
                If an issue arises at any stage of these three agreements—such as the player failing to agree personal terms or failing a medical examination—the entire transfer transaction collapses.
              </p>

              <div className={styles.diagramBox}>
{`[Selling Club] <================ Transfer Agreement ================> [Buying Club]
      |                                                                 |
      | Contract Termination                                            | New Employment
      |                                                                 | Contract
      v                                                                 v
                        [ Professional Player ]`}
              </div>

              <h3 className={styles.h3}>Amortization and Payments Procedures</h3>
              <p className={styles.paragraph}>
                One of the most persistent misconceptions among fans is that transfer fees are paid as a single lump-sum upfront. In practice, payments are typically phased in multiple installments spread across years.
              </p>
              <p className={styles.paragraph}>
                Furthermore, under standard financial accounting standards and UEFA Financial Sustainability regulations, transfer fees are <strong>amortized</strong> across the length of the player&apos;s initial contract (capped at a maximum of five years for accounting purposes). For example, a €100 million transfer on a 5-year contract is recorded on the club books as an annual expenditure of €20 million plus wages, rather than a single €100 million hit in year one.
              </p>
              <p className={styles.paragraph}>
                For sports enthusiasts and analysts analyzing market trends via <Link href="/" className={styles.inlineLink}>Online Mahadev book ID</Link> or tracking player movement during the season, understanding amortization clarifies why clubs manage spending meticulously within regulatory financial thresholds.
              </p>

              <h2 className={styles.h2}>3. The Digital Gatekeeper: FIFA TMS</h2>
              <p className={styles.paragraph}>
                Before 2010, international transfers relied on paperwork, physical faxes, and courier services—a slow mechanism vulnerable to administrative fraud, midnight timing disputes, and missed cutoffs. Today, all cross-border transfers must be processed through the mandatory <strong>FIFA Transfer Matching System (TMS)</strong>.
              </p>
              <p className={styles.paragraph}>
                FIFA TMS is a secure, web-based electronic database designed to authenticate international transactions, safeguard the integrity of minor players, and bring complete financial transparency to world football.
              </p>

              <div className={styles.pipelineCard}>
                <div className={styles.pipelineTitle}>FIFA TMS Verification Pipeline</div>
                <ul className={styles.pipelineSteps}>
                  <li className={styles.pipelineStep}>
                    <span className={styles.stepNumber}>1</span>
                    <span><strong>Buying Club Upload:</strong> Submits agreed transfer fees, payment schedules, player identity documentation, intermediary details, and employment contract.</span>
                  </li>
                  <li className={styles.pipelineStep}>
                    <span className={styles.stepNumber}>2</span>
                    <span><strong>Selling Club Upload:</strong> Independently uploads corresponding figures, exact payment dates, bank coordinates, and player consent.</span>
                  </li>
                  <li className={styles.pipelineStep}>
                    <span className={styles.stepNumber}>3</span>
                    <span><strong>Automated System Matching:</strong> TMS software cross-checks all data points between both submissions for an exact 100% match.</span>
                  </li>
                  <li className={styles.pipelineStep}>
                    <span className={styles.stepNumber}>4</span>
                    <span><strong>Discrepancy Resolution:</strong> Any discrepancy in figures, currency, or dates triggers an automatic administrative hold.</span>
                  </li>
                  <li className={styles.pipelineStep}>
                    <span className={styles.stepNumber}>5</span>
                    <span><strong>ITC Issuance:</strong> Once verified, the selling association generates the International Transfer Certificate (ITC), legally clearing the player to take the field.</span>
                  </li>
                </ul>
              </div>

              <h2 className={styles.h2}>4. Excitement on Transfer Deadline Day, &quot;Deal Sheets,&quot; and IST</h2>
              <p className={styles.paragraph}>
                Transfer Deadline Day represents the culmination of intense negotiations. Clubs racing against the countdown must file all regulatory paperwork with their league governing body and upload corresponding records into FIFA TMS before the midnight chime.
              </p>

              <h3 className={styles.h3}>About Deal Sheets</h3>
              <p className={styles.paragraph}>
                In competitions like the English Premier League, clubs that reach an agreement with another team in the final two hours of the window can submit a provisional two-page document known as a <strong>Deal Sheet</strong>. Filing an approved Deal Sheet between 21:00 and 23:00 grants the club an extra two-hour extension until 01:00 to finalize medical assessments, draft contracts, and upload complete paperwork.
              </p>

              <h3 className={styles.h3}>European Deadlines in Indian Standard Time (IST)</h3>
              <p className={styles.paragraph}>
                For Indian football fans tracking the European transfer climax, local midnight deadlines convert into early morning hours in India:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>European League</th>
                      <th>Local Deadline Time</th>
                      <th>Equivalent Indian Standard Time (IST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>English Premier League</strong></td>
                      <td>23:00 GMT / BST</td>
                      <td>03:30 AM / 04:30 AM IST (Next Day)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Spanish La Liga</strong></td>
                      <td>23:59 CET</td>
                      <td>03:29 AM / 04:29 AM IST (Next Day)</td>
                    </tr>
                    <tr>
                      <td><strong>German Bundesliga</strong></td>
                      <td>18:00 CET</td>
                      <td>09:30 PM / 10:30 PM IST (Same Day)</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Italian Serie A</strong></td>
                      <td>20:00 CET</td>
                      <td>11:30 PM / 12:30 AM IST</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.paragraph}>
                Analytical followers monitoring squad news, player rotations, and market depth through their <Link href="/" className={styles.inlineLink}>Tiger365 ID</Link> will find these timezone conversions crucial for verifying when a high-profile signing is certified rather than merely speculative.
              </p>

              <h2 className={styles.h2}>5. Free Agents, Loans, and Release Clauses</h2>
              <p className={styles.paragraph}>
                Beyond direct permanent transfers, several contractual mechanisms define player mobility:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Free Agents:</strong> Out-of-contract players whose previous contracts expired before the close of the registration window can sign with a new club outside official windows, subject to league squad size limits.
                </li>
                <li>
                  <strong>Release / Buyout Clauses:</strong> Mandatory in countries like Spain, a release clause represents a contractually predetermined sum that, once triggered, legally compels the selling club to relinquish the player&apos;s registration rights.
                </li>
                <li>
                  <strong>Loan Agreements:</strong> A temporary transfer where a player joins an alternate club for an agreed period (e.g., 6 months or a full season), frequently featuring optional or mandatory purchase obligations upon meeting performance milestones.
                </li>
              </ul>

              <h2 className={styles.h2}>6. Transfer Window Procedure in Indian Football</h2>
              <p className={styles.paragraph}>
                Domestic football in India is governed by the All India Football Federation (AIFF), which configures its transfer calendar to align seamlessly with the international sports year:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>AIFF Window 1 (Pre-Season):</strong> Spans from early June to late August / early September, enabling Indian Super League (ISL) and I-League clubs to build squads ahead of the campaign kickoff.
                </li>
                <li>
                  <strong>AIFF Window 2 (Mid-Season):</strong> Operates throughout January, offering clubs an opportunity to reinforce rosters ahead of the title run-in and the Super Cup.
                </li>
              </ul>
              <p className={styles.paragraph}>
                Domestic transfers between Indian clubs are recorded directly through the AIFF digital registration portal without requiring an international ITC from FIFA TMS.
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

              <h2 className={styles.h2}>Conclusion: Balancing Legal Precision, Finance, and Timing</h2>
              <p className={styles.paragraph}>
                The modern football transfer window is an intricate synthesis of legal compliance, sophisticated financial engineering, and strict temporal deadlines. With global enforcement through FIFA TMS and stringent domestic financial fair play standards, the margin for error on Deadline Day has narrowed to seconds. Understanding these mechanisms transforms the chaotic transfer rumor mill into a clear, predictable business of professional sports.
              </p>

              <div className={styles.footnote}>
                Regulatory standards referenced from the FIFA Regulations on the Status and Transfer of Players (RSTP) and AIFF Registration Guidelines. Transfer intelligence compiled by Tiger365 Play Sports Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}

