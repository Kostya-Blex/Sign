import React from "react";

import { HeaderRedirect } from "./HeaderRedirect/HeaderRedirect";

import style from "./Header.module.css";

export const Header = ({ type }) => {
  const authRoute = type === "up" ? "in" : "up";
  return (
    <div className={style.head}>
      <span className={style.welcome}>
        Welcome to <span className={style.welcomeGreen}>LOREM</span>
        <p className={style.title}>Sign {type === "in" ? "in" : "up"}</p>
      </span>
      <HeaderRedirect title={type === "in" ? "Have an Account ?" : "No Account ?"} link={`/sign${authRoute}`} subtitle={`Sign ${authRoute}`} />
    </div>
  );
};
