import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./Header.module.css";

export const Header = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div className={style.head}>
      <span className={style.welcome}>
        Welcome to <span className={style.welcomeGreen}>LOREM</span>
        <p className={style.title}>Sign {type === "in" ? "in" : "up"}</p>
      </span>
      {type === "in" ? (
        <span className={style.redirect}>
          No Account ?
          <p className={style.redirectLink} onClick={() => navigate("/signup")}>
            Sign up
          </p>
        </span>
      ) : (
        <span className={style.redirect}>
          Have an Account ?
          <p className={style.redirectLink} onClick={() => navigate("/signin")}>
            Sign in
          </p>
        </span>
      )}
    </div>
  );
};
