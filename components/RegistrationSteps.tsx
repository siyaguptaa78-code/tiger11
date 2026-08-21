import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import WhatsAppButton from "./WhatsAppButton";

export default function RegistrationSteps() {
  return (
    <section className={styles.section} id="steps">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How to Get Your <span>Tiger365 ID</span></h2>
          <p className={styles.subtitle}>
            A simple, secure process to get you into the action. No complicated forms.
          </p>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3>Chat On WhatsApp</h3>
              <p>Message our official support to request an ID creation.</p>
            </div>
          </div>
          
          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3>Provide Nickname</h3>
              <p>Choose the nickname you want to use for your Tiger365 account.</p>
            </div>
          </div>
          
          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3>Receive Credentials</h3>
              <p>Get your login details, wallet, and personal link securely.</p>
            </div>
          </div>
          
          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3>Make First Deposit</h3>
              <p>Deposit via UPI, Wallet, or Net Banking to activate your account.</p>
            </div>
          </div>

          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>05</div>
            <div className={styles.stepContent}>
              <h3>Login & Play</h3>
              <p>Access the platform and explore thousands of sports markets and games.</p>
            </div>
          </div>

          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>06</div>
            <div className={styles.stepContent}>
              <h3>Fast Withdrawals</h3>
              <p>Request withdrawals directly via WhatsApp and receive funds to your account.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className="btn-primary">
            GET YOUR ID NOW
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
