import React, { useEffect, useState } from "react";
import { PATCH_USER, useStore } from "../store/store";
import Menu from "../components/Menu";
import { patchUserRequest } from "../fetchRequests";
import image from '../assets/Images/birdhome1.PNG'
import  {UserRequest, putPhotoRequest} from "../fetchRequests";

export default function Profile() {
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    displayName: "",
    password: "",
    about: "",
  });

  const [userData, setUserData] = useState({
    about: "",
    createdAt: "",
    displayName: "",
    googleId: null,
    pictureLocation: null,
    updatedAt: "",
    username: ""
  });

  const [photo, setPhoto] = useState(null)

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((formData) => ({ ...formData, [inputName]: inputValue }));
  };

  const handleUpdated = (e) => {
    e.preventdefault();
    patchUserRequest(
      formData.displayName,
      formData.about,
      formData.password,
      user.username,
      user.token,
    ).then((formData) => ({ type: PATCH_USER, PAYLOAD: formData})); 
  };

  

useEffect(() => {
  console.log(user)
  UserRequest(user.username, user.token)
    .then((data) => {
    console.log("this is userdata", data)
      setUserData(data.user)
    })
},[])

function handleSubmitPhoto(e) {
  putPhotoRequest(user.token, user.username, photo)
  .then((res) => setPhoto(res));
}


  return (

    <>
    <div className='container-xxl'>
      <Menu />
      <h1>Welcome {user.username}!</h1>
      <h2>Set Profile Picture:</h2>
      <input type="file" onChange={e => setPhoto(e.target.files[0])}/>
      <button onClick={handleSubmitPhoto}>Update My Photo</button>
      <h2>{user.displayName}</h2>
      <h2>{user.about}</h2>

      <form id="login-form" onSubmit={handleUpdated}>
        <label htmlFor="displayName">DisplayName</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          autoFocus
          required
          onChange={handleChange}
        />
       
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <label htmlFor="About">About</label>
        <input
          value={formData.about}
          required
          onChange={handleChange}
        />
        <button type="submit">Update User</button>
        <img src={image} className="img-thumbnail"  alt="Logo for birdspace"/>
      </form>
      </div>
    </>
  );
}

