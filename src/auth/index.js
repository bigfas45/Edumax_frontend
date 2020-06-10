import { API } from "../config";

export const signup = user => {
  // console.log(firstname, lastname, email, password)
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("ncwf", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("ncwf");
    next();
    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => {
        console.log("signout", response);
      })
      .catch(err => console.log(err));
  }
};


export const isAuthenticated = () => {
  if(typeof window == 'undefined'){
    return false
  }
  if (localStorage.getItem('ncwf')) {
    return JSON.parse(localStorage.getItem("ncwf"))
  }else{
    return false;
  }
}


export const sendVerificationMail = (email) => {
  return fetch (`${API}/mail/signup/verification/${email}`, {
      method: "GET"
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
};


export const passwordReset = (email) => {
  return fetch (`${API}/mail/password/reset/${email}`, {
      method: "GET"
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
};


export const verified = (userId) => {
  return fetch (`${API}/mail/verification/${userId}`, {
      method: "GET"
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
};

export const updatePassword = (password, userID) => {
  // console.log(firstname, lastname, email, password)
  return fetch(`${API}/user/passwordreset/${userID}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(password)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};