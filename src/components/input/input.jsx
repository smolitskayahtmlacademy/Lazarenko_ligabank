import React from 'react';
import styles from './input.module.scss';

function Input() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="number" min="0" placeholder="0" />
      <select className={styles.select}>
        <option value="rub">RUB</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="cny">CNY</option>
      </select>
    </div>
  );
}

export default Input;
