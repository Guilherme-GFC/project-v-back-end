import * as z from "zod";

const notificationReturnSchema = z.object({
	id: z.string(),
	userId: z.string(),
	title: z.string(),
	message: z.string(),
	status: z.string(),
	priority: z.string(),
	createdAt: z.string(),
	readAt: z.string(),
});

const notificationCreateSchema = notificationReturnSchema.omit({
	id: true,
	createdAt: true,
	readAt: true,
});

export { notificationCreateSchema, notificationReturnSchema };
