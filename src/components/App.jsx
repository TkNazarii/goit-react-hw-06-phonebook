import Form from './_01-form';
import Filter from './_02-filter';
import List from './_03-List';
import css from '../app.module.scss';

import { useSelector } from 'react-redux';

export const App = () => {

const store = useSelector((state) => state)
console.log(store);

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
