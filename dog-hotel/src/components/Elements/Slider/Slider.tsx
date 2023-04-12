import * as RadixSlider from '@radix-ui/react-slider';
import React from 'react';

import styles from './Slider.module.scss';

type SliderProps = {
  defaultValue: number[];
  currentValue: number[];
  onSliderChange: (value: number[]) => void;
};

export const Slider = ({ onSliderChange, defaultValue, currentValue }: SliderProps) => {
  const { Root, Track, Range, Thumb } = RadixSlider;

  const handleSliderChange = (value: number[]) => {
    onSliderChange(value);
  };

  return (
    <div>
      <Root
        onValueChange={(value) => handleSliderChange(value)}
        className={styles['root']}
        defaultValue={defaultValue}
        value={currentValue}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <Track className={styles['track']}>
          <Range className={styles['range']} />
        </Track>
        <Thumb className={styles['thumb']} />
      </Root>
      <span>{currentValue} $</span>
    </div>
  );
};
