import { getUser } from "@/utils";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { fetchLogin, fetchLoginByCode, fetchUser, logout, setUserSaga } from "./saga";

const initialState = {
  user: getUser(),
  status: "idle",
  loginLoading: false,
};

export const { reducer: authReducer, actions: authActions } = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const loginAction = createAction("auth/login");
export const logoutAction = createAction("auth/actionLogout");
export const setUserAction = createAction("auth/setUserAction");
export const loginByCodeAction = createAction("auth/loginByCode");
export const getUserAction = createAction("auth/getUser");
export const loginSuccessAction = createAction("auth/loginSuccess");

export function* authSaga() {
  yield takeLatest(loginAction, fetchLogin);
  yield takeLatest(logoutAction, logout);
  yield takeLatest(getUserAction, fetchUser);
  yield takeLatest(setUserAction, setUserSaga);
  yield takeLatest(loginByCodeAction, fetchLoginByCode);
}
