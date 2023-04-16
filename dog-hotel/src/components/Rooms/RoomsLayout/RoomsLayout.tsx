import React, { Fragment, useCallback, useState } from 'react';

import { Placeholder } from '@/components/Elements';

import RoomsCard from '../RoomsCard/RoomsCard';
import { RoomsFilters } from '../RoomsFilters';
import { Room, RoomsFilters as RoomsFiltersType } from '../roomsTypes';
import { composeTruthyValuesArray, isPriceInRange } from '../roomsUtils';

import styles from './RoomsLayout.module.scss';

const initialFiltersState = {
  dogSizes: {
    small: true,
    medium: true,
    big: true,
  },
  furnishings: {
    toys: true,
    blanket: true,
    bed: true,
  },
  maxPrice: 100,
};

type RoomsLayoutProps = {
  roomsData: Room[];
};

//checks if the properties of a given room are included in the current filters
const matchRoomWithFilters = (filterValues: string[], roomValues: string[]) =>
  roomValues.every((value: string) => filterValues.includes(value));

export const RoomsLayout = ({ roomsData }: RoomsLayoutProps) => {
  const [filters, setFilters] = useState<RoomsFiltersType>(initialFiltersState);

  const handleFiltersChange = (newFiltersValue: RoomsFiltersType) => {
    setFilters(newFiltersValue);
  };

  const handleFiltersReset = () => {
    setFilters(initialFiltersState);
  };

  const filterRooms = useCallback(
    (room: Room) => {
      const truthyFilters = composeTruthyValuesArray(filters);
      const truthyRoom = composeTruthyValuesArray(room);

      const isRoomDisplayed =
        matchRoomWithFilters(truthyFilters, truthyRoom) &&
        isPriceInRange(room.price, filters.maxPrice);

      return isRoomDisplayed;
    },
    [filters]
  );

  const filteredRooms = roomsData.filter(filterRooms);

  return (
    <section className={styles['rooms']}>
      <h1>Our rooms</h1>
      <div className={styles['rooms-content']}>
        <RoomsFilters
          defaultValue={initialFiltersState}
          onValueChange={handleFiltersChange}
          onValueReset={handleFiltersReset}
        />
        <div className={styles['rooms-grid']}>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, id) => (
              <Fragment key={id}>
                <RoomsCard {...room} />
              </Fragment>
            ))
          ) : (
            <Placeholder title="No Rooms Match Filters" />
          )}
        </div>
      </div>
    </section>
  );
};
