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
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/32_cards.webp",
    category: "popular"
  },
  {
    name: "Football",
    alt: "Football - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/football.webp",
    category: "sports"
  },
  {
    name: "Lucky 7",
    alt: "lucky 7 - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/lucky_7.webp",
    category: "popular"
  },
  {
    name: "Teenpatti",
    alt: "teenpatti - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/teenpatti.webp",
    category: "featured"
  },
  {
    name: "Amar Akbar Anthony",
    alt: "Amar Akbar Anthhony game - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/aaa.webp",
    category: "popular"
  },
  {
    name: "Roulette",
    alt: "Roulette - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/casino.webp",
    category: "featured"
  },
  {
    name: "Bollywood Casino",
    alt: "Bollywood Casino - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/bc.webp",
    category: "popular"
  },
  {
    name: "Indian Casino",
    alt: "indian casino - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/indian_casino.webp",
    category: "popular"
  },
  {
    name: "Baccarat",
    alt: "Baccarat - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/bac.webp",
    category: "popular"
  },
  {
    name: "Cricket",
    alt: "Cricket - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/cricket.webp",
    category: "sports"
  },
  {
    name: "7 Up Down",
    alt: "7 Up Down - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/l7.webp",
    category: "popular"
  },
  {
    name: "Tennis",
    alt: "tennis - tiger365",
    src: "https://tiger-exchange247.com/wp-content/uploads/2025/04/tennis.webp",
    category: "sports"
  },
];

export default function GameLobbies() {
  const getWhatsAppLink = (gameName: string) => {
    const text = encodeURIComponent(`Hello! I want to play ${gameName} on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  const featuredGames = GAMES_LIST.filter(g => g.category === 'featured');
  const sportsGames = GAMES_LIST.filter(g => g.category === 'sports');
  const popularGames = GAMES_LIST.filter(g => g.category === 'popular');

  return (
    <section className={styles.section} id="lobbies">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Tiger365 <span>Games</span></h2>
          <p className={styles.subtitle}>Experience premium casino and sports gaming with live dealers.</p>
        </div>
        
        {/* Featured Games - Large Cards */}
        <div className={styles.featuredGrid}>
          {featuredGames.map((game, index) => (
            <a
              key={index}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={game.src}
                  alt={game.alt}
                  fill
                  className={styles.gameImg}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.badge}>FEATURED</div>
                    <h3>{game.name}</h3>
                    <span className={styles.playBtn}>Play Now</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Sports Games - Horizontal Scroll or Grid */}
        <div className={styles.categoryHeader}>
          <h3>Sports Games</h3>
        </div>
        <div className={styles.sportsGrid}>
          {sportsGames.map((game, index) => (
            <a
              key={index}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sportsCard}
            >
              <div className={styles.sportsImageWrapper}>
                <Image
                  src={game.src}
                  alt={game.alt}
                  fill
                  className={styles.gameImg}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className={styles.sportsLabel}>
                {game.name} <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Popular Games - Standard Grid */}
        <div className={styles.categoryHeader}>
          <h3>Popular Casino</h3>
        </div>
        <div className={styles.gamesGrid}>
          {popularGames.map((game, index) => (
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
                <div className={styles.cardOverlay}>
                  <span className={styles.playIcon}>▶</span>
                  <div className={styles.cardTitle}>{game.name}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.centralCta}>
          <WhatsAppButton className="btn-primary">
            CLICK HERE TO PLAY NOW
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
