import React from "react";
import { useForm } from "react-hook-form";

export const FormSignIn = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    alert("Вы успешно зашли");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter your username or email address
          <input
            {...register("username", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              maxLength: {
                value: 25,
                message: "Максимум 25 символов",
              },
            })}
            placeholder="Username or email address"
          />
        </label>
        <div style={{ height: 40 }}>{errors?.username && <p>{errors?.username?.message || "Error!"}</p>}</div>

        <label>
          Enter your Password
          <input
            {...register("password", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
            type="password"
            placeholder="Password"
          />
        </label>
        <div style={{ height: 40 }}>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}</div>
        <div>Forgot Password</div>
        <input type="submit" disabled={!isValid} value="Sign in" />
      </form>
    </div>
  );
};
