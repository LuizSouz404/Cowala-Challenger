import { Request, Response } from "express";
import { DetailConversionUseCase } from "./DetailConversionUseCase";

class DetailConversionController {
  constructor(private detailConversionUseCase: DetailConversionUseCase) { }

  async handle(request: Request, response: Response) {
    const { conversionID } = request.params;

    const conversionCreate = this.detailConversionUseCase.execute(Number(conversionID));

    return response.status(201).json(conversionCreate);
  }
}

export { DetailConversionController }
