import { findVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuid } from "uuid";
import { db } from "./db";
import { findPasswordResetTokenByEmail } from "@/data/password-reset-token";

export async function generateVerificationToken(email) {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await findVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
}

export async function generatePasswordResetToken(email) {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await findPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
  return passwordResetToken;
}
