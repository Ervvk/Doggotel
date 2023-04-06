import React from 'react';

import { Furnishings } from '../roomsElements';

import styles from './FurnishingsWidget.module.scss';

type FurnishingsWidgetProps = {
  furnishings: Furnishings;
};

export const FurnishingsWidget = ({ furnishings }: FurnishingsWidgetProps) => {
  const keys = Object.keys(furnishings);

  //Based on the furnishings data, we generate the icons
  const composeFurnishingsIcons = keys.map((key) => {
    return (
      furnishings[key as keyof Furnishings] === true && (
        <span key={key} className={styles['icon']}>
          <img src={`/icons/${key}.svg`} alt={`Dog ${key}`} />
        </span>
      )
    );
  });

  return <div className={styles['widget']}>{composeFurnishingsIcons}</div>;
};
