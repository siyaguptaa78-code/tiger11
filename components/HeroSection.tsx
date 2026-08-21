"use client";
import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./HeroSection.module.css";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContentWrapper}>
          {/* Left Text Content */}
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.pulse}></span>
              LIVE SPORTS & EXCHANGE
            </div>
            <h1 className={styles.title}>
              PREMIUM <span>EXCHANGE</span> <br />
              & CASINO GAMES
            </h1>
            <p className={styles.subtitle}>
              Experience the ultimate sports betting and casino platform. Get your instant Tiger365 ID and start playing with real-time markets and fast withdrawals.
            </p>
            
            <div className={styles.actionGroup}>
              <a 
                href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20want%20to%20get%20my%20Tiger365%20ID%20instantly%20and%20play.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GET TIGER365 ID
              </a>
              <a href="#exchange" className="btn-outline">
                VIEW MARKETS
              </a>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100+</span>
                <span className={styles.statLabel}>Live Games</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Instant</span>
                <span className={styles.statLabel}>Withdrawal</span>
              </div>
            </div>
          </div>
          
          {/* Right Image/Visual Content */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src={SITE_CONFIG.images.heroBanner}
                alt="Tiger365 Premium Exchange"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            
            {/* Floating Elements for premium feel */}
            <div className={`${styles.floatingCard} ${styles.float1}`}>
              <span className={styles.floatIcon}>🏏</span> Cricket Exchange
            </div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>
              <span className={styles.floatIcon}>🎰</span> Live Casino
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
