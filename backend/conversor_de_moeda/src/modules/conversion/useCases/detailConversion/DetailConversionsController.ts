import { Request, Response } from "express";
import { DetailConversionsUseCase } from "./DetailConversionsUseCase";

class DetailConversionsController {
  constructor(private detailConversionsUseCase: DetailConversionsUseCase) { }

  async handle(request: Request, response: Response) {
    const { conversionID } = request.params;

    const conversionCreate = this.detailConversionsUseCase.execute(Number(conversionID));

    return response.status(201).json(conversionCreate);
  }
}

export { DetailConversionsController }
