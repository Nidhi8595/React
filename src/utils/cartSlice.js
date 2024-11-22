// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
      
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter(item => item.card.info.id !== action.payload.id);
//     },
//     clearCart: () => {
     
//       return { items: [] };
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity
      } else {
        const newItem = { ...action.payload, quantity: 1 }; // Set initial quantity to 1
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.card.info.id === action.payload.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity
        } else {
          state.items = state.items.filter(item => item.card.info.id !== action.payload.id); // Remove item
        }
      }
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
