import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Profile } from "../../pages/Profile";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
import { useTokenContext } from "../../hooks/useTokenContext";

export const AppRouter = () => {
  const { isAuth } = useTokenContext();

  return (
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
  );
};
