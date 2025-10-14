import * as z from "zod";

const loginCreateSchema = z.object({
	email: z.email().nonempty(),
	password: z.string().nonempty(),
});

export { loginCreateSchema };
