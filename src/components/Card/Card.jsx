import { NavLink } from "react-router-dom";

export const Card = ({ item }) => {

  return (
    <li className="card">
      <NavLink to={`character/${item.id}`} className='card__link'> 
        <img src={item.image} alt={item.name} />
        <div className="card__overlay">
          <p className="card__name">{item.name}</p>
          <p className="card__species">{item.species}</p>
        </div>
      </NavLink>
    </li>
  );
};