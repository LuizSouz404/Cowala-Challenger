import { Request, Response } from "express";
import { DeleteConversionUseCase } from "./DeleteConversionUseCase";

class DeleteConversionController {
  constructor(private deleteConversionUseCase: DeleteConversionUseCase) { }

  async handle(request: Request, response: Response) {
    const { conversionID } = request.params;

    this.deleteConversionUseCase.execute(Number(conversionID));

    return response.status(201).send();
  }
}

export { DeleteConversionController }
