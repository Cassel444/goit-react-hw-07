import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter((contact) => {
    if (typeof contact.name === "string") {
      return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
    }
    return false;
  });
};

function ContactList() {
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={css.lists}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
