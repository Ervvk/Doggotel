// radixUI form onSubmit returns entries, we convert it to an object
export const composeFormData = (formEntries: FormData) => Object.fromEntries(formEntries);

export const compareStayDates = (startDate: string, endDate: string) => endDate > startDate;

export const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > 15) return false;
  //eslint-disable-next-line
  const phoneRegex = /([0-9\s\-]{7,12})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)){0,4}$/;
  const digits = phoneNumber.replace(/\D/g, '');

  return phoneRegex.test(digits);
};

const getStartDate = (formEntries: FormData) => {
  const formData = composeFormData(formEntries);
  const { startDate } = formData;
  return startDate;
};

//The function is used to validate the endDate input in radixUi Form, we get the startDate from the current state of the form
export const validateEndDate = (endDate: string, formEntries: FormData) => {
  const startDate = getStartDate(formEntries);
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
