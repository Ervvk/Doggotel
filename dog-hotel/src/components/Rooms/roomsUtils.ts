import { Room, RoomsFilters } from './roomsTypes';

export const composeImagePath = (directoryPath: string, imageNumber: number) =>
  `/${directoryPath}/dog-${imageNumber}.jpg`;

export const isPriceInRange = (price: number, maxPrice: number) => price <= maxPrice;

//compose an object containing only the properties that will be filtered later
export const composeRoomDetails = (roomDetails: Room | RoomsFilters) => ({
  ...roomDetails.dogSizes,
  ...roomDetails.furnishings,
});

//compose an array of keys whose corresponding values are true
export const composeTruthyValuesArray = (roomDetails: Room | RoomsFilters) => {
  const trimmedDetails = composeRoomDetails(roomDetails);
  const entries = Object.entries(trimmedDetails);
  const truthyEntries = entries.filter(([, value]) => value === true).map(([key]) => key);

  return truthyEntries;
};