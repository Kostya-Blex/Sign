import React from "react";

import { Window } from "../components/Window/Window";
import style from "./Page.module.css";

export const SignIn = () => {
  return (
    <div className={style.pageWindow}>
      <Window type="in" />
    </div>
  );
};
