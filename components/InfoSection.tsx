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
    <section className={styles.infoSection} id="info">
      <div className="container">
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Discover <span>Tiger365</span>
          </h2>
          <p className={styles.subtitle}>
            India's most trusted premium gaming and exchange platform.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏆</div>
            <h3>Premium Experience</h3>
            <p>
              Tiger365 operates on the secure tigerexch365 network, delivering a seamless betting adventure. Enjoy high-speed payments, advanced security, and a vast game library.
            </p>
            <ul className={styles.list}>
              <li>Intuitive interface across all devices</li>
              <li>24/7 access to sports and casino</li>
              <li>Live human dealers for realistic gameplay</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>📱</div>
            <h3>Mobile Optimized</h3>
            <p>
              The Tiger365 platform is fully optimized for mobile devices, allowing you to access live markets and casino games effortlessly on the go.
            </p>
            <ul className={styles.list}>
              <li>Low data consumption</li>
              <li>Real-time odds updates</li>
              <li>Secure mobile wallet system</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎲</div>
            <h3>Extensive Game Library</h3>
            <p>
              From traditional Indian favorites like Teen Patti and Andar Bahar to international classics like Blackjack and Roulette, we offer games for every preference.
            </p>
            <ul className={styles.list}>
              <li>Local Indian Casino Games</li>
              <li>International Live Tables</li>
              <li>Hundreds of Slot variants</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>💳</div>
            <h3>Secure Transactions</h3>
            <p>
              Smooth and hassle-free financial operations are crucial. We ensure all deposits and withdrawals are processed securely and quickly.
            </p>
            <ul className={styles.list}>
              <li>Instant UPI & Bank Transfers</li>
              <li>Real-time balance updates</li>
              <li>No hidden transaction fees</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className={styles.paymentSection}>
          <h3 className={styles.paymentTitle}>Supported Payment Methods</h3>
          <div className={styles.paymentGrid}>
            <div className={styles.paymentMethod}>
              <Image src="https://tiger-exchange247.com/wp-content/uploads/2022/11/UPI.png" alt="UPI" width={80} height={38} className={styles.paymentLogo} />
              <span>UPI</span>
            </div>
            <div className={styles.paymentMethod}>
              <Image src="https://tiger-exchange247.com/wp-content/uploads/2022/11/640px-Paytm_logo-1.png" alt="Paytm" width={100} height={33} className={styles.paymentLogo} />
              <span>Paytm</span>
            </div>
            <div className={styles.paymentMethod}>
              <Image src="https://tiger-exchange247.com/wp-content/uploads/2022/11/60e7f964711cf700048b6a6a-1024x424.png" alt="Google Pay" width={80} height={32} className={styles.paymentLogo} />
              <span>Google Pay</span>
            </div>
            <div className={styles.paymentMethod}>
              <Image src="https://tiger-exchange247.com/wp-content/uploads/2022/11/PhonePe_Logo_full-1.png" alt="PhonePe" width={100} height={25} className={styles.paymentLogo} />
              <span>PhonePe</span>
            </div>
            <div className={styles.paymentMethod}>
              <div className={styles.bankIcon}>🏦</div>
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
