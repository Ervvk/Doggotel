import React from 'react';

import { Room } from '@/components/Rooms/types';

import { RoomsSection } from '../Rooms';
import { StrengthsSection } from '../Strengths';
import { TestimonialsSection } from '../Testimonials/TestimonialsSection';
import { Testimonial } from '../types';
import { WelcomeSection } from '../Welcome';

import styles from './SectionsWrapper.module.scss';

type SectionsWrapperProps = {
  roomsData: Room[];
  testimonialsData: Testimonial[];
};
export const SectionsWrapper = ({ roomsData, testimonialsData }: SectionsWrapperProps) => {
  return (
    <div className={styles['sections']}>
      <WelcomeSection />
      <StrengthsSection />
      <RoomsSection rooms={roomsData} />
      <TestimonialsSection testimonialsData={testimonialsData} />
    </div>
  );
};
