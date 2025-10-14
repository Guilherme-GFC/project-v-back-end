import { Request, Response } from "express";
import { ReturnUserService } from "../../services/users";

export default function ReturnUserController(req: Request, res: Response) {
	const userId: string = req.user.id;
	const retrievedUser = ReturnUserService(userId);
	return res.status(200).json(retrievedUser);
}
