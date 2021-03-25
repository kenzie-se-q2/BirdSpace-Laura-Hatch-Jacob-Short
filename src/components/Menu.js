import React from "react";
import { Link } from "react-router-dom";
import { useStore, LOGOUT } from "../store/store";
import { logoutRequest } from "../fetchRequests";

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(()=>dispatch({type:LOGOUT}));
    
  };

  return (
    <div id="menu">
      <div id="menu-links">
        {user.token && <button type="button" className="btn btn-outline-primary" 
        onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default Menu;
