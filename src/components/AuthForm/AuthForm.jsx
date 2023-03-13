import { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "redux/auth/authOperations";
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { FcGoogle } from "react-icons/fc"; 
import { registerUser, loginUser } from "redux/auth/authOperations";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (values) => {
    if (!values.email.trim() || !values.password.trim()) {
      toast.warn('Fields cannot by emty');
    } else {
      toggleForm ? dispatch(registerUser(values)) : dispatch(loginUser(values))
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setToggleForm(prevState => !prevState)}
        className="auth-form__toggle-btn"
      >
        {toggleForm ? 'You have account?' : 'Dont have account?'}
        <span>{toggleForm ? 'Login' : 'Create'}</span>
      </button>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={submitHandler}
      >
        {({ values, handleChange }) => (
          <Form key="register" className="auth-form">
            <div className="auth-form__wrapper">
              <Field
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                className="auth-form__input"
              />
            </div>

            <div className="auth-form__wrapper">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                className="auth-form__input"
              />
              <button type="button" onClick={() => setShowPassword(prevState => !prevState)} className="auth-form__password-btn">
                {showPassword ? <RxEyeOpen size="20"  /> : <RxEyeClosed size="20" />}
              </button>
            </div>

            <button
              type="submit"
              className="auth-form__submit-btn"
            >
              {toggleForm ? 'Create account' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>

      <div className="auth-form__delimeter">
        <div className="auth-form__delimeter-line"></div>
        <p>or</p>
        <div className="auth-form__delimeter-line auth-form__delimeter-line--reversed"></div>
      </div>

      <button
        type="button"
        onClick={() => dispatch(authUser())}
        className="auth-form__google-btn"
      >
        Continue with 
        <FcGoogle size="20" />
        oogle
      </button>
    </>
  );
};