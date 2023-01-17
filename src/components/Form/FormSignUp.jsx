import React from "react";

import { useForm } from "react-hook-form";
import style from "./FormSign.module.css";

export const FormSignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(`${data.name}, your register is successfull!`);
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

        <div className={style.inputContainer}>
          <div className={style.inputItemContainer}>
            <label className={style.inputLabel}>
              User name
              <input
                className={style.inputText}
                style={{ width: "80%" }}
                {...register("name", {
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
                placeholder="User name"
              />
            </label>

            <div className={style.inputError}>
              {errors?.name && <span className={style.inputErrorText}>{errors?.name?.message || "Error!"}</span>}
            </div>
          </div>
          <div className={style.inputItemContainer}>
            <label className={style.inputLabel}>
              Contact number
              <input
                className={style.inputText}
                {...register("number", {
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
                placeholder="Contact number"
              />
            </label>

            <div className={style.inputError}>
              {errors?.number && <span className={style.inputErrorText}>{errors?.number?.message || "Error!"}</span>}
            </div>
          </div>
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
          <div className={style.inputError} style={{ height: 40 }}>
            {errors?.password && <span className={style.inputErrorText}>{errors?.password?.message || "Error!"}</span>}
          </div>
        </div>
        <input className={style.signButton} type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
