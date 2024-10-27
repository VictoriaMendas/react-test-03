import { BiCool } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <div>
      <div className={css.boxContact}>
        <span>
          {" "}
          <BiCool /> {contact.name}
        </span>
        <span>
          <FaPhoneAlt />
          {contact.number}
        </span>
      </div>

      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
}
