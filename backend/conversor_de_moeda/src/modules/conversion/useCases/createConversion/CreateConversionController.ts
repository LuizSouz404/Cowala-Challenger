import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { APIConversionCurrency } from "../../../../service/api";
import { CreateConversionUseCase } from "./CreateConversionUseCase";

class CreateConversionController {
  constructor(private createProductUseCase: CreateConversionUseCase) { }

  async handle(request: Request, response: Response) {
    const { currency } = request.params;
    const { id, valorEnviado } = request.body;

    if (!id || !currency || !valorEnviado) {
      throw new AppError("All information is required", 400);
    }

    const currencySplit = currency.split("-");
    const [moedaOriginal, moedaDaConversao] = currencySplit;

    const { data } = await APIConversionCurrency.get(`/${currency}`);

    const { bid } = data[`${moedaOriginal}${moedaDaConversao}`];

    const currentCurrency = Number(parseFloat(bid).toFixed(2));

    const valorConvertido = valorEnviado * currentCurrency;

    const conversionCreate = this.createProductUseCase.execute({ id, moedaOriginal, moedaDaConversao, valorConvertido, valorEnviado });

    return response.status(201).json(conversionCreate);
  }
}

export { CreateConversionController }
