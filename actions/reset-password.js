"use server";

import { db } from "@/libs/db";
import { findPasswordResetTokenByToken } from "@/data/password-reset-token";
import { findUserByEmail } from "@/data/user";
import { ResetPasswordSchema } from "@/schemas";
import bcryptjs from "bcryptjs";

export async function resetPassword(data, token) {
  if (!token) return { error: "Missing token!" };

  const validatedFields = ResetPasswordSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid password!" };

  const { password } = validatedFields.data;

  const existingToken = await findPasswordResetTokenByToken(token);

  if (!existingToken) return { error: "Invalid token!" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token expired!" };

  const existingUser = await findUserByEmail(existingToken.email);
  if (!existingToken) return { error: "Email not found!" };

  const salt = await bcryptjs.genSalt(13);
  const hashedPassword = await bcryptjs.hash(password, salt);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({ where: { id: existingToken.id } });

  return { success: "Password updated!" };
}
