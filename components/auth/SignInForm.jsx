"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { signIn } from "@/actions/sign-in";
import BackButton from "./BackButton";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      signIn(data).then((res) => {
        setError(res?.error);
        setSuccess(res?.success);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel={"Welcome Back"}
      backButtonLabel={"Don't have an account?"}
      backButtonHref={"/sign-up"}
      showSocial
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center w-full"
      >
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@mail.com"
            disabled={isPending}
            {...register("email")}
            className={`input input-bordered ${
              errors.email ? "input-error" : ""
            }`}
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            id="password"
            placeholder="********"
            disabled={isPending}
            type="password"
            {...register("password")}
            className={`input input-bordered ${
              errors.password ? "input-error" : ""
            }`}
          />
          <BackButton
            href="/forgot-password"
            label="Forgot password?"
            props={{ className: "" }}
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <FormSuccess message={success} />
        <FormError message={error || urlError} />
        <button
          type="submit"
          className="btn duration-200 btn-accent group plausible-event-name=Checkout"
          disabled={isPending}
        >
          Sign In
        </button>
      </form>
    </CardWrapper>
  );
}
