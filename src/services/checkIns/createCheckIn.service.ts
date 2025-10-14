import { userDb } from "../../db";
import { v4 as uuidv4 } from "uuid";
import {
	TCheckInCreate,
	TCheckInReturn,
} from "../../interfaces/checkIns.interface";
import { AppError } from "../../errors/AppErrors";
import { checkInReturnSchema } from "../../schemas/checkins.schema";

export default function CreateCheckInService(
	userId: string,
	checkInData: TCheckInCreate
) {
	const user = userDb.find((user) => user.id === userId);
	if (!user) {
		throw new AppError(404, "User not found!");
	}

	const newCheckIn: TCheckInReturn = {
		id: uuidv4(),
		createdAt: Date().toString(),
		...checkInData,
	};

	userDb.forEach((user) => {
		if (user.id === userId) {
			user.checkIns.push(newCheckIn);
		}
	});

	const returnCheckin = checkInReturnSchema.parse(newCheckIn);

	return returnCheckin;
}
