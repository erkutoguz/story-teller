"use server";

import { findUserByEmail } from "@/data/user";
import { SignUpSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "@/libs/tokens";
import { db } from "@/libs/db";
import { sendVerificationEmail } from "@/libs/mail";

export async function signUp(data) {
  const validatedFields = SignUpSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { email, password, name } = validatedFields.data;

  const existingUser = await findUserByEmail(email);
  if (existingUser) return { error: "Email already taken!" };

  const salt = await bcryptjs.genSalt(13);
  const hashedPassword = await bcryptjs.hash(password, salt);

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO şu an email gönderiyor route ayarlar
  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
}
