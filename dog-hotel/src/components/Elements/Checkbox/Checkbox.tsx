import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';

import { composeAbsoluteBoolean } from '@/helpers/utils';

import styles from './Checkbox.module.scss';

export type CheckboxItem = {
  key: string;
  title: string;
};

type CheckboxProps = {
  item: CheckboxItem;
  currentValue: boolean;
  onValueChange: (isChecked: boolean, item: string) => void;
};

export const Checkbox = ({ item, onValueChange, currentValue }: CheckboxProps) => {
  const { Root, Indicator } = RadixCheckbox;

  const handleCheck = (value: boolean) => {
    onValueChange(value, item.key);
  };

  return (
    <div className={styles['checkbox-wrapper']}>
      <Root
        className={styles['checkbox-root']}
        id={item.key}
        checked={currentValue}
        onCheckedChange={(value) => handleCheck(composeAbsoluteBoolean(value))}
      >
        <Indicator className={styles['checkbox-indicator']}>
          <CheckIcon />
        </Indicator>
      </Root>
      <label className={styles['checkbox-label']} htmlFor={item.key}>
        {item.title}
      </label>
    </div>
  );
};
