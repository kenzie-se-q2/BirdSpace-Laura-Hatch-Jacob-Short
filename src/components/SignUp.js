import React from 'react';
import { signUpRequest } from '../fetchRequests';
import { SIGN_UP } from '../store/store';

 const SignUp = (props) => {
    // will need to store sign in information in state.

    // const handleSignUp = (e) => {
    //     signUpRequest() => 
    //     dispatchEvent({ type: SIGN_UP, payload: })
    // }

    // const handleChange = (e) => {

    // }
    return (
        <>
        <h1>Registration Page</h1>
            {/* <form id="signup-form" onSubmit={handleSignUp}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    // value={}
                    autoFocus
                    required
                    // onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    // value={}
                    required
                    // onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form> */}
        </>
    )
}

export default SignUp;

// will hold the data for user in local state.

