import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import {
	usersRoutes,
	checkInsRoutes,
	opportunitiesRoutes,
	notificationsRoutes,
	loginRoutes,
} from "./routers";
import handleError from "./errors/handleErrors";

const app: Application = express();
app.use(express.json());

app.get("", (req, res) => {
	res.send("Hello world");
});

app.use("/users", usersRoutes);
app.use("/checkIns", checkInsRoutes);
app.use("/opportunities", opportunitiesRoutes);
app.use("/notifications", notificationsRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;
