import { ErrorMessage, Field, Form, Formik } from "formik";
import { editContactThunk } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import s from "./ContactEditModal.module.css";

const ContactEditModal = ({ contact, closeModal }) => {
  const validation = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
    number: yup
      .string()
      .required("Required field")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(editContactThunk(data));
    closeModal();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={contact}
      validationSchema={validation}
    >
      <Form className={s.form}>
        <h2>Edit contact</h2>
        <label className={s.label} name="name">
          Name
          <Field name="name" placeholder="Enter name here..." />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label} name="number">
          Number
          <Field label="number" name="number" placeholder="123-45-67" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button type="submit">Edit</button>
      </Form>
    </Formik>
  );
};

export default ContactEditModal;
