import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { TokenContext } from "../../context/TokenContext";
import { Profile } from "../../pages/Profile";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";

export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    window.localStorage.getItem("token") ? setIsAuth(true) : setIsAuth(false);
  }, []);

  return (
    <TokenContext.Provider value={{ setIsAuth }}>
      <BrowserRouter>
        {!isAuth ? (
          <Routes>
            <Route element={<SignIn />} path={"/signin"} exact />
            <Route element={<SignUp />} path={"/signup"} exact />
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route element={<Profile />} path={"/profile"} exact />
            <Route path="*" element={<Navigate to="/profile" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </TokenContext.Provider>
  );
};
