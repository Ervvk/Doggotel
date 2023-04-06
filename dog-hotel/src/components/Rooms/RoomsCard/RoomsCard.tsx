import Image from 'next/image';
import React from 'react';

import { RoomOverview } from '../RoomOverview';
import { Furnishings } from '../roomsElements';

import styles from './RoomsCard.module.scss';

type RoomsCardProps = {
  images: string[];
  furnishings: Furnishings;
  price: number;
  capacity: string;
  name: string;
};

const RoomsCard = (props: RoomsCardProps) => {
  return (
    <div className={styles['card']}>
      <div>
        <Image
          src={props.images[0]}
          alt={props.name}
          width={310}
          height={220}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles['card-content']}>
        <RoomOverview {...props} />
      </div>
    </div>
  );
};

export default RoomsCard;
