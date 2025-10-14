import * as z from "zod";
import { checkInReturnSchema } from "./checkins.schema";

const userSchema = z.object({
	id: z.string(),
	email: z.email("Email is required").nonempty("Email must not be empty"),
	firstName: z
		.string("First name is required")
		.nonempty("First name must not be empty"),
	lastName: z
		.string("Last name is required")
		.nonempty("Last name must not be empty"),
	checkIns: z.array(checkInReturnSchema),
	password: z
		.string("password is required")
		.nonempty("Password must not be empty"),
	isAdmin: z.boolean().default(false),
});

const userReturnSchema = userSchema.omit({
	password: true,
});

const userCreateSchema = userSchema.omit({
	id: true,
	checkIns: true,
});

export { userReturnSchema, userCreateSchema, userSchema };
