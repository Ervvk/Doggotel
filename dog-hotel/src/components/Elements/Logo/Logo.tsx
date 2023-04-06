import React from 'react';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <span className={styles['logo']}>
      <img src="/icons/logo-color.svg" alt="logo dog" />
    </span>
  );
};
