import React, { useState, useEffect } from 'react';
import css from './list.module.scss';

import { useSelector, useDispatch } from 'react-redux';

const List = () => {

const { contacts, filterValue } = useSelector((state) => state)
console.log(contacts);

const dispatch = useDispatch();

const deleteItem = id => {
    const newData = contacts.filter(item => item.id !== id);

	dispatch({
		  type: 'delContact',
		  payload: newData
		});
  };

  return (
    <ul className={css['list']}>
      {contacts
        .filter(item => {
          return item.name.toLowerCase().includes(filterValue.toLowerCase());
        })
        .map(item => {
          return (
            <li className={css['list__item']} key={item.id}>
              {item.name}: {item.number}
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default List;
