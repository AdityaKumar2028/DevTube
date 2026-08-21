import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestions: {},
    searchResults: {},
  },

  reducers: {
    cacheSearchResult: (state, action) => {
      Object.assign(state.searchSuggestions, action.payload);
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});
export default searchSlice.reducer;
export const { cacheSearchResult, addSearchResults } = searchSlice.actions;
