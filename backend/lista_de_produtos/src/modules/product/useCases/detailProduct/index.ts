import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { DetailProductController } from "./DetailProductController";
import { DetailProductUseCase } from "./DetailProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const detailProductUseCase = new DetailProductUseCase(productsRepository);
const detailProductController = new DetailProductController(detailProductUseCase);

export { detailProductController }
