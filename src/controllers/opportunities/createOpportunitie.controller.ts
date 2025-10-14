import { Request, Response } from "express";
import { CreateOpportunitieService } from "../../services/opportunities";

export default function CreateOpportunitieController(
	req: Request,
	res: Response
) {
	const data = req.body;
	const newOpportunitie = CreateOpportunitieService(data);
	return res.status(201).json(newOpportunitie);
}
