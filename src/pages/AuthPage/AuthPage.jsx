import { Logo } from "components/Logo/Logo";
import { AuthForm } from "components/AuthForm/AuthForm";

const AuthPage = () => {

  return (
    <div className="auth-page">
      <Logo />
      <AuthForm />
    </div>
  );
};

export default AuthPage;