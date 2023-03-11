import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/auth/authSlice";

export const UserBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.displayName);

  return (
    <div className="user-bar">
      <p>Welcome, {name}!</p>
      <button type="button" onClick={() => dispatch(logoutUser())} className="user-bar__btn">Logout</button>
    </div>
  );
}