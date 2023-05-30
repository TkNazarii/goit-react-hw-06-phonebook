import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case 'addContact':
      return {
        ...state,
        contacts: [...state.contacts, { id: action.payload.id, name: action.payload.name, number: action.payload.number }]
      }

    case 'delContact':
      return {
        ...state,
        contacts: action.payload
      }

	  case 'changeFilterValue':
      return {
        ...state,
        filterValue: action.payload
      }

    default:
      return state
  }
}

export const store = createStore(reducer, {
	filterValue: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
});
