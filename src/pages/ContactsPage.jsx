import ContactList from "../components/ContactList/ContactList";

import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "../redux/contacts/operations";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
