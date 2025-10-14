import { loginCreateSchema } from "../schemas/login.schema";
import * as z from "zod";

type ILoginCreate = z.infer<typeof loginCreateSchema>;

export { ILoginCreate };
