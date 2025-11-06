import "dotenv/config";
import { userDb } from "../../db";
import { AppError } from "../../errors/AppErrors";
import { ILoginCreate } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities";

export default async function CreateLoginService({
	email,
	password,
}: ILoginCreate) {
	const UserRepository = AppDataSource.getRepository(User);

	const foundUser = await UserRepository.findOneBy({ email: email });

	const invalidMessage = "Email or password invalid";

	if (!foundUser) {
		throw new AppError(403, invalidMessage);
	}

	const passwordMatch = await compare(password, foundUser?.password);

	if (!passwordMatch) {
		throw new AppError(403, invalidMessage);
	}

	const token = jwt.sign(
		{
			isAdm: false,
		},
		process.env.SECRET_KEY!,
		{
			subject: foundUser.id,
			expiresIn: "24h",
		}
	);

	return { token };
}
