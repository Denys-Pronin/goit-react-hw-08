import { Link, NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
