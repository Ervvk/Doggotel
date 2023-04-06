import React from 'react';

import { InputText, Button } from '@/components/Elements';

import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <div className={styles['newsletter']}>
      <h3> Subscribe</h3>
      <form className={styles['newsletter-form']}>
        <InputText placeholder="Enter e-mail to get updates & discounts" />
        <Button title="Submit" type="secondary" />
      </form>
    </div>
  );
};
