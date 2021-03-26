import React from "react";
import { Link } from "react-router-dom";

export const EyeBrow = (props) => {
  return (
    <div className="container-fluid">
      <div className="eye-brow">
        {/* <div className="container"> */}
          <div className="laura-nav">
          <nav aria-label="breadcrumb">

            <ol className="breadcrumb m-0 background">
              <li className="breadcrumb-item">
                <a href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">
                  <Link to="/registration">Sign Up</Link>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/feed">Feed</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/messages">Messages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/userlist">User List</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
     </div>
    // </div>
  );
};

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
