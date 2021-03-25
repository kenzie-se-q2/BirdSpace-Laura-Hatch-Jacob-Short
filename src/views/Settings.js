import React from 'react';
import { Link } from 'react-router-dom';
// import Profile from './Profile'


const Settings = (props) => {
    return (
      <div container-xl> 
        <div className='settings'>
        <p><a className="pe-none" tabindex="-1" aria-disabled="true">
        Search A User</a><Link to='/searchUser'></Link></p>
        <p><a className="pe-none" tabindex="-1" aria-disabled="true">
        Edit Profile</a><Link to='/profile'></Link></p>
                <li>FAQ's</li>
      </div>
      </div>
    )
}

export default Settings;