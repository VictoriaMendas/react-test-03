import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import dataFromServer from "../dataFromServer.json";
import { nanoid } from "nanoid";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const dataFromLs = localStorage.getItem("contact");

    if (dataFromLs) {
      return JSON.parse(dataFromLs);
    }
    return dataFromServer;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts([finalContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((item) => item.id !== contactId));
  };

  const onChangeFilter = (e) => {
    const inputValue = e.target.value;
    setFilter(inputValue);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
export default App;
