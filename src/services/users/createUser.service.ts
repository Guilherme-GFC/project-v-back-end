import { userDb } from "../../db";
import { TUserCreate } from "../../interfaces/users.interface";
import { v4 as uuidv4 } from "uuid";
import { userReturnSchema } from "../../schemas/users.schema";
import { hashSync } from "bcryptjs";

export default function CreateUserService(userData: TUserCreate) {
	// TODO tirar criptografia e colocar na entidade
	const saltNumber = parseInt(process.env.BCRYPT_SALT_ROUNDS!);
	const passwordEncrypted = hashSync(userData.password, saltNumber);
	// TODO tirar coleta de dados
	const { email, firstName, lastName, isAdmin } = userData;

	const newUser = {
		email,
		firstName,
		lastName,
		isAdmin,
		id: uuidv4(),
		checkIns: [],
		password: passwordEncrypted,
	};
	userDb.push(newUser);

	const returnUser = userReturnSchema.parse(newUser);

	return returnUser;
}
