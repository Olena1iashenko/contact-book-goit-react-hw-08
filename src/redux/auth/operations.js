import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../../config/API";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
