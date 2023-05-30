import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLocalStoreg } from 'redux/contact/actions';

import Form from './_01-form';
import Filter from './_02-filter';
import List from './_03-List';
import css from '../app.module.scss';


const App = () => {

	const { contacts } = useSelector((state) => state.allContacts);
	const dispatch = useDispatch();

	console.log(contacts);
  
	useEffect(() => {
		const contactsFromStorage = localStorage.getItem('contacts');
		const parsedContacts = JSON.parse(contactsFromStorage);
		if (parsedContacts) {
			dispatch(startLocalStoreg(parsedContacts));
		}
	  }, [dispatch]);
	
	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	  }, [contacts]);

  return (
    <div className={css['vrapper']}>
      <h1 className={css['vrapper__title']}>Phonebook</h1>
      <Form />
      <h2 className={css['vrapper__title']}>Contacts</h2>
      <Filter />
      <List />
    </div>
  );
};

export default App;