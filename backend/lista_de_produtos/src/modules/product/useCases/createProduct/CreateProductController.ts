import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) { }

  handle(request: Request, response: Response) {
    const { item, preco } = request.body;

    const product = this.createProductUseCase.execute({ item, preco });

    return response.status(201).json(product);
  }
}

export { CreateProductController }
