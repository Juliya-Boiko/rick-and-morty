import PropTypes from 'prop-types';
import { InfoDetail } from "components/CharacterInfo/CharacterDetail/CharacterDetail";

export const CharacterInfo = ({ item }) => {

  return (
    <>
      {item
        ? <>
            <img src={item.image} alt={item.name} width="100px" className="character-info__image" />
            <h1 className="character-info__title">{item.name}</h1>
            <p className="character-info__text">Informations</p>
            <InfoDetail title="Gender" value={item.gender} />
            <InfoDetail title="Status" value={item.status} />
            <InfoDetail title="Specie" value={item.species} />
            <InfoDetail title="Origin" value={item.origin.name} />
            <InfoDetail title="Type" value={!item.type ? 'Unknown' : item.type} />
          </>
        : null
      }
    </>
  );
};

CharacterInfo.propTypes = {
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