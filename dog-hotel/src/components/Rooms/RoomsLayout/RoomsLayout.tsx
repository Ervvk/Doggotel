import React from 'react';

import RoomsCard from '../RoomsCard/RoomsCard';
import { roomsElements } from '../roomsElements';
import { RoomsFilters } from '../RoomsFilters';

import styles from './RoomsLayout.module.scss';

export const RoomsLayout = () => {
  return (
    <section className={styles['rooms']}>
      <h1>Our rooms</h1>
      <div className={styles['rooms-content']}>
        <RoomsFilters />
        <div className={styles['rooms-grid']}>
          {roomsElements.map((room) => (
            <RoomsCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};
