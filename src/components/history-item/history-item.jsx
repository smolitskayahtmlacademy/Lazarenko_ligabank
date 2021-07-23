import React from 'react';
import styles from './history-item.module.scss';

function HistoryItem() {
  return (
    <li className={styles.item}>
      <span>25.11.2020</span>
      <span className={styles.text}>1000 RUB</span>
      <span>13.1234 USD</span>
    </li>
  );
}

export default HistoryItem;
