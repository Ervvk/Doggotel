import React from 'react';

import { StrengthsCard } from '../StrengthsCard/StrengthsCard';
import { strengthsElements } from '../strengthsElements';

import styles from './StrengthsSection.module.scss';

export const StrengthsSection = () => {
  return (
    <section className={styles['section']}>
      <h2>Why Us?</h2>
      <div className={styles['card-grid']}>
        {strengthsElements.length > 0 &&
          strengthsElements.map(({ id, icon, title, description }) => (
            <StrengthsCard key={id} icon={icon} title={title} description={description} />
          ))}
      </div>
    </section>
  );
};
