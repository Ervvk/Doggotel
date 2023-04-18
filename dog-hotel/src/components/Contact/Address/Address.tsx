import React from 'react';

import styles from './Address.module.scss';

export const Address = () => {
  return (
    <div>
      <address className={styles['address-wrapper']}>
        <div>
          <h4>Location</h4>
          <p>Piekarska 221B, Zabrze</p>
        </div>
        <div>
          <h4>Working Hours</h4>
          <p>Every day from 9:00 to 20:00</p>
        </div>
        <div>
          <h4>E-mail</h4>
          <p>
            <a className={styles['address-link']}>service@doggotel.com</a>
          </p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>
            <a className={styles['address-link']}>(+48) 506-655-945</a>
          </p>
        </div>
      </address>
    </div>
  );
};
