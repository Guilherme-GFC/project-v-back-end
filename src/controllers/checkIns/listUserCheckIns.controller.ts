import { Request, Response } from "express";
import { ListUserCheckInsService } from "../../services/checkIns";

export default async function ListUserCheckInsController(
	req: Request,
	res: Response
) {
	const userId = req.user.id;
	const checkIns = await ListUserCheckInsService(userId);

	return res.status(200).json(checkIns);
}
