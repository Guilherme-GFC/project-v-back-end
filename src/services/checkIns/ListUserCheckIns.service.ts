import AppDataSource from "../../data-source";
import { userDb } from "../../db";
import { CheckIn, User } from "../../entities";
import { AppError } from "../../errors/AppErrors";
import { checkInListReturnSchema } from "../../schemas/checkins.schema";

export default async function ListUserCheckInsService(userId: string) {
	const UserRepository = AppDataSource.getRepository(User);
	const foundUser = await UserRepository.findOne({
		where: { id: userId },
		relations: { checkins: true },
	});

	if (!foundUser) {
		throw new AppError(404, "User not found!");
	}

	const returnCheckins = checkInListReturnSchema.parse(foundUser.checkins);
	return returnCheckins;
}
