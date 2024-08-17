import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.btns}>
      <Link to="/register" className={s.link}>
        Sign Up
      </Link>
      <Link to="/login" className={s.link}>
        Log In
      </Link>
    </div>
  );
};

export default AuthNav;
