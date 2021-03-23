import React, { useState } from "react";
import { signUpRequest } from "../fetchRequests";
import { SIGN_UP, useStore } from "../store/store";
// import { Link } from 'react-router-dom';


const SignUp = (props) => {
  const dispatch = useStore((state) => state.dispatch);

  const [createUserData, setCreateUserData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleSignUp = (e) => {
    signUpRequest(
      createUserData.username,
      createUserData.displayName,
      createUserData.password
    ).then((newUserData) => dispatch({ type: SIGN_UP, payload: newUserData }));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setCreateUserData((state) => ({ ...state, [inputName]: inputValue }));
  };
  //-------------------------------------------^key--------^value

  return (
    <>
      <h1>Registration Page</h1>
      <form id="signup-form" onSubmit={handleSignUp}>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={createUserData.username}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <label htmlFor="displayName">Display Name</label>
                <input 
                    type="text"
                    name="displayName"
                    value={createUserData.displayName}
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                 <input
                    type="password"
                    name="password"
                    value={createUserData.password}
                    required
                    onChange={handleChange}
                />
                {/* <Link to='/feed'> */}
                <button type="submit">Sign Up</button>
                {/* </Link> */}
            </form>
>>>>>>> Stashed changes
    </>
  );
};

export default SignUp;
