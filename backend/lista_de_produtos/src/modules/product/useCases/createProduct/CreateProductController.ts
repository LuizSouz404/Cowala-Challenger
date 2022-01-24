import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppErrors";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) { }

  handle(request: Request, response: Response) {
    const { id, item, preco } = request.body;

    if (!id || !item || !preco) throw new AppError("Missing data", 400)

    const product = this.createProductUseCase.execute({ id, item, preco });

    return response.status(201).json(product);
  }
}

export { CreateProductController }
