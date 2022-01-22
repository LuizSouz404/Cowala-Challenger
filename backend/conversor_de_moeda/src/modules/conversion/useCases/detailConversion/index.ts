import { ConversionsRepository } from "../../repositories/implementations/ConversionRepository";
import { DetailConversionController } from "./DetailConversionController";
import { DetailConversionUseCase } from "./DetailConversionUseCase";

const conversionsRepository = ConversionsRepository.getInstance();
const detailConversionUseCase = new DetailConversionUseCase(conversionsRepository);
const detailConversionController = new DetailConversionController(detailConversionUseCase);

export { detailConversionController }
