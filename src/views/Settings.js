import React from 'react';
import { Link } from 'react-router-dom';
// import Profile from './Profile'


const Settings = (props) => {
    return (
        <div className='settings container-xl'>
            <ul>
              <Link className="pe-none" tabindex="-1" aria-disabled="true" to='/searchUser'>
                <li>Search A User</li>
              </Link>
              <Link className="pe-none" tabindex="-1" aria-disabled="true" to ='/editUser'>
                <li>Edit Profile</li>
              </Link>
              <Link className="pe-none" tabindex="-1" aria-disabled="true" to='/FAQ'>
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