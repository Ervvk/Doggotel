import Image from 'next/image';
import React from 'react';

import styles from './Placeholder.module.scss';

type PlaceholderProps = {
  title: string;
};

export const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <div className={styles['placeholder']}>
      <Image src={'/icons/paw-blurred.svg'} alt="paw-blurred" width={300} height={300} />
      <p className={styles['placeholder-title']}>{title}</p>
    </div>
  );
};
