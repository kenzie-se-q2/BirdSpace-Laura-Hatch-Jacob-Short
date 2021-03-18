import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: {token: ""}, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
// export const CREATE_USER = "CREATE_USER";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    default:
      return state;
      // case  SIGN_UP:
      // return { }
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)))


// our action.payload returns our object of our request, that holds in this case oon line 16 will
// hold the object of the user including username, password, token, ect...

