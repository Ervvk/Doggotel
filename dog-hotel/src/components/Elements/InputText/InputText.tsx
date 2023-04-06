import { InputUnstyled } from '@mui/base';
import React from 'react';

import styles from './InputText.module.scss';

type InputProps = {
  placeholder: string;
};

export const InputText = ({ placeholder }: InputProps) => {
  return (
    <InputUnstyled
      type={'email'}
      placeholder={placeholder}
      slotProps={{ input: { className: styles['custom-input'] } }}
    />
  );
};
