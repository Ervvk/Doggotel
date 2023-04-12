import { ButtonUnstyled } from '@mui/base';
import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  title?: string;
  icon?: string;
  type: 'primary' | 'secondary';
  onClick?: () => void;
};

export const Button = ({ title, icon, type, onClick }: ButtonProps) => {
  return (
    <ButtonUnstyled onClick={onClick} className={` ${styles['button']} ${styles[`${type}`]}`}>
      <span></span>
      {!!title && <span className={styles['button-title']}>{title}</span>}
      {!!icon && (
        <span className={styles['button-icon']}>
          {' '}
          <img src={icon} alt="paw icon" />
        </span>
      )}
    </ButtonUnstyled>
  );
};
