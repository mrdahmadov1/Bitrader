// themeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateThemeVariables } from "../../helpers/themeHelper";

// Create an async thunk to handle the theme toggle
export const toggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (_, { getState }) => {
    const currentTheme = getState().theme.currentTheme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Call updateThemeVariables with the new theme
    updateThemeVariables(newTheme);

    return newTheme;
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTheme.fulfilled, (state, action) => {
      state.currentTheme = action.payload;
    });
  },
});

export default themeSlice.reducer;
