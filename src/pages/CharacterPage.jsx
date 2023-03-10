import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterAsync } from "api/axios";

export const CharacterPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  console.log(item);

  const getOne = async (id) => {
    const { data } = await getSingleCharacterAsync(id);
    setItem(data);
  };

  useEffect(() => {
    getOne(id);
  }, [id]);


  return (
    <div>
      {item
        ? <div>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Informations</p>
            <p>Gender: {item.gender}</p>
            <p>Status: {item.status}</p>
            <p>Specie: {item.species} </p>
            <p>Origin: {item.origin.name} </p>
            <p>Type: {item.type === '' ? 'Unknown' : item.type} </p>
          </div>
        : <p>no data getted</p>}
    </div>
  )
};