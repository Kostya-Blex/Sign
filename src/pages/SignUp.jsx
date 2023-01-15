import React from "react";

import { Window } from "../components/Window/Window";
import style from "./Page.module.css";
export const SignUp = () => {
  return (
    <div className={style.pageWindow}>
      <Window type="up" />
    </div>
  );
};
