import * as Form from '@radix-ui/react-form';
import React, { FormEvent } from 'react';

import { Button } from '@/components/Elements';
import { yearFromToday, getIsoDate, currentDate } from '@/helpers/utils';

import { BookingDetails } from '../bookingTypes';
import { bookingValidation, composeFormData, defaultBookingDetails } from '../bookingUtils';

import styles from './BookingForm.module.scss';

type BookingFormProps = {
  handleDialogClose: () => void;
  handleValueChange: (bookingDetails: BookingDetails) => void;
};

export const BookingForm = ({ handleDialogClose, handleValueChange }: BookingFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = composeFormData(new FormData(event.currentTarget));
    const formDataTyped = { ...defaultBookingDetails, ...formData };

    handleDialogClose();
    handleValueChange(formDataTyped);
  };

  return (
    <Form.Root
      className={styles['form-root']}
      id="booking-form"
      onSubmit={(val) => handleSubmit(val)}
    >
      <Form.Field className={styles['form-field']} name="email">
        <div className={styles['form-field-messages']}>
          <Form.Label className={styles['form-label']}>Email *</Form.Label>
          <Form.Message className={styles['form-message']} match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className={styles['form-message']} match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className={styles['form-input']} type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className={styles['form-field']} name="dogName">
        <div className={styles['form-field-messages']}>
          <Form.Label className={styles['form-label']}>{"Your dog's name *"}</Form.Label>
          <Form.Message className={styles['form-message']} match="valueMissing">
            Please enter your dog name
          </Form.Message>
          <Form.Message className={styles['form-message']} match="typeMismatch">
            Please provide a valid dog name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className={styles['form-input']} type="text" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className={styles['form-field']} name="phoneNumber">
        <div className={styles['form-field-messages']}>
          <Form.Label className={styles['form-label']}>Phone Number *</Form.Label>
          <Form.Message className={styles['form-message']} match="valueMissing">
            Please enter your phone number
          </Form.Message>
          <Form.Message
            className={styles['form-message']}
            match={(value) => bookingValidation.phoneNumber(value) !== true}
          >
            Please provide a valid phone number
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className={styles['form-input']} type="tel" maxLength={15} required />
        </Form.Control>
      </Form.Field>
      <Form.Field className={styles['form-field']} name="startDate">
        <div className={styles['form-field-messages']}>
          <Form.Label className={styles['form-label']}>Start date</Form.Label>
          <Form.Message className={styles['form-message']} match="valueMissing">
            {"Please enter the first day of dog's stay"}
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className={styles['form-input']}
            type="date"
            name="startDate"
            min={getIsoDate(currentDate)}
            max={getIsoDate(yearFromToday)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className={styles['form-field']} name="endDate">
        <div className={styles['form-field-messages']}>
          <Form.Label className={styles['form-label']}>End date</Form.Label>
          <Form.Message className={styles['form-message']} match="valueMissing">
            {"Please enter the last day of dog's stay"}
          </Form.Message>
          <Form.Message
            className={styles['form-message']}
            match={(value, formData) => bookingValidation.endDate(value, formData) !== true}
          >
            Departure cannot be earlier than arrival
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className={styles['form-input']}
            type="date"
            name="endDate"
            min={getIsoDate(currentDate)}
            max={getIsoDate(yearFromToday)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild className={styles['form-submit']}>
        <div>
          <Button
            title={'Ask for availability'}
            icon="/icons/icon-paw-light.svg"
            type={'primary'}
            submit
            formId="booking-form"
          />
        </div>
      </Form.Submit>
    </Form.Root>
  );
};
