import {
  BLOG_DELETE_SUCCESS,
  BLOG_FAILURE,
  BLOG_GET_SUCCESS,
  BLOG_PATCH_SUCCESS,
  BLOG_POST_SUCCESS,
  BLOG_REQUEST,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  blogs: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BLOG_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case BLOG_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case BLOG_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        blogs: payload,
      };
    }

    case BLOG_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        blogs: payload,
      };
    }
    case BLOG_PATCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        blogs: payload,
      };
    }
    case BLOG_DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        blogs: payload,
      };
    }

    default: {
      return state;
    }
  }
};
