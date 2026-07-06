import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <h2 className="section-title">
              How to Generate Your Tiger365 ID
            </h2>
            <p className={styles.intro}>
              Obtaining an ID is the first and easiest step. With Tiger365, even an inexperienced user can generate their own account in just a few simple steps with no time wasted on complicated procedures.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>1. Chat On WhatsApp To Get An ID</h3>
                <p>By clicking any ‘Get ID’ button on our website, you will be able to communicate with an official Tiger365 support agent.</p>
              </div>
              
              <div className={styles.step}>
                <h3>2. Provide Your Nickname</h3>
                <p>Let your assistant know which Nickname you would like to use for your Tiger365 account.</p>
              </div>
              
              <div className={styles.step}>
                <h3>3. Get Your Login, Wallet Keys, And Link</h3>
                <p>Your backend login, wallet keys, and personal account link will be provided right away by the support team.</p>
              </div>
              
              <div className={styles.step}>
                <h3>4. Deposit ₹100 To Start Playing</h3>
                <p>Make a deposit of ₹100 via UPI, WhatsApp Pay, or Net Banking to get active chips and start playing.</p>
              </div>

              <div className={styles.step}>
                <h3>5. Login & Start Placing Bets</h3>
                <p>By following the provided link and using your credentials, you will be able to choose from Tiger365’s games and start betting right away.</p>
              </div>

              <div className={styles.step}>
                <h3>6. Withdraw Your Winnings Anytime</h3>
                <p>Simply request a withdrawal on WhatsApp to get your winnings transferred to your bank account within 15-30 mins.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={SITE_CONFIG.images.aboutImage} 
                alt="Tiger365 Registration Steps" 
                width={1000}
                height={500}
                className={styles.stepImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
