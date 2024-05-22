import { IoMdContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import { useState } from "react";
import ContactEditModal from "../ContactEditModal/ContactEditModal";

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContactThunk(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEditContact = () => setIsModalOpen(true);

  return (
    <li className={s.contact}>
      <div className={s.div}>
        <h3>
          <IoMdContact />
          {name}
        </h3>
        <p>
          <FaSquarePhone />
          {number}
        </p>
      </div>
      <div className={s.divButtons}>
        <button type="button" className={s.btn} onClick={handleEditContact}>
          Edit
        </button>
        <button type="button" className={s.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <ContactEditModal
          contact={contact}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </li>
  );
};

export default Contact;
