"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  const getWhatsAppLink = (textMsg: string) => {
    return `${SITE_CONFIG.whatsappLink}?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <section className={styles.infoSection} id="about">
      <div className="container">
        
        {/* =========================================================
            SECTION 1: TIGER365 ID PROVIDER INTRO
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.introBlock}`}>
          <h1 className={styles.mainTitle}>
            Tiger365 ID Provider: Get Your Tiger365 Login and Start Betting on India’s Most Trusted Platform
          </h1>
          <p className={styles.paragraph}>
            If you want a fast, safe, and reliable way to get your <strong>tiger365</strong> or <strong>tigerexch365</strong> betting ID, you are in the right place. We are one of India’s most trusted casino and sports betting ID providers on the Tiger Exchange network, and thousands of players choose us every day because we keep everything simple. You connect with our WhatsApp support team, we create your <strong>tiger365 ID</strong>, and you can start playing your favorite Indian casino games and sports betting markets within minutes.
          </p>
          <p className={styles.paragraph}>
            Our aim is to give you a smooth, user friendly, and fully secure betting experience on the <strong>tiger365 app</strong> and website. Whether you enjoy Teen Patti, Andar Bahar, Roulette, Slots, or want to bet live on cricket, football, or kabaddi, your journey begins with your <strong>tiger365 login</strong>. And we are here to help you get it instantly.
          </p>
          <p className={styles.paragraph}>
            This page explains everything you need before you start. How <strong>tiger365 pro</strong> works, why the tigerexch365 platform is trusted across India, how to get your ID quickly, what games you can play, how deposits and withdrawals work, and why so many players rely on our service every day. Everything is written in simple English, so even new users can understand it easily.
          </p>
        </div>

        {/* =========================================================
            SECTION 2: WHAT IS TIGER365 PRO & POPULARITY
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>What Is Tiger365 pro and Why Is It So Popular in India</h2>
              <p className={styles.paragraph}>
                <strong>Tiger365</strong> is one of India’s fastest growing online casino and sports betting platforms. It runs on the trusted <strong>tigerexch365</strong> network, known for its smooth interface, fast payments, strong security, and huge variety of games. The platform is built for Indian players who want a clean, simple, and hassle free betting experience.
              </p>
              <p className={styles.paragraph}>
                Here is why <strong>Tiger365 Pro</strong> has become so popular across India:
              </p>
              <ol className={styles.orderedList}>
                <li>
                  <strong>User friendly interface:</strong> The website and <strong>tiger365 app</strong> are easy to use, even for beginners. You can move between casino games, sports events, live betting, and your wallet without getting confused.
                </li>
                <li>
                  <strong>Designed for Indian players:</strong> Tiger365 includes all the popular Indian casino games like Teen Patti, Andar Bahar, Jhandi Munda, and Live Lottery. It also offers a wide range of cricket betting options covering IPL, Test matches, the World Cup, Ranji Trophy, and more.
                </li>
                <li>
                  <strong>Fast and secure transactions:</strong> Deposits and withdrawals are quick, smooth, and safe. Your money moves without delay.
                </li>
                <li>
                  <strong>Bet anytime:</strong> Cricket, football, casino tables, and more are available around the clock, giving you nonstop action.
                </li>
                <li>
                  <strong>Live casino experience:</strong> You can enjoy real dealers, real tables, and real time gameplay directly from your phone, making it feel like a true casino experience.
                </li>
              </ol>
              <p className={styles.paragraph}>
                To enjoy all these features, you need a verified <strong>Tiger365 login ID</strong>, and that is exactly what we provide.
              </p>
              <div className={styles.ctaBoxLeft}>
                <a 
                  href={getWhatsAppLink("Hi! I want to get my Tiger365 login ID.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  PLAY NOW
                </a>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.aboutImage}
                alt="What Is Tiger365 pro"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 3: GET TIGER365 ID INSTANTLY ON WHATSAPP
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Get Your Tiger365 ID Instantly on WhatsApp</h2>
              <p className={styles.paragraph}>
                We keep the process simple because players want speed and clarity. There are no long forms and no confusing steps. You only need to connect with our support team on WhatsApp, and we take care of the rest.
              </p>
              <p className={styles.paragraph}>
                Here is how it works:
              </p>
              <ol className={styles.orderedList}>
                <li>Tap the WhatsApp button on our website</li>
                <li>Send us a message saying you want a <strong>tiger365 ID</strong></li>
                <li>Our team verifies your request within minutes</li>
                <li>Your ID is created right away</li>
                <li>Log in using your <strong>tiger365 login</strong> on the website or the <strong>tiger365 app</strong></li>
              </ol>
              <p className={styles.paragraph}>
                That’s all it takes. Fast, direct, and secure. We never delay, and we never make the process complicated. Your privacy stays completely protected, and you can begin your betting journey smoothly and confidently.
              </p>
              <div className={styles.ctaBoxLeft}>
                <a 
                  href={getWhatsAppLink("Hi! I want to get a Tiger365 ID on WhatsApp.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  PLAY NOW
                </a>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.whatsappPromo}
                alt="Get Tiger365 ID Instantly on WhatsApp"
                width={1024}
                height={748}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 4: FOUR KEY STATS GRID
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏆</div>
              <h3>10000+ Betting ID's</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏏</div>
              <h3>Online Cricket Betting</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🎮</div>
              <h3>10000+ Active Players</h3>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💬</div>
              <h3>Personalized 24*7 Support</h3>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 5: WHY CHOOSE US AS YOUR TIGEREXCH365 ID PROVIDER
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Why Choose Us as Your Tigerexch365 ID Provider</h2>
          <p className={styles.paragraphCenter}>
            Players trust us because we focus on three things that matter most: speed, honesty, and real support. We keep everything simple and reliable so you always know what to expect.
          </p>
          <ol className={styles.orderedListCenter}>
            <li><strong>Instant Tiger365 ID creation:</strong> Once you connect with us on WhatsApp, we create your <strong>tiger365 login</strong> right away. No waiting and no delays.</li>
            <li><strong>Fully secure and private:</strong> Your information stays completely confidential. We follow strict privacy and security practices to make sure your betting experience is safe from start to finish.</li>
            <li><strong>24×7 WhatsApp support:</strong> Our team is always available to help you. Whether it is an issue with the <strong>tiger365 app</strong>, deposits, withdrawals, or game guidance, you can reach us anytime.</li>
            <li><strong>Quality service you can count on:</strong> We are experienced ID providers on the <strong>tigerexch365</strong> network. We know the platform well and solve issues quickly to keep your account running smoothly.</li>
            <li><strong>Support for both new and existing players:</strong> New players get full guidance during setup. Existing players get quick help with upgrades, troubleshooting, and anything else they need.</li>
          </ol>
          <div className={styles.ctaBoxCenter}>
            <a 
              href={getWhatsAppLink("Hi! I want to play on Tiger365.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              PLAY NOW
            </a>
          </div>
        </div>

        {/* =========================================================
            SECTION 6: LOGIN GUIDE FOR NEW USERS
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.guideBlock}`}>
          <h2 className={styles.sectionTitle}>Tiger365 Login Guide for New Users</h2>
          <p className={styles.paragraph}>
            Once you receive your ID, logging in is simple. The Tiger365 platform is made for beginners, so you never feel lost.
          </p>
          <h3 className={styles.subTitle}>Step-by-step Tiger365 login process:</h3>
          <ul className={styles.bulletList}>
            <li>Visit the official Tiger365 website.</li>
            <li>Enter your <strong>Tiger365 login</strong> username.</li>
            <li>Enter your password.</li>
            <li>Click Login.</li>
            <li>Start betting or playing casino games.</li>
          </ul>
          <p className={styles.paragraph}>
            You can use the same details to log into the <strong>Tiger365 app</strong>. If you forget your password or login details, our support team will help you instantly on WhatsApp.
          </p>
        </div>

        {/* =========================================================
            SECTION 7: TIGER365 APP MOBILE BETTING
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Tiger365 App: Betting Made Easy on Your Mobile</h2>
              <p className={styles.paragraph}>
                The <strong>tiger365 app</strong> is the easiest and most comfortable way for Indian players to enjoy casino games and sports betting on their phones. The app is fast, lightweight, and simple to use, which is why so many players choose the tiger365 mobile experience over any other platform. Once our team creates your ID, your <strong>tiger365 login</strong> works instantly on the app, giving you direct access to casino tables, live matches, and all major betting markets.
              </p>
              <p className={styles.paragraph}>
                The tiger365 app is designed for Indian users who want smooth gameplay, quick betting updates, and easy navigation. It connects to the secure <strong>tigerexch365</strong> network, which keeps your account protected while you enjoy your favorite Indian casino games and sports events.
              </p>
              <h3 className={styles.subTitle}>Key features of the tiger365 app:</h3>
              <ul className={styles.bulletList}>
                <li>Fast and secure tiger365 login</li>
                <li>Instant access to cricket, football, and kabaddi betting</li>
                <li>All major Indian casino games in one app</li>
                <li>Quick deposits and withdrawals</li>
                <li>Low data usage for smooth performance</li>
                <li>Works on all Android devices</li>
                <li>Clean and beginner friendly layout</li>
                <li>Real time odds and match updates</li>
                <li>Safe and secure wallet system</li>
                <li>Full WhatsApp support whenever you need help</li>
              </ul>
              <p className={styles.paragraph}>
                The tiger365 app brings everything together in one simple place. Casino games, live sports, betting markets, and fast payments all run smoothly. Whether you love cricket or enjoy quick Teen Patti rounds, the tiger365 app gives you the best way to play anytime, anywhere.
              </p>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.appPromo}
                alt="Tiger365 Mobile App"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 8: GAMES YOU CAN PLAY
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Games You Can Play on Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            The <strong>tiger365</strong> platform offers one of the largest collections of casino games and sports betting markets in India. Since tiger365 and <strong>tigerexch365</strong> are designed with Indian players in mind, you get easy access to the games and sports you already love. From Teen Patti to IPL betting, the platform delivers nonstop entertainment. Once you receive your <strong>tiger365 login</strong>, every game and betting market becomes available instantly.
          </p>
        </div>

        {/* =========================================================
            SECTION 9: INDIAN CASINO GAMES
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Indian Casino Games on Tiger365</h2>
              <p className={styles.paragraph}>
                Indian players enjoy games that feel familiar, and the <strong>tiger365 app</strong> brings them all together with smooth gameplay, live dealers, and a real casino feel.
              </p>
              <div className={styles.gameDetailList}>
                <div className={styles.gameDetailItem}>
                  <strong>Teen Patti:</strong>
                  <p>A classic three card Indian favorite. Play against real players or live dealers. The rules are simple, the rounds are fast, and the winning chances are high, which is why Teen Patti is a top pick on <strong>tiger365 pro</strong>.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Andar Bahar:</strong>
                  <p>A simple and exciting card game where you predict whether the winning card will fall on the Andar side or the Bahar side. Great for new players who want quick action.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Jhandi Munda:</strong>
                  <p>A traditional dice game from North East India. Bet on symbols, watch the dice roll, and enjoy instant payouts. It is fun, fast, and perfect for casual players.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Live Matka:</strong>
                  <p>A modern twist on the classic Matka lottery game. Tiger365 offers live draws, simple betting choices, and clear payouts.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Rummy:</strong>
                  <p>Play classic Indian Rummy with smooth controls and multiple table options. Perfect for players who enjoy skill based card games.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Indian Roulette:</strong>
                  <p>A popular wheel game with Indian style tables. Place your bets on numbers, patterns, or colors and watch the wheel decide your fate.</p>
                </div>
              </div>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.casinoPromo}
                alt="Indian Casino Games on Tiger365"
                width={1024}
                height={1536}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 10: INTERNATIONAL CASINO GAMES
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>International Casino Games on Tiger365</h2>
          <p className={styles.paragraphCenter}>
            Along with Indian favorites, the <strong>tigerexch365</strong> network offers top quality international casino games with HD streaming and professional dealers.
          </p>
          <div className={styles.casinoGrid}>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/game.png"
                alt="Blackjack Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Blackjack</h3>
              <p>A strategy based card game where you try to beat the dealer by getting as close to 21 as possible.</p>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/game-1.png"
                alt="Baccarat Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Baccarat</h3>
              <p>A simple game where you bet on Player, Banker, or Tie. Easy rules and quick outcomes make it beginner friendly.</p>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/jackpot-machine-2.png"
                alt="Slots Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Slots</h3>
              <p>Enjoy hundreds of slot games with fun customized themes, bonus rounds, jackpots, and nonstop excitement.</p>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/roulette-1.png"
                alt="Roulette Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Roulette</h3>
              <p>A classic game where the spinning wheel decides the winner. Bet on numbers, colors, or combinations.</p>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/casino-chip.png"
                alt="Poker Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Poker</h3>
              <p>Play live poker formats such as Texas Hold’em and Omaha. Test your skills against real players at real tables.</p>
            </div>
            <div className={styles.casinoCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2025/11/poker-table.png"
                alt="Live Casino Tables Icon"
                width={64}
                height={64}
                className={styles.casinoIcon}
              />
              <h3>Live Casino Tables</h3>
              <p>Experience real dealers, HD video, and fully interactive gameplay from anywhere.</p>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 11: WHY INDIAN PLAYERS LOVE TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Why Indian Players Love Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            Indian players want a betting platform that is simple, fast, and stress free. This is exactly why <strong>tiger365</strong> and <strong>tigerexch365</strong> have become two of the most trusted names in the country. The platform is designed for Indian users and gives them smooth betting, familiar casino games, quick payments, and a clean interface that feels easy from the very first tap.
          </p>
          <div className={styles.loveReasonsList}>
            <div className={styles.loveReasonItem}>
              <strong>Simple and beginner friendly interface</strong>
              <p>The tiger365 platform is easy for everyone to use. All menus are clear and simple, so you can switch between casino games, live matches, and sports betting without any confusion.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Indian casino games included</strong>
              <p>The tiger365 app brings all the popular Indian casino games together, like Teen Patti, Andar Bahar, Jhandi Munda, and Rummy. Since these games are familiar, players feel comfortable and confident right away.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Fast deposits and withdrawals</strong>
              <p>Payments on the tiger365 app are quick and reliable. You can deposit instantly through UPI, PhonePe, Google Pay, Paytm, or bank transfer. Withdrawals are just as smooth, which is one of the biggest reasons users trust the platform.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No technical complications</strong>
              <p>Tiger365 runs on the dependable tigerexch365 network. You don’t need any technical knowledge to start. Simply log in with your tiger365 ID, make a deposit, and begin playing.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Trusted ID providers</strong>
              <p>Players get their tiger365 login from verified ID providers who offer 24×7 WhatsApp support. This gives users the confidence and guidance they need, especially when starting out.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No hidden fees or surprise charges</strong>
              <p>Tiger365 keeps everything transparent. Deposits, withdrawals, and gameplay are clean and simple with no extra fees.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Smooth performance on all mobile devices</strong>
              <p>The tiger365 app runs well on all Android phones, even older models or slower networks. This makes it a great choice for players across India.</p>
            </div>
          </div>
          <p className={styles.paragraphCenter}>
            Indian players choose <strong>tiger365 pro</strong> because the platform understands what they want. Whether you enjoy Teen Patti, Andar Bahar, Rummy, or live cricket betting, tiger365 gives you everything in one secure, easy to use place.
          </p>
        </div>

        {/* =========================================================
            SECTION 12: DEPOSITS & WITHDRAWALS ON TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Deposits and Withdrawals on Tiger365</h2>
              <p className={styles.paragraph}>
                Smooth and secure payments are one of the main reasons Indian players prefer <strong>tiger365</strong> and the <strong>tigerexch365</strong> network. The platform keeps deposits and withdrawals quick, simple, and completely stress free. Once you receive your <strong>tiger365 login</strong>, you can manage your money with full confidence.
              </p>
              <p className={styles.paragraph}>
                The <strong>tiger365 app</strong> supports all major payment methods used across India. You can deposit instantly through UPI, PhonePe, Google Pay, Paytm, or bank transfer. Your funds show up in your tiger365 wallet within seconds, so you can start playing your favorite casino games or placing sports bets right away.
              </p>
              <p className={styles.paragraph}>
                Withdrawals on tiger365 are just as smooth. After you request a payout, it is processed safely through your preferred payment option. And if you ever need help, our WhatsApp support team is always available to assist with withdrawal requests, payment confirmations, or tracking your payout. You receive your money quickly and without complications, making your entire gaming experience simple and stress free.
              </p>
            </div>
            <div className={styles.colImg}>
              {/* Note: Fallback to aboutImage if withdrawalPromo is unavailable, but we specify it in constants */}
              <Image 
                src={SITE_CONFIG.images.withdrawalPromo}
                alt="Deposits and Withdrawals on Tiger365"
                width={1024}
                height={1024}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 13: RESPONSIBLE GAMING ON TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Responsible Gaming on Tiger365</h2>
              <p className={styles.paragraph}>
                Playing on <strong>tiger365</strong> is exciting, but staying in control is important. We encourage every player to enjoy betting in a safe and balanced way. Set limits that feel comfortable, avoid chasing losses, and take breaks when you need them. Always play with a clear mind and treat betting as entertainment, not as a source of income.
              </p>
              <p className={styles.paragraph}>
                If at any point you feel unsure or overwhelmed, our support team is always available on WhatsApp to help you. Your comfort and safety matter to us, and we want your experience on <strong>tiger365</strong> to stay positive, enjoyable, and responsible at all times.
              </p>
            </div>
            <div className={styles.colImg}>
              <Image 
                src={SITE_CONFIG.images.responsiblePromo}
                alt="Responsible Gaming on Tiger365"
                width={1024}
                height={1024}
                className={styles.responsiveImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 14: TRUSTED PATH TO TIGER365
            ========================================================= */}
        <div className={`${styles.sectionBlock} ${styles.introBlock}`}>
          <h2 className={styles.sectionTitleCenter}>Your Trusted Path to Tiger365 Starts Here</h2>
          <p className={styles.paragraphCenter}>
            Choosing <strong>tiger365</strong> gives you a simple, fast, and dependable way to enjoy casino games and sports betting in India. Whether you love Indian classics like Teen Patti and Andar Bahar or prefer live cricket betting and international casino tables, everything is available in one smooth and easy experience. Getting your <strong>tiger365 login</strong> takes only a moment. Connect with our WhatsApp support team, receive your ID, and start playing on the <strong>tiger365 app</strong> within minutes. If you are looking for a secure, user friendly, and reliable platform backed by the trusted <strong>tigerexch365</strong> network, tiger365 is the perfect place to begin your betting journey.
          </p>
        </div>

        {/* =========================================================
            SECTION 15: PAYMENT METHODS
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Payment Methods</h2>
          <div className={styles.paymentMethodsGrid}>
            <div className={styles.paymentCard}>
              <div className={styles.paymentIcon}>🏦</div>
              <h4>Bank Transfer</h4>
            </div>
            <div className={styles.paymentCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2022/11/640px-Paytm_logo-1.png"
                alt="Paytm Logo"
                width={120}
                height={40}
                className={styles.paymentLogoImg}
              />
              <h4>Paytm</h4>
            </div>
            <div className={styles.paymentCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2022/11/60e7f964711cf700048b6a6a-1024x424.png"
                alt="Google Pay Logo"
                width={100}
                height={40}
                className={styles.paymentLogoImg}
              />
              <h4>Google Pay</h4>
            </div>
            <div className={styles.paymentCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2022/11/PhonePe_Logo_full-1.png"
                alt="PhonePe Logo"
                width={120}
                height={30}
                className={styles.paymentLogoImg}
              />
              <h4>PhonePe</h4>
            </div>
            <div className={styles.paymentCard}>
              <Image 
                src="https://tiger-exchange247.com/wp-content/uploads/2022/11/UPI.png"
                alt="UPI Logo"
                width={80}
                height={38}
                className={styles.paymentLogoImg}
              />
              <h4>UPI</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
