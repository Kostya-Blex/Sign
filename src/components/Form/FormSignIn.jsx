import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormInput } from "./FormInput/FormInput";
import style from "./FormSign.module.css";
import { TokenContext } from "../../context/context";
import { AuthService } from "../../API";

export const FormSignIn = () => {
  const authApi = AuthService.getInstance();
  console.log(authApi);
  const token = useContext(TokenContext);

  const schema = yup
    .object({
      username: yup.string().required("This field is required to be filled").min(6, "At least 6 characters").max(25, "No more than 25 characters"),
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
    authApi.login(data.username, data.password).then(
      () => {
        token.token.setItem("token", "123");
        token.setIsAuth(true);
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

        <FormInput
          label="Enter your Password"
          error={errors?.password}
          register={{
            ...register("password"),
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
