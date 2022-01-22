import { ConversionsRepository } from "../../repositories/implementations/ConversionRepository";
import { CreateConversionController } from "./CreateConversionController";
import { CreateConversionUseCase } from "./CreateConversionUseCase";


const conversionsRepository = ConversionsRepository.getInstance();
const createConversionUseCase = new CreateConversionUseCase(conversionsRepository);
const createConversionController = new CreateConversionController(createConversionUseCase);

export { createConversionController }
