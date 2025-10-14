import { Request, Response } from "express";
import { CreateCheckInService } from "../../services/checkIns";

export default function CreateCheckInController(req: Request, res: Response) {
	const userId: string = req.user.id;
	const checkInData = req.body;
	const newCheckIn = CreateCheckInService(userId, checkInData);

	return res.status(201).json(newCheckIn);
}
