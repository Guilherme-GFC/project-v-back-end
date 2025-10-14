import { userDb } from "../../db";
import { AppError } from "../../errors/AppErrors";
import { userReturnSchema } from "../../schemas/users.schema";

export default function ReturnUserService(userId: string) {
	const user = userDb.find(({ id }) => id === userId);

	if (!user) {
		throw new AppError(404, "User not found!");
	}

	const returnUser = userReturnSchema.parse(user);

	return returnUser;
}
