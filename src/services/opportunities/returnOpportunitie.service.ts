import { opportunitiesDb } from "../../db";
import { AppError } from "../../errors/AppErrors";
import { opportunitieReturnSchema } from "../../schemas/opportunities.schema";

export default function ReturnOpportunitieService(id: string) {
	const opportunitie = opportunitiesDb.find((item) => item.id === id);

	if (!opportunitie) {
		throw new AppError(404, "Opportunitie not found!");
	}

	const returnOpportunitie = opportunitieReturnSchema.parse(opportunitie);

	return returnOpportunitie;
}
