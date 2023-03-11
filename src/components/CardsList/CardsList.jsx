import PropTypes from 'prop-types';
import { Card } from "components/Card/Card";
import { sortedByName } from "helpers/sortedByName";

export const CardsList = ({ items }) => {
  const sortedItems = sortedByName(items);

  return (
    <ul className="cards-list">
      {sortedItems.map(item => {
        return <Card key={item.id} item={item} />
      })}
    </ul>
  );
};

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
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
  }))
};