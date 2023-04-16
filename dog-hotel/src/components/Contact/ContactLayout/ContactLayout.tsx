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
    </div>
  );
};
