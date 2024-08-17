import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(logout())} className={s.link}>
      Log Out
    </button>
  );
};

export default UserMenu;
