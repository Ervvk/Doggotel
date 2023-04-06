import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ item }) => {
  const { Root, Indicator } = RadixCheckbox;
  return (
    <div className={styles['checkbox-wrapper']}>
      <Root className={styles['checkbox-root']} id={item}>
        <Indicator className={styles['checkbox-indicator']}>
          <CheckIcon />
        </Indicator>
      </Root>
      <label className={styles['checkbox-label']} htmlFor={item}>
        {item}
      </label>
    </div>
  );
};
