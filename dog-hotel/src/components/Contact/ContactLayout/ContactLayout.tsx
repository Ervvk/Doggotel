import React from 'react';

import { Address } from '../Address';
import { CustomMap } from '../CustomMap';

import styles from './ContactLayout.module.scss';

export const ContactLayout = () => {
  return (
    <div className={styles['contact']}>
      <h1>Find Us</h1>
      <div className={styles['contact-content']}>
        <CustomMap />
        <Address />
      </div>
      <p className={styles['contact-info']}>
        We have free parking for guests at the resort. You only need to show your booking
        confirmation!
      </p>
    </div>
  );
};
