import Link from 'next/link';
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
          <Link href={'/rooms'} role="button" className={styles['banner-link']}>
            <Button title={'Browse rooms'} icon={'/icons/icon-paw-light.svg'} type={'primary'} />
          </Link>
        </div>
      </div>
      <div className={styles['banner-graphic']}></div>
    </div>
  );
};
