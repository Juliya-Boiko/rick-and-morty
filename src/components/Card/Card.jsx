import { NavLink } from "react-router-dom";

export const Card = ({ item }) => {

  return (
    <li>
      <img src={item.image} alt={item.name} width="100px" />
      <NavLink to={`character/${item.id}`}>{item.name}</NavLink>
    </li>
  );
};