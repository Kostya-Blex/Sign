import React, { createContext, useEffect, useState } from "react";

export const TokenContext = createContext({ isAuth: null, setIsAuth: null });

export const TokenProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    window.localStorage.getItem("token") ? setIsAuth(true) : setIsAuth(false);
  }, []);

  return <TokenContext.Provider value={{ isAuth, setIsAuth }}> {children}</TokenContext.Provider>;
};
