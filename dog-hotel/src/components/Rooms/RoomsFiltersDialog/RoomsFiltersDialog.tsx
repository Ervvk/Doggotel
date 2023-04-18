import React from 'react';

import { Dialog, DialogProps } from '@/components/Elements';

import { RoomsFilters } from '../RoomsFilters/RoomsFilters';
import { RoomsFilters as RoomsFiltersType } from '../roomsTypes';

import styles from './RoomsFiltersDialog.module.scss';

interface RoomsFiltersDialogProps extends DialogProps {
  defaultValue: RoomsFiltersType;
  onValueChange: (newFiltersValue: RoomsFiltersType) => void;
  onValueReset: () => void;
}

export const RoomsFiltersDialog = ({
  isOpen,
  onClose,
  defaultValue,
  onValueChange,
  onValueReset,
}: RoomsFiltersDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Filter Rooms">
      <div className={styles['dialog-content']}>
        <RoomsFilters
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          onValueReset={onValueReset}
        />
      </div>
    </Dialog>
  );
};
