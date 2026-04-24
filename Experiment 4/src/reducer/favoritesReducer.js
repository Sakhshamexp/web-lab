export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (state.find(item => item.id === action.payload.id)) return state;
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};
