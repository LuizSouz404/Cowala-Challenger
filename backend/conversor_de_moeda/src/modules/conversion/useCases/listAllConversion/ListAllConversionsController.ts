import { Request, Response } from "express";
import { ListAllConversionsUseCase } from "./ListAllConversionsUseCase";

class ListAllConversionsController {
  constructor(private listAllConversionsUseCase: ListAllConversionsUseCase) { }

  async handle(request: Request, response: Response) {

    const conversionCreate = this.listAllConversionsUseCase.execute();

    return response.status(201).json(conversionCreate);
  }
}

export { ListAllConversionsController }
