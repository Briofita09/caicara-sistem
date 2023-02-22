import { Router } from "express";

import * as userController from "../controllers/user.controller.js";
import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { LoginSchema, SignUpSchema } from "../schemas/user.schema.js";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(SignUpSchema),
  userController.createUser
);
userRouter.post(
  "/login",
  validateSchemaMiddleware(LoginSchema),
  userController.loginUser
);
userRouter.get("/users", isAuhtenticatedMiddleware, userController.getUsers);

export { userRouter };
