import Image from 'next/image';
import React from 'react';

import { RoomOverview } from '../RoomOverview';
import { Furnishings } from '../roomsTypes';
import { composeImagePath } from '../roomsUtils';

import styles from './RoomsCard.module.scss';

type RoomsCardProps = {
  id: number;
  images: string;
  furnishings: Furnishings;
  price: number;
  recommendedFor: string;
  name: string;
};

const RoomsCard = (props: RoomsCardProps) => {
  const imagePath = composeImagePath(props.images, 1);

  return (
    <div className={styles['card']}>
      <div>
        <Image
          src={imagePath}
          alt={props.name}
          width={310}
          height={220}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles['card-content']}>
        <RoomOverview
          furnishings={props.furnishings}
          price={props.price}
          name={props.name}
          recommendedFor={props.recommendedFor}
          id={props.id}
        />
      </div>
    </div>
  );
};

export default RoomsCard;
