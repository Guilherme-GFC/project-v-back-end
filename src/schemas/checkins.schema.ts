import * as z from "zod";

const checkInReturnSchema = z.object({
	id: z.string(),
	startTime: z.date(),
	endTime: z.date(),
	description: z.string(),
	location: z.string(),
	createdAt: z.date(),
});

const checkInCreateSchema = checkInReturnSchema
	.omit({
		id: true,
		createdAt: true,
	})
	.extend({
		startTime: z.iso.datetime(),
		endTime: z.iso.datetime(),
	});

const checkInListReturnSchema = checkInReturnSchema.array();

export { checkInReturnSchema, checkInCreateSchema, checkInListReturnSchema };
