import React from 'react';
// import { Eyebrow } from '';
import SignUp from '../components/SignUp';


export const Registration = (props) => {
    return (
        <div className='registration'>
            <>
            {/* <Eyebrow/> */}
            <h1>Registration</h1>
                {/* will have our logo somehwere on this page  */}
            <h2>Start off by confirming your age!</h2>
            <SignUp/>
            </>
        </div>
    )
}

export default Registration;

// This component will be a the Route from clicking the Sign up button 
// on the Home view.

// The following component elements display correctly:
// a. Eyebrow
// b. Title
// c. Sub- title
// d. CTA(call to action) - registration of user
// e. Image
// Each icon block or logo block contains following elements:
// a. icon
// b. Sub-title
// c. Body text
// On click of the CTA, user is navigated to specific page


// need to look into icons.


// the button will go to <Feed/>
