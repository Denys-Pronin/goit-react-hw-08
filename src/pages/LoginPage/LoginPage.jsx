import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./LoginPage.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
    console.log(isLoggedIn);
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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
          <button className={s.btn}>Log In</button>
          <p>
            You don`t have account?{" "}
            <Link className={s.link} to="/register">
              Sign Up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
