import { getAllCharactersAsync, getSingleCharacterAsync } from "api/axios";
import { useEffect, useState } from "react";
import { CardsList } from "./CardsList/CardsList";
// import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [items, setItems] = useState([]);

  const getAll = async () => {
    const { data } = await getAllCharactersAsync();
    setItems(data.results);
  };

  useEffect(() => {
    getAll();
  }, []);
  
  const getOne = async () => {
    const data = await getSingleCharacterAsync(2);
    console.log(data);
  };

  return (
    <div>
      Rick-and-morty
      <button onClick={getOne}>GET ONE</button>

      {items.length > 0 ? <CardsList items={items} /> : <p>NUll List</p>}
    </div>
  );
};
