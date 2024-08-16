import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./RegistrationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={s.field} type="text" name="name" id={nameFieldId} />
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={s.field}
            type="text"
            name="email"
            id={emailFieldId}
          />
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
    </div>
  );
};

export default RegistrationPage;
