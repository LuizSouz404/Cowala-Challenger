import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  product_id: string;
}

class DeleteProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute({ product_id }: IRequest) {
    return this.productsRepository.deleteProduct(product_id);
  }
}

export { DeleteProductUseCase }
