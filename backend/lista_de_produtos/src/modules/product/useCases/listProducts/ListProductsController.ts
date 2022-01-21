import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) { }

  handle(request: Request, response: Response) {
    const allProducts = this.listProductsUseCase.execute();

    return response.status(201).json(allProducts);
  }
}

export { ListProductsController }
