import React from 'react';

import { Checkbox, CheckboxItem } from './Checkbox';
import styles from './Checkbox.module.scss';

type CheckboxGroupProps = {
  items: CheckboxItem[];
  label: string;
  onValuesChange: (isChecked: boolean, item: string) => void;
  currentValues: {
    [key: string]: boolean;
  };
};

export const CheckboxGroup = ({
  items,
  label,
  onValuesChange,
  currentValues,
}: CheckboxGroupProps) => {
  const handleValueChange = (isChecked: boolean, item: string) => {
    onValuesChange(isChecked, item);
  };

  return (
    <div className={styles['checkbox-group']}>
      <h3>{label}</h3>
      {items.map((item, idx) => (
        <Checkbox
          key={idx}
          item={item}
          onValueChange={handleValueChange}
          currentValue={currentValues[item.key]}
        />
      ))}
    </div>
  );
};
