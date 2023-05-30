import { createStore } from "redux";
import { reducer } from "./reducer";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
//       }

//     case 'delContact':
//       return {
//         ...state,
//         contacts: action.payload
//       }

// 	  case 'changeFilterValue':
//       return {
//         ...state,
//         filterValue: action.payload
//       }

//     default:
//       return state
//   }
// }

export const store = createStore(reducer);
