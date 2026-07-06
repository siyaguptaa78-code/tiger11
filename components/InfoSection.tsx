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
            Tiger365 ID Provider: Get Your Tiger365 Login and Start Betting on India’s Most Trustworthy Platform
          </h1>
          <p className={styles.paragraph}>
            For users searching for a convenient, safe, and quick way to get a tiger365 or tigerexch365 betting ID, you are in the right place. Being one of India’s most reliable Tiger Exchange ID providers, we strive to establish a convenient and reliable connection with our clients. Every interaction with our website is built upon the idea of simplicity: by chatting with our WhatsApp support, we enable you to get your tiger365 ID in a fast and secure manner. Our customers entrust us with their tigerexch365 ID generation so they can enjoy our amazing array of Indian tiger365 casino games and sports betting markets.
          </p>
          <p className={styles.paragraph}>
            Our goal is to provide our clients with an ultimate convenient, user-friendly, and secure betting experience on tiger365 apps and website. Whether our users want to play live Teen Patti, Andar Bahar, Roulette, Slots, or want to bet on live Cricket, Kabaddi, and Football matches, their journey starts with their tiger365 login ID and tigerexch365 website. And we are here to help them achieve this dream right now.
          </p>
          <p className={styles.paragraph}>
            This webpage will tell you everything about what tiger365 pro has to offer before you register and start betting. It will introduce you to tigerexch365’s popularity among Indian bettors, explain how you can get your ID quickly and easily, explore the types of games and markets you can enjoy on this platform, examine the deposit and withdrawal process, and more. Everything is written in a simple English language that will help you understand everything clearly and without spending hours trying to decipher the complicated instructions.
          </p>
        </div>

        {/* =========================================================
            SECTION 2: WHAT IS TIGER365 PRO & POPULARITY
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>What Is Tiger365 pro and Why Is It So Popular In India</h2>
              <p className={styles.paragraph}>
                Tiger365 is one of India’s fastest-growing online casino and sports betting platforms that operate on the popular tigerexch365 network. This website excels at providing its users with an ultimate betting experience due to its intuitive interface, high-speed payments, advanced security measures, and vast game variety. Tiger365 is a perfect choice for those who want to enjoy a seamless betting adventure with no hassles involved.
              </p>
              <p className={styles.paragraph}>
                Below are some reasons why Tiger365 Pro has gained so much popularity among Indian bettors:
              </p>
              <ol className={styles.orderedList}>
                <li>
                  <strong>Easy to use:</strong> The intuitive design of tiger365 website and apps enables you to switch between sports betting, casino games, live betting, and your wallet effortlessly.
                </li>
                <li>
                  <strong>Popular Indian games:</strong> Tiger365 excels at offering its users a vast library of Indian casino games such as Teen Patti, Andar Bahar, Jhandi Munda, and Live Matka lottery. Moreover, you can enjoy a variety of local sports betting markets, including IPL, Test Matches, the World Cup, Ranji Trophy, etc.
                </li>
                <li>
                  <strong>Fast & secure payments:</strong> Make quick and easy deposits and withdrawals to your bank account using UPI, PhonePe, Google Pay, Paytm, or Net Banking.
                </li>
                <li>
                  <strong>24×7 Betting:</strong> You can enjoy betting at any time you want as Tiger365 platform provides you with cricket matches, Football, Kabaddi, and Live Casino games around the clock.
                </li>
                <li>
                  <strong>Live casino experience:</strong> You can enjoy real-time gameplay with human dealers to have a thrilling and realistic casino adventure directly from your phone.
                </li>
              </ol>
              <p className={styles.paragraph}>
                To enjoy the benefits that Tiger365 has to offer, you only need a reliable Tiger365 login ID, which we can provide to you.
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
                We believe that convenience is one of the most vital aspects of the customer experience. And that is why we have implemented the easiest way to obtain your ID. By chatting with our friendly assistant on WhatsApp, you will be able to request your tiger365 ID, and we will do the rest.
              </p>
              <p className={styles.paragraph}>
                Here is how the process works:
              </p>
              <ul className={styles.bulletList}>
                <li>By pressing the WhatsApp button on our website, you can send us a message requesting your tiger365 ID</li>
                <li>Our team will verify your request within a few minutes</li>
                <li>Your ID will be generated right away</li>
                <li>You can log in using your tiger365 login on the web or on the mobile app</li>
              </ul>
              <p className={styles.paragraph}>
                That is all you need to do to get your tiger365 login, and you will be playing on India’s best betting platform in no time. We never ask our clients for extra information, and we never delay the process. We value your privacy and keep all your data safe and secure. And most importantly, our customer support is always available to help you resolve any issues.
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
          <h2 className={styles.sectionTitleCenter}>Why Choose Us As Your Tigerexch365 ID Provider</h2>
          <p className={styles.paragraphCenter}>
            Many players turn to us for our ability to provide fast, transparent, and reliable results. We believe in keeping all our operations as simple and uncomplicated as possible so our clients can have a fantastic betting experience and get the most out of their betting.
          </p>
          <ul className={styles.bulletListCenter}>
            <li><strong>Instant tiger365 id creation:</strong> By contacting us on WhatsApp, you will be able to get your tiger365 login right away. Your privacy and security are guaranteed.</li>
            <li><strong>Fully secure and private:</strong> We promise to keep all your personal data private and follow all relevant security standards so you can bet on Tiger365 with a clear conscience.</li>
            <li><strong>24×7 WhatsApp support:</strong> Our staff is always available to assist you. Whether it is an issue with the tiger365 app, deposits, withdrawals, or any other problems, our team will be glad to help you anytime they can.</li>
            <li><strong>Quality online experience:</strong> We are professional ID providers on tigerexch365 network, and we have extensive experience working with this platform. This allows us to offer our clients the best services and solve their issues efficiently.</li>
            <li><strong>Support both new and existing users:</strong> Our friendly team is always available to help new users to set up their accounts and assist existing players to solve their problems.</li>
          </ul>
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
          <h2 className={styles.sectionTitle}>Tiger365 Login Guide For First-Time Users</h2>
          <p className={styles.paragraph}>
            After you get your Tiger365 ID, you only need a few simple steps to log in and start enjoying all your favorite games. Designed for all users, including first-time visitors, the Tiger365 website will show you what to do to log in to your new account.
          </p>
          <p className={styles.paragraph}>
            Below is a step-by-step guide on how to perform a Tiger365 login and gain access to all exciting games and sports betting markets:
          </p>
          <ul className={styles.bulletList}>
            <li>By visiting the official tiger365 website, you can type in your Tiger365 login and password and click the login button to start betting.</li>
          </ul>
          <p className={styles.paragraph}>
            You can also use the same credentials to log in to the tiger365 app. Moreover, if you have forgotten your password or login details, our team can help you right away on WhatsApp.
          </p>
        </div>

        {/* =========================================================
            SECTION 7: TIGER365 APP MOBILE BETTING
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Tiger365 App: The Easiest Way To Enjoy Tiger365 On Your Mobile</h2>
              <p className={styles.paragraph}>
                The tiger365 app is the most comfortable and easy way for Indian users to enjoy this website’s casino and sportsbook services. Featuring a lightweight design and intuitive interface, the tiger365 app is a popular choice among Indian bettors, who want to experience this platform from their mobile phones. This application enables you to gain instant access to all casino games and sports betting markets. By using our ID providers services, you will see how your tiger365 login works seamlessly on tiger365’s mobile app and grants you access to all local sports betting markets and exciting Indian and international casino games.
              </p>
              <p className={styles.paragraph}>
                The tiger365 app helps you navigate this platform conveniently, especially while using this application on the go. Connecting to the highly-secured tigerexch365 network, this mobile app allows you to experience a real casino with live dealers and play all your favorite Indian casino games and sports matches. Below are some benefits of using the tiger365 app:
              </p>
              <ul className={styles.bulletList}>
                <li>Fast and secure tiger365 login</li>
                <li>Access to local sports betting markets</li>
                <li>Indian and international casino games</li>
                <li>Quick deposits and withdrawals</li>
                <li>Easy-to-use interface</li>
                <li>Low data consumption</li>
                <li>Full compatibility with all Android devices</li>
                <li>Real-time odds and match updates</li>
                <li>Secure wallet system and instant fund transfers</li>
                <li>24×7 whatsapp support</li>
              </ul>
              <p className={styles.paragraph}>
                The tiger365 app is a great tool to enjoy this platform’s sports betting and casino services with its intuitive interface, live dealers, and convenient deposit and withdrawal methods. Featuring all local sports betting markets and casino games along with fast and secure payments, the tiger365 app enables you to have a fantastic betting experience every time you use it.
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
          <h2 className={styles.sectionTitleCenter}>Games You Can Play On Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            The tiger365 platform offers one of the most comprehensive collections of online casino games and sports betting markets in India. Since tiger365 and tigerexch365 are specifically tailored to meet the demands of Indian bettors, you will find all locally popular games and sports events you want to enjoy. This website’s live betting functionality enables you to participate in all ongoing sports matches with no hassles involved. Moreover, once you get your tiger365 login, you will gain instant access to all casino games and sports betting markets.
          </p>
        </div>

        {/* =========================================================
            SECTION 9: INDIAN CASINO GAMES
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={`${styles.twoColRow} ${styles.rowReverse}`}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Indian Casino Games On Tiger365</h2>
              <p className={styles.paragraph}>
                Indian players enjoy engaging with different casino games that are available in local brick-and-mortar casinos. Luckily, the tiger365 app consolidates all these exciting Indian casino games that you can play for real money. By simply downloading the tiger365 app and registering your account, you can start playing all these thrilling local casino games for real money.
              </p>
              <div className={styles.gameDetailList}>
                <div className={styles.gameDetailItem}>
                  <strong>Teen Patti:</strong>
                  <p>This is a three-card Indian game that you can play against real players or human dealers. This game is extremely popular among Indian bettors due to its easy-to-learn rules and instant gameplay. That is why Teen Patti is one of the most-played casino games at tiger365 pro.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Andar Bahar:</strong>
                  <p>This is another popular Indian card game that involves guessing which side (Andar or Bahar) the desired card will appear. This is a great option for novice players who want to start their journey in Indian casino games.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Jhandi Munda:</strong>
                  <p>This exciting dice game originates from the northeastern states of India. By simply placing your bet on the desired symbol, you can enjoy instant gameplay and thrilling payouts.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Live Matka:</strong>
                  <p>This popular lottery-style game has gained tremendous popularity among Indian bettors due to its easy rules and fast-paced rounds. The tiger365 website enables you to enjoy all Matka lottery draws in real-time.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Rummy:</strong>
                  <p>This is a very popular Indian card game among Indian bettors. With multiple game variations and realistic gameplay, Rummy at tiger365 enables you to enjoy this game with real money.</p>
                </div>
                <div className={styles.gameDetailItem}>
                  <strong>Indian Roulette:</strong>
                  <p>This exciting gambling game features a wheel with different numbers and payouts. By simply placing your bet on the desired number or color, you can enjoy this game with human dealers.</p>
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
          <h2 className={styles.sectionTitleCenter}>International Casino Games On Tiger365</h2>
          <p className={styles.paragraphCenter}>
            In addition to a variety of Indian casino games, tigerexch365 network offers you a great selection of international casino games you can enjoy for real money. Designed for Indian bettors, these international casino games feature ultra-realistic graphics and human dealers.
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
              <p>This exciting card game involves beating the dealer by having the highest hand total without exceeding 21. This game is extremely popular among Indian bettors due to its relatively easy rules and fast-paced rounds.</p>
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
              <p>This is another popular card game that involves players betting on either the banker’s or player’s hand. Due to its easy-to-learn rules and instant gameplay, Baccarat is suitable for all levels of bettors.</p>
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
              <p>By simply pressing the spin button, you can enjoy hundreds of different slots games with various themes, bonuses, and payouts. These games are perfect for players who want to enjoy a more straightforward casino experience.</p>
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
              <p>This exciting casino game involves predicting the number and color of the pocket in which the ball will land. By simply placing your bet on the desired number or color, you can enjoy this thrilling game for real money.</p>
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
              <p>The Poker variety at tiger365 enables you to enjoy the most popular variants such as Texas Hold’em and Omaha poker. With easy-to-learn rules, Poker is a great choice for those who want to test their skills against real players.</p>
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
              <p>The live casino tables at tiger365 enable you to enjoy real-time gameplay with human dealers and realistic graphics.</p>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION 11: WHY INDIAN PLAYERS LOVE TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitleCenter}>Why Indian Players Love Tiger365 and TigerExch365</h2>
          <p className={styles.paragraphCenter}>
            Indian players want to enjoy the most reliable online platform that provides them with a wide variety of betting and casino games. Tiger365 and tigerexch365 betting networks are two of India’s most popular and trustworthy websites that have gained incredible popularity among local bettors due to several compelling reasons. The tiger365 website and apps feature a simple interface that makes it easy for Indian bettors to navigate this site and find all the thrilling games they want to play.
          </p>
          <p className={styles.paragraphCenter}>
            Some of the features that make these platforms popular among Indian bettors include:
          </p>
          <div className={styles.loveReasonsList}>
            <div className={styles.loveReasonItem}>
              <strong>User-friendly interface</strong>
              <p>By visiting the tiger365 website and exploring its contents, you will realize that this platform is intuitive and easy to use. The menu is well-organized, and all the sections are easy to navigate, which enables you to switch between different games effortlessly.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Indian sports betting and casino games</strong>
              <p>The tiger365 website enables you to enjoy all the popular Indian sports betting markets and thrilling Indian casino games that are available in local casinos. By simply downloading the tiger365 app and creating your account, you will gain instant access to all these exciting games.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Simple and fast deposits and withdrawals</strong>
              <p>Tiger365 enables you to make simple and fast deposits and withdrawals to your bank account using UPI, PhonePe, Google Pay, Paytm, or Net Banking. Since deposits and withdrawals are among the most important aspects of betting, Indian bettors appreciate the opportunity to manage their finances with ease.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No complicated technology</strong>
              <p>Tiger365 is built on a reliable technology known as the tigerexch365 network. This platform requires no prior technical expertise and only needs a working internet connection for you to start betting.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Trusted ID providers</strong>
              <p>Indian bettors can trust our reliable ID providers services as we operate using a strict privacy and security policy. Additionally, our 24×7 customer support is always available to assist you with any issues you may encounter.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>No additional charges</strong>
              <p>Since all operations involving deposits, withdrawals, and financial transactions are handled securely, there are no additional charges or fees involved.</p>
            </div>
            <div className={styles.loveReasonItem}>
              <strong>Great performance on all Android devices</strong>
              <p>Due to its light-weight design, you can enjoy the tiger365 app on all Android devices without experiencing any performance issues.</p>
            </div>
          </div>
          <p className={styles.paragraphCenter}>
            Indian bettors love tiger365 pro due to its intuitive interface, extensive game variety, fast deposits and withdrawals, and reliable performance. Whether you want to play your favorite Indian sports betting markets or enjoy different Indian casino games, you will be able to do so on the most reliable platform.
          </p>
        </div>

        {/* =========================================================
            SECTION 12: DEPOSITS & WITHDRAWALS ON TIGER365
            ========================================================= */}
        <div className={styles.sectionBlock}>
          <div className={styles.twoColRow}>
            <div className={styles.colText}>
              <h2 className={styles.sectionTitle}>Deposits and Withdrawals On Tiger365</h2>
              <p className={styles.paragraph}>
                Smooth and hassle-free financial operations are some of the most crucial aspects of online betting. Fortunately, Tiger365 and tigerexch365 network ensure that all deposits and withdrawals are made securely and quickly so you can enjoy all the thrilling games on this platform.
              </p>
              <p className={styles.paragraph}>
                By visiting the tiger365 website, you will see that all financial operations are performed using UPI, PhonePe, Google Pay, Paytm, or Net Banking. This means that all deposits are made in real-time, and you will be able to start playing all your favorite casino games and sports matches right away. Likewise, you can also make withdrawals using these convenient methods and enjoy the ease of use that Tiger365 has to offer.
              </p>
              <p className={styles.paragraph}>
                If you have any questions regarding deposits or withdrawals, our friendly support team is always available to help you. Additionally, you can view the detailed guidelines for all financial operations on our website.
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
              <h2 className={styles.sectionTitle}>Responsible Gaming On Tiger365</h2>
              <p className={styles.paragraph}>
                While having fun is one of the main reasons for engaging in sports betting and playing casino games, it is important to be able to keep control at all times. As such, at Tiger365, we encourage our users to set limits in order to avoid disappointment and unnecessary losses. Remember to always bet responsibly and use only the amount of money you are comfortable losing. We believe that responsible gaming ensures that our users are able to enjoy all the thrilling games and sports betting markets on Tiger365 in a safe and controlled manner. If at any time you feel that you are unable to keep control of your betting activities, we recommend contacting our support team, who will be able to assist you right away.
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
          <h2 className={styles.sectionTitleCenter}>Your Trusted Path To Tiger365 Begins Here</h2>
          <p className={styles.paragraphCenter}>
            By choosing Tiger365, you have already made the most important decision in your betting journey. Whether you want to enjoy all the thrilling Indian sports betting markets or play your favorite local and international casino games, everything will be much easier than you can imagine. By simply getting your tiger365 login and downloading the app, you will be able to start playing your favorite games right away. We believe that our intuitive interface, extensive game variety, seamless financial operations, and great performance will help you enjoy all the benefits of the Tiger365 platform.
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
