import { userDb } from "../../db";
import { AppError } from "../../errors/AppErrors";

export default function ListUserCheckInsService(userId: string) {
	const user = userDb.find((item) => item.id === userId);

	if (!user) {
		throw new AppError(404, "User not found!");
	}

	const returnCheckInList = user.checkIns;

	return returnCheckInList;
}
