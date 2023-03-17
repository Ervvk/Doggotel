import React from 'react';

import { Navigation } from '@/components/Elements/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Navigation />
    </header>
  );
};
