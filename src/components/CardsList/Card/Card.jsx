import PropTypes from 'prop-types';
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

Card.propTypes = {
  item: PropTypes.shape({
    created: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
    name: PropTypes.string.isRequired,
    origin: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
    species: PropTypes.string.isRequired,
    status: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }),
};