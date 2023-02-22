import { Router } from "express";

import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { newTutorSchema } from "../schemas/tutor.schema.js";
import * as tutorController from "../controllers/tutor.controller.js";

const tutorRouter = Router();

tutorRouter.post(
  "/tutor",
  isAuhtenticatedMiddleware,
  validateSchemaMiddleware(newTutorSchema),
  tutorController.newTutor
);

tutorRouter.get("/tutor", isAuhtenticatedMiddleware, tutorController.getTutors);

tutorRouter.post(
  "/tutor/:tutorId/assign",
  isAuhtenticatedMiddleware,
  tutorController.assignPet
);

tutorRouter.get(
  "/tutor/:tutorId",
  isAuhtenticatedMiddleware,
  tutorController.getOneTutor
);

export { tutorRouter };
