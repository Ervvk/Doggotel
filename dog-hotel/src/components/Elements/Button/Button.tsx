import { ButtonUnstyled } from '@mui/base';
import React from 'react';

import styles from './Button.module.scss';

export const Button = () => {
  return <ButtonUnstyled className={styles['button']}>Click me</ButtonUnstyled>;
};
