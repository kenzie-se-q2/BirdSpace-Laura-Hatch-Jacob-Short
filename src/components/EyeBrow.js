import React from "react";
import { Link } from "react-router-dom";

export const EyeBrow = (props) => {
  return (
    <div class="container-fluid">
      <div className="eye-brow">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb background color:blue">
              <li class="breadcrumb-item">
                <a href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">
                  <Link to="/registration">Sign Up</Link>
                </a>
              </li>
			  <li class="breadcrumb-item active" aria-current="page">
                <Link to="/settings">Settings</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link to="/profile">Profile</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link to="/feed">Feed</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link to="">Sign Out</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
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

{
  /* <nav className='nav'>
            {/* {<Link to='/'>Home</Link>} */
}
{
  /* <Link to='/registration'>Sign Up</Link>
            <Link to='/settings'>Settings</Link>
            <Link to=''>Sign Out</Link>
            <Link to='/profile'>Profile</Link> */
}
{
  /* can do a ternary to conditionally render if logged in */
}
{
  /* </nav> */
}

{
  /* <nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active" aria-current="page">
							<Link to="/">Home</Link>
						</li>
					</ol>
				</nav>

				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="#">
								<Link to="/">Home</Link>
							</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							<Link to="/registration">Sign Up</Link>
						</li>
					</ol>
				</nav> */
}
