import React from 'react';
import styles from './form.module.scss';
import Input from '../input/input';

function Form() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Конвертер валют</h2>
        <div className={styles.inner}>
          <p className={styles.text}>У меня есть</p>
          <p className={styles.text}>Хочу приобрести</p>
        </div>
        <form className={styles.form}>
          <Input />
          <Input />
          <input className={styles.date} type="date" />
          <button className={styles.button} type="submit">
            Сохранить результат
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
