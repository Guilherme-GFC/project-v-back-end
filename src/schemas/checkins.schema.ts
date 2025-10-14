import * as z from "zod";

const checkInReturnSchema = z.object({
	id: z.string(),
	startHour: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
	endHour: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
	description: z.string(),
	location: z.string(),
	createdAt: z.string(),
});

const checkInCreateSchema = checkInReturnSchema.omit({
	id: true,
	createdAt: true,
});

const checkInListReturnSchema = checkInReturnSchema.array();

export { checkInReturnSchema, checkInCreateSchema, checkInListReturnSchema };
