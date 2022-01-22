import { ConversionsRepository } from "../../repositories/implementations/ConversionRepository";
import { DeleteConversionController } from "./DeleteConversionController";
import { DeleteConversionUseCase } from "./DeleteConversionUseCase";

const conversionsRepository = ConversionsRepository.getInstance();
const deleteConversionUseCase = new DeleteConversionUseCase(conversionsRepository);
const deleteConversionController = new DeleteConversionController(deleteConversionUseCase);

export { deleteConversionController }
