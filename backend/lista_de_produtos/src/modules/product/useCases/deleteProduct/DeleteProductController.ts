import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) { }

  handle(request: Request, response: Response) {
    const { product_id } = request.params;

    this.deleteProductUseCase.execute({ product_id });

    return response.status(201).send();
  }
}

export { DeleteProductController }
