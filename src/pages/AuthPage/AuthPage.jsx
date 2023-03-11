import { useDispatch } from "react-redux";
import { authUser } from "redux/auth/authOperations";
import { Logo } from "components/Logo/Logo";
import { FcGoogle } from "react-icons/fc"; 

const AuthPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="auth-page">
      <Logo />
      <button type="button" onClick={() => dispatch(authUser())} className="auth-page__btn">
        <span>Continue with</span>
        <FcGoogle size="40" />
      </button>
    </div>
  );
};

export default AuthPage;