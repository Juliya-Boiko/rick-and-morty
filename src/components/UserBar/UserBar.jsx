import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/auth/authSlice";


export const UserBar = () => {
  const name = useSelector(state => state.auth.displayName);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="user-bar">
      <p>Welcome, {name}!</p>
      <button onClick={logoutHandler} className="user-bar__btn">Logout</button>
    </div>
  );
}