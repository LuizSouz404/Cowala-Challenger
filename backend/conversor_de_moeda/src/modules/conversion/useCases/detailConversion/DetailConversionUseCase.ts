import { IConversionsRepository } from "../../repositories/IConversionRepository";

class DetailConversionUseCase {
  constructor(private conversionsRepository: IConversionsRepository) { }

  execute(id: number) {
    return this.conversionsRepository.findById(id);
  }
}

export { DetailConversionUseCase }
