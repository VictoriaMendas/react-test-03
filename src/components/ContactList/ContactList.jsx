import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => {
          <li className={css.contact} key={contact.id}>
            <Contact contacts={contacts} />
          </li>;
        })}
      </ul>
    </div>
  );
}
