import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(register(values));
    action.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={s.field} type="text" name="name" id={nameFieldId} />
        <label htmlFor={emailFieldId}>Email</label>
        <Field className={s.field} type="text" name="email" id={emailFieldId} />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={s.field}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <button className={s.btn}>Registration</button>
        <p>
          You already have account?{" "}
          <Link className={s.link} to="/login">
            Log In
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
