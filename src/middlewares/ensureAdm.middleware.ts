import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppErrors";

export default function EnsureAdmMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!req.user.isAdm) {
		throw new AppError(403, "Must be admin to perform this action");
	}

	return next();
}
