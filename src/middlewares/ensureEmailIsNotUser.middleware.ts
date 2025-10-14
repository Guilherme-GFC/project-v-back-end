import { NextFunction, Request, Response } from "express";
import { userDb } from "../db";
import { AppError } from "../errors/AppErrors";

export default function EnsureEmailIsNotUsedMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { email } = req.body;

	const foundUser = userDb.find((item) => item.email === email);

	if (foundUser) {
		throw new AppError(409, "Email is already used");
	}

	return next();
}
