import { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "redux/auth/authOperations";
import { Formik, Form, Field } from 'formik';
import { FcGoogle } from "react-icons/fc"; 
import { registerUser, loginUser } from "redux/auth/authOperations";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(true);

  const submitHandler = (values) => {
    if (toggleForm) {
      dispatch(registerUser(values));
    } else {
      dispatch(loginUser(values));
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
            <Field
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="auth-form__input"
            />
            <Field
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="auth-form__input" />
            <button type="submit" className="auth-form__submit-btn">{toggleForm ? 'Create account' : 'Login'}</button>
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