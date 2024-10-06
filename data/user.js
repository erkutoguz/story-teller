import { db } from "@/libs/db";

export async function findUserByEmail(email) {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
}

export async function findUserById(id) {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
}
