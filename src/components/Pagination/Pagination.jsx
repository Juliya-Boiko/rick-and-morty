import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
 

export const Pagination = ({ page, prevHandler, nextHandler, total }) => {
  return (
    <div className="pagination">
      <button disabled={page === 1 ? true : false} onClick={prevHandler} className="pagination__button" >
        <MdOutlineArrowBackIosNew size="30" />
      </button>
      <span className="pagination__number">{page}</span>
      <button onClick={nextHandler} className="pagination__button" disabled={page === total ? true : false} >
        <MdOutlineArrowForwardIos size="30" />
      </button>
    </div>
  );
};