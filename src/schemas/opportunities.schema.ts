import * as z from "zod";

const opportunitieReturnSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	expectations: z.array(z.string()),
	contact: z.string(),
	workplace: z.string(),
	endDate: z.string(),
	isActive: z.boolean(),
});

const opportunitieCreateSchema = opportunitieReturnSchema.omit({
	id: true,
});

const opportunitiesListReturnSchema = opportunitieReturnSchema.array();

export {
	opportunitieReturnSchema,
	opportunitieCreateSchema,
	opportunitiesListReturnSchema,
};
