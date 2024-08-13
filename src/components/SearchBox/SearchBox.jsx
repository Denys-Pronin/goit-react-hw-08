import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input className={s.input} onChange={handleSearch} />
    </label>
  );
};

export default SearchBox;
