import React from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import youTube from '../../assets/img/youtube.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <Logo />
          <address className={`${styles.text} ${styles.address}`}>
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050 Ⓒ Лига Банк, 2019
          </address>
        </div>
        <ul className={styles.list}>
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Рассчитать кредит</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Задать вопрос</a>
          </li>
        </ul>
        <div className={styles.inner}>
          <p className={styles.title}>*0904</p>
          <p className={`${styles.text} ${styles.code}`}>
            Бесплатно для абонентов
            <br />
            МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className={styles.phone}>
          <p className={styles.title}>8 800 111 22 33</p>
          <p className={styles.text}>Бесплатный для всех городов России</p>
        </div>
        <div className={styles.social}>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={youTube} alt="youTube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
