import React from 'react';

import { WelcomeBanner } from '../WelcomeBanner';

import styles from './WelcomeSection.module.scss';

export const WelcomeSection = () => {
  return (
    <section className={styles['section']}>
      <WelcomeBanner />
    </section>
  );
};
