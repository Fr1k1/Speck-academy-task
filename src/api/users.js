import apiOrigin from "./api";

export const registerUser = (user) => {
  return fetch(`${apiOrigin}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};

export const loginUser = (user) => {
  return fetch(`${apiOrigin}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};

export const getUsers = (jwt) => {
  return fetch(`${apiOrigin}/api/users?size=138`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    }, //ak nist ne pise je get
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
};
