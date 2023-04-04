import { ButtonUnstyled } from '@mui/base';
import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  icon?: string;
  type?: 'primary' | 'secondary';
};

export const Button = ({ title, icon, type }: ButtonProps) => {
  return (
    <ButtonUnstyled className={` ${styles['button']} ${styles[`${type}`]}`}>
      <span className={styles['button-title']}>{title}</span>
      <span className={styles['button-icon']}>{!!icon && <img src={icon} alt="paw icon" />}</span>
    </ButtonUnstyled>
  );
};
