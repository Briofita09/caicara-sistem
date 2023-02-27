import { Router } from "express";

import isAuhtenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";
import * as serviceController from "../controllers/service.controller.js";

const serviceRouter = Router();

serviceRouter.post(
  "/service",
  isAuhtenticatedMiddleware,
  serviceController.newService
);

serviceRouter.get(
  "/service",
  isAuhtenticatedMiddleware,
  serviceController.getAllServices
);

serviceRouter.get(
  "/service/:serviceId/show",
  isAuhtenticatedMiddleware,
  serviceController.getOneService
);

serviceRouter.delete(
  "/service/:serviceId/delete",
  isAuhtenticatedMiddleware,
  serviceController.deleteService
);

export { serviceRouter };
