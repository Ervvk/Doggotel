import * as RadixSlider from '@radix-ui/react-slider';
import React, { useState } from 'react';

import styles from './Slider.module.scss';

export const Slider = () => {
  const { Root, Track, Range, Thumb } = RadixSlider;
  const [sliderValue, setSliderValue] = useState([50]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  return (
    <div>
      <Root
        onValueChange={(value) => handleSliderChange(value)}
        className={styles['root']}
        defaultValue={sliderValue}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <Track className={styles['track']}>
          <Range className={styles['range']} />
        </Track>
        <Thumb className={styles['thumb']} />
      </Root>
      <span>{sliderValue} $</span>
    </div>
  );
};
