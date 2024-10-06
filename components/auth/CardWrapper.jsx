import { Lock } from "lucide-react";
import React from "react";
import Social from "./Social";
import BackButton from "./BackButton";

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) {
  return (
    <div className="card py-8 w-[400px] shadow-xl bg-base-300">
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h2 className="card-title">
          <Lock /> AUTH
        </h2>
        <p className="text-muted-foreground text-sm">{headerLabel}</p>
      </div>
      <div className="card-body">{children}</div>
      {showSocial && <Social />}
      {headerLabel !== "Something went wrong!" &&
      headerLabel !== "Confirm your verification" &&
      headerLabel !== "Reset password" &&
      headerLabel !== "Forgot your password?" ? (
        <div className="divider text-sm px-4">OR</div>
      ) : null}
      <BackButton href={backButtonHref} label={backButtonLabel} />
    </div>
  );
}
