import {
	userCreateSchema,
	userReturnSchema,
	userSchema,
} from "../schemas/users.schema";
import { TCheckInReturn } from "./checkIns.interface";
import * as z from "zod";

type TUser = z.infer<typeof userSchema>;
type TUserCreate = z.infer<typeof userCreateSchema>;
type TUserReturn = z.infer<typeof userReturnSchema>;

interface IUserData {
	id: string;
	email: string;
	firstName: string;
	lasttName: string;
	password: string;
	checkIns: TCheckInReturn[];
}

export { IUserData, TUserCreate, TUserReturn, TUser };
