import * as z from "zod";
import {
	checkInCreateSchema,
	checkInReturnSchema,
} from "../schemas/checkins.schema";

type TCheckInCreate = z.infer<typeof checkInCreateSchema>;
type TCheckInReturn = z.infer<typeof checkInReturnSchema>;

export { TCheckInCreate, TCheckInReturn };
