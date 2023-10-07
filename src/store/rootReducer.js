// store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
