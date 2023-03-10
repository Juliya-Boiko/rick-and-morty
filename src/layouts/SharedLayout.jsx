import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home Page</NavLink>
          </li>
          <li>
            <NavLink to='character'>Character Page</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};