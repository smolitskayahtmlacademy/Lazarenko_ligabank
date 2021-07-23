import React from 'react';
import styles from './history-list.module.scss';
import HistoryItem from '../history-item/history-item';

function HistoryList() {
  return (
    <ul className={styles.list}>
      {Array(10)
        .fill('')
        .map((item) => (
          <HistoryItem key={item} />
        ))}
    </ul>
  );
}

export default HistoryList;
