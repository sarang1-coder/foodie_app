// Filter.js

import React from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

const Filter = ({ isVegetarian, handleFilterChange }) => {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={isVegetarian}
            onChange={handleFilterChange}
            name="isVegetarian"
            color="primary"
          />
        }
        label="Vegetarian Only"
      />
    </Box>
  );
};

export default Filter;
