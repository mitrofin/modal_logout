/* import { useDispatch } from 'react-redux'; */
/* import { authOperations } from '../../redux/auth'; */
/* import { NavLink } from 'react-router-dom'; */
import React from 'react';

import styles from './LogoutConfirm.module.css';

export default function LogoutConfirm() {
  /* const dispatch = useDispatch(); */
  return (
    <div className={styles.confirmContainer}>
      <p className={styles.textConfirmButton}>Are you sure?</p>
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => console.log('dispatch authOperations.logout()')}
          /* onClick={() => dispatch authOperations.logout()} */
        >
          <span className={styles.exit}>EXIT</span>
        </button>
        <div className={styles.btn}>
          <span className={styles.cancel}>CANCEL</span>
        </div>
        {/* <NavLink to="/home" className={styles.btn}>
          <span className={styles.cancel}>CANCEL</span>
        </NavLink> */}
      </div>
    </div>
  );
}
