import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { filteredContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const filterContacts = useSelector(filteredContacts);

  return (
    <div className={s.wrapper}>
      {filterContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
