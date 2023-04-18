import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/Elements';

import styles from './WelcomeBanner.module.scss';

export const WelcomeBanner = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['banner-graphic']}>
        <svg viewBox="0 0 520 200" className={styles['container']} preserveAspectRatio="none">
          <path d="M 0 30 C 150 100 280 0 520 20 L 520 0 L 0 0" fill="rgb(253, 238, 238)"></path>
        </svg>

        <div />
      </div>
      <div className={styles['banner-content']}>
        <div className={styles['banner-heading']}>
          <div className={styles['banner-heading-elements']}>
            <p className={styles['banner-detail']}>Welcome To</p>
            <h1>Doggotel</h1>
            <p className={styles['banner-detail']}>Best Dog Hotel in Poland</p>
          </div>
          {
            <Link href={'/rooms'} role="button" className={styles['banner-link']}>
              <Button title={'Browse rooms'} icon={'/icons/icon-paw-light.svg'} type={'primary'} />
            </Link>
          }
        </div>
      </div>
    </div>
  );
};
