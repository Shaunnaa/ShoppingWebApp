import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("awesomeLeadsToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
// /login_register/api/token
      const response = await fetch("/login_register/api/users/me", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("awesomeLeadsToken", token);
      if (token == null){
        // localStorage.setItem("awesomeLeadsToken", 1);
        localStorage.clear();
      }
    };
    fetchUser();
  }, [token]);
  
  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};