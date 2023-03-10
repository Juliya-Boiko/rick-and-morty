import { useState, useEffect } from "react";
import { Logo } from "components/Logo/Logo";
import { Filter } from "components/Filter/Filter";
import { CardsList } from "components/CardsList/CardsList";
import { Loader } from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "redux/charactersOperations";
import { filter } from "redux/charactersSlice";
import { filteredByValue } from "helpers/filteredByValue";
import { Pagination } from "components/Pagination/Pagination";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1) ;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const value = useSelector(state => state.characters.filter);
  const characters = useSelector(state => state.characters.items);

  useEffect(() => {
    dispatch(getAllCharacters(currentPage));
    setLoading(false);
  }, [currentPage, dispatch]);

  const prevHandler = () => {
    setCurrentPage(prevState => prevState - 1);
  }

  const nextHandler = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <div className="homepage">
      <Logo width="200px" />
      <Filter value={value} onChange={(e)=> dispatch(filter(e.target.value))} />
      {loading ? <Loader /> : <CardsList items={filteredByValue(characters, value)} />}
      <Pagination page={currentPage} prevHandler={prevHandler} nextHandler={nextHandler} /> 
    </div>
  )
};

export default HomePage;
