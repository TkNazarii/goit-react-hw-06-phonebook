import { combineReducers } from "@reduxjs/toolkit"
import { contactReducer } from "./contact/contactReducer";
import { filterReducer } from "./filter/filterReducer";

// комбайн не бачить інтіалстейт!!!
export const reducer = combineReducers({
	filterValue: filterReducer,
	allContacts: contactReducer,
  });