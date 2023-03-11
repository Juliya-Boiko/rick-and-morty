import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication, provider } from "utils/firebaseConfig";


export const authUser = createAsyncThunk(
  'auth',
  async () => {
    try {
    const values = signInWithPopup(authentication, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          const data = {
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken
          }
          //console.log(user);
          return data;
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log('errorMessage--->', errorMessage);
        });
      return values;
    } catch (error) {
     // Notify.failure(`${error.response.data.message}`);
    }
  }
);