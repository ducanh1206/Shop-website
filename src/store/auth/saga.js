import { PATH } from "@/config/path";
import { authService } from "@/services/auth";
import { userService } from "@/services/user";
import {
  clearToken,
  clearUser,
  getToken,
  handleError,
  setToken,
  setUser,
} from "@/utils";
import { call, put } from "redux-saga/effects";
import { cartActions } from "../cart";
import { authActions, loginSuccessAction } from ".";

export function* fetchLogin(action) {
  try {
    const res = yield call(authService.login, action.payload);
    setToken(res.data);
    const user = yield call(userService.getUserService);
    setUser(user.data);

    yield put(loginSuccessAction());
    yield put(authActions.setUser(user.data));
  } catch (err) {
    console.log(err);
    handleError(err);
  }
}

export function* logout() {
  yield put(authActions.logout());
  yield put(cartActions.setCart(null));
  clearUser();
  clearToken();
  window.location.href = PATH.Account;
}

export function* fetchUser() {
  try {
    if (getToken()) {
      const user = yield call(userService.getUserService);
      setUser(user.data);
      yield put(authActions.setUser(user.data));
    }
  } catch (err) {}
}

export function* setUserSaga(action) {
  setUser(action.payload)
  yield put(authActions.setUser(user))
}

export function* fetchLoginByCode() {
  try {
    const res = yield call(authService.loginByCode, { code });
    setToken(res.data);
    const user = yield call(userService.getUserService);
    setUser(user.data);
    yield put(authActions.setUser(user.data));
  } catch (err) {
    console.log(err);
    handleError(err);
  }
}

// export const loginAction = createAsyncThunk(
//   "auth/login",
//   async (data, thunkApi) => {
//     try {
//       // console.log(data)
//       const res = await authService.login(data);
//       setToken(res.data);
//       const user = await userService.getUser();
//       setUser(user.data);

//       thunkApi.dispatch(getCartAction());
//       return user.data;
//     } catch (err) {
//       console.log(err);
//       throw err.response.data;
//     }
//   }
// );

// export const loginByCodeAction = createAsyncThunk(
//   "auth/loginByCodeAction",
//   async (code, thunkApi) => {
//     try {
//       // console.log(data)
//       const res = await authService.loginByCode({ code });
//       setToken(res.data);
//       const user = await userService.getUser();
//       setUser(user.data);

//       return user.data;
//     } catch (err) {
//       console.log(err);
//       throw err.response.data;
//     }
//   }
// );

// export const logoutAction = createAsyncThunk("auth/logout", (_, thunkApi) => {
//   thunkApi.dispatch(authActions.logout());
//   thunkApi.dispatch(cartActions.setCart(null));
//   clearUser();
//   clearToken();
//   window.location.href = PATH.Account

// });

// export const getUserAction = createAsyncThunk(
//   "auth/getUser",
//   async (_, thunkApi) => {
//     try {
//       if (getToken()) {
//         const user = await userService.getUser();
//         setUser(user.data);
//         thunkApi.dispatch(authActions.setUser(user.data));
//       }
//     } catch (err) {}
//   }
// );

// export const setUserAction = createAsyncThunk(
//   "auth/setUser",
//   (user, thunkApi) => {
//     setUser(user);
//     thunkApi.dispatch(authActions.setUser(user));
//   }
// );
