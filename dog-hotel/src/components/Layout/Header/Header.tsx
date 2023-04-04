import React from 'react';

import { Navigation } from '@/components/Elements';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <span className={styles['logo']}>
        <img src="/icons/logo-color.svg" alt="logo dog" />
      </span>
      <Navigation />
    </header>
  );
};
