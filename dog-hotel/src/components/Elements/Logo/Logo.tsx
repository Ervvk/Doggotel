import Link from 'next/link';
import React from 'react';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href={'/'}>
      <span className={styles['logo']}>
        <img src="/icons/logo-color.svg" alt="logo dog" />
      </span>
    </Link>
  );
};
