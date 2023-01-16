import React from "react";

import { ButtonContainer } from "../components/ButtonContainer/ButtonContainer";
import { FormSignIn } from "../components/Form/FormSignIn";
import { Header } from "../components/Header/Header";
import style from "./Page.module.css";

export const SignIn = () => {
  return (
    <div className={style.pageWindow}>
      <div className={style.window}>
        <Header type="in" />
        <ButtonContainer />
        <FormSignIn />
      </div>
    </div>
  );
};
