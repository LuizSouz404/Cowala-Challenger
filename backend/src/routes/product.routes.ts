import { Router } from "express";
import { createProductController } from "../modules/product/useCases/createProduct";
import { deleteProductController } from "../modules/product/useCases/deleteProduct";
import { detailProductController } from "../modules/product/useCases/detailProduct";
import { listProductsController } from "../modules/product/useCases/listProducts";
import { updateProductController } from "../modules/product/useCases/updateProduct";

const productsRoutes = Router();

productsRoutes.post("/create", (request, response) => {
  return createProductController.handle(request, response);
});

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

export { productsRoutes };
