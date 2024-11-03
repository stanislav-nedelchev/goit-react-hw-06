import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacs] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    return parsedContacts;
  });

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );

  const onAddContact = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacs(prevState => [...prevState, finalContact]);
  };

  const onDeleteBtn = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId,
    );

    setContacs(updatedContacts);
  };

  return (
    <div className="bodyWrapper">
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
      </div>
      <ContactList contacts={filteredContacts} onDeleteBtn={onDeleteBtn} />
    </div>
  );
}

export default App;
