import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    selectedMenuOption: { title: "Home", query: "Programming" },
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOption: (state, action) => {
      state.selectedMenuOption = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOption } = appSlice.actions;

export default appSlice.reducer;
