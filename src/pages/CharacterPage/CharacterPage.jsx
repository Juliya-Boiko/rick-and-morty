import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterAsync } from "api/axios";
import { BackLink } from "components/BackLink/BackLink";
import { InfoDetail } from "components/InfoDetail/InfoDetail";
import { Loader } from "components/Loader/Loader";

const CharacterPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSingleCharacterAsync(id).then(response => setItem(response.data));
    setLoading(false);
  }, [id]);

  return (
    <div className="character-page">
      <BackLink />
      { item && !loading
        ? <>
            <img src={item.image} alt={item.name} width="100px" className="character-page__image" />
            <h1 className="character-page__title">{item.name}</h1>
            <p className="character-page__text">Informations</p>
            <InfoDetail title="Gender" value={item.gender} />
            <InfoDetail title="Status" value={item.status} />
            <InfoDetail title="Specie" value={item.species} />
            <InfoDetail title="Origin" value={item.origin.name} />
            <InfoDetail title="Type" value={item.type === '' ? 'Unknown' : item.type} />
          </>
        : <Loader />}
    </div>
  )
};

export default CharacterPage;