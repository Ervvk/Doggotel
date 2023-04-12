import Image from 'next/image';
import React from 'react';

import { RoomOverview } from '@/components/Rooms/RoomOverview';
import { roomsElements } from '@/components/Rooms/roomsElements';
import { composeImagePath } from '@/components/Rooms/roomsUtils';

import styles from './RoomsSectionCard.module.scss';

const RoomsSectionCard = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-content']}>
        <Image
          src={composeImagePath(roomsElements[0].images, 1)}
          alt="Basic Room Photo"
          width={800}
          height={500}
          style={{ objectFit: 'cover', borderRadius: 'var(--border-radius-small)' }}
        />
        <div className={styles['card-description']}>
          <RoomOverview {...roomsElements[0]} />
        </div>
      </div>
    </div>
  );
};

export default RoomsSectionCard;
