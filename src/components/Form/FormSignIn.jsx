import React from "react";

import { useForm } from "react-hook-form";
import style from "./FormSign.module.css";

export const FormSignIn = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(`${data.username}, welcome!`);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={style.inputLabel}>
          Enter your username or email address
          <input
            className={style.inputText}
            {...register("username", {
              required: "Must be filled",
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
              maxLength: {
                value: 25,
                message: "No more than 25 characters",
              },
            })}
            placeholder="Username or email address"
          />
        </label>

        <div className={style.inputError}>
          {errors?.username && <span className={style.inputErrorText}>{errors?.username?.message || "Error!"}</span>}
        </div>

        <label className={style.inputLabel}>
          Enter your Password
          <input
            className={style.inputText}
            {...register("password", {
              required: "Must be filled",
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "No more than 20 characters",
              },
            })}
            type="password"
            placeholder="Password"
          />
        </label>
        <div className={style.errorContainer}>
          <div className={style.inputError}>
            {errors?.password && <span className={style.inputErrorText}>{errors?.password?.message || "Error!"}</span>}
          </div>
          <span className={style.forgot}>Forgot Password</span>
        </div>
        <input className={style.signButton} type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
