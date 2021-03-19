const baseURL = "https://socialapp-api.herokuapp.com/";
const secondUrl = "http://kwitter-api-b.herokuapp.com/docs/";

const eBirdURL = "https://api.ebird.org/v2/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const messagesRequest = () => {
  return fetch(baseURL + "messages", {}).then((res) => res.json());
};

export const patchUserRequest = (
  password,
  about,
  displayName,
  username,
  token
) => {
  return fetch(baseURL + "users/" + username, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      password,
      about,
      displayName,
    }),
  });
};

export const signUpRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};

export const birdPhotoRequest = () => {
  return (
    fetch(eBirdURL + "obs/KZ/recent"),
    {
      method: "GET",
      headers: { "X-eBirdApiToken": "38hl3jc5kjru" },
    }.then((res) => res.json())
  );
};

// can do specific county, region, or location

// The key should be included in a request header called "x-ebirdapitoken".
// Alternatively, it can be included as a request parameter named 'key'.

//  eBird API key: 38hl3jc5kjru

// location code: US-NY-053

// going to be using aurhtoirzation and token when making all future requests
// when the user is logged in .
