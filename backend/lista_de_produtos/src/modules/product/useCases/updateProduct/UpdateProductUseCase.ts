import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  product_id: string;
  preco: number;
}

class UpdateProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  execute({ product_id, preco }: IRequest) {
    return this.productsRepository.updateProduct(product_id, preco);
  }
}

export { UpdateProductUseCase }
