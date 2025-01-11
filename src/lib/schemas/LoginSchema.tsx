import { z } from "zod";

// creating a schema for strings
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>;
// helps to translate the validation schema you create into a corresponding typescript type