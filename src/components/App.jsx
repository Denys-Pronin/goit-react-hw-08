import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { error, loading } from "../redux/contactsSlice";

function App() {
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
}

export default App;
