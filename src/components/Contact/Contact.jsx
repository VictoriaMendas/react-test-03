import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactBox}>
        <span>
          <FaUser className={css.iconName} />
          {contact.name}{" "}
        </span>

        <span>
          <BsFillTelephoneFill className={css.iconNumber} />
          {contact.number}
        </span>
      </div>
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={css.deleteBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
