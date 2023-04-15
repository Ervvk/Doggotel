import React from 'react';

import { BookingTrigger } from '@/components/Booking';

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
          <div className={styles['room-widgets']}>
            <span className={styles['room-details-price']}>{room.price} $ / day*</span>
            <FurnishingsWidget furnishings={room.furnishings} />
          </div>
          <p className={styles['room-description']}>{room.description}</p>
          <BookingTrigger roomName={room.name} />
        </div>
      </div>
      <p>
        When booking a box/room for more than 7 days, there is a 25% discount for each subsequent
        day.
      </p>
    </div>
  );
};

export default RoomDetailedLayout;
