import { userDb } from "../../db";
import { TUserCreate } from "../../interfaces/users.interface";
import { v4 as uuidv4 } from "uuid";
import { userReturnSchema } from "../../schemas/users.schema";
import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities";

export default async function CreateUserService(userData: TUserCreate) {
	const userRepository = AppDataSource.getRepository(User);

	const newUser = userRepository.create(userData);

	await userRepository.save(newUser);

	const returnUser = userReturnSchema.parse(newUser);

	return returnUser;
}
