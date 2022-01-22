import { Router } from "express";
import { createConversionController } from "../modules/conversion/useCases/createConversion";

const conversionRoutes = Router();

conversionRoutes.post("/create/:currency", (request, response) => {
  return createConversionController.handle(request, response);
});

/*
productsRoutes.get("/list_products", (request, response) => {
  return listProductsController.handle(request, response);
});

productsRoutes.get("/product_detail/:product_id", (request, response) => {
  return detailProductController.handle(request, response);
});

productsRoutes.put("/update_product/:product_id", (request, response) => {
  return updateProductController.handle(request, response);
});

productsRoutes.delete("/delete_product/:product_id", (request, response) => {
  return deleteProductController.handle(request, response);
});
*/
export { conversionRoutes };
