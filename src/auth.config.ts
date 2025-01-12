import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from './app/actions/authActions';
import { compare } from 'bcryptjs';
import { LoginSchemaType, LoginSchema } from "./lib/schemas/LoginSchema";

export default {
    providers: [Credentials({
        name: 'credentials', // this is the name of the of provider
        async authorize(creds) {
            const validated =  LoginSchema.safeParse(creds); // this is the schema for the login form data

            if (validated.success) {
                const { email, password } = validated.data;

                const user = await getUserByEmail(email);

                if (!user || !(await compare(password, user.passwordHash))) return null;

                return user;
            }

            return null;
        }
    })],
} satisfies NextAuthConfig 