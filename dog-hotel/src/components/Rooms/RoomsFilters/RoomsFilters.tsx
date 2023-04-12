import React, { useState } from 'react';

import { Slider, Button, CheckboxGroup } from '@/components/Elements';

import { DogSizes, Furnishings, RoomPrice, RoomsFilters as RoomsFiltersType } from '../roomsTypes';

import styles from './RoomsFilters.module.scss';
import { dogSizesItems, furnishingsItems } from './roomsFiltersItems';

type RoomsFiltersProps = {
  defaultValue: RoomsFiltersType;
  onValueChange: (newFiltersValue: RoomsFiltersType) => void;
  onValueReset: () => void;
};

export const RoomsFilters = ({ defaultValue, onValueChange, onValueReset }: RoomsFiltersProps) => {
  const {
    dogSizes: initialDogSizes,
    furnishings: initialFurnishings,
    maxPrice: initialPrice,
  } = defaultValue;

  const [checkedFurnishings, setCheckedFurnishings] = useState<Furnishings>(initialFurnishings);
  const [checkedDogSizes, setCheckedDogSizes] = useState<DogSizes>(initialDogSizes);
  const [sliderValue, setSliderValue] = useState<RoomPrice>([initialPrice]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  const handleFurnishingsCheck = (isChecked: boolean, item: string) => {
    setCheckedFurnishings((prev: Furnishings) => ({ ...prev, [item]: isChecked }));
  };

  const handleDogSizesCheck = (isChecked: boolean, item: string) => {
    setCheckedDogSizes((prev: DogSizes) => ({ ...prev, [item]: isChecked }));
  };

  const resetFilters = () => {
    setCheckedDogSizes(initialDogSizes);
    setCheckedFurnishings(initialFurnishings);
    setSliderValue([initialPrice]);
  };

  const handleApplyButton = () => {
    const filterValues = {
      dogSizes: checkedDogSizes,
      furnishings: checkedFurnishings,
      maxPrice: sliderValue[0],
    };
    onValueChange(filterValues);
  };

  const handleResetButton = () => {
    resetFilters();
    onValueReset();
  };

  return (
    <div className={styles['filters-wrapper']}>
      <form className={styles['filters-form']}>
        <h3>Max price per day</h3>
        <Slider
          defaultValue={[initialPrice]}
          onSliderChange={handleSliderChange}
          currentValue={sliderValue}
        />
        <CheckboxGroup
          items={dogSizesItems}
          label="Suitable for"
          onValuesChange={handleDogSizesCheck}
          currentValues={checkedDogSizes}
        />
        <CheckboxGroup
          items={furnishingsItems}
          label="Furnishings"
          onValuesChange={handleFurnishingsCheck}
          currentValues={checkedFurnishings}
        />
        <Button title="Apply" type="primary" onClick={handleApplyButton} />
        <Button title="Reset filters" type="primary" onClick={handleResetButton} />
      </form>
    </div>
  );
};
