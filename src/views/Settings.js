import React from 'react';
import { Link } from 'react-router-dom';


const Settings = (props) => {
    return (
        <div className='settings'>
            
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