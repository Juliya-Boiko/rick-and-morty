import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "redux/characters/charactersSlice";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { page, total} = useSelector(state => state.characters);

  return (
    <>
      {total > 1
        ? <div className="pagination">
            <button className="pagination__button" onClick={() => dispatch(prevPage())} disabled={page === 1 ? true : false} >
              <SlArrowLeft size="20" />
            </button>
            <span className="pagination__number">{page}</span>
            <button className="pagination__button" onClick={() => dispatch(nextPage())} disabled={page === total ? true : false} >
              <SlArrowRight size="20" />
            </button>
          </div>
        : null}
    </>
  );
};