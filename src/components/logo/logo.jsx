import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.link} href="/">
        <img src={logo} alt="логотип Лига банка" />
      </a>
    </div>
  );
}

export default Logo;
