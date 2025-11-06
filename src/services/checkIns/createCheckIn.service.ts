import { userDb } from "../../db";
import { v4 as uuidv4 } from "uuid";
import {
	TCheckInCreate,
	TCheckInReturn,
} from "../../interfaces/checkIns.interface";
import { AppError } from "../../errors/AppErrors";
import { checkInReturnSchema } from "../../schemas/checkins.schema";
import AppDataSource from "../../data-source";
import { CheckIn, User } from "../../entities";

export default async function CreateCheckInService(
	userId: string,
	checkInData: TCheckInCreate
) {
	const UserRepository = AppDataSource.getRepository(User);
	const CheckInRepository = AppDataSource.getRepository(CheckIn);
	const foundUser = await UserRepository.findOneBy({ id: userId });

	if (!foundUser) {
		throw new AppError(404, "User not found!");
	}

	const newCheckIn = CheckInRepository.create({
		user: foundUser,
		...checkInData,
	});

	await CheckInRepository.save(newCheckIn);

	const returnCheckin = checkInReturnSchema.parse(newCheckIn);

	return returnCheckin;
}
