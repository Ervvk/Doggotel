import React from 'react';

import { Button } from '@/components/Elements';

import styles from './WelcomeBanner.module.scss';

export const WelcomeBanner = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['banner-content']}>
        <div className={styles['banner-heading']}>
          <div>
            <p className={styles['banner-detail']}>Welcome To</p>
            <h1>Doggotel</h1>
            <p className={styles['banner-detail']}>Best Dog Hotel in Poland</p>
          </div>
          <Button title={'Book now'} icon={'/icons/icon-paw-light.svg'} />
        </div>
      </div>
      <div className={styles['banner-graphic']}></div>
    </div>
  );
};
