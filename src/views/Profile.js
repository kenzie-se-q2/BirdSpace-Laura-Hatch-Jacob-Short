import React, { useState, useEffect } from "react";
import { PATCH_USER, useStore } from "../store/store";
import Menu from "../components/Menu";
import { patchUserRequest } from "../fetchRequests";
import image from '../assets/Images/birdhome1.PNG'
import  {UserRequest, putPhotoRequest, deleteUser} from "../fetchRequests";

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
    console.log("user?", user);
    UserRequest(user.username, user.token)
      .then((data) => {
        setUserData(data.user)
      })
  },[])
  
  function handleSubmitPhoto(e) {
    putPhotoRequest(user.token, user.username, photo)
    .then((res) => setPhoto(res));
  }

  function handleDeleteAccountButtonClick(e) {
    deleteUser(user.username, user.token)
      .then((data) => {
        window.location = '/';
      })
  }

  return (

    <div className="profile">
    <div className='container-xxl'>
      <Menu />
      <h1>Welcome {user.username}!</h1>
      <form id="login-form" onSubmit={handleUpdated}>
        <div>
        <form>
  <div class="form-row">
    <div class="col-3">
         <input type="text" class="form-control" placeholder="User Name"
         name="displayName"
         value={formData.displayName}
         autoFocus
         required
         onChange={handleChange}/>
    </div>
    </div>
   

       <div>
       <div class="form-row">
    <div class="col-3">
         <input type="password" class="form-control" placeholder="Password"
         name="password"
        value={formData.password}
        required
        onChange={handleChange}
        />      
    </div>

    </div>
        <form>
      <div class="form-row">
      <div class="col-3">
           <input type="text" class="form-control" placeholder="Display Name"
          value={formData.about}
          name="about"
          required
          onChange={handleChange}
          />
    </div>
          </div>
      <h2>{user.displayName}</h2>
      <h2>{user.about}</h2>
        <button type="submit">Update User</button>
        <div>
        <button onClick={handleDeleteAccountButtonClick} type="button" class="btn btn-danger">DELETE ACCOUNT</button>
        </div>
       <img src={image} className="img-thumbnail"  alt="Logo for birdspace"/>
          </form>
          </div>
         </form>
          </div>
          </form>
       </div>
       </div>
  );
}


         