import React from "react";

import style from "./ButtonContainer.module.css";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/apple.png";
export const ButtonContainer = () => {
  return (
    <div className={style.container}>
      <button className={style.buttonWide} onClick={() => window.open("https://google.com")}>
        <img className={style.icon} src={google} alt="google" /> Sign in with Google
      </button>
      <button className={style.button} onClick={() => window.open("https://facebook.com")}>
        <img className={style.iconSmall} src={facebook} alt="facebook" />
      </button>
      <button className={style.button} onClick={() => window.open("https://apple.com")}>
        <img className={style.iconSmall} src={apple} alt="apple" />
      </button>
    </div>
  );
};
