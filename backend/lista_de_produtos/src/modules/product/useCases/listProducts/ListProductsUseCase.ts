import { IProductsRepository } from "../../repositories/IProductsRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute() {
    return this.productsRepository.listAll();
  }
}

export { ListProductsUseCase }
