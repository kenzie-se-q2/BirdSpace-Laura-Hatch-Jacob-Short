import React from 'react';
import { Link } from 'react-router-dom';


const Settings = (props) => {
    return (
      <div>
            <ul>
              <Link to='/searchUser'>
                <li>Search A User</li>
              </Link>
              <Link to ='/editUser'>
                <li>Edit Profile</li>
                </Link>
                <Link to='/FAQ'>
                <li>FAQ's</li>
                </Link>
            </ul>
        </div>
    )
}

export default Settings;

{/* <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
  </nav> */}