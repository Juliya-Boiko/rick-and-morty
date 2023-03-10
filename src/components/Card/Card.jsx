import { NavLink } from "react-router-dom";

export const Card = ({ item }) => {

  return (
    <li>
      <img src={item.image} alt={item.name} />
      <NavLink to={`character/${item.id}`}>{item.name}</NavLink>
    </li>
  );
};