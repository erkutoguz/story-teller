import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { SignInSchema } from "@/schemas";
import { findUserByEmail } from "@/data/user";
import bcryptjs from "bcryptjs";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        const validatedFields = SignInSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await findUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
};
