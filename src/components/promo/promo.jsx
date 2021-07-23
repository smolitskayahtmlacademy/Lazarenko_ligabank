import React from 'react';
import styles from './promo.module.scss';

function Promo() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Лига Банк</h2>
          <p className={styles.text}>Кредиты на любой случай</p>
          <a className={styles.button} href="/">
            Рассчитать кредит
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
