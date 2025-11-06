import { Request, Response } from "express";
import { ReturnUserService } from "../../services/users";

export default async function ReturnUserController(
	req: Request,
	res: Response
) {
	const userId: string = req.user.id;
	const retrievedUser = await ReturnUserService(userId);
	return res.status(200).json(retrievedUser);
}
