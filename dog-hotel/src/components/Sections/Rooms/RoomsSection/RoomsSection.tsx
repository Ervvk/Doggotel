import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import RoomsCard from '@/components/Rooms/RoomsCard/RoomsCard';
import { Room } from '@/components/Rooms/types';
import { randomNumber } from '@/helpers/utils';

import RoomsSectionCard from '../RoomsSectionCard/RoomsSectionCard';

import styles from './RoomsSection.module.scss';

type RoomsSectionProps = {
  rooms: Room[];
};

export const RoomsSection = ({ rooms }: RoomsSectionProps) => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(1);

  useEffect(() => {
    const randomIndex = randomNumber(1, rooms.length - 1);
    setActiveRoomIndex(randomIndex);
  }, []);

  return (
    <section className={styles['section']}>
      <h2>Our Rooms</h2>
      <div className={styles['section-content']}>
        <div className={styles['section-card']}>
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
        </div>
        {/*
        <RoomsCard {...rooms[activeRoom]} /> */}
      </div>
    </section>
  );
};
