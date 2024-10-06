"use client";
import React, { useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import FormSuccess from "../FormSuccess";
import FormError from "../FormError";
import { ResetPasswordSchema } from "@/schemas";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/actions/reset-password";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      resetPassword(data, token).then((res) => {
        setError(res?.error);
        setSuccess(res?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Enter a new password"
      backButtonHref="/sign-in"
      backButtonLabel="Back to sign in"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center w-full"
      >
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">New Password:</span>
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
          className="btn duration-200 bg-[hsl(43,100%,55%)] hover:bg-[hsl(43,100%,60%)] text-neutral group plausible-event-name=Checkout"
          disabled={isPending}
        >
          Reset password
        </button>
      </form>
    </CardWrapper>
  );
}
