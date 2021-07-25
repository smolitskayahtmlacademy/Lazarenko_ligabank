import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

function Input({
  amountValue,
  currencyValue,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={onAmountChange}
        type="number"
        min="0"
        max="1000000000"
        placeholder="0"
        value={amountValue}
      />
      <select
        className={styles.select}
        onChange={onCurrencyChange}
        value={currencyValue}
      >
        <option value="RUB">RUB</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="CNY">CNY</option>
      </select>
    </div>
  );
}

Input.propTypes = {
  amountValue: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default Input;
