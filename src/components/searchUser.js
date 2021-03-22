import React from 'react';
// import { searchUserRequest } from '../fetchRequests/';



export const searchUser = (props) => {
    return (
        <div className='search-user'>
            <h1>Looking for someone .. ? </h1>
            <h2>You came to the right place!</h2>
            <h2>Get started by typing in the username of the certain bird you are looking for.
            </h2>
        </div>
    )
} 

// this will import a fetch request for GET ing a user/ {username}
// required = "string"

	
// Response body
// Download
// {
//   "user": {
//     "pictureLocation": null,
//     "username": "jacobshort",
//     "displayName": "jacobs@kenzie",
//     "about": "",
//     "googleId": null,
//     "createdAt": "2021-03-16T19:22:48.582Z",
//     "updatedAt": "2021-03-16T19:22:48.582Z"
//   },
//   "statusCode": 200
// }