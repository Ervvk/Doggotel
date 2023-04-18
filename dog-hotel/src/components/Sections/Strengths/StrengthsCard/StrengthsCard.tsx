import React from 'react';

import styles from './StrengthsCard.module.scss';

type StrengthsIcon = {
  path: string;
  alt: string;
};

type StrengthsCardProps = {
  icon: StrengthsIcon;
  title: string;
  description: string;
  key: number;
};

export const StrengthsCard = ({ icon, title, description }: StrengthsCardProps) => {
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['card']}>
        <span className={styles['card-icon']}>
          <img src={icon.path} alt={icon.alt} />
        </span>
        <h3>{title}</h3>
        <p className={styles['card-description']}>{description}</p>
      </div>
    </div>
  );
};
