import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './form.module.scss';
import Input from '../input/input';
import { addHistory, addRates } from '../../store/actions';

const DIFFERENCE = 7;
const MIN_VALUE = '0';
const USD = 'USD';
const RUB = 'RUB';
const FIX = 4;
const MAX_LENGTH = 10;
const BACKEND_URL = 'https://openexchangerates.org/api/historical';
const APP_ID = '.json?app_id=d3e503d72f284685b5d0c042551877ab';

let id = 1;

const getFormattedValue = (value) => value.toFixed(FIX).replace(/\.0+$/, '');

function Form() {
  const currentDate = new Date();

  const dispatch = useDispatch();
  const rates = useSelector((state) => state.rates);

  const [date, setDate] = useState(currentDate);
  const [isVisible, setIsVisible] = useState(false);
  const [amountFrom, setAmountFrom] = useState(MIN_VALUE);
  const [currencyFrom, setCurrencyFrom] = useState(RUB);
  const [amountTo, setAmountTo] = useState(MIN_VALUE);
  const [currencyTo, setCurrencyTo] = useState(USD);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/${dayjs(date).format('YYYY-MM-DD')}${APP_ID}`)
      .then(({ data }) => {
        const dataRates = data.rates;
        dispatch(addRates(data.rates));
        setAmountTo(
          getFormattedValue(
            (+amountFrom / dataRates[currencyFrom]) * dataRates[currencyTo],
          ),
        );
      });
  }, [date, dispatch]);

  const onDateChange = (evt) => {
    setDate(evt);
    setIsVisible(false);
  };

  const onAmountFromChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (value.length < MAX_LENGTH) {
      setAmountFrom(value);
      setAmountTo(
        getFormattedValue((+value / rates[currencyFrom]) * rates[currencyTo]),
      );
    }
  };

  const onCurrencyFromChange = (evt) => {
    const value = evt.target.value;
    setCurrencyFrom(value);
    setAmountTo(
      getFormattedValue((+amountFrom / rates[value]) * rates[currencyTo]),
    );
  };

  const onAmountToChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (value.length < MAX_LENGTH) {
      setAmountTo(value);
      setAmountFrom(
        getFormattedValue((+value * rates[currencyFrom]) / rates[currencyTo]),
      );
    }
  };

  const onCurrencyToChange = (evt) => {
    const value = evt.target.value;
    setCurrencyTo(value);
    setAmountTo(
      getFormattedValue((+amountFrom / rates[currencyFrom]) * rates[value]),
    );
  };

  const onButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(
      addHistory({
        id: id++,
        date: dayjs(date).format('DD.MM.YYYY'),
        amountFrom,
        currencyFrom,
        amountTo,
        currencyTo,
      }),
    );
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>?????????????????? ??????????</h2>
        <div className={styles.inner}>
          <p className={styles.text}>?? ???????? ????????</p>
          <p className={styles.text}>???????? ????????????????????</p>
        </div>
        <form className={styles.form}>
          <Input
            amountValue={amountFrom}
            currencyValue={currencyFrom}
            onAmountChange={onAmountFromChange}
            onCurrencyChange={onCurrencyFromChange}
          />
          <Input
            amountValue={amountTo}
            currencyValue={currencyTo}
            onAmountChange={onAmountToChange}
            onCurrencyChange={onCurrencyToChange}
          />
          {isVisible && (
            <Calendar
              className={styles.calendar}
              onChange={onDateChange}
              value={date}
              minDate={dayjs(currentDate).subtract(DIFFERENCE, 'day').toDate()}
              maxDate={currentDate}
            />
          )}
          <input
            className={styles.date}
            onClick={() => {
              setIsVisible(true);
            }}
            type="text"
            value={dayjs(date).format('DD.MM.YYYY')}
            readOnly
          />
          <button
            className={styles.button}
            onClick={onButtonClick}
            type="button"
            disabled={!+amountFrom || !+amountTo}
          >
            ?????????????????? ??????????????????
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
