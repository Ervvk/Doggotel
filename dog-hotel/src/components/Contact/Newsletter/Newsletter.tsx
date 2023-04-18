import React, { ChangeEvent, useState } from 'react';

import { InputText, Button } from '@/components/Elements';

import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      setInputValue('');
      setEmailSubmitted(true);
    }
  };

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles['newsletter']}>
      <h3> Subscribe</h3>
      {emailSubmitted === false && (
        <div className={styles['newsletter-content']}>
          <form className={styles['newsletter-form']} onSubmit={(e) => handleFormSubmit(e)}>
            <InputText
              disabled={emailSubmitted}
              type="email"
              onValueChange={handleInputValueChange}
              value={inputValue}
              placeholder="Enter e-mail to get updates"
            />
            <div style={{ width: 'max-content' }}>
              <Button title="Submit" type="secondary" submit />
            </div>
          </form>
        </div>
      )}

      {emailSubmitted && (
        <p className={styles['newsletter-confirmation']}>
          Thank you for subscribing to the newsletter !
        </p>
      )}
    </div>
  );
};
