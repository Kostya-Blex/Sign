import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthService } from "../../API.js";
import { FormInput } from "./FormInput/FormInput";
import style from "./FormSign.module.css";

export const FormSignUp = () => {
  const authApi = AuthService.getInstance();
  console.log(authApi);

  const schema = yup
    .object({
      username: yup.string().required("This field is required to be filled").min(6, "At least 6 characters").max(25, "No more than 25 characters"),
      name: yup.string().required("This field is required to be filled").min(6, "At least 6 characters").max(25, "No more than 25 characters"),
      number: yup.string().required("This field is required to be filled").min(9, "At least 9 characters").max(15, "No more than 15 characters"),
      password: yup.string().required("This field is required to be filled").min(6, "At least 6 characters").max(20, "No more than 20 characters"),
    })
    .required();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    authApi.register(data.username, data.name, data.number, data.password).then(
      () => {
        alert("register was successfull");
      },
      (e) => {
        alert(e);
      }
    );
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Enter your username or email address"
          placeholder="Username or email address"
          error={errors?.username}
          register={{
            ...register("username"),
          }}
        />

        <div className={style.inputContainer}>
          <FormInput
            label="User name"
            placeholder="User name"
            style={{ width: "48%" }}
            error={errors?.name}
            register={{
              ...register("name"),
            }}
          />

          <FormInput
            label="Contact number"
            placeholder="Contact number"
            style={{ width: "48%" }}
            error={errors?.number}
            register={{
              ...register("number"),
            }}
          />
        </div>

        <FormInput
          label="Enter your Password"
          error={errors?.password}
          register={{
            ...register("password"),
          }}
          placeholder="Password"
          type="password"
        />
        <input className={style.signButton} type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
