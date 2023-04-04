import React from 'react';

import { RoomsSection } from '../Rooms';
import { StrengthsSection } from '../Strengths';
import { TestimonialsSection } from '../Testimonials/TestimonialsSection';
import { WelcomeSection } from '../Welcome';

import styles from './SectionsWrapper.module.scss';

export const SectionsWrapper = () => {
  return (
    <div className={styles['sections']}>
      <WelcomeSection />
      <StrengthsSection />
      <RoomsSection />
      <TestimonialsSection />
    </div>
  );
};
