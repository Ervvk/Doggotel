import React from 'react';

import styles from './Address.module.scss';

export const Address = () => {
  return (
    <div>
      <address className={styles['address-wrapper']}>
        <div>
          <b>Location</b>
          <p>Piekarska 221B, Zabrze</p>
        </div>
        <div>
          <b>Working Hours</b>
          <p>Every day from 9:00 to 20:00</p>
        </div>
        <div>
          <b>E-mail</b>
          <p>
            <a href={'mailto:ervk.baranowski@gmail.com'} className={styles['address-link']}>
              service@doggotel.com
            </a>
          </p>
        </div>
        <div>
          <b>Phone</b>
          <p>
            <a href={'tel:506-655-945'} className={styles['address-link']}>
              (+48) 506-655-945
            </a>
          </p>
        </div>
      </address>
    </div>
  );
};
