"use server";

import { db } from "@/libs/db";
import { findUserByEmail } from "@/data/user";
import { findVerificationTokenByToken } from "@/data/verification-token";

export async function verification(token) {
  const existingToken = await findVerificationTokenByToken(token);

  if (!existingToken) return { error: "Token not exist!" };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: "Token expired!" };

  const existingUser = await findUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email not found!" };

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Email verified!" };
}
