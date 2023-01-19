import React from "react";

import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput/FormInput";
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
        <FormInput
          label="Enter your username or email address"
          placeholder="Username or email address"
          error={errors?.username}
          register={{
            ...register("username", {
              required: "Must be filled",
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
              maxLength: {
                value: 25,
                message: "No more than 25 characters",
              },
            }),
          }}
        />

        <FormInput
          label="Enter your Password"
          error={errors?.password}
          register={{
            ...register("password", {
              required: "Must be filled",
              minLength: {
                value: 6,
                message: "At least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "No more than 20 characters",
              },
            }),
          }}
          placeholder="Password"
          type="password"
        />
        <span className={style.forgot}>Forgot Password</span>
        <input className={style.signButton} type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
