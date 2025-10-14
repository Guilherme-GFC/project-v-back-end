import { Router } from "express";
import { EnsureDataIsValidMiddleware } from "../middlewares";
import { loginCreateSchema } from "../schemas/login.schema";
import { LoginCreateController } from "../controllers/login";

const loginRoutes = Router();

loginRoutes.post(
	"",
	EnsureDataIsValidMiddleware(loginCreateSchema),
	LoginCreateController
);

export default loginRoutes;
