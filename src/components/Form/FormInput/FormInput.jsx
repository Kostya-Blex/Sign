import React from "react";

import style from "../FormSign.module.css";

export const FormInput = ({ label, error, register, ...inputProps }) => {
  console.log(inputProps);
  return (
    <label className={style.inputLabel}>
      {label}
      <input className={style.inputText} {...register} {...inputProps} />
      <div className={style.inputError}>{error && <span className={style.inputErrorText}>{error.message || "Error!"}</span>}</div>
    </label>
  );
};
