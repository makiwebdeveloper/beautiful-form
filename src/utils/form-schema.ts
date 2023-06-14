import { ZodType, z } from "zod";

export type FormDataType = {
  email: string;
  password: string;
};

export const formSchema: ZodType<FormDataType> = z.object({
  email: z.string().email("Enter email"),
  password: z.string().min(6, "Too short"),
});
