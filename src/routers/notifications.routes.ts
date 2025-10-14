import { Router } from "express";
import { CreateNotificationController } from "../controllers/notifications";

const notificationsRoutes = Router();

notificationsRoutes.post("", CreateNotificationController);

export default notificationsRoutes;
