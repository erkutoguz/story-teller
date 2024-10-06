"use client";
import React, { useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/schemas";
import FormSuccess from "../FormSuccess";
import FormError from "../FormError";
import { forgotPassword } from "@/actions/forgot-password";

export default function ForgotPasswordForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      forgotPassword(data).then((res) => {
        setError(res?.error);
        setSuccess(res?.success);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonHref="/sign-in"
      backButtonLabel="Back to sign in"
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

        <FormSuccess message={success} />
        <FormError message={error} />
        <button
          type="submit"
          className="btn duration-200 bg-[hsl(43,100%,55%)] hover:bg-[hsl(43,100%,60%)] text-neutral group plausible-event-name=Checkout"
          disabled={isPending}
        >
          Send reset email
        </button>
      </form>
    </CardWrapper>
  );
}
