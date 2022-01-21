import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const updateProductUseCase = new UpdateProductUseCase(productsRepository);
const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductController }
