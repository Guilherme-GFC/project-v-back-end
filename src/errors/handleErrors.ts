import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErrors";
import { ZodError } from "zod";
import * as z from "zod";

export default function handleError(
	error: Error,
	req: Request,
	res: Response,
	_: NextFunction
) {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({ message: error.message });
	}
	if (error instanceof ZodError) {
		return res.status(409).json(z.flattenError(error).fieldErrors);
	}

	console.log(error);
	return res.status(500).json({ error: "Internal server error." });
}
