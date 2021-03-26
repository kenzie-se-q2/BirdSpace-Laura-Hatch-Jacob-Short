import React, { useEffect, useState } from "react";
import image from '../assets/Images/birdhome1.PNG'
import  {manyUsersRequest} from "../fetchRequests";
import { PATCH_USER, useStore } from "../store/store";




export default function UserList() {
    const user = useStore((state) => state.user)
    console.log("user object", user)
    const [userData, setUserData] = useState([])      
                
    useEffect(() => {
        manyUsersRequest(user.token)
          .then((data) => {
            console.log("this is userdata", data)
            setUserData(data.users)
          })
    },[])

      return(
          <div className='container-xxl'>
              {console.log(userData)}
            {JSON.stringify("this is user",userData)}
          </div>
      )
}