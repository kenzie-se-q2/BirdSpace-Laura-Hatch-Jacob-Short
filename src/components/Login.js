import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store/store";


function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
    //-----------------------------------^key--------^value
  };

  return (

<>
<div class="container">
<form id="login-form" onSubmit={handleLogin}>                        
  <div className="form-group">
    <label for="username">Username</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"
    type="text"
    name="username"
    value={formData.username}
    autoFocus
    required
    onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
     type="password"
     name="password"
     value={formData.password}
     required
     onChange={handleChange}/>
</div>
  <button type="submit" className="btn btn-primary" id= "login-form" onSubmit={handleLogin}>
    Submit
  </button>
</form>
</div>
</>
  );
}

export default Login;
