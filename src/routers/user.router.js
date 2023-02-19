import { Router } from "express";

import * as userController from "../controllers/user.controller.js";
import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";

const userRouter = Router();

userRouter.post("/sign-up", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/users", isAuhtenticatedMiddleware, userController.getUsers);

export { userRouter };
