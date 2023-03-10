import { Router } from "express";

import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { PetSchema } from "../schemas/pet.schema.js";
import * as petController from "../controllers/pet.controller.js";

const petRouter = Router();

petRouter.post(
  "/pet",
  isAuhtenticatedMiddleware,
  validateSchemaMiddleware(PetSchema),
  petController.newPet
);

petRouter.put(
  "/pet/:petId/edit",
  isAuhtenticatedMiddleware,
  validateSchemaMiddleware(PetSchema),
  petController.editPet
);

petRouter.get(
  "/pet/:petId/show",
  isAuhtenticatedMiddleware,
  petController.getOnePet
);

petRouter.get("/pet", isAuhtenticatedMiddleware, petController.getPets);

petRouter.get(
  "/pet/:month/services",
  isAuhtenticatedMiddleware,
  petController.calculateServicesInAMonth
);

petRouter.delete(
  "/pet/:petId/delete",
  isAuhtenticatedMiddleware,
  petController.petDelete
);

export { petRouter };
