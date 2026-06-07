"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./GameLobbies.module.css";

const GAMES_LIST = [
  {
    name: "32 Cards Game",
    alt: "32 cards game - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/32_cards.webp",
  },
  {
    name: "Football",
    alt: "Football - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/football.webp",
  },
  {
    name: "Lucky 7",
    alt: "lucky 7 - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/lucky_7.webp",
  },
  {
    name: "Teenpatti",
    alt: "teenpatti - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/teenpatti.webp",
  },
  {
    name: "Amar Akbar Anthony",
    alt: "Amar Akbar Anthhony game - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/aaa.webp",
  },
  {
    name: "Roulette",
    alt: "Roulette - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/casino.webp",
  },
  {
    name: "Bollywood Casino",
    alt: "Bollywood Casino - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/bc.webp",
  },
  {
    name: "Indian Casino",
    alt: "indian casino - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/indian_casino.webp",
  },
  {
    name: "Baccarat",
    alt: "Baccarat - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/bac.webp",
  },
  {
    name: "Cricket",
    alt: "Cricket - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/cricket.webp",
  },
  {
    name: "7 Up Down",
    alt: "7 Up Down - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/l7.webp",
  },
  {
    name: "Tennis",
    alt: "tennis - tiger365",
    src: "https://tiger365com.com/wp-content/uploads/2025/04/tennis.webp",
  },
];

export default function GameLobbies() {
  const getWhatsAppLink = (gameName: string) => {
    const text = encodeURIComponent(`Hello! I want to play ${gameName} on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <section className={`section-padding ${styles.section}`} id="lobbies">
      <div className="container">
        <h2 className={styles.sectionTitle}>Tiger365 Games</h2>
        
        <div className={styles.gamesGrid}>
          {GAMES_LIST.map((game, index) => (
            <a
              key={index}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gameCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={game.src}
                  alt={game.alt}
                  width={588}
                  height={402}
                  className={styles.gameImg}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.playIcon}>▶</span>
                    <h3>{game.name}</h3>
                    <span className={styles.playBtn}>Play Now</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.centralCta}>
          <WhatsAppButton className={styles.ctaButton}>
            💬 Click Here to Get Your Tiger365 ID and Play 💬
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
