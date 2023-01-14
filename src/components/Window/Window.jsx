import React from "react";
import { Header } from "../Header/Header";

import style from "./Window.module.css";

export const Window = () => {
  return (
    <div className={style.window}>
      <Header />
    </div>
  );
};
