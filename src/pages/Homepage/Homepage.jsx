import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "redux/characters/charactersOperations";
import { Logo } from "components/Logo/Logo";
import { Filter } from "components/Filter/Filter";
import { CardsList } from "components/CardsList/CardsList";
import { Loader } from "components/Loader/Loader";
import { UserBar } from "components/UserBar/UserBar";
import { Pagination } from "components/Pagination/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { page, filter, items, total} = useSelector(state => state.characters);

  useEffect(() => {
    setLoading(true);
    const searchQuery = { filter, page };
    dispatch(getCharacters(searchQuery));
    setLoading(false);
  }, [filter, page, dispatch]);

  return (
    <div className="homepage">
      <UserBar />
      <Logo />
      <Filter />
      {loading ? <Loader /> : null}
      {items ? <CardsList items={items} /> : null}
      {total > 1 ? <Pagination page={page} total={total} /> : null}
    </div>
  );
};

export default HomePage;
