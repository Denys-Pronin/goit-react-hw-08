import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/operations";

import s from "./LoginForm.module.css";

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={s.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field className={s.field} type="text" name="email" id={emailFieldId} />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={s.field}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <button className={s.btn}>Log In</button>
        <p>
          You don`t have account?{" "}
          <Link className={s.link} to="/register">
            Sign Up
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
