import React from "react";

import { Header } from "../components/Header/Header";
import style from "./Page.module.css";
export const SignUp = () => {
  return (
    <div className={style.pageWindow}>
      <div className={style.window}>
        <Header type="up" />
      </div>
    </div>
  );
};
