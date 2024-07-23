import React from "react";
import styles from "./Knowledge.module.css";

export const Knowledge = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Languages</h2>
          <ul className={styles.cardList}>
            <li className={styles.cardListItem}>C++/C</li>
            <li className={styles.cardListItem}>Python</li>
            <li className={styles.cardListItem}>Kotlin</li>
            <li className={styles.cardListItem}>SQL</li>
            <li className={styles.cardListItem}>JavaScript</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Tools</h2>
          <ul className={styles.cardList}>
            <li className={styles.cardListItem}>Git</li>
            <li className={styles.cardListItem}>GitHub</li>
            <li className={styles.cardListItem}>Android Studio</li>
            <li className={styles.cardListItem}>VSCode</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Classes</h2>
          <ul className={styles.cardList}>
            <li className={styles.cardListItem}>Analysis of Algorithms</li>
            <li className={styles.cardListItem}>Data Structures</li>
            <li className={styles.cardListItem}>Intro to Computer Networks</li>
            <li className={styles.cardListItem}>Intro to Databases</li>
            <li className={styles.cardListItem}>
              Mobile Application Development
            </li>
            <li className={styles.cardListItem}>Operating Systems</li>
            <li className={styles.cardListItem}>Software Engineering</li>
            <li className={styles.cardListItem}>Web Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
