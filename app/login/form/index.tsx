"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "@/components/uikit";
import { AuthService } from "@/domains/auth";

import { LOGIN_VALIDATION_SCHEMA } from "./constants";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
  });

  const onSubmit = handleSubmit(async (data) => {
    await AuthService.login(data.email, data.password);
  }, console.error);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 m-auto p-4">
      <Input
        {...register("email")}
        type="email"
        label="Email"
        placeholder="Enter email..."
        error={errors.email?.message}
      />
      <Input
        {...register("password")}
        type="password"
        label="Password"
        placeholder="Enter password..."
        error={errors.password?.message}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
