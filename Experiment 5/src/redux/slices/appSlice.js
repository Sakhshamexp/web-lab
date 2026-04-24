import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    }
  }
});

export const { addFavorite, removeFavorite, clearFavorites } = appSlice.actions;
export default appSlice.reducer;
