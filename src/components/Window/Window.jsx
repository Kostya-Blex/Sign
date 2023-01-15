import React from "react";
import { Header } from "../Header/Header";

import style from "./Window.module.css";

export const Window = ({ type }) => {
  return (
    <div className={style.window}>
      <Header type={type} />
    </div>
  );
};
