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
    throw new Error("Method not implemented.");
  }
  deleteConversion(id: number): void {
    throw new Error("Method not implemented.");
  }

}

export { ConversionsRepository }
