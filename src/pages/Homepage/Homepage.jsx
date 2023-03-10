import { useState, useEffect } from "react";
import { getAllCharactersAsync } from "api/axios";
import { Logo } from "components/Logo/Logo";
import { Filter } from "components/Filter/Filter";
import { CardsList } from "components/CardsList/CardsList";
import { Loader } from "components/Loader/Loader";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredItems = () => {
    const data = items.filter(item => item.name.toLowerCase().includes(filter));
    return data;
  };

  useEffect(() => {
    getAllCharactersAsync(page).then(response => setItems(response.data.results));
    setLoading(false);
  }, [page]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="homepage">
      <Logo width="200px" />
      <Filter value={filter} onChange={(e)=> setFilter(e.target.value)} />
      { loading ? <Loader /> : null }
      {items.length > 0 ? <CardsList items={filteredItems(items)} /> : null}
      <button onClick={() => setPage(prevState => prevState + 1)} >Load more</button>
    </div>
  )
};

export default HomePage;