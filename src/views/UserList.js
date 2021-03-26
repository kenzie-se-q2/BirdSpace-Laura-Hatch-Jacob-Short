import React, { useEffect, useState } from "react";
import image from '../assets/Images/birdhome1.PNG'
import  {manyUsersRequest} from "../fetchRequests";
import { PATCH_USER, useStore } from "../store/store";




export default function UserList() {
    const user = useStore((state) => state.user)
    const [userData, setUserData] = useState([])      
                
    useEffect(() => {
        manyUsersRequest(user.token)
          .then((data) => {
            setUserData(data.users)
          })
    },[])

 return(
         
    <div className='container-xxl'>
        <h1>List Friends who love Birds and Little About Them</h1>
        {userData.map((user) =>{
            return (
                <div
            style={{
              opacity: 1,
              marginTop: 16,
            }}
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-autohide="false"
            data-show="true"
          >
            <div class="toast-header">
              <strong class="mr-auto">{user.username}</strong>
            </div>
            <div class="toast-body">{user.about}</div>
          </div>
            )
        }
        
        )}
    </div>
   )
}

            