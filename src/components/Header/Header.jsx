import React from "react";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.head}>
      <span className={style.welcome}>
        Welcome to <span className={style.green}>LOREM</span>
      </span>
    </div>
  );
};
