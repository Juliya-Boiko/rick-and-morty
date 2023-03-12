import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterAsync } from "api/axios";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { CharacterInfo } from "components/CharacterInfo/CharacterInfo";

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
      {loading ? <Loader /> :  <CharacterInfo item={item} />}
    </div>
  )
};

export default CharacterPage;