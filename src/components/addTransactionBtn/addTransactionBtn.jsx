import { ReactSVG } from 'react-svg';
import svgPlus from '../../images/plus-icon.svg';
import styles from './addTransactionBtn.module.css';
import React from 'react';

export default function OpenTransactionBtn() {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={console.log('openAddTransaction')}
    >
      <ReactSVG className={styles.svgComponent} src={svgPlus} />
    </button>
  );
}
