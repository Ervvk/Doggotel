import React from 'react';

import { Dialog } from '@/components/Elements';

import { BookingDetails } from '../bookingTypes';

import styles from './BookingConfirmation.module.scss';

type BookingConfirmationProps = {
  isDialogOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  bookingDetails: BookingDetails;
};

export const BookingConfirmation = ({
  isDialogOpen,
  onClose,
  onOpen,
  bookingDetails,
}: BookingConfirmationProps) => {
  return (
    <Dialog isOpen={isDialogOpen} onClose={onClose} onOpen={onOpen} title={'Confirmation'}>
      <div className={styles['dialog-content']}>
        <p className={styles['confirmation-paragraph']}>
          Thank you for your interest in our offer!
        </p>
        <p className={styles['confirmation-paragraph']}>
          Our staff will contact you to arrange the details.
        </p>
        <p>
          {' '}
          <span className={styles['dog-name']}>{bookingDetails?.dogName}</span> will spend a great
          time with us!
        </p>
        <p>Sincerely, Woof woof!</p>
      </div>
    </Dialog>
  );
};
