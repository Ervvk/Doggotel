import React, { Fragment, useCallback, useState } from 'react';

import { Placeholder, Button } from '@/components/Elements';

import RoomsCard from '../RoomsCard/RoomsCard';
import { RoomsFilters } from '../RoomsFilters';
import { RoomsFiltersDialog } from '../RoomsFiltersDialog';
import { Room, RoomsFilters as RoomsFiltersType } from '../roomsTypes';
import { composeTruthyValuesArray, isPriceInRange, initialFiltersState } from '../roomsUtils';

import styles from './RoomsLayout.module.scss';

type RoomsLayoutProps = {
  roomsData: Room[];
};

//checks if the properties of a given room are included in the current filters
const matchRoomWithFilters = (filterValues: string[], roomValues: string[]) =>
  roomValues.every((value: string) => filterValues.includes(value));

export const RoomsLayout = ({ roomsData }: RoomsLayoutProps) => {
  const [filters, setFilters] = useState<RoomsFiltersType>(initialFiltersState);
  const [isMobileDialogOpen, setMobileDialogOpen] = useState(false);

  const handleFiltersChange = (newFiltersValue: RoomsFiltersType) => {
    setFilters(newFiltersValue);
    if (isMobileDialogOpen) setMobileDialogOpen(false);
  };

  const handleFiltersReset = () => {
    setFilters(initialFiltersState);
    if (isMobileDialogOpen) setMobileDialogOpen(false);
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
  const openFiltersDialog = () => {
    setMobileDialogOpen(true);
  };

  const closeFiltersDialog = () => {
    setMobileDialogOpen(false);
  };

  return (
    <section className={styles['rooms']}>
      <h1>Our rooms</h1>

      <div className={styles['rooms-content']}>
        <div className={styles['rooms-buttons-mobile']}>
          <div className={styles['rooms-button-mobile']}>
            <Button title="Filter rooms" type="primary" onClick={openFiltersDialog}></Button>
          </div>
        </div>
        <div className={styles['rooms-elements']}>
          <div className={styles['rooms-filters']}>
            <RoomsFilters
              defaultValue={initialFiltersState}
              onValueChange={handleFiltersChange}
              onValueReset={handleFiltersReset}
            />
          </div>
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
      </div>
      <RoomsFiltersDialog
        defaultValue={filters}
        onValueChange={handleFiltersChange}
        onValueReset={handleFiltersReset}
        isOpen={isMobileDialogOpen}
        onClose={closeFiltersDialog}
      />
    </section>
  );
};
