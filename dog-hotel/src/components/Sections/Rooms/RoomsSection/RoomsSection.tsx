import Link from 'next/link';
import React from 'react';

import RoomsCard from '@/components/Rooms/RoomsCard/RoomsCard';
import { Room } from '@/components/Rooms/roomsTypes';
import { randomNumber } from '@/helpers/utils';

import RoomsSectionCard from '../RoomsSectionCard/RoomsSectionCard';

import styles from './RoomsSection.module.scss';

type RoomsSectionProps = {
  rooms: Room[];
};

export const RoomsSection = ({ rooms }: RoomsSectionProps) => {
  const activeRoomIndex = randomNumber(1, rooms.length - 1);

  return (
    <section className={styles['section']}>
      <h2>Our Rooms</h2>
      <div className={styles['section-content']}>
        <span className={styles['section-icon-link']}>
          <span className={styles['section-icon']}>
            <img src="/icons/arrow-curved.svg" alt="Curved Arrow" />
          </span>
          <Link href="/rooms" className={styles['section-link']}>
            View More Rooms
          </Link>
        </span>
        <div className={styles['section-card-big']}>
          <RoomsSectionCard activeRoom={rooms[activeRoomIndex]} />
        </div>
        <div className={styles['section-card-small']}>
          <RoomsCard {...rooms[activeRoomIndex]} />
        </div>
        {/*
        <RoomsCard {...rooms[activeRoom]} /> */}
      </div>
    </section>
  );
};
