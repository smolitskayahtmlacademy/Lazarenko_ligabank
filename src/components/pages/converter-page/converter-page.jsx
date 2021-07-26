import React from 'react';
import Footer from '../../footer/footer';
import Form from '../../form/form';
import Header from '../../header/header';
import History from '../../history/history';
import Promo from '../../promo/promo';
import styles from './converter-page.module.scss';

function ConverterPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Promo />
        <Form />
        <History />
      </main>
      <Footer />
    </div>
  );
}

export default ConverterPage;
