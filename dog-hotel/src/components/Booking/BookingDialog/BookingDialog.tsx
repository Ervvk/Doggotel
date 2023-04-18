import React from 'react';

import { Dialog, DialogProps } from '@/components/Elements';

import { BookingForm } from '../BookingForm';
import { BookingDetails } from '../types';

import styles from './BookingDialog.module.scss';

interface BookingDialogProps extends DialogProps {
  onValueChange: (value: BookingDetails) => void;
  roomName: string;
}

export const BookingDialog = ({
  isOpen,
  onClose,
  onOpen,
  onValueChange,
  roomName,
}: BookingDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} onOpen={onOpen} title={`Book the ${roomName}`}>
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
