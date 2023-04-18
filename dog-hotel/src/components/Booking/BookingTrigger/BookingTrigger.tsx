import React, { useEffect, useState } from 'react';

import { Button } from '@/components/Elements';
import { delay } from '@/helpers/utils';

import { BookingConfirmation } from '../BookingConfirmation';
import { BookingDialog } from '../BookingDialog';
import { BookingDetails } from '../types';
import { defaultBookingDetails } from '../utils';

//The number of ms after which the booking confirmation will be opened
const confirmationDelay = 300;

type BookingTriggerProps = {
  roomName: string;
};

export const BookingTrigger = ({ roomName }: BookingTriggerProps) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultBookingDetails);
  const [isConfirmationOpen, setConfirmationOpen] = useState<boolean>(false);

  const openBookingDialog = () => {
    setDialogOpen((prev) => !prev);
  };

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  const handleConfirmationOpen = async () => {
    await delay(confirmationDelay);
    setConfirmationOpen(true);
  };
  const handleConfirmationClose = () => setConfirmationOpen(false);

  const handleBookingDataChange = (formValues: BookingDetails) => {
    setBookingDetails(formValues);
  };

  useEffect(() => {
    if (bookingDetails.email?.length > 0) {
      handleConfirmationOpen();
    }
  }, [bookingDetails]);

  return (
    <>
      <Button
        title={'Book Now'}
        type="secondary"
        icon="/icons/icon-paw-light.svg"
        onClick={openBookingDialog}
      />
      <BookingDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        onValueChange={handleBookingDataChange}
        roomName={roomName}
      />
      <BookingConfirmation
        isDialogOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onOpen={handleConfirmationOpen}
        bookingDetails={bookingDetails}
      />
    </>
  );
};
