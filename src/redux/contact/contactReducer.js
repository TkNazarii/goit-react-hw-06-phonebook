import { ADDCONTACT, DELCONTACT, STARTLOCALSTORAGE } from "./contactTypes"

import { initialState } from "redux/initialState"
// вирішує проблему комбайна
export const contactReducer = (state = initialState.allContacts, action) => {
	switch (action.type) {

	  case ADDCONTACT:
		return {
		  ...state,
		  contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
		}
  
	  case DELCONTACT:
		return {
		  ...state,
		  contacts: action.payload
		}

		case STARTLOCALSTORAGE:
			return {
			  ...state,
			  contacts: [...action.payload]
			}
  
	  default:
		return state
	}
  }

