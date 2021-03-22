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
      <h1>{user.username}</h1>
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
        <label htmlFor="About">About</label>
        <input
          type="about"
          name="about"
          value={formData.about}
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
