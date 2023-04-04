import Image from 'next/image';
import React from 'react';

import { RoomOverview } from '@/components/Rooms/RoomOverview';

import styles from './RoomsSectionCard.module.scss';

const RoomsSectionCard = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-content']}>
        <Image
          src="/images/room-basic.jpg"
          alt="Basic Room Photo"
          width={800}
          height={500}
          style={{ objectFit: 'cover', borderRadius: 'var(--border-radius-small)' }}
        />
        <div className={styles['card-description']}>
          <RoomOverview area={'5m2'} price={'10$'} title={'Comfort Box'} dogs={'All Sizes'} />
        </div>
      </div>
    </div>
  );
};

export default RoomsSectionCard;
