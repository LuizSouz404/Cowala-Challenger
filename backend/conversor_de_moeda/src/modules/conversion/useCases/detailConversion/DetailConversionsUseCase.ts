import { IConversionsRepository } from "../../repositories/IConversionRepository";

class DetailConversionsUseCase {
  constructor(private conversionsRepository: IConversionsRepository) { }

  execute(id: number) {
    return this.conversionsRepository.findById(id);
  }
}

export { DetailConversionsUseCase }
