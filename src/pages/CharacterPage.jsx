import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterAsync } from "api/axios";
import { NavLink } from "react-router-dom";

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
      <NavLink to='/'>go back</NavLink>
      {item
        ? <div>
            <img src={item.image} alt={item.name} width="100px" />
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