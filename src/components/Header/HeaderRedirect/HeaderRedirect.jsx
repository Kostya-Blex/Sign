import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./HeaderRedirect.module.css";

export const HeaderRedirect = ({ title, link, subtitle }) => {
  const navigate = useNavigate();
  return (
    <span className={style.redirect}>
      {title}
      <p className={style.redirectLink} onClick={() => navigate(link)}>
        {subtitle}
      </p>
    </span>
  );
};
