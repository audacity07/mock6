import { useSelector } from "react-redux";
import {
  BLOG_DELETE_SUCCESS,
  BLOG_FAILURE,
  BLOG_GET_SUCCESS,
  BLOG_PATCH_SUCCESS,
  BLOG_POST_SUCCESS,
  BLOG_REQUEST,
} from "./actionType";
import axios from "axios";

let URL = `https://mock6be.onrender.com/api/blogs`;

export function postBlog(paramObj) {
  return async function (dispatch) {
    dispatch({ type: BLOG_REQUEST });
    try {
      let token = useSelector((store) => store.authReducer.token);
      await axios.post(`${URL}`, paramObj, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`post blog`, res.data);
      dispatch({ type: BLOG_POST_SUCCESS, payload: res.data.blogs });
    } catch (error) {
      console.log(`post`, error);
      dispatch({ type: BLOG_FAILURE });
    }
  };
}

export function getBlog(paramObj) {
  return async function (dispatch) {
    dispatch({ type: BLOG_REQUEST });
    try {
      let token = useSelector((store) => store.authReducer.token);
      console.log(`token in get blog`, token);
      await axios.get(`${URL}`, paramObj, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`all blogs`, res.data);
      dispatch({ type: BLOG_GET_SUCCESS, payload: res.data.blogs });
    } catch (error) {
      console.log(`all blogs`, error);
      dispatch({ type: BLOG_FAILURE });
    }
  };
}

export function patchBlog(id, paramObj) {
  return async function (dispatch) {
    dispatch({ type: BLOG_REQUEST });
    try {
      let token = useSelector((store) => store.authReducer.token);
      await axios.patch(`${URL}/${id}`, paramObj, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`patch blog`, res.data);
      dispatch({ type: BLOG_PATCH_SUCCESS, payload: res.data.blogs });
    } catch (error) {
      console.log(`patch blog`, error);
      dispatch({ type: BLOG_FAILURE });
    }
  };
}

export function deleteBlog(id) {
  return async function (dispatch) {
    dispatch({ type: BLOG_REQUEST });
    try {
      let token = useSelector((store) => store.authReducer.token);
      await axios.delete(`${URL}/${id}`, null, {
        headers: {
          Authorization: token,
        },
      });
      console.log(`delete blog`, res.data);
      dispatch({ type: BLOG_DELETE_SUCCESS, payload: res.data.blogs });
    } catch (error) {
      console.log(`delete blog`, error);
      dispatch({ type: BLOG_FAILURE });
    }
  };
}
