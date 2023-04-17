import React from 'react';

import { Room } from '@/components/Rooms/roomsTypes';

import { RoomsSection } from '../Rooms';
import { StrengthsSection } from '../Strengths';
import { TestimonialsSection } from '../Testimonials/TestimonialsSection';
import { WelcomeSection } from '../Welcome';

import styles from './SectionsWrapper.module.scss';

type SectionsWrapperProps = {
  roomsData: Room[];
};
export const SectionsWrapper = ({ roomsData }: SectionsWrapperProps) => {
  return (
    <div className={styles['sections']}>
      <WelcomeSection />
      <StrengthsSection />
      <RoomsSection rooms={roomsData} />
      <TestimonialsSection />
    </div>
  );
};
