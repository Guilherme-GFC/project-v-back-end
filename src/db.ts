import { INotification } from "./interfaces/notifications.interface";
import { IOpportunitie } from "./interfaces/opportunities.interface";
import { IUserData, TUser, TUserReturn } from "./interfaces/users.interface";

const userDb = [] as TUser[];
const opportunitiesDb = [] as IOpportunitie[];
const notificationsDb = [] as INotification[];

export { userDb, opportunitiesDb, notificationsDb };
