import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export default function EnsureDataIsValidMiddleware(schema: ZodType) {
	return (req: Request, res: Response, next: NextFunction) => {
		req.body = schema.parse(req.body);

		return next();
	};
}
