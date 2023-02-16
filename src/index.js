import express from "express";
import cors from "cors";
import connectDb from "./database/db.connection.js";
import "dotenv/config";

const app = express();
connectDb();

app.use(cors()).use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server up and listening on port ", PORT);
});
