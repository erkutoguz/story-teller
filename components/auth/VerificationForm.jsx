"use client";
import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { verification } from "@/actions/verification";
import FormSuccess from "../FormSuccess";
import FormError from "../FormError";

export default function VerificationForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }
    verification(token)
      .then((res) => {
        setSuccess(res?.success);
        setError(res?.error);
      })
      .catch((err) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirm your verification"
      backButtonHref="/sign-in"
      backButtonLabel="Back to sign in"
    >
      <div className="flex justify-center items-center gap-6">
        {!error && !success && <BeatLoader loading={true} />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
}
