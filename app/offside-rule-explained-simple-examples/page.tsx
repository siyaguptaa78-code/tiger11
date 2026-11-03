import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SportsSidebar from "@/components/SportsSidebar";
import styles from "./article.module.css";

export const metadata: Metadata = {
  title: "The Football Offside Rule Explained Simply: Real Match Examples & Exceptions",
  description: "Understand the football offside rule under IFAB Law 11 simply. Explore real match examples, second-last opponent rule, VAR delay, active interference, and FAQs.",
  alternates: {
    canonical: "/offside-rule-explained-simple-examples/",
  },
  openGraph: {
    title: "The Football Offside Rule Explained Simply: Real Match Examples & Exceptions",
    description: "Understand the football offside rule under IFAB Law 11 simply. Explore real match examples, second-last opponent rule, VAR delay, active interference, and FAQs.",
    url: "https://tiger365play.com/offside-rule-explained-simple-examples/",
    siteName: "Tiger365 Play",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Football Offside Rule Explained Simply: Real Match Examples & Exceptions",
    description: "Understand the football offside rule under IFAB Law 11 simply. Explore real match examples, second-last opponent rule, VAR delay, active interference, and FAQs.",
  },
};

const faqs = [
  {
    q: "Can a goal be considered as an offside when the passer is behind a defending goalkeeper?",
    a: "The answer is 'No,' since in normal circumstances a player is only offside if he is in a position to gain an unfair advantage over the last defender. The situation is only slightly different: if the ball goes from a forward line towards the goalkeeper and even in this case the ball moves back for a moment, the offside player who is ahead of the ball when kick is made, and runs back to midfield line and catches the ball is still offside! The position of the player relative to the ball at the time a kickoff happened is what determines the offside position irrespective of the way the pass has moved.",
  },
  {
    q: "Why is offside not applicable to a throw-in?",
    a: "One of the things that distinguishes the throw-in from other types of ball distribution is that the throw-in is free of the offside law and the rules of the game. According to IFAB throwing in of the ball is an alternative form of starting play after the stoppage of play, which can be used either for the player who throws the ball or the player who has been closest to the touchline when the ball went out of bounds. It is an excellent tactical trick to target a fast forward player positioned near the goal with a powerful throw-in. However, if the moment the ball is thrown in the player touches it, the other teammates of the attacker's team raise their head up to play the ball forwards then the normal offside rules are applicable again.",
  },
  {
    q: "Does offside come into effect in the case of penalty shootouts or 5-a-side turf game?",
    a: "When penalty kick(s) are taken in a regular season game or even during a shootout, offside is not a concern since all the players, except the kicker and the opposing goalkeeper, must stay behind the penalty mark and clear of the penalty area. There is no offside rule in an official futsal game (the indoor 5-a-side game of FIFA) and the traditional 5-a-side turf games on pitches in Indian cities where pitch space is so limited.",
  },
  {
    q: "What is the restart if a player got offside?",
    a: "After an offside foul has been signaled by the referee via whistle, the other team is given an indirect free kick at the location where the defending opponent has interfered with the play (it could happen that player's run back to their half of the playing area from an offside position in order to make contact with the ball). However, as it is an indirect free kick, a goalkeeper cannot directly score the goal without a defender's prior contact.",
  },
  {
    q: "Does the act of deliberately placing the defender off the pitch behind the goal line by the opponent to trick the player into offside lead to a disqualification?",
    a: "The IFAB Law 11.4 says that a defending player who steps out of bounds voluntarily without the referee's permission will be deemed to be on the goal line for all purposes of the offside play until the referee stops play or the defending team has cleared the ball out of their goal area. Therefore, it is illegal for the defender to leave the field of play without the referee's permission as a trick to avoid the offside trap.",
  },
  {
    q: "Semi-Automated Offside Technology (SAOT) is a technology that works how?",
    a: "SAOT is a semi-automated offside detecting system. This technology is introduced by FIFA to be used in the FIFA World Cup and also to elite European football leagues. In SAOT, to find the data of each player, around one hundred camera positions with high precision cameras will be fixed near the stadium roof, so that the skeleton joints of all the players are captured. These high precision cameras are capable of detecting skeleton points of each player 12.5 times per second, totaling at 50 times a player. Fan experiences at the stadium or television broadcast will be made more interesting by the generation of the automated 3D animation of the moment, when the referee decides after looking through his computer monitor and pressing the button of his console that it was an offside, or a player was offside. At the FIFA World Cup stage, it is also revealed that an internal pressure/position sensor inside the ball, a so-called 'ball tracker,' is also part of the SAOT system. That sensor records the timing of the ball being struck to the hundredth of a second.",
  },
];

export default function OffsideRuleGuidePage() {
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
    headline: "The Football Offside Rule Explained Simply: Real Match Examples, Exceptions, and Why Goals Get Ruled Out",
    description: "Understand the football offside rule under IFAB Law 11 simply. Explore real match examples, second-last opponent rule, VAR delay, active interference, and FAQs.",
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
      "@id": "https://tiger365play.com/offside-rule-explained-simple-examples/",
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
                The Football Offside Rule Explained Simply: Real Match Examples, Exceptions, and Why Goals Get Ruled Out
              </h1>

              <p className={styles.paragraph}>
                There is probably no other image that makes the Salt Lake Stadium crowd in Kolkata or late-time viewing sessions of the Champions League in Mumbai shut up more swiftly than the sight of an assistant referee flashing a very bright yellow flag just at the moment when the ball is getting through the goalpost. From a layman&apos;s point of view, it might look like the striker just outran the defense and finally made the chance pay. Meanwhile, from the perspective of the officials, who are under the guidance of Law 11 of the IFAB, this particular attacker got an advantage.
              </p>

              <p className={styles.paragraph}>
                This simple fact: to eliminate &quot;goal-hanging&quot; is the reason an &quot;offside&quot; rule was introduced. Without that rule, football teams would be able to deploy two tall forwards to stay in the opponent&apos;s box and to hit the ball to them from the very edge of the ground and, effectively, reduce midfield play to almost the state of a complete stalemate.
              </p>

              <p className={styles.paragraph}>
                Essentially, that is all the rule says: A player is &quot;offside&quot; if they stand in the opponent&apos;s half of the field, and a part of their body that can score (head, body, or foot) is closer to the opponent&apos;s goal than both the ball and the second-last opponent when the ball is delivered to them by their teammate.
              </p>

              <p className={styles.paragraph}>
                If watching <Link href="/" className={styles.inlineLink}>IPL cricket</Link> is your favorite pastime, you have certainly noticed the umpire checking the static white crease line to see if a runner has been put out by the fielders or a no-ball has been awarded for the batter having touched the front foot. Football game has a different level of complexity where the &quot;crease&quot; is invisible and only the defenders&apos; boots and shoulder blades act as reference markers since they are all moving. After figuring out where to look at the precise millisecond when the ball departs the midfielder&apos;s foot, one would be able to predict the offside trap before the referee even sounds the whistle.
              </p>

              <h2 className={styles.h2}>The Three Key Points for Making Every Offside Decision</h2>
              <p className={styles.paragraph}>
                Referees and Video Assistant Referee (VAR) rooms do not guess. They break every forward pass down into three specific checkpoints under IFAB Law 11. If any one of these three conditions is missing, play continues.
              </p>

              <div className={styles.checkpointBox}>
                <div className={styles.checkpointTitle}>1. Where is the player standing?</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  The attacker must be inside the opposing team&apos;s half of the field. Also, they must be ahead of the ball itself, and there must be fewer than two opponents between them and the goal line.
                </p>
              </div>

              <div className={styles.checkpointBox}>
                <div className={styles.checkpointTitle}>2. When do we freeze the frame?</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  Officials judge offside at the exact instant the ball is touched or played by a teammate—never when the attacker receives the ball downfield.
                </p>
              </div>

              <div className={styles.checkpointBox}>
                <div className={styles.checkpointTitle}>3. Did the player actually get involved?</div>
                <p className={styles.paragraph} style={{ margin: 0 }}>
                  Simply standing in an offside position is not an offense. The referee only stops play if that player touches the ball, blocks the goalkeeper&apos;s line of sight, or physically challenges a defender for the ball.
                </p>
              </div>

              <h2 className={styles.h2}>Why the Law Says &quot;Second-Last Opponent&quot; Instead of &quot;Last Defender&quot;</h2>
              <p className={styles.paragraph}>
                Besides the referee and the linesman, fans and television commentators always refer to the &quot;last defender&quot; during the game. This terminology leads to big mistakes when the penalty area is completely packed at the end of a sequence of plays. The Football Law book by IFAB, on the other hand, never mentions the word &quot;defender&quot;. What they have instead, in a very precise way, is &quot;second-last opponent&quot;.
              </p>
              <p className={styles.paragraph}>
                The goalkeeper is by far the deepest player standing around the goal line (Opponent #1), and the second defender is the center-back (Opponent #2) for virtually every play, except one. In a typical formation, the last defender to join the play is the one and the same with the second-last opponent.
              </p>
              <p className={styles.paragraph}>
                Now let&apos;s imagine a corner where the goalkeeper has to dive outwards to punch away the ball and accidentally gets stuck at the very edge of the penalty area. On the ground, two defenders, however, move into place right on the goal line to guard the net. The defender in the front is Opponent #1, and the one behind is Opponent #2. Now, if a striker is on the playing surface between those two defenders but still ahead of the goalkeeper who, unfortunately, is stuck behind them, then the striker is definitely ahead of both the defenders and the goalkeeper. Therefore, only one opponent ahead of the goal line is closer to them than they are which makes this player definitely offside.
              </p>

              <h2 className={styles.h2}>Which Body Parts Count?</h2>
              <p className={styles.paragraph}>
                According to the laws of the IFAB (International Football Association Board), the player can score a goal using only certain body parts which define the offside line. These parts include a player&apos;s head, torso, legs, and feet.
              </p>
              <p className={styles.paragraph}>
                The players&apos; hands and arms including goalkeepers are totally disregarded for making the offside decision. If a quick winger raises a finger or outstretched arm towards forward direction to demand for pass, then that arm will not get his offside status. However, if a player leaning their chest upper part to a shoulder while starting a sprint forward and this shoulder comes ahead of the opponent second to last player&apos;s heel, then the VAR system will invalidate the goal. The exact line that separates the shoulder which is counted and the arm which is not, is the lowest part of the armpit.
              </p>

              <h2 className={styles.h2}>Four Match Situations That Show How Law 11 Works Through Action</h2>
              <p className={styles.paragraph}>
                Reading the rules is different from actually seeing their application during a fast counter. Walk through four real-life events to understand how the officials apply Law 11.
              </p>

              {/* Case 1 */}
              <div className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <h3 className={styles.h3} style={{ margin: 0 }}>Case 1: Sprint to the Ball</h3>
                  <span className={styles.caseBadgeOnside}>Onside</span>
                </div>
                <p className={styles.paragraph}>
                  Assume Sunil Chhetri is positioned side-by-side with the center-back of the opposing team, thirty yards away from the goal. Chhetri&apos;s teammate gets into position, then the midfielder boots a high cross that goes over the last line of defense. Just at the moment the midfielder makes contact with the ball, Chhetri is at the same level with the defender. Being at the same level with the defender is the definition of being onside.
                </p>
                <p className={styles.paragraph}>
                  Five yards and half a second later while the ball is still up in the air, Chhetri outruns the slowly moving defender without losing hold of the ball, gets the ball only to him, and immediately puts the ball into the goal by scoring.
                </p>
                <div className={styles.decisionText}>
                  Referee Decision: The goal counts. Having an advantage over the opponent at the moment of the touch, not how the goal is finally scored, is what Law 11 regulates.
                </div>
              </div>

              {/* Case 2 */}
              <div className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <h3 className={styles.h3} style={{ margin: 0 }}>Case 2: The Goalkeeper Rebound</h3>
                  <span className={styles.caseBadgeOffside}>Offside</span>
                </div>
                <p className={styles.paragraph}>
                  Winger strikes from twenty yards distance to goal. When winger shoots forward, his partner on the team, let&apos;s name him Forward A, stands two yards in the defensive direction behind the defensive line, near the top spot of the penalty area. Keeper goes out, saves the hard shot into the area middle and Forward A makes a light tap into goalkeeper&apos;s unoccupied net.
                </p>
                <div className={styles.decisionText}>
                  Referee Decision: Goal disallowed, offside. Although Forward A made contact after the ball was deflected to him by the goalkeeper, a deliberate save by the goalkeeper does not count as a change to the situation of offside. The illegal benefit from Forward A being offside at the time the ball was struck gave him the advantage through the bounce-in.
                </div>
              </div>

              {/* Case 3 */}
              <div className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <h3 className={styles.h3} style={{ margin: 0 }}>Case 3: The One-On-Two Sweeper Pass</h3>
                  <span className={styles.caseBadgeOnside}>Onside / Behind Ball</span>
                </div>
                <p className={styles.paragraph}>
                  Two attackers outrun the whole defenders line towards the lone goalkeeper. Attacker A is in possession while Attacker B is running parallel in one direction, about two yards further (closer to the goal line) than the goalkeeper and defender behind him. Attacker A has the ball, Attacker B who is parallel at the line with Attacker A takes control after a short sideways pass for an easy tap-in.
                </p>
                <p className={styles.paragraph}>
                  <strong>Decision:</strong> The striker is caught offside.
                </p>
                <p className={styles.paragraph}>
                  <strong>Change just one thing:</strong> Suppose Attacker B is half a yard behind Attacker A&apos;s ball as they are side by side? When the ball is passed, Attacker B is still closer to the goal line, but he was behind the ball at the moment of the pass.
                </p>
                <div className={styles.decisionText}>
                  Referee Decision: The goal is given. You can never be offside if you are behind the ball when it is passed to you, regardless of where the defenders are.
                </div>
              </div>

              {/* Case 4 */}
              <div className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <h3 className={styles.h3} style={{ margin: 0 }}>Case 4: Screening the Goalkeeper (Active Interference)</h3>
                  <span className={styles.caseBadgeOffside}>Offside</span>
                </div>
                <p className={styles.paragraph}>
                  An attacking midfielder hits a low shot outside the penalty area that directly goes into the corner without touching anyone else. However, an attacking striker is positioned in an offside position right in front of the goalkeeper. He leaps over the ball so it doesn&apos;t hit him.
                </p>
                <div className={styles.decisionText}>
                  Referee Decision: No goal for offside. Though the striker hasn&apos;t had physical contact with the ball, standing squarely before the goalkeeper prevents him from seeing the shot. Such conduct changes the striker from the category of being &quot;passively&quot; involved into that where he has &quot;actively&quot; intervened.
                </div>
              </div>

              <h2 className={styles.h2}>Comparison Table: When Offside Applies vs. When It Does Not</h2>
              <p className={styles.paragraph}>
                Not every dead-ball situation or pass triggers Law 11. Moreover, for readers transitioning from cricket to football, comparing how the two sports police spatial boundaries clarifies why football officials rely on freeze-frames.
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Match Situation</th>
                      <th>Can a Player Be Offside?</th>
                      <th>Official Rule Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Open-Play Forward Pass</strong></td>
                      <td><span className={styles.caseBadgeOffside} style={{ fontSize: '0.8rem' }}>Yes</span></td>
                      <td>Offside applies if the receiver is ahead of the ball and the second-last opponent in the opponent&apos;s half.</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Throw-In</strong></td>
                      <td><span className={styles.caseBadgeOnside} style={{ fontSize: '0.8rem' }}>No</span></td>
                      <td>Players cannot be offside directly from a throw-in, even if they stand next to the opposing goalkeeper.</td>
                    </tr>
                    <tr>
                      <td><strong>Corner Kick</strong></td>
                      <td><span className={styles.caseBadgeOnside} style={{ fontSize: '0.8rem' }}>No</span></td>
                      <td>Because the ball is placed on the corner arc (the furthest forward line of the pitch), offside is waived on the initial kick.</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Goal Kick</strong></td>
                      <td><span className={styles.caseBadgeOnside} style={{ fontSize: '0.8rem' }}>No</span></td>
                      <td>Offside does not apply directly from a goal kick; strikers can receive a long kick deep in enemy territory.</td>
                    </tr>
                    <tr>
                      <td><strong>Free Kick</strong></td>
                      <td><span className={styles.caseBadgeOffside} style={{ fontSize: '0.8rem' }}>Yes</span></td>
                      <td>Attacking players must stay onside until the free-kick taker makes contact with the ball.</td>
                    </tr>
                    <tr className={styles.highlightRow}>
                      <td><strong>Pass From an Opponent</strong></td>
                      <td><span className={styles.caseBadgeOnside} style={{ fontSize: '0.8rem' }}>No</span></td>
                      <td>If a defender makes a deliberate, controlled pass back toward their own keeper and a striker intercepts it, the striker is onside.</td>
                    </tr>
                    <tr>
                      <td><strong>Own Half of the Pitch</strong></td>
                      <td><span className={styles.caseBadgeOnside} style={{ fontSize: '0.8rem' }}>No</span></td>
                      <td>If a player&apos;s entire head, body, and feet are inside their own half when the pass is made, they cannot be offside.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={styles.h2}>The &quot;Deliberate Play&quot; vs. &quot;Deflection&quot; Rule That Confuses Fans</h2>
              <p className={styles.paragraph}>
                Fans are usually confused by such moments in football where the ball is aimed at an offside striker but at some point it strikes a defender. Should the striker at the beginning being touched the defender by this contact be considered legally onside?
              </p>
              <p className={styles.paragraph}>
                As per IFAB&apos;s updated guideline on &quot;deliberate play vs. deflection,&quot; the sole determining factor is if the player had the time, body control, and full sight of the ball:
              </p>
              <ul className={styles.ruleList}>
                <li>
                  <strong>Deflection or Instinctive Stretch:</strong> Let&apos;s say the attacking midfielder kicks the ball forward, the defender instinctively stretches out his foot at full stretch, sliding. Even though the ball strikes a boot, it does not count and does not stop or change phase. Therefore, the forward behind the defender is still considered to be offside.
                </li>
                <li>
                  <strong>Deliberate Play:</strong> In one case where a ball goes up so high that even from the defenders&apos; point of view it may look a bit like the ball will come back down, if they have the space, the time, but they fail to clear the ball as intended by heading or their chest so that it ends up flying backwards into their own goal. That is when the striker, who was offside originally, can now legally react and score by taking advantage of that mistake of the defender.
                </li>
              </ul>

              <h2 className={styles.h2}>Why Assistant Referees Raise the Flag After Delay (VAR and Flag Delay)</h2>
              <p className={styles.paragraph}>
                If you&apos;re a football fan, especially of television football, or perhaps you like match analysis on sports portals like Tiger365Play - you have surely experienced the frustration of a striker playing forty or so yards on the field clearly offside, then making a shot and getting a corner. But only after that incident, a flag gets raised by an assistant referee.
              </p>
              <p className={styles.paragraph}>
                Actually, you have not seen a bad performance by the official; they are following one of the regulations of FIFA implemented together with the Video Assistant Referee (VAR) system and Semi-Automated Offside Technology (SAOT).
              </p>
              <p className={styles.paragraph}>
                To put it simply, an immediate flag raising by the assistant would require a referee&apos;s whistle for a foul and consequent stoppage of the game. But if a couple of seconds later a video reveals that the striker&apos;s knees were only two millimeters onside, the team will be left without a good goal-scoring chance and the VAR is simply unable to provide a solution in that case.
              </p>
              <p className={styles.paragraph}>
                Rather than raising a flag at the moment when the attack is going on, officials wait to raise the flag until the end of the attack (it can be any one among the following: a goal, a defensive clearance, or a goalkeeper saving the ball that went behind the goal line, resulting in another throw or kickoff).
              </p>
              <p className={styles.paragraph}>
                In this way, the game is preserved:
              </p>
              <ul className={styles.ruleList}>
                <li>If the attacker&apos;s shot hits the goalpost, VAR automatically checks the 3D limb-tracking cameras.</li>
                <li>If the attacker was offside, the goal is disallowed and play resumes with an indirect free kick for the defense.</li>
              </ul>
              <p className={styles.paragraph}>
                In matches where offside calls are made by traditional methods without VAR (as it is usually the case in lower division leagues or grassroots state tournaments under the AIFF), the assistant referee immediately shows the offside flag if he sees the offside player touching/carrying the offensive player, as there is no video backup that can overturn a delayed decision.
              </p>
              <p className={styles.paragraph}>
                For spectators who keep live score statistics or use an online <Link href="/" className={styles.inlineLink}>Betting ID to follow latest market updates of a running tournament on Tiger365Play&apos;s sports portal</Link>, knowing this delayed call period is a must. After the referee signals for restart of play with a pointing hand on the center circle following a VAR clearance, a sudden ball on the back of the net during a tight counter-attack will not affect the scoreboard yet. As well as cricket fans in IPL who wait for the third umpire&apos;s siren check before celebrating a wicket with a tight boundary catch, football followers should note the assistant referee&apos;s body language right after a goal has been scored.
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

              <h2 className={styles.h2}>Game Analysis from the Perspective of Tactical Players</h2>
              <p className={styles.paragraph}>
                If you stop seeing the ball and instead glance at the defensive line just before a midfielder touches the ball, you&apos;ll see the game change for you and will be able to understand football tactics just like in a high-speed chess match. A very high defensive line - that kind of defensive positioning that can be seen not only in European champion teams but also in Indian Super League clubs with attacking style - is basically moving to cover the whole field, by taking one step forwards at a time, in a synchronized movement that will reduce a pitch to a space of 30 yards where the ball is played.
              </p>
              <p className={styles.paragraph}>
                The whole purpose of this type of playing tactic is to force the ball carriers to make really accurate ball runs at the right moment, so when the striker is trying to time up their running to be where their teammates want them to be. Next time you see a match, take your eyes off the player who is about to make the pass for half a second, and instead look at the area around the striker&apos;s left and right shoulders to see the distance to the last defender&apos;s back foot. That is how you get to know whether the goal is valid or not before the screen is filled with videos.
              </p>

              <div className={styles.footnote}>
                Official Laws of the Game referenced from IFAB Law 11 (Offside). Match analysis and tactical guide compiled by Tiger365 Play Editorial Team.
              </div>
            </div>
          </article>

          <Footer />
        </div>
      </div>
    </div>
  );
}

