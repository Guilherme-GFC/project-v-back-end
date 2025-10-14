import { Router } from "express";
import {
	CreateCheckInController,
	ListUserCheckInsController,
} from "../controllers/checkIns";
import {
	EnsureAuthMiddleware,
	EnsureDataIsValidMiddleware,
} from "../middlewares";
import { checkInCreateSchema } from "../schemas/checkins.schema";

const checkInsRoutes = Router();

checkInsRoutes.post(
	"",
	EnsureAuthMiddleware,
	EnsureDataIsValidMiddleware(checkInCreateSchema),
	CreateCheckInController
);
checkInsRoutes.get("/user", EnsureAuthMiddleware, ListUserCheckInsController);

export default checkInsRoutes;
