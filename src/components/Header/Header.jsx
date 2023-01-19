import React from "react";

import { HeaderRedirect } from "./HeaderRedirect/HeaderRedirect";

import style from "./Header.module.css";

export const Header = ({ type }) => {
  return (
    <div className={style.head}>
      <span className={style.welcome}>
        Welcome to <span className={style.welcomeGreen}>LOREM</span>
        <p className={style.title}>Sign {type === "in" ? "in" : "up"}</p>
      </span>
      {type === "in" ? (
        <HeaderRedirect title={"No Account ?"} link={"/signup"} subtitle={"Sign up"} />
      ) : (
        <HeaderRedirect title={"Have an Account ?"} link={"/signin"} subtitle={"Sign in"} />
      )}
    </div>
  );
};
