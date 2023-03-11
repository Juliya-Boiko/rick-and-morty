import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "redux/characters/charactersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.characters.filter);

  return (
    <label htmlFor="filter" className="filter">
      <AiOutlineSearch size='24' className="filter__icon" />
      <input
        className="filter__input"
        id="filter"
        type='text'
        value={value}
        onChange={(e) => dispatch(filter(e.target.value))} placeholder='Filter by name...'
      />
    </label>
  );
}