import { Request, Response } from "express";
import { CreateNotificationService } from "../../services/notifications";

export default function CreateNotificationController(
	req: Request,
	res: Response
) {
	const data = req.body;
	const newNotification = CreateNotificationService(data);
	return res.send("oi");
}
