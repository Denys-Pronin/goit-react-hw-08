import { Link, NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      {!isLoggedIn && (
        <div className={s.btns}>
          <Link to="/register" className={s.link}>
            Sign Up
          </Link>
          <Link to="/login" className={s.link}>
            Log In
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className={s.btns}>
          <button onClick={() => dispatch(logout())} className={s.link}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AppBar;
