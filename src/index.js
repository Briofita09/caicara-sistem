import express from "express";
import cors from "cors";
import connectDb from "./database/db.connection.js";
import "dotenv/config";
import { userRouter } from "./routers/user.router.js";
import { petRouter } from "./routers/pet.router.js";
import { tutorRouter } from "./routers/tutor.router.js";
import { typeServiceRouter } from "./routers/typeServices.router.js";

const app = express();
connectDb();

app
  .use(cors())
  .use(express.json())
  .use(userRouter)
  .use(petRouter)
  .use(tutorRouter)
  .use(typeServiceRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server up and listening on port ", PORT);
});
