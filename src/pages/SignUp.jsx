import React from "react";
import { FormSignUp } from "../components/Form/FormSignUp";

import { Header } from "../components/Header/Header";
import style from "./Page.module.css";
export const SignUp = () => {
  return (
    <div className={style.pageWindow}>
      <div className={style.window}>
        <Header type="up" />
        <FormSignUp />
      </div>
    </div>
  );
};
