import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication, provider } from "utils/firebaseConfig";

export const authUser = createAsyncThunk(
  'auth/google',
  async () => {
    const values = signInWithPopup(authentication, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const data = {
          uid: user.uid,
          accessToken: user.accessToken
        }
        toast.success(`${user.email} authorized`);
        return data;
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
    return values;
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data) => {
    const { email, password } = data;
    const values = createUserWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        const user = result.user;
        //console.log('registerUser return-->', user);
        const data = {
          uid: user.uid,
          accessToken: user.accessToken
        }
        toast.success(`${user.email} register successful`);
        return data;
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
    return values;
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data) => {
    const { email, password } = data;
    const values = signInWithEmailAndPassword(authentication, email, password)
      .then((result) => {
        const user = result.user;
        //console.log('loginUser return-->', user);
        const data = {
          uid: user.uid,
          accessToken: user.accessToken
        }
        toast.success(`${user.email} authorized`);
        return data;
      })
    .catch((error) => {
      toast.error(`${error.message}`);
    });
    return values;
  }
);