"use client";
import React, { useState } from "react";
import styles from "./LiveExchangeSimulator.module.css";
import { SITE_CONFIG } from "@/config/constants";

interface Match {
  id: number;
  time: string;
  isLive: boolean;
  teamA: string;
  teamB: string;
  hasBM: boolean;
  hasF: boolean;
  hasP: boolean;
  odds: {
    back: (number | string | null)[];
    lay: (number | string | null)[];
  };
}

const CRICKET_MATCHES: Match[] = [
  {
    id: 1,
    time: "Today 03:30 PM",
    isLive: true,
    teamA: "England",
    teamB: "New Zealand",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [1.45, 1.46, 1.47],
      lay: [3.15, 3.20, 3.25]
    }
  },
  {
    id: 2,
    time: "Today 07:00 PM",
    isLive: false,
    teamA: "Kent W",
    teamB: "Worcestershire Rapids W",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [null, null, null],
      lay: [null, null, null]
    }
  },
  {
    id: 3,
    time: "Today 07:30 PM",
    isLive: true,
    teamA: "India",
    teamB: "Pakistan",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [1.72, 1.74, 1.76],
      lay: [2.12, 2.14, 2.16]
    }
  }
];

const OTHER_MATCHES: Match[] = [
  {
    id: 4,
    time: "Today 08:30 PM",
    isLive: true,
    teamA: "Real Madrid",
    teamB: "Barcelona",
    hasBM: true,
    hasF: false,
    hasP: true,
    odds: {
      back: [2.10, 2.15, 2.20],
      lay: [3.40, 3.45, 3.50]
    }
  },
  {
    id: 5,
    time: "Today 09:00 PM",
    isLive: true,
    teamA: "Novak Djokovic",
    teamB: "Carlos Alcaraz",
    hasBM: false,
    hasF: false,
    hasP: true,
    odds: {
      back: [1.88, 1.90, 1.92],
      lay: [1.95, 1.97, 1.99]
    }
  }
];

export default function LiveExchangeSimulator() {
  const [activeTab, setActiveTab] = useState("cricket");
  
  const handleBetClick = (team: string, type: "Back" | "Lay", oddValue: number | string | null) => {
    if (oddValue === null) return;
    const text = encodeURIComponent(
      `Hi! I want to place a ${type} bet of ₹1000 on ${team} at odds of ${oddValue} on Tiger365.`
    );
    window.open(`${SITE_CONFIG.whatsappLink}?text=${text}`, "_blank");
  };

  const renderMatchRow = (match: Match) => {
    return (
      <div key={match.id} className={styles.matchRow}>
        <div className={styles.matchInfo}>
          <div className={styles.matchStatus}>
            {match.isLive ? (
              <span className={styles.liveIndicator}>
                <span className={styles.pulse}></span> LIVE
              </span>
            ) : (
              <span className={styles.upcomingIndicator}>{match.time}</span>
            )}
          </div>
          <div className={styles.matchTeams}>
            <div className={styles.team}>
              <span>{match.teamA}</span>
            </div>
            <div className={styles.team}>
              <span>{match.teamB}</span>
            </div>
          </div>
          <div className={styles.marketIcons}>
            {match.hasBM && <span className={styles.iconBm} title="Bookmaker">BM</span>}
            {match.hasF && <span className={styles.iconF} title="Fancy">F</span>}
            {match.hasP && <span className={styles.iconP} title="Premium">P</span>}
          </div>
        </div>

        <div className={styles.oddsSection}>
          <div className={styles.oddsGroup}>
            {match.odds.back.map((odd, idx) => (
              <button
                key={`back-${idx}`}
                className={`${styles.oddsBtn} ${styles.btnBack} ${odd === null ? styles.btnEmpty : ''}`}
                onClick={() => handleBetClick(match.teamA, "Back", odd)}
                disabled={odd === null}
              >
                <span className={styles.oddValue}>{odd !== null ? odd : "-"}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.oddsGroup}>
            {match.odds.lay.map((odd, idx) => (
              <button
                key={`lay-${idx}`}
                className={`${styles.oddsBtn} ${styles.btnLay} ${odd === null ? styles.btnEmpty : ''}`}
                onClick={() => handleBetClick(match.teamB, "Lay", odd)}
                disabled={odd === null}
              >
                <span className={styles.oddValue}>{odd !== null ? odd : "-"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.exchangeSection} id="exchange">
      <div className="container">
        <div className={styles.exchangeHeader}>
          <div className={styles.titleArea}>
            <h2 className={styles.title}>Live <span>Exchange</span></h2>
            <div className={styles.simulationBadge}>SIMULATION DATA</div>
          </div>
          
          <div className={styles.tabsContainer}>
            <button 
              className={`${styles.tab} ${activeTab === 'cricket' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('cricket')}
            >
              🏏 Cricket
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'other' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('other')}
            >
              ⚽ Football & Tennis
            </button>
          </div>
        </div>

        <div className={styles.exchangeBoard}>
          <div className={styles.boardHeader}>
            <div className={styles.colMatch}>Match</div>
            <div className={styles.colOdds}>
              <div className={styles.headerBack}>BACK</div>
              <div className={styles.headerLay}>LAY</div>
            </div>
          </div>
          
          <div className={styles.matchList}>
            {activeTab === 'cricket' && CRICKET_MATCHES.map((match) => renderMatchRow(match))}
            {activeTab === 'other' && OTHER_MATCHES.map((match) => renderMatchRow(match))}
          </div>
        </div>
      </div>
    </section>
  );
}
