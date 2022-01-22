import { ConversionsRepository } from "../../repositories/implementations/ConversionRepository";
import { ListAllConversionsController } from "./ListAllConversionsController";
import { ListAllConversionsUseCase } from "./ListAllConversionsUseCase";

const conversionsRepository = ConversionsRepository.getInstance();
const listAllConversionsUseCase = new ListAllConversionsUseCase(conversionsRepository);
const listAllConversionsController = new ListAllConversionsController(listAllConversionsUseCase);

export { listAllConversionsController }
