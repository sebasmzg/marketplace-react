import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authThunk } from "../thunks/auth.thunks";


interface AuthState {
  isAuth: boolean;
  success: boolean;
  error: string | null;
  loading: boolean;
  userData: {
    email: string | null;
    uid: string | null;
  } | null;
  accessToken: string | null;
  isExpired: boolean | null;
}

const initialState: AuthState = {
  isAuth: false,
  accessToken: null,
  isExpired: null,
  error: null,
  loading: false,
  success: false,
  userData: {
    email: null,
    uid: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.success = true;
        if (action.payload) {
            state.userData = action.payload.userData || { email: null, uid: null };
            state.accessToken = action.payload.accessToken || null;
        }
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to authenticate";
      });
  },
});

export const { login, logout } = authSlice.actions;
