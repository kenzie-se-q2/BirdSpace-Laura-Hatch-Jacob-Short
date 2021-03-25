// import React, { useState } from "react";
// import { patchUserRequest } from "../fetchRequests";
// import { useStore } from "../store/store";

// export default function EditUser() {
//   const user = useStore((state) => state.user);
//   const [formData, setFormData] = useState({
//     displayName: "",
//     password: "",
//     about: "",
//   });

//   const handleChange = (e) => {
//     const inputName = e.target.name;
//     const inputValue = e.target.value;
//     setFormData((formData) => ({ ...formData, [inputName]: inputValue }));
//   };

//   const handleUpdated = (e) => {
//     e.preventdefault();
//     patchUserRequest(
//       formData.displayName,
//       formData.about,
//       formData.password,
//       user.username,
//       user.token
//     );
//   };

//   return (
//     <div className="edit-user">
//       <h1>Wanting to edit your profile ?</h1>
//       <h2>You came to the right place!</h2>
//       <form id="login-form" onSubmit={handleUpdated}>
//         <label htmlFor="displayName">DisplayName</label>&#160;
//         <input
//           type="text"
//           name="displayName"
//           value={formData.displayName}
//           autoFocus
//           required
//           onChange={handleChange}
//         />
//         &#160; &#160;
//         <label htmlFor="password">Password</label>&#160;
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           required
//           onChange={handleChange}
//         />
//         <br></br>
//         <br></br>
//         <label htmlFor="About">About</label>&#160;
//         <input
//           type="about"
//           name="about"
//           size="60"
//           value={formData.about}
//           required
//           onChange={handleChange}
//         />
//         <br></br>
//         <br></br>
//         <div id="center"></div>
//         <button type="submit">Update User</button>
//       </form>
//     </div>
//   );
// };
