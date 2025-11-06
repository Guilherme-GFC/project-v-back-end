import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

async function initialize() {
	try {
		await AppDataSource.initialize();
		console.log("Database conected!");
		app.listen(3001, () => {
			console.log(`Listening at http://localhost:3001`);
		});
	} catch (error) {
		console.log("Error during initialization database", error);
	}
}

initialize();
