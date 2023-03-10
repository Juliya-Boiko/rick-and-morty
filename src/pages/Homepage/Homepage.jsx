import { useState, useEffect } from "react";
import { getAllCharactersAsync } from "api/axios";
import { Logo } from "components/Logo/Logo";
import { Filter } from "components/Filter/Filter";
import { CardsList } from "components/CardsList/CardsList";

export const HomePage = () => {
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);

  const getAll = async () => {
    const { data } = await getAllCharactersAsync();
    setItems(data.results);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = () => {
    const data = items.filter(item => item.name.toLowerCase().includes(filter));
    return data;
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="homepage">
      <Logo width="200px" />
      <Filter value={filter} onChange={filterHandler} />
      {items.length > 0 ? <CardsList items={filteredItems(items)}/> : <p>Empty List</p>}
    </div>
  )
};


