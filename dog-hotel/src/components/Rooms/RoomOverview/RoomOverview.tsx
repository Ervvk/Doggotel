import React from 'react';

import { Button } from '@/components/Elements';

import { FurnishingsWidget } from '../FurnishingsWidget';

import styles from './RoomOverview.module.scss';

export const RoomOverview = ({ furnishings, price, name, capacity }: any) => {
  return (
    <div className={styles['overview']}>
      <h3 className={styles['overview-heading']}>{name}</h3>
      <ul className={styles['overview-list']}>
        <li>Best choice - {capacity}</li>
        <li>Price per day - {price}$</li>
        <li className={styles['overview-list-element']}>
          Furnishings - <FurnishingsWidget furnishings={furnishings} />
        </li>
      </ul>
      <Button title={'Book now'} icon={'/icons/icon-paw-light.svg'} type={'secondary'} />
    </div>
  );
};
