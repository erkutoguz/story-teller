"use server";

import { sendPasswordResetEmail } from "@/libs/mail";
import { generatePasswordResetToken } from "@/libs/tokens";
import { findUserByEmail } from "@/data/user";
import { ForgotPasswordSchema } from "@/schemas";

export async function forgotPassword(data) {
  const validatedFields = ForgotPasswordSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid email!" };

  const { email } = validatedFields.data;

  const existingUser = await findUserByEmail(email);
  if (!existingUser) return { error: "Email not found!" };

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
}
