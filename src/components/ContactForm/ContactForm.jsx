import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, actions) => {
    dispatch(addContact({ ...data, id: nanoid() }));
    actions.resetForm();
  };

  const userSchema = Yup.object({
    name: Yup.string("this is required field")
      .required()
      .min(3, "write minimum 3 symbols")
      .max(50, "write maximum 50 symbols"),
    number: Yup.string("this is required field")
      .required()
      .min(3, "write minimum 3 symbols")
      .max(50, "write maximum 50 symbols"),
  });
  return (
    <div>
      <Formik
        validationSchema={userSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
