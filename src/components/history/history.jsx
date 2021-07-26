import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './history.module.scss';
import HistoryList from '../history-list/history-list';
import { clearHistory } from '../../store/actions';

function History() {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(clearHistory());
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList />
        <button className={styles.button} onClick={onButtonClick} type="button">
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
