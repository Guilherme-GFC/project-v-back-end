import { Request, Response } from "express";
import { CreateLoginService } from "../../services/login";

export default async function LoginCreateController(
	req: Request,
	res: Response
) {
	const loginData = req.body;
	const token = await CreateLoginService(loginData);
	return res.status(201).json(token);
}
