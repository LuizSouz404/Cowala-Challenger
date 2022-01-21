import { Request, Response } from "express";
import { DetailProductUseCase } from "./DetailProductUseCase";

class DetailProductController {
  constructor(private detailProductUseCase: DetailProductUseCase) { }

  handle(request: Request, response: Response) {
    const { product_id } = request.params;

    const product = this.detailProductUseCase.execute({ product_id });

    return response.status(201).json(product);
  }
}

export { DetailProductController }
