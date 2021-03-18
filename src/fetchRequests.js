const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

// export const messagesRequest = () => {
//   return fetch(baseURL + "messages?limit=10", {
//     method: "GET",
//     headers: { "Content-Type": "application/json", 
        // Authorization: "Bearer " + token },

//   })
// }

// export const createUserRequest = () => {
//   return fetch(baseURL + "users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },

//   })
// }

// export const signUpRequest = () => {
//   return fetch(baseURL + " ", {
//     headers: { },
//   })
// }


// export const birdPhotoRequest = () => {

// }


// going to be using aurhtoirzation and token when making all future requests 
// when the user is logged in .