import { Router } from "express";
import {
	CreateUserController,
	ReturnUserController,
} from "../controllers/users";
import {
	EnsureDataIsValidMiddleware,
	EnsureEmailIsNotUsedMiddleware,
	EnsureAuthMiddleware,
} from "../middlewares";
import { userCreateSchema } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post(
	"",
	EnsureDataIsValidMiddleware(userCreateSchema),
	EnsureEmailIsNotUsedMiddleware,
	CreateUserController
);
usersRoutes.get("", EnsureAuthMiddleware, ReturnUserController);

export default usersRoutes;
