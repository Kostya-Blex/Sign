import React from "react";

import style from "./FormInput.module.css";

export const FormInput = ({ label, error, register, ...inputProps }) => {
  return (
    <label className={style.inputLabel} style={inputProps.style}>
      {label}
      <input className={style.inputText} {...register} {...inputProps} style={{ borderColor: error && "red" }} />
      <div className={style.inputError}>{error && <span className={style.inputErrorText}>{error.message || "Error!"}</span>}</div>
    </label>
  );
};
