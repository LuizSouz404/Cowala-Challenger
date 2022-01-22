import { AppError } from "../../../../errors/AppError";
import { Conversion } from "../../model/Conversion";
import { IConversionDTO, IConversionsRepository } from "../IConversionRepository";

class ConversionsRepository implements IConversionsRepository {
  private conversions: Conversion[];
  private static INSTANCE: ConversionsRepository;

  private constructor() {
    this.conversions = [];
  }

  public static getInstance(): ConversionsRepository {
    if (!ConversionsRepository.INSTANCE) {
      ConversionsRepository.INSTANCE = new ConversionsRepository();
    }

    return ConversionsRepository.INSTANCE;
  }

  create({ id, moedaDaConversao, moedaOriginal, valorConvertido, valorEnviado }: IConversionDTO): Conversion {
    const conversion = new Conversion({
      id,
      moedaDaConversao,
      moedaOriginal,
      valorConvertido,
      valorEnviado
    });

    this.conversions.push(conversion);

    return conversion;
  }

  listAllConversions(): Conversion[] {
    return this.conversions;
  }

  findById(id: number): Conversion {
    const conversion = this.conversions.find(product => product.id === id);

    if (!conversion) throw new AppError("Product not found", 404);

    return conversion;
  }

  deleteConversion(id: number): void {
    const product = this.conversions.findIndex(product => product.id === id);

    if (product === -1) throw new AppError("Product not found", 404);

    this.conversions.splice(product, 1);
  }

}

export { ConversionsRepository }
