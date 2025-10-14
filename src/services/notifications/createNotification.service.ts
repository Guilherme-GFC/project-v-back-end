import { userDb } from "../../db";
import { AppError } from "../../errors/AppErrors";
import { INotification } from "../../interfaces/notifications.interface";

export default function CreateNotificationService(data: INotification) {
	const user = userDb.find((item) => item.id == data.userId);

	if (!user) {
		throw new AppError(404, "User not found!");
	}

	const newNotifications = {
		...data,
	};
}
