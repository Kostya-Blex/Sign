import React, { useContext } from "react";

import { ButtonContainer } from "../components/ButtonContainer/ButtonContainer";
import { FormSignIn } from "../components/Form/FormSignIn";
import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import { TokenContext } from "../context/context";

import style from "./Page.module.css";

export const SignIn = () => {
  const token = useContext(TokenContext);
  return (
    <div className={style.background}>
      <Logo />
      <div className={style.pageWindow}>
        <div className={style.window}>
          <Header type="in" />
          <ButtonContainer />
          <FormSignIn />
          <button
            style={{ height: "40px" }}
            onClick={() => {
              token.token.setItem("token", "123");
              token.setIsAuth(true);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
