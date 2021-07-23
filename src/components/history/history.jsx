import React from 'react';
import styles from './history.module.scss';
import HistoryList from '../history-list/history-list';

function History() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList />
        <button className={styles.button} type="button">
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
