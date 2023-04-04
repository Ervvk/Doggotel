import Link from 'next/link';
import React from 'react';

import RoomsSectionCard from '../RoomsSectionCard/RoomsSectionCard';

import styles from './RoomsSection.module.scss';

export const RoomsSection = () => {
  return (
    <section className={styles['section']}>
      <h2>Our Rooms</h2>
      <div className={styles['section-content']}>
        <span>
          <span className={styles['section-icon']}>
            <img src="/icons/arrow-curved.svg" alt="Curved Arrow" />
          </span>
          <Link href="/rooms" className={styles['section-link']}>
            View More Rooms
          </Link>
        </span>
        <RoomsSectionCard />
      </div>
    </section>
  );
};
