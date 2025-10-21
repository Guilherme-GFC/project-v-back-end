import { Request, Response } from "express";
import { CreateUserService } from "../../services/users";

export default async function CreateUserController(
	req: Request,
	res: Response
) {
	const userData = req.body;
	const newUser = CreateUserService(userData);
	return res.status(201).json(newUser);
}
