import React from 'react';

import { Dialog } from '@/components/Elements';

import { BookingForm } from '../BookingForm';
import { BookingDetails } from '../bookingTypes';

import styles from './BookingDialog.module.scss';

type BookingDialogProps = {
  isDialogOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onValueChange: (value: BookingDetails) => void;
  roomName: string;
};

export const BookingDialog = ({
  isDialogOpen,
  onClose,
  onOpen,
  onValueChange,
  roomName,
}: BookingDialogProps) => {
  return (
    <Dialog isOpen={isDialogOpen} onClose={onClose} onOpen={onOpen} title={`Book the ${roomName}`}>
      <div className={styles['dialog-content']}>
        <BookingForm
          handleDialogClose={onClose}
          handleValueChange={onValueChange}
          roomName={roomName}
        />
      </div>
    </Dialog>
  );
};
