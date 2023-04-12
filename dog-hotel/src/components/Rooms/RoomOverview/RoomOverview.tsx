import Link from 'next/link';
import React from 'react';

import { BookingButton } from '@/components/Booking';

import { FurnishingsWidget } from '../FurnishingsWidget';
import { Furnishings } from '../roomsTypes';

import styles from './RoomOverview.module.scss';

type RoomOverviewProps = {
  id: number;
  furnishings: Furnishings;
  price: number;
  name: string;
  recommendedFor: string;
};

export const RoomOverview = ({
  furnishings,
  price,
  name,
  recommendedFor,
  id,
}: RoomOverviewProps) => {
  return (
    <div className={styles['overview']}>
      <Link className={styles['overview-heading']} href={`/room/${id}`}>
        <h3>{name}</h3>
      </Link>
      <ul className={styles['overview-list']}>
        <li>Best choice - {recommendedFor}</li>
        <li>Price per day - {price}$</li>
        <li className={styles['overview-list-element']}>
          Furnishings - <FurnishingsWidget furnishings={furnishings} />
        </li>
      </ul>
      <BookingButton />
    </div>
  );
};
