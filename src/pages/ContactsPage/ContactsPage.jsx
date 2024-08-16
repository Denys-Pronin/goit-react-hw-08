import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { error, loading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";

const HomePage = () => {
  const load = useSelector(loading);
  const err = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {load && <h2>Loading...</h2>}
      {err && <h2>Error</h2>}
      <ContactList />
    </div>
  );
};

export default HomePage;
