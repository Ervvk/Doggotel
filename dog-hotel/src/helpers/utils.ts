export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const randomNumber = (minimum: number, maximum: number) =>
  Math.floor(Math.random() * maximum) + minimum;

export const getIsoDate = (date: Date) => date.toISOString().split('T')[0];

export const currentDate = new Date();

export const yearFromToday = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

//converts 'string boolean' to boolean
export const composeAbsoluteBoolean = (checkValue: boolean | string) =>
  checkValue === 'true' || checkValue === true;
