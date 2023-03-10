import { NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export const BackLink = () => {
  return (
    <NavLink to='/' className="back-link" >
      <IoArrowBackOutline size="24"/>
      <span className="back-link__text">go back</span>
    </NavLink>
  );
};

// IoArrowBackOutline