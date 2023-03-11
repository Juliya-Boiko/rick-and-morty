import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication, provider } from "utils/firebaseConfig";

export const authUser = createAsyncThunk(
  'auth',
  async () => {
    try {
    const values = signInWithPopup(authentication, provider)
        .then((result) => {
          GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          const data = {
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken
          }
          return data;
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log('errorMessage--->', errorMessage);
        });
      return values;
    } catch (error) {
      toast.warn(`${error}`);
    }
  }
);