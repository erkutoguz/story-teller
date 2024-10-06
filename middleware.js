import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_SIGN_IN_REDIRECT,
  publicRoutes,
} from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_SIGN_IN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (isLoggedIn && nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/sign-in", nextUrl));
  }

  return null;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
