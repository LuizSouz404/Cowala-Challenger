import { Router } from "express";
import { createConversionController } from "../modules/conversion/useCases/createConversion";
import { detailConversionsController } from "../modules/conversion/useCases/detailConversion";
import { listAllConversionsController } from "../modules/conversion/useCases/listAllConversion";

const conversionRoutes = Router();

conversionRoutes.post("/create/:currency", (request, response) => {
  return createConversionController.handle(request, response);
});

conversionRoutes.get("/list_conversions", (request, response) => {
  return listAllConversionsController.handle(request, response);
});

conversionRoutes.get("/detail_conversions/:conversionID", (request, response) => {
  return detailConversionsController.handle(request, response);
});
/*
conversionRoutes.delete("/delete_conversions/:conversionID", (request, response) => {
  return deleteConversionController.handle(request, response);
});*/

export { conversionRoutes };
