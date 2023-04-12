import React from 'react';

import { BookingButton } from '@/components/Booking';

import { FurnishingsWidget } from '../FurnishingsWidget';
import { RoomGallery } from '../RoomGallery';
import { Room } from '../roomsTypes';

import styles from './RoomDetailedLayout.module.scss';

const RoomDetailedLayout = ({ room }: { room: Room }) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['room']}>
        <RoomGallery imagesDirectoryUrl={room.images} />
        <div className={styles['room-details']}>
          <h1>{room.name}</h1>
          <p className={styles['room-widgets']}>
            <span className={styles['room-details-price']}>{room.price} $ / day*</span>
            <FurnishingsWidget furnishings={room.furnishings} />
          </p>
          <p className={styles['room-description']}>{room.description}</p>
          <BookingButton />
        </div>
      </div>
      <p>
        * When booking a box/room for more than 7 days, there is a 25% discount for each subsequent
        day.
      </p>
    </div>
  );
};

export default RoomDetailedLayout;
