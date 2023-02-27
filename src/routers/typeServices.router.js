import { Router } from "express";

import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as typeServiceController from "../controllers/typeService.controller.js";

const typeServiceRouter = Router();

typeServiceRouter.post(
  "/type-service",
  isAuhtenticatedMiddleware,
  typeServiceController.newTypeService
);

typeServiceRouter.get(
  "/type-service",
  isAuhtenticatedMiddleware,
  typeServiceController.getTypeService
);

typeServiceRouter.get(
  "/type-service/:typeServiceId/show",
  isAuhtenticatedMiddleware,
  typeServiceController.getOneService
);

typeServiceRouter.put(
  "/type-service/:typeServiceId/update",
  isAuhtenticatedMiddleware,
  typeServiceController.updateService
);

typeServiceRouter.delete(
  "/type-service/:typeServiceId/delete",
  isAuhtenticatedMiddleware,
  typeServiceController.deleteService
);

export { typeServiceRouter };
