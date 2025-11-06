import AppDataSource from "../../data-source";
import { userDb } from "../../db";
import { User } from "../../entities";
import { AppError } from "../../errors/AppErrors";
import { userReturnSchema } from "../../schemas/users.schema";

export default async function ReturnUserService(userId: string) {
	const UserRepository = AppDataSource.getRepository(User);

	const foundUser = await UserRepository.findOneBy({ id: userId });

	if (!foundUser) {
		throw new AppError(404, "User not found!");
	}

	const returnUser = userReturnSchema.parse(foundUser);

	return returnUser;
}
