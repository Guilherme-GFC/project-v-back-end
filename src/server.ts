import app from "./app";
import AppDataSource from "./data-source";

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
