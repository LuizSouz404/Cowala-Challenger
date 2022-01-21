import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const deleteProductUseCase = new DeleteProductUseCase(productsRepository);
const deleteProductController = new DeleteProductController(deleteProductUseCase);

export { deleteProductController }
