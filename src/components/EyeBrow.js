import React from 'react';
import { Link } from 'react-router-dom';

export const EyeBrow = (props) => {
    return (
        <div className='eye-brow'>
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/registration'>Sign Up</Link>
            <Link to='/settings'>Settings</Link>
            <Link to=''>Sign Out</Link>
            <Link to='/profile'>Profile</Link>
            {/* can do a ternary to conditionally render if logged in */}
        </nav>
        </div>
    )
}

// cannot export this component as default


// Plan for today :
// 1. Get my buttons working 
// 2. Button will Link and route to Registration page.
// 3. Registration page will have EyeBrow,Title,Subtitle, our Logo.
// 4. CTA - actually registering user
// 5. Icons
// 6. Sidebar of trending(top tweets/messages.images)
// 7. CTA - after sign in, will route to feed page. 

// Will have a regitration page set up with functionality and routing to feed.

// import React from "react";
// import { Link } from "react-router-dom";

// function Navigation(props) {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/products">All Products</Link>
//     </nav>
//   );
// }

// export default Navigation;


