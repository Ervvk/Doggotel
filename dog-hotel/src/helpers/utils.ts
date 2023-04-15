export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const getIsoDate = (date: Date) => date.toISOString().split('T')[0];
export const currentDate = new Date();
export const yearFromToday = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
