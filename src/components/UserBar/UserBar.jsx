import { useDispatch } from "react-redux";
import { logoutUser } from "redux/auth/authSlice";
import { TfiSettings } from "react-icons/tfi";
import { useState } from "react";


export const UserBar = () => {
  const dispatch = useDispatch();
  const [showBar, setShowBar] = useState(false);

  const logoutHandler = () => {
    setShowBar(false);
    dispatch(logoutUser());
  };

  const themeHandler = () => {
    setShowBar(false);
    const root = document.querySelector('#root');
    root.classList.toggle('colored-theme');
  }

  return (
    <>
      <button onClick={() => setShowBar(prevState => !prevState)} className="user-bar__toggle-btn">
        <TfiSettings size="20" />
      </button>
      {showBar
        ? <ul className="user-bar__menu">
            <li className="user-bar__menu-item">
              <button type="button" onClick={logoutHandler} className="user-bar__menu-btn">Logout</button>
            </li>
            <li className="user-bar__menu-item">
              <button type="button" onClick={themeHandler} className="user-bar__menu-btn">Theme</button>
            </li>
          </ul>
        : null}
    </>
  );
}