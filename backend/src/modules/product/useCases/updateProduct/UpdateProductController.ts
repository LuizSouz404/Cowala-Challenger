import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) { }

  handle(request: Request, response: Response) {
    const { preco } = request.body;
    const { product_id } = request.params;

    const product = this.updateProductUseCase.execute({ product_id, preco });

    return response.status(201).json(product);
  }
}

export { UpdateProductController }
