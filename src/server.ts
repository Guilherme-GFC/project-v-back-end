import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

console.log("Connectando ao db");
async () => {
	await AppDataSource.initialize().catch((err) => {
		console.log("Error during initialization database", err);
	});
	console.log("Database conected!");
	const PORT = process.env.PORT ?? 3001;
	app.listen(PORT, () => {
		console.log(`Listening at http://localhost:${PORT}`);
	});
};
