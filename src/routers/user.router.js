import { Router } from "express";

import * as userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/sign-up", userController.createUser);
userRouter.post("/login", userController.loginUser);

export { userRouter };
