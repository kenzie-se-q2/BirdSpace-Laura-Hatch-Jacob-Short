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
      <h1>This will be the user</h1>
<<<<<<< Updated upstream
      <br></br>
=======
      <h1>{user.username}</h1>
      <br></br>

      <br></br>

>>>>>>> Stashed changes
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

//  <h1>List of Hobbies</h1>
// <h2>Jacob</h2>
// <ul>
//     <li>Football</li>
//     <li>Gaming</li>
//     <li>Coding</li>
//     <li>Outside</li>
//     <li>Learning</li>
// </ul>
