import Image from 'next/image';
import React from 'react';

import { RoomOverview } from '@/components/Rooms/RoomOverview';
import { Room } from '@/components/Rooms/roomsTypes';
import { composeImagePath } from '@/components/Rooms/roomsUtils';

import styles from './RoomsSectionCard.module.scss';

type RoomsSectionCardProps = {
  activeRoom: Room;
};
const RoomsSectionCard = ({ activeRoom }: RoomsSectionCardProps) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-content']}>
        <Image
          src={composeImagePath(activeRoom.images, 1)}
          alt="Basic Room Photo"
          width={800}
          height={500}
          style={{
            objectFit: 'cover',
            borderRadius: 'var(--border-radius-small)',
            maxWidth: '50vw',
            maxHeight: '500px',
            height: '30vw',
          }}
        />
        <div className={styles['card-description']}>
          <RoomOverview {...activeRoom} />
        </div>
      </div>
    </div>
  );
};

export default RoomsSectionCard;
