import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { selectEmail } from "../../redux/auth/selectors";

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.email}>{email}</div>
      <button onClick={() => dispatch(logOut())} className={s.link}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
