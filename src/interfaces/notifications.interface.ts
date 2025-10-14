interface INotification {
	id: string;
	message: string;
	userId: string;
	title: string;
	// TODO Mudar para Union types (UNREAD, READ, ARCHIVED, DELETED)
	status: string;
	priority: string;
	// TODO Mudar para Union types (LOW, MEDIUM, HIGH)
	createdAt: string;
	readAt: string | undefined;
}

export { INotification };
