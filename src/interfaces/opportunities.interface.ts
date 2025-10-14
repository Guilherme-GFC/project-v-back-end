import * as z from "zod";
import {
	opportunitieReturnSchema,
	opportunitieCreateSchema,
} from "../schemas/opportunities.schema";

type TOpportunitieCreate = z.infer<typeof opportunitieCreateSchema>;
type TOpportunitieReturn = z.infer<typeof opportunitieReturnSchema>;

interface IOpportunitie {
	id: string;
	title: string;
	description: string;
	expectations: string[];
	contact: string;
	workplace: string;
	endDate: string;
	isActive: boolean;
}

export { IOpportunitie, TOpportunitieCreate, TOpportunitieReturn };
