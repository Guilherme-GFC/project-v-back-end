import { opportunitiesDb } from "../../db";
import { opportunitiesListReturnSchema } from "../../schemas/opportunities.schema";

export default function ListOpportunitiesService() {
	const opportunities = opportunitiesDb;

	const returnOpportunities =
		opportunitiesListReturnSchema.parse(opportunities);

	return returnOpportunities;
}
