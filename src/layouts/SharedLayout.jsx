// import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div className='shared-layout'>
      <Outlet />
    </div>
  )
};