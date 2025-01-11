import { z } from "zod";

// creating a schema for strings
export const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
})

export type RegisterSchema = z.infer<typeof registerSchema>;
// helps to translate the validation schema you create into a corresponding typescript type