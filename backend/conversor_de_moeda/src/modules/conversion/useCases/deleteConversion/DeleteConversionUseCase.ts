import { IConversionsRepository } from "../../repositories/IConversionRepository";

class DeleteConversionUseCase {
  constructor(private conversionsRepository: IConversionsRepository) { }

  execute(id: number) {
    return this.conversionsRepository.deleteConversion(id);
  }
}

export { DeleteConversionUseCase }
