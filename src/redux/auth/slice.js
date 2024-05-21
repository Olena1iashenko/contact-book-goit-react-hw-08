import { loginThunk, logoutThunk, registerThunk } from "./operations";
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
      });
  },
});

// export const { selectIsLoggedIn, selectToken, selectUserName } =
//   authSlice.selectors;
export const authReducer = authSlice.reducer;
