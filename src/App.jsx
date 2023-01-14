import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import styles from "./App.css";
import { Logo } from "./components/Logo/Logo";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="App" style={styles.App}>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route element={<SignIn />} path={"/signin"} exact={true} />
          <Route element={<SignUp />} path={"/signup"} exact={true} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
