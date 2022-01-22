import { IConversionsRepository } from "../../repositories/IConversionRepository";

class ListAllConversionsUseCase {
  constructor(private conversionsRepository: IConversionsRepository) { }

  execute() {
    return this.conversionsRepository.listAllConversions();
  }
}

export { ListAllConversionsUseCase }
