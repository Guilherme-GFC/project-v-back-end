import { Request, Response } from "express";
import { ReturnOpportunitieService } from "../../services/opportunities";

export default function ReturnOpportunitieController(
	req: Request,
	res: Response
) {
	const id = req.params.id;
	const opportunitie = ReturnOpportunitieService(id);
	return res.status(200).json(opportunitie);
}
