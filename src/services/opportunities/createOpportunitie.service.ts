import { v4 as uuidv4 } from "uuid";
import { IOpportunitie } from "../../interfaces/opportunities.interface";
import { opportunitiesDb } from "../../db";
import { opportunitieReturnSchema } from "../../schemas/opportunities.schema";

export default function CreateOpportunitieService(
	data: Omit<IOpportunitie, "id">
) {
	const newOpportunitie: IOpportunitie = {
		...data,
		id: uuidv4(),
		isActive: true,
	};

	opportunitiesDb.push(newOpportunitie);

	const returnOpportunitie = opportunitieReturnSchema.parse(newOpportunitie);

	return returnOpportunitie;
}
