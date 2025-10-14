import { Request, Response } from "express";
import { ListOpportunitiesService } from "../../services/opportunities";

export default function ListOpportunitiesController(
	req: Request,
	res: Response
) {
	// TODO paginação
	const opportunities = ListOpportunitiesService();
	return res.status(200).json(opportunities);
}
