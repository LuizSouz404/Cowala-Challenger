import { ConversionsRepository } from "../../repositories/implementations/ConversionRepository";
import { DetailConversionsController } from "./DetailConversionsController";
import { DetailConversionsUseCase } from "./DetailConversionsUseCase";

const conversionsRepository = ConversionsRepository.getInstance();
const detailConversionsUseCase = new DetailConversionsUseCase(conversionsRepository);
const detailConversionsController = new DetailConversionsController(detailConversionsUseCase);

export { detailConversionsController }
