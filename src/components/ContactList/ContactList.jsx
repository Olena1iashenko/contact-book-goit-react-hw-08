import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <h2>No contacts found</h2>;
  }
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
