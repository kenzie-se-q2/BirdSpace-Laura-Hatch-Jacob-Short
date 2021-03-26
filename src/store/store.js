import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };
console.log(initialState)
// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGN_UP = "SIGN_UP";
export const GET_MESSAGES = "GET_MESSAGES";
export const POST_MESSAGE = "POST_MESSAGE";
export const PATCH_USER = "PATCH_USER";
export const GET_USER = "GET_USER";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case SIGN_UP:
      return { user: action.payload };
    case GET_MESSAGES:
      return { messages: action.payload};
    case POST_MESSAGE:
      return state;
    case PATCH_USER:
      return state;
    case GET_USER:
      return state;
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));

// our action.payload returns our object of our request, that holds in this case oon line 16 will
// hold the object of the user including username, password, token, ect...
