import { useDispatch } from "react-redux";
import { logoutUser } from "redux/auth/authSlice";

export const UserBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="user-bar">
      <button type="button" onClick={() => dispatch(logoutUser())} className="user-bar__btn">Logout</button>
    </div>
  );
}