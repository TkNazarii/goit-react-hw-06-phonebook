import { ADDCONTACT, DELCONTACT, STARTLOCALSTORAGE } from "./contactTypes"

export const addContact = (data) => ({type: ADDCONTACT,payload: data})
export const delContact = (data) => ({type: DELCONTACT,payload: data})
export const startLocalStoreg = (arr) => ({type: STARTLOCALSTORAGE,payload: arr})
