import React, { useState } from "react";
import { signUpRequest, loginRequest } from "../fetchRequests";
import { LOGIN, SIGN_UP, useStore } from "../store/store";



const SignUp = (props) => {
  const dispatch = useStore((state) => state.dispatch);
  const [fullySignedUp, setFullySignedUp] = useState(false);
  const [createUserData, setCreateUserData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpRequest(
      createUserData.username,
      createUserData.displayName,
      createUserData.password
    ).then((newUserData) => {
      dispatch({ type: SIGN_UP, payload: newUserData })
      loginRequest(createUserData.username, createUserData.password)
        .then((userData) => {
          dispatch({ type: LOGIN, payload: userData })
          setFullySignedUp(true);
        });
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setCreateUserData((state) => ({ ...state, [inputName]: inputValue }));
  };
  //-------------------------------------------^key--------^value

  return (
    <>
    <div container>
      <h7>Sign up here</h7>
      {fullySignedUp && <div>You are now signed up and logged in!</div>}
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
          {!fullySignedUp && <button type="submit">Sign Up</button>}
      </form>
      </div> 
    </>
  );
};

export default SignUp;

// <label htmlFor="username">Username</label>
// <input
//     type="text"
//     name="username"
//     value={createUserData.username}
//     autoFocus
//     required
//     onChange={handleChange}
// />
// <label htmlFor="displayName">Display Name</label>
// <input 
//     type="text"
//     name="displayName"
//     value={createUserData.displayName}
//     required
//     onChange={handleChange}
// />
// <label htmlFor="password">Password</label>
//  <input
//     type="password"
//     name="password"
//     value={createUserData.password}
//     required
//     onChange={handleChange}
// />
// <button type="submit">Sign Up</button>
// </form>
