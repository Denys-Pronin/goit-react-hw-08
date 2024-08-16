import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (registrationData, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", registrationData);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", loginData);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    axios.defaults.headers.common.Authorization = ``;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCurrent = createAsyncThunk(
  "auth/getCurrent",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist");
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
