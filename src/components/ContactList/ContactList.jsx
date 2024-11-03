import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactBox}>
          <Contact contact={contact} onDeleteBtn={onDeleteBtn} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
