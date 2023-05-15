import React from 'react';

import { Address, Newsletter } from '@/components/Contact';
import { Logo } from '@/components/Elements';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-content']}>
        <Logo /> <Newsletter />
        <Address />
      </div>
      <div className={styles['footer-legal']}>
        <p> © This website was created by Eryk Baranowski</p>
        <p>
          <span> </span>
        </p>
      </div>
    </footer>
  );
};
