import { Router } from "express";
import {
	CreateOpportunitieController,
	ListOpportunitiesController,
	ReturnOpportunitieController,
} from "../controllers/opportunities";
import { EnsureDataIsValidMiddleware } from "../middlewares";
import { opportunitieCreateSchema } from "../schemas/opportunities.schema";

const opportunitiesRoutes = Router();

opportunitiesRoutes.post(
	"",
	EnsureDataIsValidMiddleware(opportunitieCreateSchema),
	CreateOpportunitieController
);
opportunitiesRoutes.get("", ListOpportunitiesController);
opportunitiesRoutes.get("/:id", ReturnOpportunitieController);

export default opportunitiesRoutes;
