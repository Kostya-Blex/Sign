import React from "react";

import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput/FormInput";
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
    alert(`${data.name}, your register was successfull!`);
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

        <div className={style.inputContainer}>
          <div className={style.inputItemContainer}>
            <FormInput
              label="User name"
              placeholder="User name"
              error={errors?.name}
              style={{ width: "80%" }}
              register={{
                ...register("name", {
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
          </div>
          <div className={style.inputItemContainer}>
            <FormInput
              label="Contact number"
              placeholder="Contact number"
              error={errors?.number}
              register={{
                ...register("number", {
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
          </div>
        </div>

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
        <input className={style.signButton} type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
