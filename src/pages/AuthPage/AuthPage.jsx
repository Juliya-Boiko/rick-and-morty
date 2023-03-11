import { useDispatch } from "react-redux";
import { authUser } from "redux/auth/authOperations";
import { Logo } from "components/Logo/Logo";
import { FcGoogle } from "react-icons/fc"; 

const AuthPage = () => {
  const dispatch = useDispatch();

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(authUser());
  }; 

  return (
    <div className="auth-page">
      <Logo />
      <button type="button" onClick={registerHandler} className="auth-page__btn">
        <span>Continue with</span>
        <FcGoogle size="40" />
      </button>
    </div>
  );
};

export default AuthPage;

  // ======== SIGNUP WITH EMAIL & PASSWORD
  //   const data = {
  //     email: e.target.elements[0].value,
  //     password: e.target.elements[1].value
  //   };
  //  await createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log('errorMessage--->', errorMessage);
  //     });