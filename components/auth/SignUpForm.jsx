"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { signUp } from "@/actions/sign-up";

export default function SignUpForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      signUp(data).then((res) => {
        setError(res?.error);
        setSuccess(res?.success);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel={"Create an Account"}
      backButtonLabel={"Already have an account?"}
      backButtonHref={"/sign-in"}
      showSocial
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center w-full"
      >
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tony Soprano"
            disabled={isPending}
            {...register("name")}
            className={`input input-bordered ${
              errors.name ? "input-error" : ""
            }`}
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>

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
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <button
          type="submit"
          className="btn duration-200 btn-accent group plausible-event-name=Checkout"
          disabled={isPending}
        >
          Sign Up
        </button>
      </form>
    </CardWrapper>
  );
}
