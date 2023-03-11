// import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "redux/characters/charactersSlice";

export const Pagination = ({ page, total, nextHandler }) => {
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => dispatch(prevPage())} disabled={page === 1 ? true : false} >
        prev
        {/* <MdOutlineArrowBackIosNew size="30" /> */}
      </button>

      <span className="pagination__number">{page}</span>

      <button className="pagination__button" onClick={() => dispatch(nextPage())} disabled={page === total ? true : false} >
        next
        {/* <MdOutlineArrowForwardIos size="30" /> */}
      </button>
    </div>
  );
};