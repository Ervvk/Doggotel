import React from 'react';

import { Button } from '@/components/Elements';

import styles from './RoomOverview.module.scss';

export const RoomOverview = ({ area, price, title, dogs }) => {
  return (
    <div className={styles['overview']}>
      <h3 className={styles['overview-heading']}>{title}</h3>
      <ul className={styles['overview-list']}>
        <li>Area - {area}</li>
        <li>Dog Types: - {dogs}</li>
        <li>Price per day - From {price}!</li>
      </ul>
      <Button title={'Book now'} icon={'/icons/icon-paw-light.svg'} type={'secondary'} />
    </div>
  );
};
