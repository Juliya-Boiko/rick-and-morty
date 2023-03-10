import { AiOutlineSearch } from "react-icons/ai";

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter" className="filter">
      <AiOutlineSearch size='24' className="filter__icon" />
      <input className="filter__input" id="filter" type='text' value={value} onChange={onChange} placeholder='Filter by name...' />
    </label>
  );
}