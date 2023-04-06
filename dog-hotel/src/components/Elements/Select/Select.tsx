import OptionUnstyled from '@mui/base/OptionUnstyled';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import React from 'react';

//import styles from './Select.module.scss';

export const Select = () => {
  return (
    <div>
      <SelectUnstyled>
        <OptionUnstyled value="Big Dog"> {/* option one */}</OptionUnstyled>
        <OptionUnstyled value="Small Dog">{/* option two */}</OptionUnstyled>
      </SelectUnstyled>
    </div>
  );
};
