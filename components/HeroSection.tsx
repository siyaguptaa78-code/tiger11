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
        <a 
          href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20want%20to%20get%20my%20Tiger365%20ID%20instantly%20and%20play.`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bannerLink}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={SITE_CONFIG.images.heroBanner}
              alt="Tiger365 Online Betting Banner"
              width={1536}
              height={1024}
              priority
              className={styles.heroImage}
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <h1 className={styles.title}>Tiger365 ID</h1>
                <p className={styles.subtitle}>India's Fastest Growing Sports & Casino Exchange</p>
                <div className={styles.btnBox}>
                  <span className={styles.playBtn}>Play Now</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
