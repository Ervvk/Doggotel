import React from 'react';

import { RoomsSection } from '../Rooms';
import { StrengthsSection } from '../Strengths';
import { WelcomeSection } from '../Welcome';

import styles from './SectionsWrapper.module.scss';

export const SectionsWrapper = () => {
  return (
    <div className={styles['sections']}>
      <WelcomeSection />
      <StrengthsSection />
      <RoomsSection />
    </div>
  );
};
