export const composeFormData = (formEntries: FormData) => Object.fromEntries(formEntries);

export const compareStayDates = (startDate: string, endDate: string) => endDate > startDate;

export const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > 15) return false;
  //eslint-disable-next-line
  const phoneRegex = /([0-9\s\-]{7,12})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)){0,4}$/;
  const digits = phoneNumber.replace(/\D/g, '');

  return phoneRegex.test(digits);
};

export const validateEndDate = (endDate: string, formEntries: FormData) => {
  const formData = composeFormData(formEntries);
  const { startDate } = formData;
  return compareStayDates(startDate.toString(), endDate);
};

export const bookingValidation = {
  phoneNumber: validatePhoneNumber,
  endDate: validateEndDate,
};

export const defaultBookingDetails = {
  roomName: '',
  startDate: '',
  endDate: '',
  email: '',
  phoneNumber: '',
  dogName: '',
};
