import React from 'react';
import styles from './style.module.css';

const AnimatedText = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.animatedText}>Monte Vista </h1> 
      <h1 className={styles.animatedText2}>Primary School</h1>
      <h2 className={styles.slogan}>Wees Trots / Be Proud</h2>
      <p className={styles.herotext}></p>
    </div>
  );
};

export default AnimatedText;