import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  // selectors: {
  //   selectUserName: (state) => state.user.name,
  //   selectToken: (state) => state.token,
  //   selectIsLogedIn: (state) => state.isLoggedIn,
  // },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return authInitialState;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { error }) => {
          state.loading = false;
          state.error = error;
        }
      );
  },
});

// export const { selectIsLoggedIn, selectToken, selectUserName } =
//   authSlice.selectors;
export const authReducer = authSlice.reducer;
