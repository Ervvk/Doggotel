import React, { ChangeEvent } from 'react';

import styles from './InputText.module.scss';

type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  disabled: boolean;
  onValueChange: (inputValue: ChangeEvent<HTMLInputElement>) => void;
};

export const InputText = ({ placeholder, type, value, onValueChange, disabled }: InputProps) => {
  return (
    <input
      className={styles['custom-input']}
      value={value}
      type={type}
      disabled={disabled}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onValueChange(e)}
      placeholder={placeholder}
    />
  );
};
