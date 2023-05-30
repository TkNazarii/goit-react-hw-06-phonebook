import { CHANGEFILTERVALUE } from "./filterTypes"

import { initialState } from "redux/initialState"

// вирішує проблему комбайна
export const filterReducer = (state = initialState.filterValue, action) => {
	switch (action.type) {
  
		case CHANGEFILTERVALUE:
		return {
		  ...state,
		  value: action.payload
		}
  
	  default:
		return state
	}
  }
