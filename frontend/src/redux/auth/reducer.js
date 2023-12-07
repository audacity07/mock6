import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: null,
  errorMessage: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.message,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload.token,
        errorMessage: "",
        isAuth: true,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: null,
        errorMessage: "",
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
