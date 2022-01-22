import { IConversionsRepository } from "../../repositories/IConversionRepository";

interface IRequest {
  id: number;
  moedaOriginal: string;
  moedaDaConversao: string;
  valorEnviado: number;
  valorConvertido: number;
}

class CreateConversionUseCase {
  constructor(private conversionsRepository: IConversionsRepository) { }

  execute({ id, moedaDaConversao, moedaOriginal, valorConvertido, valorEnviado }: IRequest) {
    return this.conversionsRepository.create({ id, moedaDaConversao, moedaOriginal, valorConvertido, valorEnviado });
  }
}

export { CreateConversionUseCase }
