import React from 'react';
import { Link } from 'react-router-dom';


const Settings = (props) => {
    return (
        <div className='settings'>
            <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
            <ul>
              <Link to='/searchUser'>
                <li>Search A User</li>
              </Link>
                <li>Edit Profile</li>
                <li>FAQ's</li>
            </ul>
        </div>
    )
}

export default Settings;