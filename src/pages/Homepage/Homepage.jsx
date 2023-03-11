import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "redux/characters/charactersSlice";
import { getCharacters } from "redux/characters/charactersOperations";
import { Logo } from "components/Logo/Logo";
import { Filter } from "components/Filter/Filter";
import { CardsList } from "components/CardsList/CardsList";
import { Loader } from "components/Loader/Loader";
import { UserBar } from "components/UserBar/UserBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const [currentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const value = useSelector(state => state.characters.filter);
  const characters = useSelector(state => state.characters.items);

  useEffect(() => {
    dispatch(getCharacters(value, currentPage));
    setLoading(false);
  }, [value, currentPage, dispatch]);

  return (
    <div className="homepage">
      <UserBar />
      <Logo width="200px" />
      <Filter value={value} onChange={(e) => dispatch(filter(e.target.value))} />
      {loading ? <Loader /> : null}
      {characters ? <CardsList items={characters} /> : null}
    </div>
  )
};

export default HomePage;
