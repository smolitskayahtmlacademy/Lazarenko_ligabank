import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a className={`${styles.link} ${styles.linkLogo}`} href="/">
            <img src={logo} alt="логотип Лига банка" />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="/">
                Услуги
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Рассчитать кредит
              </a>
            </li>
            <li>
              <a className={`${styles.link} ${styles.linkActive}`} href="/">
                Конвертер валют
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Контакты
              </a>
            </li>
            <li>
              <a className={styles.link} href="/">
                Задать вопрос
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <a className={`${styles.link} ${styles.linkLogin}`} href="/">
            Войти в Интернет-банк
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
