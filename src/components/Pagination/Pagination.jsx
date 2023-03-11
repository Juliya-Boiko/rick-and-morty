import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "redux/characters/charactersSlice";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const Pagination = ({ page, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => dispatch(prevPage())} disabled={page === 1 ? true : false} >
        <SlArrowLeft size="20" />
      </button>
      <span className="pagination__number">{page}</span>
      <button className="pagination__button" onClick={() => dispatch(nextPage())} disabled={page === total ? true : false} >
        <SlArrowRight size="20" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};