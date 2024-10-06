"use server";

import { SignInSchema } from "@/schemas";
import { signIn as signInAuth } from "@/auth";
import { DEFAULT_SIGN_IN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/libs/tokens";
import { findUserByEmail } from "@/data/user";

export async function signIn(data) {
  const validatedFields = SignInSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { email, password } = validatedFields.data;
  const existingUser = await findUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    return { success: "Confirmation email sent!" };
  }

  try {
    await signInAuth("credentials", {
      email,
      password,
      redirectTo: DEFAULT_SIGN_IN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }

  return { success: "Signed In!" };
}
