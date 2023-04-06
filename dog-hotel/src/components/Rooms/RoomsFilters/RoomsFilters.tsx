import React from 'react';

import { Slider, Button, Checkbox } from '@/components/Elements';

import styles from './RoomsFilters.module.scss';

export const RoomsFilters = () => {
  return (
    <div className={styles['filters-wrapper']}>
      <form className={styles['filters-form']}>
        <h3>Max price per day</h3>
        <Slider />
        <h3>Best choice for</h3>
        <Checkbox item={'Small dogs'} />
        <Checkbox item={'Medium-size dogs'} />
        <Checkbox item={'Big dogs'} />
        <h3>Furnishings</h3>
        <Checkbox item={'Toys'} />
        <Checkbox item={'Blanket'} />
        <Checkbox item={'Dog Bed'} />
        <Button title="Apply" type="primary" />
        <Button title="Clear" type="primary" />
      </form>
    </div>
  );
};
