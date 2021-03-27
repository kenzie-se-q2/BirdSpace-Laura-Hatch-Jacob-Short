import React, { useEffect, useState } from 'react';
import { GET_USER, useStore } from '../store/store';
import { UserRequest } from "../fetchRequests";
import image from '../assets/Images/birdhome1.PNG'

export default function User() {
    const user = useStore((state) => state.user)
    const dispatch = useStore((state) => state.dispatch)
    const [userData, setUserData] = useState("")

    useEffect(() => {
        UserRequest(user.username, user.token)
          .then((data) => {
            setUserData(data.user)
          })
      },[])

        const handleGetUser = (e) => {
            e.preventDefault()
            UserRequest(user.username)
            .then((userData) => {
                dispatch({ type: GET_USER, payload: userData})
                console.log(userData)
            })
        }

        const handleChange = (e) => {
            setUserData(e.target.value)
        }
    

        return (
        
          <div className="container - xxl">
            <form id="search user" onSubmit={handleGetUser}>
        <label htmlFor="">Search User</label>
        <input
          type="text"
          name="username"
          value={userData}
          autoFocus
          required 
          onChange={handleChange}/>
        <button type='submit'>SEARCH</button>
             <img src={image} className="img-thumbnail"  alt="Logo for birdspace"/>
        </form>
        </div>

    )
  } 