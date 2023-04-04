import { ButtonUnstyled } from '@mui/base';
import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  icon?: string;
};

export const Button = ({ title, icon }: ButtonProps) => {
  return (
    <ButtonUnstyled className={styles['button']}>
      <span className={styles['button-title']}>{title}</span>
      <span className={styles['button-icon']}>{!!icon && <img src={icon} alt="paw icon" />}</span>
    </ButtonUnstyled>
  );
};
