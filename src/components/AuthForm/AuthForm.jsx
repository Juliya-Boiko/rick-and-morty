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
      <button type="button" onClick={() => setToggleForm(prevState => !prevState)} className="auth-form__toggle-btn">
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

      <button type="button" onClick={() => dispatch(authUser())} className="auth-page__btn">
        <span>Continue with</span>
        <FcGoogle size="40" />
      </button>
    </>
  );
};