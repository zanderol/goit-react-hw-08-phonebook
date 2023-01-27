import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
