import React from 'react';

import { Navigation, Logo } from '@/components/Elements';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Logo />
      <Navigation />
    </header>
  );
};
