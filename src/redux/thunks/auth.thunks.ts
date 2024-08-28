import * as auth from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFirebase } from "../../config/firebase";

export const authThunk = createAsyncThunk(
  "firebase/auth",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const authGenerate = await auth.signInWithEmailAndPassword(
        authFirebase,
        username,
        password
      );

      const { email, uid } = authGenerate.user;
      const { token: accessToken, expirationTime } = await authGenerate.user
        .getIdTokenResult();

      return {
        accessToken,
        expirationTime,
        userData: {
          email,
          uid,
        },
      };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
