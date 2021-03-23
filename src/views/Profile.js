import React, { useState } from "react";
import { useStore } from "../store/store";
import Menu from "../components/Menu";
import { patchUserRequest } from "../fetchRequests";

export default function Profile() {
  const user = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    displayName: "",
    password: "",
    about: "",
  });

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
      user.token
    );
  };
  return (
    <>
      <Menu />
<<<<<<< Updated upstream
      <h1>This will be the user</h1>
      <br></br>
      <h1>{user.username}</h1>
      <br></br>

      <br></br>

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
      <h1>Welcome {user.username}!</h1>
      {/* <img {user.picturelocation} /> */}
      <h2>{user.displayName}</h2>
      <h2>{user.about}</h2>
      <br></br>
      <br></br>

>>>>>>> Stashed changes
>>>>>>> 52ce071260c01454d39cf8a6a8a444326dee1dcd
      <form id="login-form" onSubmit={handleUpdated}>
        <label htmlFor="displayName">DisplayName</label>&#160;
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          autoFocus
          required
          onChange={handleChange}
        />
        &#160; &#160;
        <label htmlFor="password">Password</label>&#160;
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="About">About</label>&#160;
        <input
          type="about"
          name="about"
          size="60"
          value={formData.about}
          required
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <div id="center"></div>
        <button type="submit">Update User</button>
      </form>
    </>
  );
}

