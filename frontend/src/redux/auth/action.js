import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionType";
import axios from "axios";

let URL = `http://localhost:4500/api/users`;

export function registerUser(paramObj) {
  return async function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    try {
      await axios.post(`${URL}/register`, paramObj);
    } catch (error) {
      console.log(`register`, error);
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}

export function loginUser(paramObj) {
  return async function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    try {
      let res = await axios.post(`${URL}/login`, paramObj);
      console.log(`login user`, res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: res.data.token },
      });
    } catch (error) {
      console.log(`login`, error);
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    try {
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      console.log(`logout`, error);
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}
