"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: "How do I register for Tiger365?",
    a: "Account registration on Tiger365 is easy and fast. Simply log into the website, tap the “Register” button, and enter your name and cellphone number to get your Tiger365 ID fast."
  },
  {
    q: "How can one use the wallet services offered by Tiger365?",
    a: "There are various wallet services offered by Tiger365 that can be used in a number of ways including banking deposits, payments via credit/debit cards, and various e-wallet services such as Paytm, PhonePe, Google Pay, Skrill, and so forth."
  },
  {
    q: "Is Tiger365 stable for application?",
    a: "Yes, due to the fact Tiger365 is equipped with excellent security protocols and encryption strategies that ensure that all your records and transactions are stored safe."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`} id="faq">
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
